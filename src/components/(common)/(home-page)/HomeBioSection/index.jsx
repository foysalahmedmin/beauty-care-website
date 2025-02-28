import { Button } from "@/components/ui/Button";
import { useNavigate } from "react-router-dom";

const HomeBioSection = () => {
  const navigate = useNavigate();
  return (
    <section className="my-16 md:my-24">
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-16 md:grid-cols-2">
          <div className="relative aspect-[5/6] w-full overflow-hidden">
            <img
              className="size-[calc(100%-10%)] object-cover object-center"
              // src="https://poppcosmeticsurgery.com/wp-content/uploads/2021/12/Cosmetic-Surgery.jpg"
              src="/images/shut/homebio/big.jpg"
              alt=""
            />
            <img
              className="absolute bottom-0 right-0 size-[40%] object-cover object-center"
              // src="https://www.kauveryhospital.com/blog/wp-content/uploads/2017/02/cosmetic-surgery.png"
              src="/images/shut/homebio/small.jpg"
              alt=""
            />
          </div>
          <div className="space-y-4 md:space-y-8">
            <div className="space-y-2">
              <div className="inline-block bg-secondary px-2 text-sm font-medium uppercase tracking-widest text-secondary-foreground">
                Welcome Arkangel
              </div>
              <h2 className="text-4xl uppercase md:text-5xl">
                LONDON CENTER FOR ASETHETIC BEAUTY
              </h2>
            </div>
            <p>
              Experience world-class aesthetic care with personalised attention and advanced techniques. Our specialists
              prioritise your needs, delivering natural, confidence-boosting results with compassion and precision. Trust us to
              enhance your beauty with care.
            </p>
            <div>
              <Button onClick={() => navigate("/aesthetic_clinic")} className="secondary">About the clinic</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBioSection;
