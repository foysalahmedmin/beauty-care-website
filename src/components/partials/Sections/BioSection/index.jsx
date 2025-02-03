import { cn } from "@/lib/utils";
import { forwardRef } from "react";

const BioSection = forwardRef(({ className, ...props }, ref) => {
  return (
    <section
      className={cn("relative flex w-full flex-col", className)}
      ref={ref}
      {...props}
    />
  );
});
BioSection.displayName = "BioSection";

const BioContainer = forwardRef(({ className, ...props }, ref) => {
  return (
    <section
      className={cn(
        "container flex flex-1 items-center justify-center py-16 md:py-24",
        className,
      )}
      ref={ref}
      {...props}
    />
  );
});
BioContainer.displayName = "BioContainer";

const BioContent = forwardRef(({ className, ...props }, ref) => {
  return (
    <div
      className={cn("mx-auto max-w-3xl space-y-6 text-center", className)}
      ref={ref}
      {...props}
    />
  );
});
BioContent.displayName = "BioContainer";

const BioTitle = forwardRef(({ className, ...props }, ref) => {
  return (
    <h3
      className={cn("font-questrial font-medium uppercase", className)}
      {...props}
      ref={ref}
    />
  );
});
BioTitle.displayName = "BioTitle";

const BioDescription = forwardRef(({ className, ...props }, ref) => {
  return (
    <div
      className={cn("text-lg text-title md:text-xl", className)}
      {...props}
      ref={ref}
    />
  );
});
BioDescription.displayName = "Description";

export { BioContainer, BioContent, BioDescription, BioSection, BioTitle };
