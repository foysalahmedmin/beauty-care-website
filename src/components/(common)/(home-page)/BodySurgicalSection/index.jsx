import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { useNavigate } from "react-router-dom";

const BodyLinkPoint = ({ className, number, label, link, ...props }) => {
  return (
    <div
      className={cn(
        "group/point absolute right-[0%] top-[0%] aspect-square size-[0.5em] -translate-y-1/2 translate-x-1/2 text-[1em]",
        className,
      )}
      {...props}
    >
      <a className="relative flex size-full" href={link} target="_blank">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" />
        <span className="relative inline-flex size-full rounded-full bg-white" />
      </a>
      <a
        className="invisible absolute bottom-0 right-1/2 flex translate-x-1/2 translate-y-full items-center gap-[1em] p-[0.25em] opacity-0 transition-all duration-300 group-hover/point:visible group-hover/point:opacity-100"
        href={link}
        target="_blank"
      >
        {number && (
          <span className="absolute bottom-0 left-0 top-0 flex -translate-x-full items-center text-[1em] leading-none">
            {number}
          </span>
        )}
        <span className="inline-block whitespace-nowrap bg-primary px-[0.5em] py-[0.25em] text-[0.75em] leading-none text-white">
          {label}
        </span>
      </a>
    </div>
  );
};

const BodySurgicalSection = () => {
  const navigate = useNavigate();
  return (
    <section className="my-16 md:my-24">
      <>
        {/* <div className="grid grid-cols-1 items-center overflow-hidden md:grid-cols-2 lg:h-[32rem] xl:h-[40rem]"> */}
        <div className="grid items-center overflow-hidden md:grid-cols-2">
          <div className="group h-full min-h-96 w-full cursor-pointer overflow-hidden bg-cover bg-center bg-no-repeat">
            <div className="relative h-fit w-fit text-xs lg:text-sm xl:text-base 2xl:text-lg">
              <img className="" src="/images/shut/body_p/1.jpg" alt="" />
              <BodyLinkPoint
                className="right-[35%] top-[22%]"
                number="01"
                label="Face"
                link="https://arkangelclinic.org/aesthetic_clinic/facial_rejuvenation_treatments"
              />
              <BodyLinkPoint
                className="right-[48%] top-[48%]"
                number="02"
                label="Deltoid Region"
                link="https://arkangelclinic.org/aesthetic_clinic/laser_treatments"
              />
              <BodyLinkPoint
                className="right-[36%] top-[52%]"
                number="03"
                label="Axillary Region"
                link="https://arkangelclinic.org/aesthetic_clinic/body_contouring_and_fat_reduction"
              />
              <BodyLinkPoint
                className="right-[32%] top-[62%]"
                number="04"
                label="Waistline"
                link="https://arkangelclinic.org/aesthetic_clinic/body_contouring_and_fat_reduction"
              />
              <BodyLinkPoint
                className="right-[45%] top-[70%]"
                number="05"
                label="Lower Thigh"
                link="https://arkangelclinic.org/aesthetic_clinic/laser_treatmentsv"
              />
              <BodyLinkPoint
                className="right-[26%] top-[82%]"
                number="06"
                label="Gluteal Region"
                link="https://arkangelclinic.org/aesthetic_clinic/body_contouring_and_fat_reduction"
              />
              <BodyLinkPoint
                className="right-[77%] top-[89%]"
                number="07"
                label="Feet"
                link="https://arkangelclinic.org/aesthetic_clinic/laser_treatments"
              />
            </div>
          </div>
          <div className="dark flex items-center self-stretch bg-slate-dark p-8 text-title">
            <div className="space-y-4 md:space-y-8">
              <div className="space-y-2">
                <div className="inline-block bg-primary px-2 text-sm font-medium uppercase tracking-widest text-primary-foreground">
                  Body Plastic Surgery
                </div>
                <h2 className="text-4xl uppercase md:text-5xl">
                  Control your <br /> shape & Define your <br /> silhouette
                </h2>
              </div>
              <p className="text-lg">
                We specialise in advanced anti-ageing and body contouring,
                including liposuction, abdominoplasty, and sculpting. With
                expert care, we enhance your natural beauty, restore firmness,
                and create a balanced, confident silhouette to suit you.
              </p>
              <div>
                <Button
                  className="primary"
                  onClick={() =>
                    navigate(
                      "/aesthetic_clinic/body_contouring_and_fat_reduction",
                    )
                  }
                >
                  Body Procedures
                </Button>
              </div>
            </div>
          </div>
        </div>
      </>
    </section>
  );
};

export default BodySurgicalSection;
