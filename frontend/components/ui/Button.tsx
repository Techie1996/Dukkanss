"use client";

import { motion } from "framer-motion";
import { cva, type VariantProps } from "class-variance-authority";
import React from "react";

const buttonStyles = cva(
  "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold tracking-wide focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60 transition-colors",
  {
    variants: {
      variant: {
        primary:
          "bg-brand text-white hover:bg-brand-dark focus-visible:ring-brand-dark",
        secondary:
          "bg-white text-slate-900 border border-slate-200 hover:bg-slate-50 focus-visible:ring-slate-300",
        ghost:
          "bg-transparent text-slate-900 hover:bg-slate-100 focus-visible:ring-slate-200"
      },
      size: {
        sm: "px-4 py-2 text-xs",
        md: "px-6 py-3 text-sm",
        lg: "px-8 py-3.5 text-base"
      }
    },
    defaultVariants: {
      variant: "primary",
      size: "md"
    }
  }
);

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonStyles> & {
    asChild?: boolean;
  };

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, variant, size, className, ...props }, ref) => {
    return (
      <motion.button
        whileHover={{ y: -1 }}
        whileTap={{ scale: 0.97 }}
        className={buttonStyles({ variant, size, className })}
        ref={ref}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);

Button.displayName = "Button";

export default Button;

