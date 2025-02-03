import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNextTrigger,
  CarouselPagination,
  CarouselPreviousTrigger,
} from "@/components/ui/Carousel";
import { ChevronLeft, ChevronRight } from "lucide-react";
import HomeBannerSlide from "./HomeBannerSlide";

const HomeBannerSlideSection = () => {
  return (
    <section className="relative -z-10 -mt-28">
      <Carousel
        className="group/carousel relative size-full"
        opts={{ loop: true }}
        autoplay
      >
        <CarouselContent>
          <CarouselItem className="group/slide">
            <HomeBannerSlide />
          </CarouselItem>
          <CarouselItem className="group/slide">
            <HomeBannerSlide />
          </CarouselItem>
          <CarouselItem className="group/slide">
            <HomeBannerSlide />
          </CarouselItem>
        </CarouselContent>
        <CarouselPreviousTrigger
          className="absolute left-8 hidden transition-all duration-300 md:inline-flex"
          shape="none"
          size="none"
          variant="none"
        >
          <ChevronLeft className="size-16" strokeWidth={0.5} />
        </CarouselPreviousTrigger>
        <CarouselNextTrigger
          className="absolute right-8 hidden transition-all duration-300 md:inline-flex"
          shape="none"
          size="none"
          variant="none"
        >
          <ChevronRight className="size-16" strokeWidth={0.5} />
        </CarouselNextTrigger>
        <CarouselPagination />
      </Carousel>
    </section>
  );
};

export default HomeBannerSlideSection;
