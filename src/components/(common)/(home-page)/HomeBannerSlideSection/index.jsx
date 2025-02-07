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

const serviceData = [
  {
    id: 1,
    name: "Private GP Clinic",
    head_1: "Expert Medical Care",
    head_2: "At Your Convenience",
    short_description: "Experience comprehensive healthcare with our expert GP services, offering personalized medical attention in a comfortable, state-of-the-art facility.",
    button_1: "Free Consultation",
    button_2: "See More",
    link: "/private_gp_clinic",
    image: "https://images.squarespace-cdn.com/content/v1/64f83f902d10c760d4813bf4/7dcd0d2c-bb28-43a0-a8e7-643a169b3707/saw.jpeg",
    tags: ['Private GP Consultation', 'Extended GP Consultation', 'Full Health Check']
  },
  {
    id: 2,
    name: "Aesthetic Clinic",
    head_1: "Enhance Your Natural Beauty",
    head_2: "With Advanced Treatments",
    short_description: "Transform your appearance with our advanced aesthetic treatments, delivered by skilled professionals using cutting-edge technology and proven techniques.",
    button_1: "Free Consultation",
    button_2: "See More",
    link: "/aesthetic_clinic",
    image: "https://www.shutterstock.com/image-photo/beautiful-woman-perfect-skin-underwear-600nw-2492680667.jpg",
    tags: ['Aesthetic Treatment', 'Laser Treatment', 'Facial Treatment']
  },
  {
    id: 3,
    name: "Concierge Service",
    head_1: "Personalized Care",
    head_2: "At Your Service 24/7",
    short_description: "Experience luxury healthcare with our premium concierge service, providing round-the-clock access to medical care and personalized attention whenever you need it.",
    button_1: "Free Consultation",
    button_2: "See More",
    link: "/concierge_service",
    image: "https://www.usnews.com/dims4/USNEWS/6b4a3ba/2147483647/thumbnail/970x647/quality/85/?url=https%3A%2F%2Fwww.usnews.com%2Fcmsmedia%2F71%2F65%2F7f0f53d649b4bc9b8e6d9e4410ab%2F170426-hotelconcierge-stock.jpg",
    tags: ['Concierge Service', '24/7 Access', 'Personalized Attention']
  },
];

const HomeBannerSlideSection = () => {
  return (
    <section className="relative -z-10 -mt-28">
      <Carousel
        className="group/carousel relative size-full"
        opts={{ loop: true, allowClick: true }}
        autoplay
      >
        <CarouselContent>
          {serviceData.map((item, index) => (
            <CarouselItem key={index} className="group/slide">
              <HomeBannerSlide data={item} />
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
        <CarouselPagination />
      </Carousel>
    </section>
  );
};

export default HomeBannerSlideSection;
