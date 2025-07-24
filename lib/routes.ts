export const schoolGroundSlugs = ["school", "school-programmes"] as const;
export const publicGroundSlugs = ["public", "public-whats-on"] as const;
export const hookeParkGroundSlugs = ["hooke-park"] as const;
export const dtaGroundSlugs = ["dta"] as const;
export const roamGroundSlugs = ["roam"] as const;
export const groundSlugs = [
  ...schoolGroundSlugs,
  ...publicGroundSlugs,
  ...hookeParkGroundSlugs,
  ...dtaGroundSlugs,
  ...roamGroundSlugs,
] as const;

// export const schoolTipin1Slugs = [] as const;
// export const publicTipin1Slugs = [] as const;
// export const hookeParkTipin1Slugs = [] as const;
// export const dtaTipin1Slugs = [
//   "people",
//   "practices",
//   "institutions",
//   "collections",
//   "search",
// ] as const;
// export const roamTipin1Slugs = [] as const;

export type GroundSlug = (typeof groundSlugs)[number];
export type Tipin1Slug = string;
export type Tipin2Slug = string;

export const routes = {
  home: "/",

  ground: <T extends GroundSlug>(ground: T) => `/${ground}`,

  tipin1: <T extends GroundSlug>(ground: T, tipin1: Tipin1Slug) =>
    `/${ground}/${tipin1}`,

  tipin2: <T extends GroundSlug>(
    ground: T,
    tipin1: Tipin1Slug,
    tipin2: Tipin2Slug,
  ) => `/${ground}/${tipin1}/${tipin2}`,
};

// Match 0-3 segments
const regex = new RegExp(
  `^(/(?<ground>(${groundSlugs.join("|")}))(/(?<tipin1>[^/]+)(/(?<tipin2>[^/]+))?)?)?/?$`,
);

export function parseRoute(pathname: string) {
  const res = regex.exec(pathname);
  if (res?.groups) {
    const { ground, tipin1, tipin2 } = res.groups;
    if (!ground || (ground && !tipin1 && !tipin2)) {
      return {
        type: "ground" as const,
        ground: ground as undefined | GroundSlug,
        tipin1: undefined,
        tipin2: undefined,
      };
    }
    if (ground && tipin1 && !tipin2) {
      return {
        type: "tipin1" as const,
        ground: ground as GroundSlug,
        tipin1: tipin1 as Tipin1Slug,
        tipin2: undefined,
      };
    }
    if (ground && tipin1 && tipin2) {
      return {
        type: "tipin2" as const,
        ground: ground as GroundSlug,
        tipin1: tipin1 as Tipin1Slug,
        tipin2: tipin2 as Tipin2Slug,
      };
    }
  }
  return null;
}
