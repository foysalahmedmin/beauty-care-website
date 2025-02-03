import useRippleEffect from "@/hooks/ui/useRippleEffect";
import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import { forwardRef, useImperativeHandle, useRef } from "react";

const buttonVariants = cva("button uppercase", {
  variants: {
    variant: {
      default: "button-variant-default",
      gradient: "button-variant-gradient",
      outline:
        "button-variant-outline text-title border-title hover:border-accent hover:bg-accent hover:text-accent-foreground",
      ghost: "button-variant-ghost",
      link: "button-variant-link",
      none: "",
    },
    size: {
      default: "button-size-default text-sm",
      sm: "button-size-sm",
      md: "button-size-md text-sm",
      lg: "button-size-lg text-base",
      none: "",
    },
    shape: {
      default: "button-shape-default",
      icon: "button-shape-icon",
      none: "",
    },
    loading: {
      center: "loading-center",
      left: "loading-left",
      right: "loading-right",
    },
  },
  defaultVariants: {
    variant: "outline",
    size: "default",
    shape: "default",
    loading: "center",
  },
});

const Button = forwardRef(
  (
    {
      className,
      loadingClassName,
      variant,
      size,
      shape,
      loading,
      as = "button",
      asChild = false,
      disabled = false,
      isLoading = false,
      animation = false,
      ...props
    },
    ref,
  ) => {
    const buttonRef = useRef(ref?.current || null);

    useImperativeHandle(ref, () => buttonRef.current);
    useRippleEffect(buttonRef, !animation);

    const Comp = asChild ? "span" : as;
    return (
      <Comp
        data-as={as || null}
        disabled={disabled || isLoading}
        className={cn(
          buttonVariants({
            variant,
            size,
            shape,
            loading,
            className,
          }),
          {
            [cn("loading", loadingClassName)]: isLoading,
          },
        )}
        ref={buttonRef}
        {...props}
      />
    );
  },
);

Button.displayName = "Button";

export { Button, buttonVariants };
