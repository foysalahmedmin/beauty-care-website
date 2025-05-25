import { fetchOneService } from "@/api/apis";
import { urls } from "@/api/urls";
import BookingModal from "@/components/modals/BookingModal";
import BannerSection from "@/components/partials/Sections/BannerSection";
import { Skeleton } from "@/components/ui/Skeleton";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useParams } from "react-router-dom";

const OneGp = () => {
    const { slug } = useParams();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => setIsModalOpen(true);
    const handleCloseModal = () => setIsModalOpen(false);
    const { data, isLoading } = useQuery({
        queryKey: ["one_gp_service", slug],
        queryFn: () => fetchOneService(slug),
        enabled: !!slug
    })
    return (
        <main className="min-h-screen">
            {isLoading ? (
                <>
                    <section className="relative -mt-32">
                        <Skeleton className="absolute inset-0" />
                        <div className="relative z-10">
                            <div className="bg-black/25">
                                <div className="dark container relative flex min-h-screen flex-col items-center justify-center py-60 text-center">
                                    <div className="max-w-[44rem] space-y-6">
                                        <div className="space-y-4">
                                            <Skeleton className="h-12 w-3/4 mx-auto" />
                                            <Skeleton className="h-6 w-full mx-auto" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div className="container mx-auto px-4 py-12">
                        <div className="mb-12">
                            <div className="flex items-center justify-between mb-8">
                                <Skeleton className="h-10 w-1/3" />
                                <div className="flex items-center gap-4">
                                    <Skeleton className="h-6 w-20" />
                                </div>
                            </div>
                            <Skeleton className="h-6 w-full mb-2" />
                            <Skeleton className="h-6 w-full mb-2" />
                            <Skeleton className="h-6 w-3/4 mb-8" />
                        </div>

                        <div className="mb-12">
                            <Skeleton className="h-8 w-1/4 mb-6" />
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {Array(6).fill(0).map((_, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <Skeleton className="w-6 h-6 flex-shrink-0 mt-1 rounded-full" />
                                        <Skeleton className="h-6 w-full" />
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="mb-12 bg-gray-50 p-8 rounded-lg">
                            <Skeleton className="h-8 w-1/4 mb-6" />
                            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {Array(6).fill(0).map((_, index) => (
                                    <li key={index} className="flex items-center gap-3">
                                        <Skeleton className="w-5 h-5 flex-shrink-0 rounded-full" />
                                        <Skeleton className="h-5 w-full" />
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="mb-12">
                            <Skeleton className="h-8 w-1/3 mb-6" />
                            <div className="space-y-6">
                                {Array(3).fill(0).map((_, index) => (
                                    <div key={index} className="border-b border-gray-200 pb-6">
                                        <Skeleton className="h-6 w-3/4 mb-2" />
                                        <Skeleton className="h-4 w-full mb-1" />
                                        <Skeleton className="h-4 w-full mb-1" />
                                        <Skeleton className="h-4 w-2/3" />
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="text-center">
                            <Skeleton className="h-12 w-48 mx-auto rounded-lg" />
                        </div>
                    </div>
                </>
            ) : (
                <>
                    <BannerSection
                        title={data?.name}
                        description={data?.description}
                        image={`${urls.service}/${data?.image}`}
                    />

                    <div className="container mx-auto px-4 py-12">
                        <div className="mb-12">
                            <div className="flex items-center justify-between mb-8">
                                <h2 className="text-3xl font-bold text-gray-800">{data?.name}</h2>
                                <div className="flex items-center gap-4">
                                    <span className="text-lg font-semibold text-primary">£{data?.price}</span>
                                </div>
                            </div>
                            <p className="text-lg text-gray-600 mb-8">{data?.description}</p>
                        </div>

                        <div className="mb-12">
                            <h3 className="text-2xl font-bold text-gray-800 mb-6">What's Included</h3>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {data?.after_instructions?.map((item, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <svg className="w-6 h-6 text-primary flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span className="text-gray-600">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="mb-12 bg-gray-50 p-8 rounded-lg">
                            <h3 className="text-2xl font-bold text-gray-800 mb-6">Key Benefits</h3>
                            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {data?.key_benefits?.map((benefit, index) => (
                                    <li key={index} className="flex items-center gap-3">
                                        <svg className="w-5 h-5 text-primary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-gray-600">{benefit}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="mb-12">
                            <h3 className="text-2xl font-bold text-gray-800 mb-6">Frequently Asked Questions</h3>
                            <div className="space-y-6">
                                {data?.faqs?.map((faq, index) => (
                                    <div key={index} className="border-b border-gray-200 pb-6">
                                        <h4 className="text-lg font-semibold text-gray-800 mb-2">{faq.question}</h4>
                                        <p className="text-gray-600">{faq.answer}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="text-center">
                            <button onClick={handleOpenModal} className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors">
                                Book Consultation
                            </button>
                        </div>
                    </div>
                </>
            )}
            <BookingModal isOpen={isModalOpen} onClose={handleCloseModal} />
        </main>
    );
};

export default OneGp;