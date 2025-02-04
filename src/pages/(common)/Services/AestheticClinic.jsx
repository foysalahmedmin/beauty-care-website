import BodySurgicalSection from "@/components/(common)/(home-page)/BodySurgicalSection";
import FaceSurgicalSection from "@/components/(common)/(home-page)/FaceSurgicalSection";
import BannerSection from "@/components/partials/Sections/BannerSection";
import AestheticCard from "./AestheticCard";

const AestheticClinic = () => {
  return (
    <main className="min-h-screen">
      <BannerSection
        title="Aesthetic Clinic"
        description="Experience comprehensive healthcare with our expert GP services, offering personalized medical attention in a comfortable, state-of-the-art facility."
        image="https://www.shutterstock.com/image-photo/beautiful-woman-perfect-skin-underwear-600nw-2492680667.jpg"
      />
      <AestheticCard />
      <FaceSurgicalSection />
      <BodySurgicalSection />
    </main>
  );
};

export default AestheticClinic;
