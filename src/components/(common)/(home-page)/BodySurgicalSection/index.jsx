import { Button } from "@/components/ui/Button";
import { useNavigate } from "react-router-dom";

const BodySurgicalSection = () => {
  const navigate = useNavigate();
  return (
    <section className="my-16 md:my-24">
      <>
        <div className="grid grid-cols-1 items-center overflow-hidden md:grid-cols-2 lg:h-[32rem] xl:h-[40rem]">
          <div
            // style={{
            //   backgroundImage: `url("https://www.shutterstock.com/image-photo/beautiful-woman-perfect-skin-underwear-600nw-2492680667.jpg")`,
            style={{
              backgroundImage: `url("/images/shut/body_p/1.jpg")`,
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
                We specialise in advanced anti-ageing and body contouring, including liposuction, abdominoplasty, and
                sculpting. With expert care, we enhance your natural beauty, restore firmness, and create a balanced, confident
                silhouette to suit you.
              </p>
              <div>
                <Button className="primary" onClick={() => navigate("/aesthetic_clinic/body_contouring_and_fat_reduction")}>
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
