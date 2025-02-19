import BookingModal from "@/components/modals/BookingModal";
import BannerSection from "@/components/partials/Sections/BannerSection";
import { gpServices } from "@/constants/services";
import { useState } from "react";
import { useParams } from "react-router-dom";

const OneGp = () => {
    const { slug } = useParams();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => setIsModalOpen(true);
    const handleCloseModal = () => setIsModalOpen(false);
    const gp = gpServices.find((service) => service.slug === slug);
    return (
        <main className="min-h-screen">
            <BannerSection
                title={gp.name}
                description={gp.description}
                image={gp.image}
            />

            <div className="container mx-auto px-4 py-12">
                {/* Service Overview */}
                <div className="mb-12">
                    <div className="flex items-center justify-between mb-8">
                        <h2 className="text-3xl font-bold text-gray-800">{gp.name}</h2>
                        <div className="flex items-center gap-4">
                            {/* <span className="text-lg font-semibold text-gray-600">Duration: {gp.duration}</span> */}
                            <span className="text-lg font-semibold text-primary">£{gp.price}</span>
                        </div>
                    </div>
                    <p className="text-lg text-gray-600 mb-8">{gp.description}</p>
                </div>

                {/* What's Included */}
                <div className="mb-12">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6">What's Included</h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {gp.includes.map((item, index) => (
                            <li key={index} className="flex items-start gap-3">
                                <svg className="w-6 h-6 text-primary flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-gray-600">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Benefits */}
                <div className="mb-12 bg-gray-50 p-8 rounded-lg">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6">Key Benefits</h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {gp.benefits.map((benefit, index) => (
                            <li key={index} className="flex items-center gap-3">
                                <svg className="w-5 h-5 text-primary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span className="text-gray-600">{benefit}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* FAQs */}
                <div className="mb-12">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6">Frequently Asked Questions</h3>
                    <div className="space-y-6">
                        {gp.faqs.map((faq, index) => (
                            <div key={index} className="border-b border-gray-200 pb-6">
                                <h4 className="text-lg font-semibold text-gray-800 mb-2">{faq.question}</h4>
                                <p className="text-gray-600">{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <div className="text-center">
                    <button onClick={handleOpenModal} className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors">
                        Book Consultation         </button>
                </div>
            </div>
            <BookingModal isOpen={isModalOpen} onClose={handleCloseModal} />
        </main>
    );
};

export default OneGp;