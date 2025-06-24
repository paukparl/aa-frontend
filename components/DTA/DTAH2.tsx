import clsx from 'clsx';

export interface DTAH2Props {
  tipInRoute?: 'people' | 'practices' | 'institutions' | 'collections' | 'about' | 'search';
  tipInLevel?: 'first' | 'second';
  title: string;
}

/** Primary UI component for user interaction */
export const DTAH2 = ({
  tipInLevel = 'first',
  tipInRoute = 'practices',
  title = 'About the Archive',
  ...props
}: DTAH2Props) => {
  const textColorLib = {
    people: 'text-dta_tipin_people_foreground_color',
    practices: 'text-dta_tipin_practices_foreground_color',
    institutions: 'text-dta_tipin_institutions_foreground_color',
    collections: 'text-dta_tipin_collections_foreground_color',
    about: 'text-dta_tipin_about_foreground_color',
    search: 'text-dta_tipin_search_foreground_color'
};
  return (
     <h2 className={clsx('h2-dta', textColorLib[tipInRoute])}>{title}</h2>
  );
};
