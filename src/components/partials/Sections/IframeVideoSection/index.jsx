import useScreenSize from "@/hooks/ui/useScreenSize";
import { cn } from "@/lib/utils";

const IframeVideSection = ({
  src = "https://player.vimeo.com/video/844556204?h=83f2a719c2&autoplay=1&loop=1&muted=1&background=1",
  className,
}) => {
  const { width, height } = useScreenSize();
  const calcWidth = width / 16 > height / 9 ? width : height * 2;

  return (
    <div
      className={cn("relative mx-auto h-screen-minus-header w-full", className)}
    >
      <div className="absolute left-1/2 top-1/2 -z-10 size-full -translate-x-1/2 -translate-y-1/2 overflow-hidden">
        <iframe
          src={src}
          width={calcWidth * 1}
          height={((calcWidth * 1) / 16) * 9}
          frameBorder="0"
          allow="autoplay; fullscreen"
          allowFullScreen
          data-ready="true"
          className="elementor-background-video-embed aspect-video"
        ></iframe>
      </div>
    </div>
  );
};

export default IframeVideSection;
