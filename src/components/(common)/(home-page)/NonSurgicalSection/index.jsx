import { Button } from "@/components/ui/Button";
import { Check } from "lucide-react";

const NonSurgicalSection = () => {
  const points = [
    "Neuromodulators",
    "PDO Threads",
    "Dermal Filters",
    "Body Treatments",
    "Collagen Stimulation",
    "Laser Technology",
  ];
  return (
    <section className="my-16 md:my-24">
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-16 md:grid-cols-2">
          <div className="relative aspect-[5/6] w-full overflow-hidden">
            <img
              className="ml-auto size-[calc(100%-10%)] object-contain object-center"
              // src="https://cuteraesthetics.com/wp-content/uploads/2022/05/skin-treatment.jpg"
              src="/images/shut/welcome/1.jpg"
              alt=""
            />
            <img
              className="absolute bottom-0 left-0 size-[40%] object-cover object-center"
              // src="https://www.shutterstock.com/image-photo/highquality-photo-skincare-cosmetics-concept-600nw-2472173333.jpg"
              src="/images/shut/welcome/2.jpg"
              alt=""
            />
          </div>
          <div className="space-y-4 md:space-y-8">
            <div className="space-y-2">
              <div className="inline-block bg-secondary px-2 text-sm font-medium uppercase tracking-widest text-secondary-foreground">
                Welcome Arkangel
              </div>
              <h2 className="text-4xl uppercase md:text-5xl">
                Our Aesthetic artistry for your exquisite results
              </h2>
            </div>
            <p className="text-lg">
              Discover non-surgical treatments that enhance your beauty with
              safe, effective, and personalized solutions for youthful,
              rejuvenated results.
            </p>
            <ul className="grid grid-cols-2 gap-2">
              {points.map((item, index) => (
                <li key={index} className="flex items-center gap-2">
                  <Check className="size-4 text-primary" strokeWidth={3} />{" "}
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
            <div>
              <Button className="secondary">Find out more</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NonSurgicalSection;
