import { Button } from "@/components/ui/Button";

const BodyPartSection = () => {
  return (
    <section>
      <div className="grid overflow-hidden md:grid-cols-3 lg:h-[32rem] xl:h-[40rem]">
        <div
          style={{ backgroundImage: `url("/images/(home-page)/details.jpg")` }}
          className="group h-full min-h-96 w-full cursor-pointer overflow-hidden bg-cover bg-center bg-no-repeat"
        >
          <div className="dark flex size-full flex-col bg-black/25 p-4 py-12 text-center text-title">
            <div className="mt-auto">
              <h1 className="mb-4">FACE</h1>
              <div className="relative -mb-16 opacity-0 transition-all duration-500 group-hover:mb-0 group-hover:opacity-100">
                <Button className="">View Procedures</Button>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{ backgroundImage: `url("/images/(home-page)/details.jpg")` }}
          className="group h-full min-h-96 w-full cursor-pointer overflow-hidden bg-cover bg-center bg-no-repeat"
        >
          <div className="dark flex size-full flex-col bg-black/25 p-4 py-12 text-center text-title">
            <div className="mt-auto">
              <h1 className="mb-4">BODY</h1>
              <div className="relative -mb-16 opacity-0 transition-all duration-500 group-hover:mb-0 group-hover:opacity-100">
                <Button className="">View Procedures</Button>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{ backgroundImage: `url("/images/(home-page)/details.jpg")` }}
          className="group h-full min-h-96 w-full cursor-pointer overflow-hidden bg-cover bg-center bg-no-repeat"
        >
          <div className="dark flex size-full flex-col bg-black/25 p-4 py-12 text-center text-title">
            <div className="mt-auto">
              <h1 className="mb-4">NON-SURGICAL</h1>
              <div className="relative -mb-16 opacity-0 transition-all duration-500 group-hover:mb-0 group-hover:opacity-100">
                <Button className="">View Procedures</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BodyPartSection;
