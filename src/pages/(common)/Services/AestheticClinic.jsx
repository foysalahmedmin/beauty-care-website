import BodySurgicalSection from "@/components/(common)/(home-page)/BodySurgicalSection";
import FaceSurgicalSection from "@/components/(common)/(home-page)/FaceSurgicalSection";
import BannerSection from "@/components/partials/Sections/BannerSection";
import AestheticCard from "./AestheticCard";

const AestheticClinic = () => {
  return (
    <main className="min-h-screen">
      <BannerSection
        title="Aesthetic Clinic"
        description="Transform your appearance with our advanced aesthetic treatments, delivered by highly skilled professionals
using state- of - the - art technology and proven techniques."
        image="/images/shut/banner/1.jpg"
      />
      <AestheticCard />
      <FaceSurgicalSection />
      <BodySurgicalSection />
    </main>
  );
};

export default AestheticClinic;
