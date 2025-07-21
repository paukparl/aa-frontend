export const schoolSubpanelSlugs = [
  "programmes",
  "apply",
  "facilities",
  "calendar",
  "locations",
  "people",
  "about",
] as const;

export const publicSubpanelSlugs = [
  "whats-on",
  "news",
  "gallery",
  "publications",
  "bar",
  "aa-bookshop",
  "collections",
  "membership",
  "support",
] as const;

export const hookeParkTipin1Slugs = [
  "about",
  "forest",
  "campus",
  "programmes",
  "people",
  "projects",
  "contact",
] as const;

export const dtaTipin1Slugs = [
  "people",
  "practices",
  "institutions",
  "collections",
  "about",
  "search",
] as const;

export type SchoolSubpanelSlug = (typeof schoolSubpanelSlugs)[number];

export type PublicSubpanelSlug = (typeof publicSubpanelSlugs)[number];

export type HookeParkTipin1Slug = (typeof hookeParkTipin1Slugs)[number];

export type DtaTipin1Slug = (typeof dtaTipin1Slugs)[number];

type SubpanelSlugType<
  T extends "school" | "public" | "hooke-park" | "dta" | "roam",
> =
  | (T extends "school"
      ? SchoolSubpanelSlug
      : T extends "public"
        ? PublicSubpanelSlug
        : T extends "hooke-park"
          ? never
          : T extends "dta"
            ? never
            : never)
  | undefined;

type TipinSlug1Type<
  T extends "school" | "public" | "hooke-park" | "dta" | "roam",
> = T extends "hooke-park"
  ? HookeParkTipin1Slug
  : T extends "dta"
    ? DtaTipin1Slug
    : string;

export const routes = {
  home: "/",
  panel: <T extends "school" | "public" | "hooke-park" | "dta" | "roam">(
    panelOrMicrosite: T,
    subpanel?: SubpanelSlugType<T>,
  ) =>
    panelOrMicrosite === "school"
      ? `/school${subpanel ? `/${subpanel}` : ""}`
      : panelOrMicrosite === "public"
        ? `/public${subpanel ? `/${subpanel}` : ""}`
        : panelOrMicrosite === "hooke-park"
          ? `/school/hooke-park${subpanel ? `/${subpanel}` : ""}`
          : panelOrMicrosite === "dta"
            ? `/public/dta`
            : // roam
              `/public/roam${subpanel ? `/${subpanel}` : ""}`,
  tipin1: <T extends "school" | "public" | "hooke-park" | "dta" | "roam">(
    panelOrMicrosite: T,
    subpanel: SubpanelSlugType<T>,
    tipin1: TipinSlug1Type<T>,
  ) =>
    panelOrMicrosite === "school"
      ? `/school${subpanel ? `/${subpanel}` : ""}/${tipin1}`
      : panelOrMicrosite === "public"
        ? `/public${subpanel ? `/${subpanel}` : ""}/${tipin1}`
        : panelOrMicrosite === "hooke-park"
          ? `/school/hooke-park${subpanel ? `/${subpanel}` : ""}/${tipin1}`
          : panelOrMicrosite === "dta"
            ? `/public/dta/${tipin1}`
            : // roam
              `/public/roam${subpanel ? `/${subpanel}` : ""}/${tipin1}`,
  tipin2: <T extends "school" | "public" | "hooke-park" | "dta" | "roam">(
    panelOrMicrosite: T,
    subpanel: SubpanelSlugType<T>,
    tipin1: TipinSlug1Type<T>,
    tipin2: string,
  ) =>
    panelOrMicrosite === "school"
      ? `/school${subpanel ? `/${subpanel}` : ""}/${tipin1}/${tipin2}`
      : panelOrMicrosite === "public"
        ? `/public${subpanel ? `/${subpanel}` : ""}/${tipin1}/${tipin2}`
        : panelOrMicrosite === "hooke-park"
          ? `/school/hooke-park${subpanel ? `/${subpanel}` : ""}/${tipin1}/${tipin2}`
          : panelOrMicrosite === "dta"
            ? `/public/dta/${tipin1}/${tipin2}`
            : // roam
              `/public/roam${subpanel ? `/${subpanel}` : ""}/${tipin1}/${tipin2}`,
};

// Regexes for route parsing

// Panel routes
// /school
const schoolPanelRegex = new RegExp(`^/(?<panel>school)$`);
// /school/[subpanel]
const schoolSubpanelRegex = new RegExp(
  `^/(?<panel>school)/(?<subpanel>${schoolSubpanelSlugs.join("|")})$`,
);
// /school/hooke-park
const hookeParkRegex = new RegExp(
  `^/(?<panel>school)/(?<microsite>hooke-park)$`,
);
// /public
const publicPanelRegex = new RegExp(`^/(?<panel>public)$`);
// /public/[subpanel]
const publicSubpanelRegex = new RegExp(
  `^/(?<panel>public)/(?<subpanel>${publicSubpanelSlugs.join("|")})$`,
);
// /public/dta
const dtaRegex = new RegExp(`^/(?<panel>public)/(?<microsite>dta)$`);
// /public/roam
const roamRegex = new RegExp(`^/(?<panel>public)/(?<microsite>roam)$`);

// Tipin1 routes
// /school/[subpanel]/[tipin1]
const schoolSubpanelTipin1Regex = new RegExp(
  `^/(?<panel>school)/(?<subpanel>${schoolSubpanelSlugs.join("|")})/(?<tipin1>[^/]+)$`,
);
// /school/[tipin1]
const schoolPanelTipin1Regex = new RegExp(
  `^/(?<panel>school)/(?!${schoolSubpanelSlugs.join("|")})(?<tipin1>[^/]+)$`,
);
// /school/hooke-park/[tipin1]
const hookeParkTipin1Regex = new RegExp(
  `^/(?<panel>school)/(?<microsite>hooke-park)/(?<tipin1>${hookeParkTipin1Slugs.join("|")})$`,
);
// /public/[subpanel]/[tipin1]
const publicSubpanelTipin1Regex = new RegExp(
  `^/(?<panel>public)/(?<subpanel>${publicSubpanelSlugs.join("|")})/(?<tipin1>[^/]+)$`,
);
// /public/[tipin1]
const publicPanelTipin1Regex = new RegExp(
  `^/(?<panel>public)/(?!${publicSubpanelSlugs.join("|")})(?<tipin1>[^/]+)$`,
);
// /public/dta/[tipin1]
const dtaTipin1Regex = new RegExp(
  `^/(?<panel>public)/(?<microsite>dta)/(?<tipin1>${dtaTipin1Slugs.join("|")})$`,
);
// /public/roam/[tipin1]
const roamTipin1Regex = new RegExp(
  `^/(?<panel>public)/(?<microsite>roam)/(?<tipin1>[^/]+)$`,
);

// Tipin2 routes
// /school/[subpanel]/[tipin1]/[tipin2]
const schoolSubpanelTipin2Regex = new RegExp(
  `^/(?<panel>school)/(?<subpanel>${schoolSubpanelSlugs.join("|")})/(?<tipin1>[^/]+)/(?<tipin2>[^/]+)$`,
);
// /school/[tipin1]/[tipin2]
const schoolPanelTipin2Regex = new RegExp(
  `^/(?<panel>school)/(?!${schoolSubpanelSlugs.join("|")})/(?<tipin1>[^/]+)/(?<tipin2>[^/]+)$`,
);
// /school/hooke-park/[tipin1]/[tipin2]
const hookeParkPanelTipin2Regex = new RegExp(
  `^/(?<panel>school)/(?<microsite>hooke-park)/(?<tipin1>${hookeParkTipin1Slugs.join("|")})/(?<tipin2>[^/]+)$`,
);
// /public/[subpanel]/[tipin1]/[tipin2]
const publicSubpanelTipin2Regex = new RegExp(
  `^/(?<panel>public)/(?<subpanel>${publicSubpanelSlugs.join("|")})/(?<tipin1>[^/]+)/(?<tipin2>[^/]+)$`,
);
// /public/[tipin1]/[tipin2]
const publicPanelTipin2Regex = new RegExp(
  `^/(?<panel>public)/(?!${publicSubpanelSlugs.join("|")})/(?<tipin1>[^/]+)/(?<tipin2>[^/]+)$`,
);
// /public/dta/[tipin1]/[tipin2]
const dtaTipin2Regex = new RegExp(
  `^/(?<panel>public)/(?<microsite>dta)/(?<tipin1>${dtaTipin1Slugs.join("|")})/(?<tipin2>[^/]+)$`,
);

export const routeParsers = {
  home: (pathname: string) => new RegExp(`^/$`).test(pathname),

  panel: (pathname: string) =>
    (schoolPanelRegex.exec(pathname)?.groups ??
      schoolSubpanelRegex.exec(pathname)?.groups ??
      hookeParkRegex.exec(pathname)?.groups ??
      publicPanelRegex.exec(pathname)?.groups ??
      publicSubpanelRegex.exec(pathname)?.groups ??
      dtaRegex.exec(pathname)?.groups ??
      roamRegex.exec(pathname)?.groups ??
      null) as
      | { panel: "school"; microsite: undefined; subpanel?: SchoolSubpanelSlug }
      | { panel: "school"; microsite: "hooke-park"; subpanel: undefined }
      | { panel: "public"; microsite: undefined; subpanel?: PublicSubpanelSlug }
      | { panel: "public"; microsite: "dta"; subpanel: undefined }
      | { panel: "public"; microsite: "roam"; subpanel: undefined }
      | null,

  tipin1: (pathname: string) =>
    (schoolSubpanelTipin1Regex.exec(pathname)?.groups ??
      schoolPanelTipin1Regex.exec(pathname)?.groups ??
      hookeParkTipin1Regex.exec(pathname)?.groups ??
      publicSubpanelTipin1Regex.exec(pathname)?.groups ??
      publicPanelTipin1Regex.exec(pathname)?.groups ??
      dtaTipin1Regex.exec(pathname)?.groups ??
      roamTipin1Regex.exec(pathname)?.groups ??
      null) as
      | {
          panel: "school";
          microsite: undefined;
          subpanel?: SchoolSubpanelSlug;
          tipin1: string;
        }
      | {
          panel: "school";
          microsite: "hooke-park";
          subpanel: undefined;
          tipin1: HookeParkTipin1Slug;
        }
      | {
          panel: "public";
          microsite: undefined;
          subpanel?: PublicSubpanelSlug;
          tipin1: string;
        }
      | {
          panel: "public";
          microsite: "dta";
          subpanel: undefined;
          tipin1: DtaTipin1Slug;
        }
      | {
          panel: "public";
          microsite: "roam";
          subpanel: undefined;
          tipin1: string;
        }
      | null,

  tipin2: (pathname: string) =>
    (schoolSubpanelTipin2Regex.exec(pathname)?.groups ??
      schoolPanelTipin2Regex.exec(pathname)?.groups ??
      hookeParkPanelTipin2Regex.exec(pathname)?.groups ??
      publicSubpanelTipin2Regex.exec(pathname)?.groups ??
      publicPanelTipin2Regex.exec(pathname)?.groups ??
      dtaTipin2Regex.exec(pathname)?.groups ??
      null) as
      | {
          panel: "school";
          microsite: undefined;
          subpanel?: SchoolSubpanelSlug;
          tipin1: string;
          tipin2: string;
        }
      | {
          panel: "school";
          microsite: "hooke-park";
          subpanel: undefined;
          tipin1: HookeParkTipin1Slug;
          tipin2: string;
        }
      | {
          panel: "public";
          microsite: undefined;
          subpanel?: PublicSubpanelSlug;
          tipin1: string;
          tipin2: string;
        }
      | {
          panel: "public";
          microsite: "dta";
          subpanel: undefined;
          tipin1: DtaTipin1Slug;
          tipin2: string;
        }
      | null,
};

export type RouteParsed = {
  [K in keyof typeof routeParsers]: ReturnType<(typeof routeParsers)[K]>;
};
