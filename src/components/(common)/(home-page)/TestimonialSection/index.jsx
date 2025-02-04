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
    image: "https://media.istockphoto.com/id/1126913832/photo/teenage-beauty.jpg?s=612x612&w=0&k=20&c=PTqUB1e1rNNoWqa-TWsXaDlPpEmnIWbI2bxySwNRJXM=",
    testimonial:
      "I underwent a facelift procedure, and the results are beyond my expectations! The team was incredibly professional and made me feel at ease every step of the way. I look and feel younger, and I couldn't be happier with my decision to trust them with my transformation.",
    rating: 5,
  },
  {
    name: "John Williams",
    location: "Manchester, UK",
    image: "https://t3.ftcdn.net/jpg/06/11/54/34/360_F_611543432_8GkBOGNH9QeRsIe4ZhQMraDEzz4L5M13.jpg",
    testimonial:
      "I had liposuction and body sculpting done, and I am amazed by the results. The staff was supportive, and the entire process was smooth. My confidence has grown significantly, and I feel more comfortable in my own skin. Highly recommend!",
    rating: 5,
  },
  {
    name: "Sophia Taylor",
    location: "Bristol, UK",
    image: "https://static.vecteezy.com/system/resources/thumbnails/041/286/941/small_2x/ai-generated-of-an-asian-female-model-on-dark-background-photo.jpg",
    testimonial:
      "The tummy tuck procedure I had was life-changing. The surgeons were skilled and compassionate, and I could see visible results almost immediately. Recovery was quicker than I expected, and the results are natural and beautiful. I am so grateful to the entire team.",
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
