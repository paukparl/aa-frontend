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
];

export const dtaSubpanelSlugs = ["map", "about", "search"];

export const dtaTipin1Slugs = [
  "people",
  "practices",
  "institutions",
  "collections",
] as const;

export type SchoolSubpanelSlug = (typeof schoolSubpanelSlugs)[number];

export type PublicSubpanelSlug = (typeof publicSubpanelSlugs)[number];

export type HookeParkTipin1Slug = (typeof hookeParkTipin1Slugs)[number];

export type DtaSubpanelSlug = (typeof dtaSubpanelSlugs)[number];

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
            ? DtaSubpanelSlug
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
            ? `/public/dta${subpanel ? `/${subpanel}` : ""}`
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
            ? `/public/dta${subpanel ? `/${subpanel}` : ""}/${tipin1}`
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
            ? `/public/dta${subpanel ? `/${subpanel}` : ""}/${tipin1}/${tipin2}`
            : // roam
              `/public/roam${subpanel ? `/${subpanel}` : ""}/${tipin1}/${tipin2}`,
};

export const routeParsers = {
  home: (pathname: string) => new RegExp(`^/$`).test(pathname),

  panel: (pathname: string) =>
    // /school
    (new RegExp(`^/(?<panel>school)$`).exec(pathname)?.groups ??
      // /school/[subpanel]
      new RegExp(
        `^/(?<panel>school)/(?<subpanel>${schoolSubpanelSlugs.join("|")})$`,
      ).exec(pathname)?.groups ??
      // /school/hooke-park
      new RegExp(`^/(?<panel>school)/(?<microsite>hooke-park)$`).exec(pathname)
        ?.groups ??
      // /public
      new RegExp(`^/(?<panel>public)$`).exec(pathname)?.groups ??
      // /public/[subpanel]
      new RegExp(
        `^/(?<panel>public)/(?<subpanel>${publicSubpanelSlugs.join("|")})$`,
      ).exec(pathname)?.groups ??
      // /public/dta
      new RegExp(`^/(?<panel>public)/(?<microsite>dta)$`).exec(pathname)
        ?.groups ??
      // /public/dta/[subpanel]
      new RegExp(
        `^/(?<panel>public)/(?<microsite>dta)/(?<subpanel>${dtaSubpanelSlugs.join("|")})$`,
      ).exec(pathname)?.groups ??
      // /public/roam
      new RegExp(`^/(?<panel>public)/(?<microsite>roam)$`).exec(pathname)
        ?.groups ??
      null) as
      | { panel: "school"; microsite: undefined; subpanel?: SchoolSubpanelSlug }
      | { panel: "school"; microsite: "hooke-park"; subpanel: undefined }
      | { panel: "public"; microsite: undefined; subpanel?: PublicSubpanelSlug }
      | { panel: "public"; microsite: "dta"; subpanel?: DtaSubpanelSlug }
      | { panel: "public"; microsite: "roam"; subpanel: undefined }
      | null,

  tipin1: (pathname: string) =>
    // /school/[subpanel]/[tipin1]
    (new RegExp(
      `^/(?<panel>school)/(?<subpanel>${schoolSubpanelSlugs.join("|")})/(?<tipin1>[^/]+)$`,
    ).exec(pathname)?.groups ??
      // /school/[tipin1]
      new RegExp(
        `^/(?<panel>school)/(?!${schoolSubpanelSlugs.join("|")})(?<tipin1>[^/]+)$`,
      ).exec(pathname)?.groups ??
      // /school/hooke-park/[tipin1]
      new RegExp(
        `^/(?<panel>school)/(?<microsite>hooke-park)/(?<tipin1>${hookeParkTipin1Slugs.join("|")})$`,
      ).exec(pathname)?.groups ??
      // /public/[subpanel]/[tipin1]
      new RegExp(
        `^/(?<panel>public)/(?<subpanel>${publicSubpanelSlugs.join("|")})/(?<tipin1>[^/]+)$`,
      ).exec(pathname)?.groups ??
      // /public/[tipin1]
      new RegExp(
        `^/(?<panel>public)/(?!${publicSubpanelSlugs.join("|")})(?<tipin1>[^/]+)$`,
      ).exec(pathname)?.groups ??
      // /public/dta/[subpanel]/[tipin1]
      new RegExp(
        `^/(?<panel>public)/(?<microsite>dta)/(?<subpanel>${dtaSubpanelSlugs.join("|")})/(?<tipin1>[^/]+)$`,
      ).exec(pathname)?.groups ??
      // /public/dta/[tipin1]
      new RegExp(
        `^/(?<panel>public)/(?<microsite>dta)/(?!${dtaSubpanelSlugs.join("|")})(?<tipin1>${dtaTipin1Slugs.join("|")})$`,
      ).exec(pathname)?.groups ??
      // /public/roam/[tipin1]
      new RegExp(
        `^/(?<panel>public)/(?<microsite>roam)/(?<tipin1>[^/]+)$`,
      ).exec(pathname)?.groups ??
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
          subpanel: DtaSubpanelSlug;
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
    // /school/[subpanel]/[tipin1]/[tipin2]
    (new RegExp(
      `^/(?<panel>school)/(?<subpanel>${schoolSubpanelSlugs.join("|")})/(?<tipin1>[^/]+)/(?<tipin2>[^/]+)$`,
    ).exec(pathname)?.groups ??
      // /school/[tipin1]/[tipin2]
      new RegExp(
        `^/(?<panel>school)/(?!${schoolSubpanelSlugs.join("|")})/(?<tipin1>[^/]+)/(?<tipin2>[^/]+)$`,
      ).exec(pathname)?.groups ??
      // /school/hooke-park/[tipin1]/[tipin2]
      new RegExp(
        `^/(?<panel>school)/(?<microsite>hooke-park)/(?<tipin1>${hookeParkTipin1Slugs.join("|")})/(?<tipin2>[^/]+)$`,
      ).exec(pathname)?.groups ??
      // /public/[subpanel]/[tipin1]/[tipin2]
      new RegExp(
        `^/(?<panel>public)/(?<subpanel>${publicSubpanelSlugs.join("|")})/(?<tipin1>[^/]+)/(?<tipin2>[^/]+)$`,
      ).exec(pathname)?.groups ??
      // /public/[tipin1]/[tipin2]
      new RegExp(
        `^/(?<panel>public)/(?!${publicSubpanelSlugs.join("|")})/(?<tipin1>[^/]+)/(?<tipin2>[^/]+)$`,
      ).exec(pathname)?.groups ??
      // /public/dta/[tipin1]/[tipin2]
      new RegExp(
        `^/(?<panel>public)/(?<microsite>dta)/(?<tipin1>${dtaTipin1Slugs.join("|")})/(?<tipin2>[^/]+)$`,
      ).exec(pathname)?.groups ??
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
