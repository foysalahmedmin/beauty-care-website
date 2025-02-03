import useScreenSize from "@/hooks/ui/useScreenSize";
import { cn } from "@/lib/utils";
import { forwardRef } from "react";

const BannerSection = forwardRef(({ className, ...props }, ref) => {
  return (
    <section
      className={cn(
        "relative flex min-h-screen-minus-header w-full flex-col",
        className,
      )}
      ref={ref}
      {...props}
    />
  );
});
BannerSection.displayName = "BannerSection";

const BannerBackground = forwardRef(
  ({ className, image, video, iframe, ...props }, ref) => {
    const { width, height } = useScreenSize();
    const calcWidth = width / 16 > height / 9 ? width : height * 2;
    return (
      <div
        className={cn(
          "absolute inset-0 -z-10 size-full overflow-hidden",
          className,
        )}
        ref={ref}
        {...props}
      >
        {image && (
          <img
            className="size-full object-cover object-center"
            src={image}
            alt="Banner Image"
          />
        )}
        {video && (
          <video
            className="w-full object-cover object-center"
            src={video}
            autoPlay
            loop
            muted
            playsInline
          />
        )}
        {iframe && (
          <div className="absolute left-1/2 top-1/2 -z-10 size-full -translate-x-1/2 -translate-y-1/2 overflow-hidden">
            <iframe
              src={iframe}
              width={calcWidth * 1}
              height={((calcWidth * 1) / 16) * 9}
              // height={height}
              frameBorder="0"
              allow="autoplay; fullscreen"
              allowFullScreen
              data-ready="true"
              className="elementor-background-video-embed aspect-video"
            ></iframe>
          </div>
        )}
      </div>
    );
  },
);
BannerBackground.displayName = "BannerBackground";

const BannerContainer = forwardRef(({ className, children, ...props }, ref) => {
  return (
    <div
      className={cn(
        "flex w-full flex-1 items-center justify-center py-16 md:py-24",
        className,
      )}
      ref={ref}
      {...props}
    >
      <div className="container">{children}</div>
    </div>
  );
});
BannerContainer.displayName = "BannerContainer";

const BannerContent = forwardRef(({ className, ...props }, ref) => {
  return (
    <section
      className={cn(
        "mx-auto max-w-3xl space-y-6 text-center md:space-y-8",
        className,
      )}
      ref={ref}
      {...props}
    />
  );
});
BannerContent.displayName = "BannerContainer";

const BannerTitle = forwardRef(({ className, ...props }, ref) => {
  return (
    <h1
      className={cn("font-medium capitalize md:text-5xl", className)}
      {...props}
      ref={ref}
    />
  );
});
BannerTitle.displayName = "BannerTitle";

const BannerDescription = forwardRef(({ className, ...props }, ref) => {
  return (
    <div
      className={cn("text-xl text-title md:text-2xl", className)}
      {...props}
      ref={ref}
    />
  );
});
BannerDescription.displayName = "Description";

export {
  BannerBackground,
  BannerContainer,
  BannerContent,
  BannerDescription,
  BannerSection,
  BannerTitle,
};
