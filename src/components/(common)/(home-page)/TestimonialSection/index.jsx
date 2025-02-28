import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNextTrigger,
  CarouselPreviousTrigger,
} from "@/components/ui/Carousel";
import { StarRating } from "@/components/ui/StarRating";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Emily Roberts",
    location: "London, UK",
    image: "/images/feedback/1.jpg",
    testimonial:
      "I underwent a facelift procedure, and the results are beyond my expectations! The team was incredibly professional and made me feel at ease every step of the way. I look and feel younger, and I couldn't be happier with my decision to trust them with my transformation.",
    rating: 5,
  },
  {
    name: "John Williams",
    location: "Manchester, UK",
    image: "/images/feedback/2.jpg",
    testimonial:
      "I had body contouring done and couldn’t be happier with the results! The staff was incredibly supportive, making the whole process smooth and stress- free.My confidence has soared, and I finally feel comfortable in my own skin.It’s truly life - changing—I highly recommend it to anyone considering the treatment!",
    rating: 5,
  },
  {
    name: "Sophia Taylor",
    location: "Bristol, UK",
    image: "/images/feedback/3.jpg",
    testimonial:
      "The laser procedure was truly transformative. The specialists were skilled and caring, with visible results appearing almost instantly.Recovery was quicker than expected, leaving me with natural, beautiful results. Incredibly grateful!",
    rating: 5,
  },
];

const TestimonialCard = ({ item }) => {
  const { name, testimonial, image, location, rating } = item;
  return (
    <div className="flex flex-col text-center">
      <div className="mx-auto max-w-xl space-y-6">
        <div className="text-lg">
          <StarRating rating={rating} />
        </div>
        <div>
          <p className="text-lg italic">{testimonial}</p>
        </div>
        <div className="text-center">
          <div className="mx-auto mb-2 aspect-square size-16 overflow-hidden rounded-full border">
            <img
              className="size-full rounded-full object-cover object-center"
              src={image}
              alt=""
            />
          </div>
          <strong>{name}</strong> <br />
          <span className="text-sm">{location}</span>
        </div>
      </div>
    </div>
  );
};

const TestimonialSection = () => {
  return (
    <section className="my-16 md:my-24">
      <div className="container space-y-6">
        <div>
          <h2 className="text-center text-4xl uppercase md:text-5xl">
            What Our Client Say
          </h2>
        </div>
        <div>
          <Carousel className="md:px-10">
            <CarouselContent>
              {testimonials.map((item, index) => (
                <CarouselItem key={index}>
                  <TestimonialCard item={item} />
                </CarouselItem>
              ))}
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
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
