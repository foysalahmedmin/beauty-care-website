import { cn } from "@/lib/utils";
import { forwardRef } from "react";

const Logo = forwardRef(({ className, variant = "default", ...props }, ref) => {
  return (
    <div
      className={cn(
        "group flex items-center gap-2 text-base leading-none transition-all duration-300",
        variant === "light" && "text-white",
        variant === "default" && "text-primary",
        className,
      )}
      {...props}
      ref={ref}
    >
      {/* Logo Image */}
      <div className="relative overflow-hidden rounded-lg shadow-sm transition-all duration-300 group-hover:shadow-md">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <img
          className="h-10 w-auto transform object-cover transition-transform duration-300 group-hover:scale-105"
          src="/logo.png"
          alt="Arkangel Clinic"
        />
      </div>

      {/* Logo Text */}
      <div className="flex flex-col">
        <span className="text-lg font-bold tracking-tight">Arkangel</span>
        <span className="text-xs font-medium tracking-wider">
          AESTHETIC CLINIC
        </span>
      </div>
    </div>
  );
});

Logo.displayName = "Logo";

export default Logo;
