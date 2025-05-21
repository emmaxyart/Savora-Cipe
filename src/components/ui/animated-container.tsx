import * as React from "react";
import { motion, Variant, Variants } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  animation?: "fadeIn" | "slideUp" | "slideIn" | "scale" | "none";
  once?: boolean;
}

const animations: Record<string, Variants> = {
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  },
  slideUp: {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  },
  slideIn: {
    hidden: { x: -20, opacity: 0 },
    visible: { x: 0, opacity: 1 }
  },
  scale: {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1 }
  },
  none: {
    hidden: {},
    visible: {}
  }
};

export function AnimatedContainer({
  children,
  delay = 0,
  duration = 0.5,
  animation = "fadeIn",
  once = true,
  className,
  ...props
}: AnimatedContainerProps) {
  // Only pass valid HTML div props to motion.div, filter out incompatible event handlers
  const {
    onDragStart,
    onDrag,
    onDragEnd,
    onDragOver,
    onDrop,
    ...restProps
  } = props;

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once }}
      variants={animations[animation]}
      transition={{ duration, delay }}
      className={cn(className)}
      {...restProps}
    >
      {children}
    </motion.div>
  );
}

