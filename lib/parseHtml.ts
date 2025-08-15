import parse, { HTMLReactParserOptions } from "html-react-parser";

export function parseHtml(html: string, options?: HTMLReactParserOptions) {
  return parse(html, options);
}

// TODO: consider dedicated parsers for different rich text presets.
// export function parseHtmlPreset1(html: string) {
//   return parseHtml(html, { });
// }
