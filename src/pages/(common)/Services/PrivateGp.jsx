import DoctorSection from "@/components/(common)/(home-page)/DoctorSection";
import PhotoGallerySection from "@/components/(common)/(home-page)/PhotoGallerySection";
import TestimonialSection from "@/components/(common)/(home-page)/TestimonialSection";
import BannerSection from "@/components/partials/Sections/BannerSection";
import PrivateCardSection from "./PrivateCardSection";

const PrivateGp = () => {
    return (
        <main className="space-y-14">
            <BannerSection
                title="Private GP Services"
                description="Experience comprehensive healthcare with our expert GP services, offering personalized medical attention in a
comfortable, state- of - the - art facility."
                image="/images/shut/banner/2.jpg"
            />
            <PrivateCardSection />
            <DoctorSection />
            <PhotoGallerySection />
            <TestimonialSection />
        </main>
    );
};

export default PrivateGp;
