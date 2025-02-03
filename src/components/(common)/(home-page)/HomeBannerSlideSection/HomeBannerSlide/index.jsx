import { Button } from "@/components/ui/Button";
import { Dot } from "lucide-react";

const HomeBannerSlide = () => {
  return (
    <div
      style={{
        backgroundImage: `url("/images/(home-page)/banner-image.jpg")`,
      }}
      className="bg-cover bg-center bg-no-repeat"
    >
      <div className="bg-black/25">
        <div className="dark container relative flex min-h-screen flex-col items-center justify-center py-60 text-center text-title">
          <div className="max-w-[44rem] space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl">
                FEEL YOUR BEST. LOOK <br /> YOUR BEST.
              </h1>
              <p>
                Top Destination for plastic surgary and nonsurgical treatment
              </p>
            </div>
            <div className="flex items-center justify-center gap-4">
              <Button className="primary" variant="default">
                Free Consultation
              </Button>
              <Button
                className="hover:bg-primary/75 hover:text-primary-foreground"
                variant="default"
              >
                Free Consultation
              </Button>
            </div>
          </div>
          <div className="absolute bottom-10 left-0 right-0 flex w-full flex-wrap items-center justify-around gap-4">
            {[
              "Facelift",
              "Rhinoplasty",
              "Mommy Makeover",
              "Tommy Tuck",
              "Liposuction",
              "Injectable",
            ].map((item, index) => (
              <div
                key={index}
                className="flex cursor-pointer items-center gap-2 px-6 py-2 text-sm font-medium uppercase text-title"
              >
                <div className="inline-block rounded-full border border-current">
                  <Dot className="size-4" />
                </div>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBannerSlide;
