import clientEnv from '@/lib/clientEnv';

// TODO: When are we referencing Strapi imgs by relative url?
// Could we perhaps do w/o this function?

export function strapiImage(url: string): string {
  if (url.startsWith("/")) {
    return clientEnv.NEXT_PUBLIC_IMAGE_HOST + url;
  }
  return url;
}