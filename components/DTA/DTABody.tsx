//update this component to use whatever rihc text output is passed in 
// as contentinstead of string

import clsx from "clsx";

export interface HeaderProps {
  content?: string;
  tipInRoute: 'people' | 'practices' | 'institutions' | 'collections' | 'about' | 'search';
}

/** Primary UI component for user interaction */
export const DTABody = ({
  tipInRoute = 'practices',
  content = 'About the Archive',
  ...props
}: HeaderProps) => {
  const textColorLib = {
    people: 'text-dta_tipin_people_foreground_color',
    practices: 'text-dta_tipin_practices_foreground_color',
    institutions: 'text-dta_tipin_institutions_foreground_color',
    collections: 'text-dta_tipin_collections_foreground_color',
    about: 'text-dta_tipin_about_foreground_color',
    search: 'text-dta_tipin_search_foreground_color'
};
  return (
    <div className="lg:w-9/12 xl:w-1/2">
     <h1 className={clsx('body-dta', textColorLib[tipInRoute])}>{content}</h1>
    </div>
  );
};
