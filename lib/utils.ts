import { Schema } from "@/lib/schemas";

export const formatLocationText = (
  online: boolean | null | undefined,
  locations: Schema<"dtaLocation">[] | undefined,
) => {
  return `${online === true ? `Online` : ``}${online && locations?.length ? ` / ` : ``}${locations
    ?.map((location) => `${location.city}, ${location.country}`)
    .join(" / ")}`;
};

export function groupItemsByCoordinates<T>({
  items,
  getCoords,
  getKey,
  threshold = 3,
}: {
  items: T[];
  getCoords: (item: T) => { longitude: number; latitude: number };
  getKey: (item: T) => string;
  threshold?: number;
}) {
  const groups: {
    key: string;
    longitude: number;
    latitude: number;
    items: T[];
  }[] = [];
  for (const item of items) {
    const { longitude, latitude } = getCoords(item);
    // Try to find a group this item is close to
    const nearbyGroup = groups.find((group) => {
      const dx = group.longitude - longitude;
      const dy = group.latitude - latitude;
      return Math.sqrt(dx * dx + dy * dy) < threshold;
    });
    if (nearbyGroup) {
      nearbyGroup.items.push(item);
      // Recalculate average location
      const length = nearbyGroup.items.length;
      nearbyGroup.key += `-${getKey(item)}`;
      nearbyGroup.longitude =
        (nearbyGroup.longitude * (length - 1) + longitude) / length;
      nearbyGroup.latitude =
        (nearbyGroup.latitude * (length - 1) + latitude) / length;
    } else {
      // Create a new group
      groups.push({
        key: getKey(item),
        longitude,
        latitude,
        items: [item],
      });
    }
  }
  return groups;
}
