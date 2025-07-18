import { animate } from "motion";
import {
  MotionValue,
  motion,
  useMotionValue,
  useTransform,
} from "motion/react";
import { useImperativeHandle } from "react";

export type CollapsingTextMethods = {
  collapse: () => void;
};

function Root({
  initialCollapsed,
  methodsRef,
  onCollapse,
  children,
}: {
  initialCollapsed: boolean;
  methodsRef?: React.RefObject<CollapsingTextMethods | undefined>;
  onCollapse?: () => void;
  children: (expanded: MotionValue<number>) => React.ReactNode;
}) {
  const expandedMV = useMotionValue(initialCollapsed ? 0 : 1);

  useImperativeHandle(
    methodsRef,
    () => ({
      collapse: () => {
        animate(expandedMV, 0, {
          from: 1,
          duration: 0.6,
          delay: 0.4,
          ease: "linear",
          onComplete: onCollapse,
        });
      },
    }),
    [expandedMV, onCollapse],
  );
  return children(expandedMV);
}

function Unit({
  transformer,
  ...props
}: React.ComponentProps<typeof motion.span> & {
  transformer: () => "none" | "inline";
}) {
  const transformedMotion = useTransform(transformer);
  return (
    <motion.span
      style={{
        display: transformedMotion,
      }}
      {...props}
    />
  );
}

const CollapsingText = {
  Root,
  Unit,
};

export default CollapsingText;
