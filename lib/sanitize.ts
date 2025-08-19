import DOMPurify, { WindowLike } from "dompurify";
import { JSDOM } from "jsdom";

const window = new JSDOM("").window as unknown as WindowLike;
const purify = DOMPurify(window);

export function sanitize(html: string) {
  return purify.sanitize(html);
}
