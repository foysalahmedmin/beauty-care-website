import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { forwardRef } from "react";
import { NavLink } from "react-router-dom";

const ArrowLink = forwardRef(
  (
    { children, className, activeClassName, loadingClassName, ...props },
    ref,
  ) => {
    return (
      <NavLink
        className={({ isActive, isPending }) =>
          cn(
            "group/link primary button text-accent hover:text-foreground",
            className,
            {
              [cn("", activeClassName)]: isActive,
              [cn("cursor-wait opacity-50", loadingClassName)]: isPending,
            },
          )
        }
        {...props}
        ref={ref}
      >
        <ArrowRight />
        <span className="!whitespace-normal font-bold leading-4 group-hover/card:underline group-hover/link:underline">
          {children}
        </span>
      </NavLink>
    );
  },
);
ArrowLink.displayName = "ArrowLink";

export { ArrowLink };
