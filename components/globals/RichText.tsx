import DOMPurify, { WindowLike } from "dompurify";
import { JSDOM } from "jsdom";
import { cn } from "@/lib/cn";

const window = new JSDOM("").window as unknown as WindowLike;
const purify = DOMPurify(window);

function sanitizeHTML(html: string) {
  return { __html: purify.sanitize(html) };
}

type RichTextProps = {
  className?: string;
  children: string;
};

export const RichText = ({ children, className }: RichTextProps) => {
  return (
    <div
      className={cn(className, "whitespce-pre-line")}
      dangerouslySetInnerHTML={sanitizeHTML(children)}
    ></div>
  );
};
