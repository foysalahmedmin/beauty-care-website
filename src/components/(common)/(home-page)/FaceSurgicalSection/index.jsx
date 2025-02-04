import { Button } from "@/components/ui/Button";
import ReactCompareImage from "react-compare-image";

const FaceSurgicalSection = () => {
  return (
    <section className="my-16 md:my-24">
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-16 md:grid-cols-2">
          <div className="relative aspect-[5/6] w-full overflow-hidden md:order-2">
            <ReactCompareImage
              leftImage="https://img.freepik.com/free-photo/lovely-woman-posing_144627-27769.jpg"
              rightImage="https://img.freepik.com/free-photo/lovely-woman-posing_144627-27768.jpg"
            />
          </div>
          <div className="space-y-4 md:order-1 md:space-y-8">
            <div className="space-y-2">
              <div className="inline-block bg-secondary px-2 text-sm font-medium uppercase tracking-widest text-secondary-foreground">
                Anti-Aging Experts
              </div>
              <h2 className="text-4xl uppercase md:text-5xl">
                Every facial surgery is a piece of art
              </h2>
            </div>
            <p className="text-lg">
              Our expert surgeons specialize in advanced facial procedures
              designed to restore youthful contours and enhance natural beauty.
              With a meticulous approach, we ensure personalized care and
              artistic precision in every treatment.
            </p>
            <div>
              <Button className="secondary">Facial Procedures</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaceSurgicalSection;
