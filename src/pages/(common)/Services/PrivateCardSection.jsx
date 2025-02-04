import { Button } from "@/components/ui/Button";
import { gpServices } from "@/constants/services";
import { useNavigate } from "react-router-dom";

const PrivateCardSection = () => {
    const navigate = useNavigate()
    return (
        <section>
            <div className="container text-center mb-6 mt-6">
                <div className="space-y-2">
                    <div className="inline-block bg-secondary px-2 text-sm font-medium uppercase tracking-widest text-secondary-foreground">
                        GP Services
                    </div>
                    <h2 className="text-4xl uppercase md:text-5xl">
                        Your Trusted Healthcare Partner
                    </h2>
                </div>
            </div>
            <div className="grid overflow-hidden md:grid-cols-3 lg:h-[32rem] xl:h-[40rem] gap-1">
                {gpServices?.map((service, index) => (
                    <div
                        key={index}
                        style={{ backgroundImage: `url(${service?.image})` }}
                        className="group h-full min-h-96 w-full cursor-pointer overflow-hidden bg-cover bg-center bg-no-repeat"
                    >
                        <div className="dark flex size-full flex-col bg-black/25 p-4 py-12 text-center text-title">
                            <div className="mt-auto">
                                <h1 className="mb-4">{service?.name}</h1>
                                <div className="relative -mb-16 opacity-0 transition-all duration-500 group-hover:mb-0 group-hover:opacity-100">
                                    <Button onClick={() => navigate(`/private_gp_clinic/${service?.slug}`)} className="">Learn More</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default PrivateCardSection;