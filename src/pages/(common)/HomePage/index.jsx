import BodyPartSection from "@/components/(common)/(home-page)/BodyPartSection";
import BodySurgicalSection from "@/components/(common)/(home-page)/BodySurgicalSection";
import CredentialsSection from "@/components/(common)/(home-page)/CredentialsSection";
import DoctorSection from "@/components/(common)/(home-page)/DoctorSection";
import FaceSurgicalSection from "@/components/(common)/(home-page)/FaceSurgicalSection";
import HomeBannerBottomSection from "@/components/(common)/(home-page)/HomeBannerBottomSection";
import HomeBannerSlideSection from "@/components/(common)/(home-page)/HomeBannerSlideSection";
import HomeBioSection from "@/components/(common)/(home-page)/HomeBioSection";
import NewsOfferSection from "@/components/(common)/(home-page)/NewsOfferSection";
import NonSurgicalSection from "@/components/(common)/(home-page)/NonSurgicalSection";
import PhotoGallerySection from "@/components/(common)/(home-page)/PhotoGallerySection";
import PopularProceduresSection from "@/components/(common)/(home-page)/PopularProceduresSection";
import TestimonialSection from "@/components/(common)/(home-page)/TestimonialSection";

const HomePage = () => {
  return (
    <main>
      {/* <HomeBannerSection /> */}
      <HomeBannerSlideSection />
      <HomeBioSection />
      <CredentialsSection />
      <BodyPartSection />
      <FaceSurgicalSection />
      <BodySurgicalSection />
      <PopularProceduresSection />
      <PhotoGallerySection />
      <TestimonialSection />
      <NonSurgicalSection />
      <DoctorSection />
      <HomeBannerBottomSection />
      <NewsOfferSection />
    </main>
  );
};

export default HomePage;
