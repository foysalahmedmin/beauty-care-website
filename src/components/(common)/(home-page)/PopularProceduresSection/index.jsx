import { Button } from "@/components/ui/Button";
import { useNavigate } from "react-router-dom";

const PopularProceduresSection = () => {
  const navigate = useNavigate();
  return (
    <section className="my-16 md:my-24">
      <div className="container space-y-8">
        <div>
          <h2 className="text-center text-4xl uppercase md:text-5xl">
            Popular Procedures
          </h2>
        </div>
        <div className="grid grid-cols-1 items-center md:grid-cols-2">
          <div className="relative -z-10 overflow-hidden md:order-2 md:-ml-20 lg:h-[32rem] xl:h-[40rem]">
            <img
              className="size-full min-h-96 object-cover object-center"
              src="/images/shut/face_lift/1.jpg"
              loading="lazy"
              alt=""
            />
          </div>
          <div className="flex items-center self-stretch py-8">
            <div className="space-y-4 bg-card p-8 shadow-2xl md:order-1 md:space-y-8">
              <div className="space-y-2">
                <h2 className="text-4xl uppercase">Facelift</h2>
              </div>
              <p className="text-lg">
                We specialise in advanced non surgical facelift which enhance natural beauty, restore firmness, and create a balanced, confident silhouette to suit you.
              </p>
              <div>
                <Button onClick={() => navigate("/aesthetic_clinic/6832e9eaf532035aa2b0fbf1")} className="secondary">View Details</Button>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="flex flex-wrap items-center justify-center">
          {[
            "Facelift",
            "Rhinoplasty",
            "Mommy Makeover",
            "Tommy Tuck",
            "Liposuction",
            "Injectable",
          ].map((item, index) => (
            <div
              key={index}
              className="flex cursor-pointer items-center gap-2 bg-muted px-6 py-2 font-medium uppercase text-title hover:bg-secondary hover:text-secondary-foreground"
            >
              <div className="inline-block rounded-full border border-current">
                <Dot className="size-4" />
              </div>
              <span>{item}</span>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default PopularProceduresSection;
