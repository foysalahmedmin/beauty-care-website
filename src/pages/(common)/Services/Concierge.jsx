import BannerSection from "@/components/partials/Sections/BannerSection";
import { conciergeServices } from "@/constants/services";
import { useParams } from "react-router-dom";
const Concierge = () => {
    const { slug } = useParams();
    const concierge = conciergeServices.find((service) => service.slug === slug);
    return (
        <main className="min-h-screen">
            <BannerSection
                title={concierge?.name}
                description={concierge?.description}
                image={concierge?.image}
            />
            {/* <div className="container w-full md:order-2 mt-6">
                <div className="text-center mb-6 mt-8">
                    <div className="space-y-2">
                        <div className="inline-block bg-secondary px-2 text-sm font-medium uppercase tracking-widest text-secondary-foreground">
                            Before & After
                        </div>
                        <h2 className="text-4xl uppercase md:text-5xl">
                            Real Results
                        </h2>
                        <p className="text-lg text-gray-600 mt-4">
                            See the transformation our treatments can achieve
                        </p>
                    </div>
                </div>
                <ReactCompareImage
                    leftImage={aesthetic?.compare?.before}
                    rightImage={aesthetic?.compare?.after}
                />
            </div> */}
            <div className="container mx-auto px-4 py-12">
                {/* Overview */}
                <div className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-800 mb-6">{concierge?.category}</h2>
                    <p className="text-lg text-gray-600 mb-8">{concierge?.overview}</p>
                </div>

                {/* Treatments */}
                {/* <div className="mb-12">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6">Our Treatments</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {concierge?.treatments?.map((treatment, index) => (
                            <div key={index} className="bg-white rounded-lg shadow-md p-6">
                                <div className="flex justify-between items-start mb-4">
                                    <h4 className="text-xl font-semibold text-gray-800">{treatment.name}</h4>
                                    <div className="text-right">
                                        <p className="text-primary font-semibold">£{treatment.price}</p>
                                        <p className="text-sm text-gray-500">{treatment.duration}</p>
                                    </div>
                                </div>
                                <p className="text-gray-600">{treatment.description}</p>
                            </div>
                        ))}
                    </div>
                </div> */}

                {/* Benefits */}
                <div className="mb-12 bg-gray-50 p-8 rounded-lg">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6">Key Benefits</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {concierge?.benefits?.map((benefit, index) => (
                            <div key={index} className="flex items-start gap-3">
                                <svg className="w-5 h-5 text-primary flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span className="text-gray-600">{benefit}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Aftercare */}
                {/* <div className="mb-12">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6">Aftercare Instructions</h3>
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {concierge?.aftercare?.map((instruction, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <svg className="w-5 h-5 text-primary flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span className="text-gray-600">{instruction}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div> */}

                {/* FAQs */}
                <div className="mb-12">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6">Frequently Asked Questions</h3>
                    <div className="space-y-6">
                        {concierge?.faqs?.map((faq, index) => (
                            <div key={index} className="border-b border-gray-200 pb-6">
                                <h4 className="text-lg font-semibold text-gray-800 mb-2">{faq.question}</h4>
                                <p className="text-gray-600">{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <div className="text-center">
                    <button className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors">
                        Book Consultation
                    </button>
                </div>
            </div>
        </main>
    );
};

export default Concierge;