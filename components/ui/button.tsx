import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

export const primaryLinkButtonCSS = cn(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-extrabold transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 shadow-[0_9px_0_rgb(255,255,255)] hover:shadow-[0_4px_0px_rgb(255,255,255)]",
  "bg-primary text-primary-foreground shadow hover:bg-primary/90",
  "h-9 px-4 py-2"
);

export const divergentLinkButtonCSS = cn(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-xl font-bold transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  "shadow-[0_6px_0_rgb(255,255,255)] hover:shadow-[0_2px_0px_rgb(255,255,255)] active:shadow-[0_1px_0px_rgb(0,0,0)] hover:translate-y-1 transition-all",
  "bg-[#FF0420] text-primary-foreground",
  "border border-4 border-black rounded-xl",
  "h-9 px-8 py-4 my-2 lg:py-5 lg:my-3"
);

export const originalLinkButtonCSS = cn(
  "btn shadow-[0_9px_0_rgb(0,0,0)] hover:shadow-[0_4px_0px_rgb(0,0,0)]",
  "text-white bg-[#FB0420] ease-out hover:translate-y-1 transition-all rounded",
  "py-2 px-4 font-bold outline outline-1 outline-hotpink-700"
);

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-extrabold transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
