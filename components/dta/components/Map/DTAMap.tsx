"use client";

import { motion } from "motion/react";
import { Popover } from "radix-ui";
import React, {
  CSSProperties,
  ReactNode,
  RefObject,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import Button from "@/components/Button";
import { Map, MapCoords } from "@/components/dta/components/Map";
import PauseSvg from "@/components/svgs/PauseSvg";
import PlaySvg from "@/components/svgs/PlaySvg";
import useAnimationFrame from "@/hooks/useAnimationFrame";
import { useSafeTimeout } from "@/hooks/useSafeTimeout";
import { cn } from "@/lib/cn";
import { Schema } from "@/lib/schemas";

type ValidEvent = Schema<"dtaEvent"> & {
  dtaLocation: Schema<"dtaLocation"> & {
    longitude: number;
    latitude: number;
  };
  beginYear: number;
  endYear: number;
};

type ValidEventGroup = {
  key: string;
  longitude: number;
  latitude: number;
  events: ValidEvent[];
};

export const DTAMap = ({
  className,
  map,
  events = [],
}: {
  className?: string;
  map?: Schema<"dtaMap">;
  events?: Schema<"dtaEvent">[];
}) => {
  // filter out non-valid events
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
  const distThreshold = 3;
  const visibleEventGroups: ValidEventGroup[] = [];
  for (const event of visibleEvents) {
    const { longitude, latitude } = event.dtaLocation;
    // Try to find a group this event is close to
    const nearbyGroup = visibleEventGroups.find((group) => {
      const dx = group.longitude - longitude;
      const dy = group.latitude - latitude;
      return Math.sqrt(dx * dx + dy * dy) < distThreshold;
    });
    if (nearbyGroup) {
      nearbyGroup.events.push(event);
      // Recalculate average location
      const length = nearbyGroup.events.length;
      nearbyGroup.key += `-${event.documentId}`;
      nearbyGroup.longitude =
        (nearbyGroup.longitude * (length - 1) + longitude) / length;
      nearbyGroup.latitude =
        (nearbyGroup.latitude * (length - 1) + latitude) / length;
    } else {
      // Create a new group
      visibleEventGroups.push({
        key: event.documentId,
        longitude,
        latitude,
        events: [event],
      });
    }
  }

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
      <div
        className={cn("relative gradient-mask")}
        style={{ "--gradient-mask-size": "3rem" } as CSSProperties}
      >
        <Map
          className={cn("")}
          gridStroke="var(--color-dta-map-grid)"
          pathFill="var(--color-dta-map-land)"
          aspectRatio={2}
          center={[0, 8]}
        >
          {visibleEventGroups.map((group) => (
            <MapCoords
              key={group.key}
              long={group.longitude}
              lat={group.latitude}
            >
              <EventGroupsPopover
                events={group.events}
                onOpenChange={(open) => {
                  isPopoverOpenRef.current = open;
                }}
                trigger={
                  <button
                    className={cn(
                      "group relative cursor-pointer rounded-full opacity-0 outline-none",
                      group.events.length === 1 && "size-20",
                      group.events.length > 1 && "size-30",
                      !showTitle && "opacity-100",
                    )}
                  >
                    <div
                      className={cn(
                        "flex size-full scale-50 items-center justify-center rounded-full bg-white transition-transform duration-100 group-hover:scale-100 group-data-[state=open]:scale-100",
                        group.events.length > 1 && "scale-75",
                      )}
                    />
                    {group.events.length > 1 && (
                      <span
                        className={cn(
                          "absolute top-1/2 left-1/2 block -translate-1/2 font-diatype text-15 font-500 text-black",
                        )}
                      >
                        {group.events.length}
                      </span>
                    )}
                  </button>
                }
              />
            </MapCoords>
          ))}
        </Map>
      </div>

      <MapTitle showTitle={showTitle} />

      {map?.Description && (
        <p className={cn("absolute top-0 left-0 z-1 w-full mono")}>
          {map.Description}
        </p>
      )}

      <motion.div
        className={cn("absolute bottom-0 left-0 z-1 flex w-full items-end")}
        variants={{
          visible: { opacity: 1 },
          hidden: { opacity: 0 },
        }}
        initial={false}
        animate={showTitle ? "hidden" : "visible"}
        transition={{ duration: 0.5 }}
      >
        <div className={cn("flex flex-1 items-end py-10")}>
          <Button
            theme="minimal"
            onClick={() => setIsPlaying(!isPlaying)}
            className={cn("btn-minimal-pad-3")}
          >
            {isPlaying ? <PauseSvg /> : <PlaySvg />}
          </Button>
        </div>

        <div className={cn("flex flex-initial items-end gap-6 py-12")}>
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

        <div className={cn("flex-1")} />
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
    <div className={cn("relative flex")}>
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
        <span className={cn("sr-only")}>{year}</span>
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

const EventGroupsPopover = ({
  trigger,
  events,
  onOpenChange,
}: {
  trigger: ReactNode;
  events: ValidEvent[];
  onOpenChange?: (open: boolean) => void;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Popover.Root
      open={isOpen}
      onOpenChange={(open) => {
        setIsOpen(open);
        onOpenChange?.(open);
      }}
    >
      <Popover.Trigger asChild>{trigger}</Popover.Trigger>
      <Popover.Portal>
        <Popover.Content
          className="z-10"
          side="right"
          align="start"
          sideOffset={10}
          onOpenAutoFocus={(e) => e.preventDefault()}
        >
          <div
            className={cn(
              "w-260 rounded-2 bg-white px-10 pt-7 pb-12 outline-none",
            )}
          >
            {events.map((event) => (
              <div
                key={event.documentId}
                className={cn("h-100 border-current not-last:border-b")}
              >
                {/* TODO */}
              </div>
            ))}
          </div>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
};

// <div
// className={cn(
//   className,
//   "h-fit w-[260px] rounded-[2px] bg-white px-[10px] pt-[7px] pb-[12px] leading-[12px]",
// )}
// >
// {items.map((item, index) => {
//   if (item.type === "person") {
//     return (
//       <div
//         key={`${item.name}-${item.practice}-${index}`}
//         className="border-b-[1px] border-dotted pb-[20px]"
//       >
//         <span className="mono small">PERSON</span>
//         <br />
//         <span className="mono small underline decoration-dotted decoration-[1px] underline-offset-3">
//           {item.name}
//         </span>
//         <br />
//         <br />
//         <span className="mono small">PRACTICE</span>
//         <br />
//         <span className="mono small underline decoration-dotted decoration-[1px] underline-offset-3">
//           {item.practice}
//         </span>
//       </div>
//     );
//   } else if (item.type === "event") {
//     return (
//       <div
//         className="pt-[20px]"
//         key={`${item.person}-${item.eventInfo}-${index}`}
//       >
//         <h1 className="tipin !text-18">{item.eventInfo}</h1>
//         <br />
//         <span className="mono small">PERSON</span>
//         <br />
//         <span className="mono small underline decoration-dotted underline-offset-3">
//           {item.person}
//         </span>
//         <br />
//         <br />
//         <span className="mono small">PRACTICE</span>
//         <br />
//         <span className="mono small underline decoration-dotted underline-offset-3">
//           {item.practice}
//         </span>
//       </div>
//     );
//   }
// })}
// </div>
