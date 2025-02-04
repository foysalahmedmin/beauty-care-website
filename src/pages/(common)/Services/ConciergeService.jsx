import BodySurgicalSection from "@/components/(common)/(home-page)/BodySurgicalSection";
import FaceSurgicalSection from "@/components/(common)/(home-page)/FaceSurgicalSection";
import BannerSection from "@/components/partials/Sections/BannerSection";
import ConciergeCard from "./ConciergeCard";

const ConciergeService = () => {
  return (
    <main className="min-h-screen">
      <BannerSection
        title="Concierge Service"
        description="Experience luxury healthcare with our premium concierge service, providing round-the-clock access to medical care and personalized attention whenever you need it."
        image="https://www.usnews.com/dims4/USNEWS/6b4a3ba/2147483647/thumbnail/970x647/quality/85/?url=https%3A%2F%2Fwww.usnews.com%2Fcmsmedia%2F71%2F65%2F7f0f53d649b4bc9b8e6d9e4410ab%2F170426-hotelconcierge-stock.jpg"
      />
      <ConciergeCard />
      <FaceSurgicalSection />
      <BodySurgicalSection />
    </main>
  );
};

export default ConciergeService;
