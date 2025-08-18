"use client";

import { GeoProjection, geoMercator, geoPath } from "d3-geo";
import type { FeatureCollection } from "geojson";
import { Popover } from "radix-ui";
import { ComponentProps, ReactNode, createContext, useContext } from "react";
import { feature } from "topojson-client";
import { cn } from "@/lib/cn";
import worldData from "@/lib/world-110m.json";

const MapContext = createContext<{
  projection: GeoProjection;
  width: number;
  height: number;
} | null>(null);

const useMapContext = () => {
  const context = useContext(MapContext);
  if (!context) {
    throw new Error("component must be used within a Map component");
  }
  return context;
};

export function Map({
  gridStroke,
  pathFill,
  aspectRatio = 800 / 460, // almost 16:9, but grid lines fit
  center = [0, 0],
  children,
  className,
  ...props
}: {
  gridStroke: string;
  pathFill: string;
  aspectRatio?: number;
  center?: [number, number];
} & ComponentProps<"div">) {
  const width = 800; // fixed
  const height = width / aspectRatio;
  const scaleFactor = 2; // how zoomed out the map is. shouldn't be bigger than 2

  const land = feature(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    worldData as any,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (worldData as any).objects.land,
  ) as unknown as FeatureCollection;

  // Projection and path generator
  const centerLong = center?.[0];
  const centerLat = center?.[1];
  const projection = geoMercator()
    .scale(width / (scaleFactor * Math.PI))
    .rotate([-centerLong, 0])
    .center([0, centerLat])
    .translate([width / 2, height / 2]);
  const pathGenerator = geoPath(projection);

  // Grid lines
  const gridSpacing = width / 20 / scaleFactor;
  const vertLinesCount = Math.floor(width / gridSpacing) + 1;
  const horLinesCount = Math.floor(height / gridSpacing) + 1;
  const gridLines = (
    <>
      {Array.from({ length: vertLinesCount }, (_, i) => {
        const x =
          i * gridSpacing - // spacing
          (i / (vertLinesCount - 1)) * 0.5 + // gradually reduce the spacing to make room for final stroke
          (width % gridSpacing) / 2 + // center the lines
          0.5 / 2; // initial room for stroke
        return (
          <line
            key={`v-${i}`}
            x1={x}
            y1={0}
            x2={x}
            y2={height}
            stroke={gridStroke}
            vectorEffect="non-scaling-stroke"
            className="stroke-[0.33px] 1280:stroke-[0.5px]"
          />
        );
      })}
      {Array.from({ length: horLinesCount }, (_, i) => {
        const y =
          i * gridSpacing - // spacing
          (i / (horLinesCount - 1)) * 0.5 + // gradually reduce the spacing to make room for final stroke
          (height % gridSpacing) / 2 + // center the lines
          0.5 / 2; // initial room for stroke
        return (
          <line
            key={`h-${i}`}
            x1={0}
            y1={y}
            x2={width}
            y2={y}
            stroke={gridStroke}
            vectorEffect="non-scaling-stroke"
            className="stroke-[0.33px] 1280:stroke-[0.5px]"
          />
        );
      })}
    </>
  );

  // Land paths
  const landPaths = land.features.map((f, i) => (
    <path key={i} d={pathGenerator(f)!} fill={pathFill} />
  ));

  return (
    <MapContext value={{ projection, width, height }}>
      <div className={cn("relative", className)} {...props}>
        <svg
          viewBox={`0 0 ${width} ${height}`}
          className="h-auto w-full"
          style={{ aspectRatio }}
        >
          <g>{gridLines}</g>
          <g>{landPaths}</g>
          {/* {locationDots} */}
        </svg>
        {children}
      </div>
    </MapContext>
  );
}

export function MapCoords({
  long,
  lat,
  children,
}: {
  long: number;
  lat: number;
  children: ReactNode;
}) {
  const { projection, width, height } = useMapContext();
  const point = projection([long, lat]);
  if (!point) return null;
  return (
    <div
      className="absolute -translate-1/2"
      style={{
        left: `${(point[0] / width) * 100}%`,
        top: `${(point[1] / height) * 100}%`,
      }}
    >
      {children}
    </div>
  );
}

export function MapPopoverTrigger({
  bg = "var(--color-white)",
  fg = "var(--color-black)",
  count = 1,
}: {
  bg?: string;
  fg?: string;
  count?: number;
}) {
  return (
    <Popover.Trigger
      className={cn(
        "group relative block cursor-pointer rounded-full outline-none",
      )}
    >
      <div
        className={cn(
          "flex size-full items-center justify-center rounded-full transition-transform duration-100",
          count === 1 &&
            "size-10 group-hover:scale-200 group-data-[state=open]:scale-200",
          count > 1 &&
            "size-20 group-hover:scale-140 group-data-[state=open]:scale-140",
        )}
        style={{ backgroundColor: bg }}
      />
      {count > 1 && (
        <span
          className={cn(
            "absolute top-1/2 left-1/2 block -translate-1/2 font-diatype text-15 font-500",
          )}
          style={{ color: fg }}
        >
          {count}
        </span>
      )}
    </Popover.Trigger>
  );
}

export function MapPopoverContent({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <Popover.Portal>
      <Popover.Content
        className={cn(
          "z-50 w-260 overflow-y-auto rounded-2 bg-white px-10 shadow-10 outline-none",
          className,
        )}
        side="right"
        align="start"
        sideOffset={10}
        onOpenAutoFocus={(e) => e.preventDefault()}
      >
        {children}
      </Popover.Content>
    </Popover.Portal>
  );
}
