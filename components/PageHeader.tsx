import { cn } from "@/lib/cn";

export default function PageHeader({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "sticky top-0 left-0 z-10 flex h-(--header-h) w-full items-center bg-gradient-to-b from-50% to-transparent to-100% px-(--padding)",
        className,
      )}
      {...props}
    />
  );
}
