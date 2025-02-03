import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/Carousel";

const HorizondalImagesSection = () => {
  const images = [];
  return (
    <section className="mt-16">
      <div>
        <Carousel
          className="group/carousel w-full"
          opts={{ loop: true }}
          autoplay
        >
          <CarouselContent>
            {images?.map((image, index) => (
              <CarouselItem
                key={index}
                className="basis-1/3 md:basis-1/6 xl:basis-[12.5%]"
              >
                <div className="aspect-square w-full">
                  <img src={image} alt="" />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default HorizondalImagesSection;
