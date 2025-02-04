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
                image="https://images.squarespace-cdn.com/content/v1/64f83f902d10c760d4813bf4/7dcd0d2c-bb28-43a0-a8e7-643a169b3707/saw.jpeg"
            />
            <PrivateCardSection />
            <DoctorSection />
            <PhotoGallerySection />
            <TestimonialSection />
        </main>
    );
};

export default PrivateGp;
