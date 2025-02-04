import { Button } from "@/components/ui/Button";

const BodyPartSection = () => {
  return (
    <section>
      <div className="grid overflow-hidden md:grid-cols-3 lg:h-[32rem] xl:h-[40rem]">
        <div
          style={{ backgroundImage: `url("https://media.istockphoto.com/id/1389555356/photo/beauty-portrait-of-young-woman.jpg?s=612x612&w=0&k=20&c=jorASan4B-6UaatBxnNN-VJf_qvcbPu1bhwm8R_Pt74=")` }}
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
          style={{ backgroundImage: `url("https://media.istockphoto.com/id/1371512773/photo/cropped-shot-of-a-fit-young-woman-showing-off-her-thighs.jpg?s=612x612&w=0&k=20&c=Wi0oFzaqclgvzDbV5Qqv7c_XkFeITm1XvMNv7EBJr-k=")` }}
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
          style={{ backgroundImage: `url("https://www.venkatcenter.com/wp-content/uploads/2020/03/non-surgical-procedures.jpg")` }}
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
