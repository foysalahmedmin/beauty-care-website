import { cn } from "@/lib/utils";
import { forwardRef } from "react";
import { useNavigate } from "react-router-dom";

const Logo = forwardRef(({ className, variant = "default", ...props }, ref) => {
  const navigate = useNavigate();
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
      <div className="relative overflow-hidden rounded-lg transition-all duration-300 group-hover:shadow-md">
        <div className="absolute inset-0 from-primary/10 to-primary/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <img
          onClick={() => navigate("/")}
          className="h-8 w-auto transform object-cover transition-transform duration-300 group-hover:scale-105 cursor-pointer"
          src="/images/LOGO.png"
          alt="Arkangel Clinic"
        />
      </div>
    </div>
  );
});

Logo.displayName = "Logo";

export default Logo;
