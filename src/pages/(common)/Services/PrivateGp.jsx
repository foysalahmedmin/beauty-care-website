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
                description="Expert private GP services with same-day appointments, personalized care, and convenient consultations."
                image="/images/shut/banner/1.jpg"
            />
            <PrivateCardSection />
            <DoctorSection />
            <PhotoGallerySection />
            <TestimonialSection />
        </main>
    );
};

export default PrivateGp;
