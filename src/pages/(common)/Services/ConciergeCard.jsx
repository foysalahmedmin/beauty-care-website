import { fetchServices } from "@/api/apis";
import { urls } from "@/api/urls";
import { Button } from "@/components/ui/Button";
import { Skeleton } from "@/components/ui/Skeleton";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
const ConciergeCard = () => {
    const navigate = useNavigate();
    const { data, isLoading } = useQuery({
        queryKey: ["conciergeServices"],
        queryFn: () => fetchServices("concierge_service"),
    });
    return (
        <section>
            <div className="container text-center mb-6 mt-6">
                <div className="space-y-2">
                    <div className="inline-block bg-secondary px-2 text-sm font-medium uppercase tracking-widest text-secondary-foreground">
                        Concierge Services
                    </div>
                    <h2 className="text-4xl uppercase md:text-5xl">
                        Your Luxury Health Companion
                    </h2>
                </div>
            </div>
            <div className="grid overflow-hidden md:grid-cols-3 gap-1">
                {isLoading ? (
                    Array(3).fill(0).map((_, index) => (
                        <div key={index} className="group h-full min-h-96 w-full overflow-hidden">
                            <Skeleton className="h-full w-full" />
                            <div className="dark flex size-full flex-col p-4 py-12 text-center">
                                <div className="mt-auto">
                                    <Skeleton className="h-8 w-3/4 mx-auto mb-4" />
                                    <div className="flex justify-center">
                                        <Skeleton className="h-10 w-32" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    data?.map((service, index) => (
                        <div
                            key={index}
                            style={{ backgroundImage: `url(${urls.service}/${service?.image})` }}
                            className="group h-full min-h-96 w-full cursor-pointer overflow-hidden bg-cover bg-center bg-no-repeat"
                        >
                            <div className="dark flex size-full flex-col bg-black/25 p-4 py-12 text-center text-title">
                                <div className="mt-auto">
                                    <h1 className="mb-4">{service?.name}</h1>
                                    <div className="relative -mb-16 opacity-0 transition-all duration-500 group-hover:mb-0 group-hover:opacity-100">
                                        <Button onClick={() => navigate(`/concierge_service/${service?._id}`)} className="">Learn More</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </section>
    );
};

export default ConciergeCard;