import BannerSection from "@/components/partials/Sections/BannerSection";
import ConciergeCard from "./ConciergeCard";

const ConciergeService = () => {
  return (
    <main className="min-h-screen">
      <BannerSection
        title="Concierge Service"
        description="Experience luxury healthcare with our premium concierge service, providing round-the-clock access to medical care and personalized attention whenever you need it."
        image="/images/shut/banner/3.jpg"
      />
      <div className="mb-6">
        <ConciergeCard />
      </div>
    </main>
  );
};

export default ConciergeService;
