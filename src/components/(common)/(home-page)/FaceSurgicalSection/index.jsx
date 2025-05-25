import { Button } from "@/components/ui/Button";
import ReactCompareImage from "react-compare-image";
import { useNavigate } from "react-router-dom";

const FaceSurgicalSection = () => {
  const navigate = useNavigate();
  return (
    <section className="my-16 md:my-24">
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-16 md:grid-cols-2">
          <div className="relative aspect-[5/6] w-full overflow-hidden md:order-2">
            <ReactCompareImage
              leftImage="/images/shut/face_s/1.jpg"
              rightImage="/images/shut/face_s/2.jpg"
            />
          </div>
          <div className="space-y-4 md:order-1 md:space-y-8">
            <div className="space-y-2">
              <div className="inline-block bg-secondary px-2 text-sm font-medium uppercase tracking-widest text-secondary-foreground">
                Anti-Aging Experts
              </div>
              <h2 className="text-4xl uppercase md:text-5xl">
                EVERY VISAGE IS A WORK OF ART
              </h2>
            </div>
            <p className="text-lg">
              Our specialists excel in advanced facial procedures designed to restore natural beauty and refresh contours. With
              precision, personalised care, and the highest standards, we ensure every treatment is tailored with compassion
              and expertise.
            </p>
            <div>
              <Button className="secondary" onClick={() => navigate("/aesthetic_clinic/6832e86efb2a7ad09a5344b3")}>Facial Procedures</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaceSurgicalSection;
