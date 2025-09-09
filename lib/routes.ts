import { isEqual } from "lodash";

export const routes = {
  home: "/",

  school: "/school",
  schoolProgrammes: "/school/programmes",
  schoolProgramme: (slug: string) => `/school/programmes/${slug}`,
  schoolProgrammeUnit: (slug1: string, slug2: string) =>
    `/school/programmes/${slug1}/${slug2}`,
  schoolApply: "/school/apply",
  schoolApplyEntry: (slug: string) => `/school/apply/${slug}`,
  schoolFacilities: "/school/facilities",
  schoolFacility: (slug: string) => `/school/facilities/${slug}`,
  schoolCalendar: "/school/calendar",
  schoolLocations: "/school/locations",
  schoolPeople: "/school/people",
  schoolPerson: (slug: string) => `/school/people/${slug}`,
  schoolPage: (slug: string) => `/school/pages/${slug}`,
  schoolGovernance: "/school/governance",
  schoolDocuments: "/school/documents",

  dta: "/public/dta",
  dtaPeople: "/public/dta/people",
  dtaPerson: (slug: string) => `/public/dta/people/${slug}`,
  dtaPractices: "/public/dta/practices",
  dtaPractice: (slug: string) => `/public/dta/practices/${slug}`,
  dtaInstitutions: "/public/dta/institutions",
  dtaInstitution: (slug: string) => `/public/dta/institutions/${slug}`,
  dtaCollections: "/public/dta/collections",
  dtaCollection: (slug: string) => `/public/dta/collections/${slug}`,
  dtaPage: (slug: string) => `/public/dta/${slug}`,

  public: "/public",

  hookePark: "/public/hooke-park",

  roam: "/public/roam",
} as const;

function startsWith(prefix: unknown[], arr: unknown[]) {
  return (
    prefix.length <= arr.length && prefix.every((val, i) => arr[i] === val)
  );
}

export function parseRoute(pathname: string) {
  const slugs = pathname.split("/").filter(Boolean);

  if (isEqual([], slugs)) {
    return { ground: "home" } as const;
  }

  if (startsWith(["school"], slugs)) {
    if (isEqual(["school"], slugs)) {
      return { ground: "school" } as const;
    }

    if (startsWith(["school", "hooke-park"], slugs)) {
      if (isEqual(["school", "hooke-park"], slugs)) {
        return { ground: "hookePark" } as const;
      }
    }

    const tipin1 = slugs.at(2);
    const tipin2 = slugs.at(3);

    if (startsWith(["school", "programmes"], slugs)) {
      return { ground: "schoolProgrammes", tipin1, tipin2 } as const;
    }

    if (startsWith(["school", "apply"], slugs)) {
      return { ground: "schoolApply", tipin1, tipin2 } as const;
    }

    if (startsWith(["school", "facilities"], slugs)) {
      return { ground: "schoolFacilities", tipin1, tipin2 } as const;
    }

    if (startsWith(["school", "calendar"], slugs)) {
      return { ground: "schoolCalendar", tipin1, tipin2 } as const;
    }

    if (startsWith(["school", "locations"], slugs)) {
      return { ground: "schoolLocations", tipin1, tipin2 } as const;
    }

    if (startsWith(["school", "people"], slugs)) {
      return { ground: "schoolPeople", tipin1, tipin2 } as const;
    }

    if (startsWith(["school", "about"], slugs)) {
      return { ground: "schoolAbout", tipin1, tipin2 } as const;
    }

    if (startsWith(["school", "governance"], slugs)) {
      return { ground: "schoolGovernance", tipin1, tipin2 } as const;
    }

    if (startsWith(["school", "documents"], slugs)) {
      return { ground: "schoolDocuments", tipin1, tipin2 } as const;
    }
  }

  if (startsWith(["public"], slugs)) {
    if (isEqual(["public"], slugs)) {
      return { ground: "public" } as const;
    }

    const tipin1 = slugs.at(2);
    const tipin2 = slugs.at(3);

    if (startsWith(["public", "dta"], slugs)) {
      if (isEqual(["public", "dta"], slugs)) {
        return { ground: "dta" } as const;
      }

      return { ground: "dta", tipin1, tipin2 } as const;
    }

    if (startsWith(["public", "roam"], slugs)) {
      if (isEqual(["public", "roam"], slugs)) {
        return { ground: "roam" } as const;
      }
    }
  }

  return null;
}
