import { geoMercator, geoPath } from "d3-geo";
import type { FeatureCollection } from "geojson";
import { feature } from "topojson-client";
import { cn } from "@/lib/cn";
import worldData from "@/lib/world.json";

export function Map({
  className,
  gridStroke,
  landFill,
}: {
  className?: string;
  gridStroke: string;
  landFill: string;
}) {
  const width = 800;
  const height = 400;
  const gridSpacing = 40;

  const land = feature(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    worldData as any,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (worldData as any).objects.land,
  ) as unknown as FeatureCollection;
  const projection = geoMercator()
    .scale(width / (2 * Math.PI))
    .translate([width / 2, height / 2]);
  const path = geoPath(projection);

  // Grid lines
  const verticalLines = Array.from(
    { length: Math.floor(width / gridSpacing) + 1 },
    (_, i) => {
      const x = i * gridSpacing;
      return (
        <line
          key={`v-${i}`}
          x1={x}
          y1={0}
          x2={x}
          y2={height}
          stroke={gridStroke}
          strokeWidth={0.5}
        />
      );
    },
  );

  const horizontalLines = Array.from(
    { length: Math.floor(height / gridSpacing) + 1 },
    (_, i) => {
      const y = i * gridSpacing;
      return (
        <line
          key={`h-${i}`}
          x1={0}
          y1={y}
          x2={width}
          y2={y}
          stroke={gridStroke}
          strokeWidth={0.5}
        />
      );
    },
  );

  const landPaths = land.features.map((f, i) => (
    <path key={i} d={path(f)!} fill={landFill} />
  ));

  return (
    <svg
      width={width}
      // height={height}
      viewBox={`0 0 ${width} ${height}`}
      className={cn(className)}
    >
      <g>{verticalLines}</g>
      <g>{horizontalLines}</g>
      <g>{landPaths}</g>
    </svg>
  );
}
