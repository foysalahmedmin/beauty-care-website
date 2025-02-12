import { Button } from "@/components/ui/Button";

const BodySurgicalSection = () => {
  return (
    <section className="my-16 md:my-24">
      <>
        <div className="grid grid-cols-1 items-center overflow-hidden md:grid-cols-2 lg:h-[32rem] xl:h-[40rem]">
          <div
            style={{
              backgroundImage: `url("https://www.shutterstock.com/image-photo/beautiful-woman-perfect-skin-underwear-600nw-2492680667.jpg")`,
            }}
            className="group h-full min-h-96 w-full cursor-pointer overflow-hidden bg-cover bg-center bg-no-repeat"
          ></div>
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
                We specialise in advanced anti-ageing and body contouring, including liposuction,
                abdominoplasty, and body sculpting. Our expert surgeons deliver natural-looking
                results with precision and care. Tailored to your needs, our procedures enhance
                contours, restore firmness, and achieve a balanced, confident silhouette with the
                highest medical standards.
              </p>
              <div>
                <Button className="primary">Body Procedures</Button>
              </div>
            </div>
          </div>
        </div>
      </>
    </section>
  );
};

export default BodySurgicalSection;
