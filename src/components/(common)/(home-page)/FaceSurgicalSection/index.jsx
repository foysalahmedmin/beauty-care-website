import { Button } from "@/components/ui/Button";
import ReactCompareImage from "react-compare-image";

const FaceSurgicalSection = () => {
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
                Every facial surgery is a piece of art
              </h2>
            </div>
            <p className="text-lg">
              Our highly skilled surgeons specialise in sophisticated facial procedures aimed at
              rejuvenating facial contours and enhancing natural aesthetics. Employing a meticulous
              and methodical approach, we prioritise precision, personalised care, and the highest
              clinical standards in every treatment. Our expertise ensures that each procedure is
              tailored to the unique needs of our patients, combining advanced surgical techniques
              with an unwavering commitment to excellence.
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
