"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { Popover } from "radix-ui";
import React, {
  CSSProperties,
  RefObject,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import Button from "@/components/Button";
import UnderlinedButton from "@/components/buttons/UnderlinedButton";
import {
  Map,
  MapCoords,
  MapPopoverContent,
  MapPopoverTrigger,
} from "@/components/dta/components/Map";
import PauseSvg from "@/components/svgs/PauseSvg";
import PlaySvg from "@/components/svgs/PlaySvg";
import useAnimationFrame from "@/hooks/useAnimationFrame";
import { useSafeTimeout } from "@/hooks/useSafeTimeout";
import { cn } from "@/lib/cn";
import { parseHtml } from "@/lib/parseHtml";
import { routes } from "@/lib/routes";
import { Schema } from "@/lib/schemas";
import { groupItemsByCoordinates } from "@/lib/utils";

type ValidEvent = Schema<"dtaEvent"> & {
  dtaLocation: Schema<"dtaLocation"> & {
    longitude: number;
    latitude: number;
  };
  beginYear: number;
  endYear: number;
};

export const DTAMap = ({
  className,
  map,
}: {
  className?: string;
  map?: Schema<"dtaMap">;
}) => {
  // filter out non-valid events
  const events = map?.dta_event_types.flatMap((type) => type.dta_events) ?? [];
  const validEvents = events.filter(
    (event) =>
      event.dtaLocation &&
      event.dtaLocation.longitude !== null &&
      event.dtaLocation.latitude !== null &&
      event.beginYear !== null &&
      event.endYear !== null,
  ) as ValidEvent[];

  // get first and last year from events
  const firstYear = validEvents.length
    ? Math.min(...validEvents.map((event) => event.beginYear))
    : undefined;
  const lastYear = validEvents.length
    ? Math.max(...validEvents.map((event) => event.endYear))
    : undefined;

  const [showTitle, setShowTitle] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedYear, setSelectedYear] = useState<number | null>(
    firstYear ?? null,
  );
  const timerRef = useRef<number>(0);
  const zIncRef = useRef(0);
  const isPopoverOpenRef = useRef(false); // Make popover open state flow down?

  useEffect(() => {
    if (showTitle) {
      const timeout = setTimeout(() => {
        setShowTitle(false);
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [showTitle]);

  // get all years between first and last year
  const years =
    firstYear && lastYear
      ? Array.from(
          { length: lastYear - firstYear + 1 },
          (_, i) => firstYear + i,
        )
      : [];

  // get all years that come between event years
  const selectableYears = validEvents
    .flatMap((event) =>
      Array.from(
        { length: event.endYear - event.beginYear + 1 },
        (_, i) => event.beginYear + i,
      ),
    )
    .filter((year, index, self) => self.indexOf(year) === index)
    .sort((a, b) => a - b);

  // get events whose year range includes selectedYear
  const visibleEvents = validEvents.filter(
    (event) =>
      selectedYear !== null &&
      event.beginYear <= selectedYear &&
      event.endYear >= selectedYear,
  );

  // if longitude and latitude are close enough, group them together
  const visibleEventGroups = groupItemsByCoordinates({
    items: visibleEvents,
    getCoords: (event) => event.dtaLocation,
    getKey: (event) => event.documentId,
  });

  const selectNextYear = () => {
    setSelectedYear((prev) => {
      if (!prev) return selectableYears[0];
      const next = selectableYears[selectableYears.indexOf(prev) + 1] as
        | number
        | undefined;
      return next ?? selectableYears[0];
    });
  };

  useEffect(() => {
    if (isPlaying) selectNextYear();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPlaying]);

  useEffect(() => {
    timerRef.current = 0;
  }, [selectedYear]);

  // Use requestAnimationFrame instead of setInterval to avoid timing drift in background tabs
  useAnimationFrame((delta) => {
    if (isPopoverOpenRef.current) return;
    timerRef.current += delta;
    if (timerRef.current > 3000) {
      timerRef.current = 0;
      selectNextYear();
    }
  }, isPlaying);

  return (
    <div className={cn("relative", className)}>
      <Map
        gridStroke="var(--color-dta-map-grid)"
        pathFill="var(--color-dta-map-land)"
        aspectRatio={2}
        center={[0, 8]}
        className="relative gradient-mask"
        style={{ "--gradient-mask-size": "3rem" } as CSSProperties}
      >
        {visibleEventGroups.map((group) => (
          <MapCoords
            key={group.key}
            long={group.longitude}
            lat={group.latitude}
          >
            <Popover.Root
              onOpenChange={(open) => {
                isPopoverOpenRef.current = open;
              }}
            >
              <MapPopoverTrigger count={group.items.length} />
              <MapPopoverContent
                className={cn(group.items.length > 1 && "max-h-340")}
              >
                {group.items.map((event) => (
                  <div
                    key={event.documentId}
                    className="border-dotted border-current py-16 mono text-12/1.4 not-last:border-b first:pt-10 last:pb-10"
                  >
                    {event.image?.map((image) => (
                      <Image
                        key={image.documentId}
                        src={image.url}
                        alt={image.alternativeText ?? ""}
                        width={image.width}
                        height={image.height}
                        sizes="16rem"
                        className={cn("mb-10")}
                      />
                    ))}
                    <div>
                      <div className="mt-16">LOCATION</div>
                      <div>{event.dtaLocation.country}</div>
                      <div className="mt-16">DATE</div>
                      <div>
                        {event.beginYear}-{event.endYear}
                      </div>
                      {event.dta_peopleNew.length > 0 && (
                        <>
                          <div className="mt-16">PERSON</div>
                          <div>
                            {event.dta_peopleNew.map((person, idx) => (
                              <span key={person.documentId}>
                                {idx > 0 && ", "}
                                <UnderlinedButton asChild>
                                  <Link
                                    href={routes.dtaPerson(person.slug ?? "-")}
                                  >
                                    {person.firstName} {person.lastName}
                                  </Link>
                                </UnderlinedButton>
                              </span>
                            ))}
                          </div>
                        </>
                      )}
                      {event.dta_institutionsNew.length > 0 && (
                        <>
                          <div className="mt-16">INSTITUTION</div>
                          <div>
                            {event.dta_institutionsNew.map(
                              (institution, idx) => (
                                <span key={institution.documentId}>
                                  {idx > 0 && ", "}
                                  <UnderlinedButton asChild>
                                    <Link
                                      href={routes.dtaInstitution(
                                        institution.slug ?? "-",
                                      )}
                                    >
                                      {institution.Name}
                                    </Link>
                                  </UnderlinedButton>
                                </span>
                              ),
                            )}
                          </div>
                        </>
                      )}
                      {event.dta_practicesNew.length > 0 && (
                        <>
                          <div className="mt-16">PRACTICE</div>
                          <div>
                            {event.dta_practicesNew.map((practice, idx) => (
                              <span key={practice.documentId}>
                                {idx > 0 && ", "}
                                <UnderlinedButton asChild>
                                  <Link
                                    href={routes.dtaPractice(
                                      practice.slug ?? "-",
                                    )}
                                  >
                                    {practice.name}
                                  </Link>
                                </UnderlinedButton>
                              </span>
                            ))}
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                ))}
              </MapPopoverContent>
            </Popover.Root>
          </MapCoords>
        ))}
      </Map>

      <MapTitle showTitle={showTitle} />

      {map?.descriptionRichText && (
        <p className="absolute top-0 left-0 z-1 w-full mono">
          {parseHtml(map.descriptionRichText)}
        </p>
      )}

      <motion.div
        className="absolute bottom-0 left-0 z-1 flex w-full items-end"
        variants={{
          visible: { opacity: 1 },
          hidden: { opacity: 0 },
        }}
        initial={false}
        animate={showTitle ? "hidden" : "visible"}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-1 items-end py-10">
          <Button
            theme="minimal"
            onClick={() => setIsPlaying(!isPlaying)}
            className="btn-minimal-pad-3"
          >
            {isPlaying ? <PauseSvg /> : <PlaySvg />}
          </Button>
        </div>

        <div className="flex flex-initial items-end gap-6 py-12">
          {years.map((year) => (
            <YearButton
              key={year}
              year={year}
              disabled={!selectableYears.includes(year)}
              selected={selectedYear === year}
              onSelect={setSelectedYear}
              zIncRef={zIncRef}
            />
          ))}
        </div>

        <div className="flex-1" />
      </motion.div>
    </div>
  );
};

function MapTitle({ showTitle }: { showTitle: boolean }) {
  return (
    <motion.div
      className={cn(
        "absolute top-[50%] left-[50%] translate-[-50%] text-center font-times text-[6vw] leading-[.9] text-nowrap text-white",
        !showTitle && "pointer-events-none",
      )}
      variants={{
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
      }}
      transition={{ duration: 0.5 }}
      initial={false}
      animate={showTitle ? "visible" : "hidden"}
    >
      <div
        className={cn(
          "absolute -inset-[5vw] -z-1 rounded-[50%] bg-dta-map-background/80 blur-[3vw]",
        )}
      />
      Department of
      <br />
      Tropical Architecture
      <br />
      Archive
    </motion.div>
  );
}

function YearButton({
  year,
  disabled,
  selected,
  onSelect,
  zIncRef,
}: {
  year: number;
  disabled: boolean;
  selected: boolean;
  onSelect: (year: number) => void;
  zIncRef: RefObject<number>;
}) {
  const [showTooltip, setShowTooltip] = useState(false);
  const showTooltipRef = useRef(showTooltip);
  showTooltipRef.current = showTooltip;
  const [zIndex, setZIndex] = useState(zIncRef.current);

  // Update z increment so latest tooltip is always on top
  useLayoutEffect(() => {
    if (selected) setZIndex(++zIncRef.current);
  }, [selected, zIncRef]);
  useLayoutEffect(() => {
    if (showTooltip) setZIndex(++zIncRef.current);
  }, [showTooltip, zIncRef]);

  const setSafeTimeout = useSafeTimeout();

  return (
    <div className="relative flex">
      <Button
        theme="minimal"
        onClick={() => onSelect(year)}
        disabled={disabled}
        className={cn("--btn-minimal-pad-3", disabled && "pointer-events-none")}
        onPointerEnter={() => setSafeTimeout(() => setShowTooltip(true), 100)}
        onPointerLeave={() => setSafeTimeout(() => setShowTooltip(false), 500)}
        onFocus={() => setShowTooltip(true)}
        onBlur={() => setShowTooltip(false)}
      >
        <span className="sr-only">{year}</span>
        <div
          className={cn(
            "size-10 rounded-full bg-white/30",
            selected && "bg-white",
          )}
        />
      </Button>
      <motion.div
        className={cn(
          "pointer-events-none absolute bottom-[calc(100%+var(--spacing)*10)] left-1/2 flex h-24 -translate-x-1/2 items-center rounded-4 border-[0.5px] border-dta-map-grid bg-dta-map-background px-6 font-nhg-display text-16 leading-1 font-500 shadow-10 select-none",
        )}
        variants={{
          visible: { opacity: 1 },
          hidden: { opacity: 0 },
        }}
        transition={{ duration: 0.2 }}
        initial={false}
        animate={selected || showTooltip ? "visible" : "hidden"}
        style={{ zIndex }}
      >
        {year}
      </motion.div>
    </div>
  );
}
