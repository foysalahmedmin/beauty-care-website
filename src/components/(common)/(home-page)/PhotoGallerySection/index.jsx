import { Button } from "@/components/ui/Button";

const PhotoGallerySection = () => {
  return (
    <section
      // style={{
      //   backgroundImage: `url("https://images.squarespace-cdn.com/content/v1/64f83f902d10c760d4813bf4/7dcd0d2c-bb28-43a0-a8e7-643a169b3707/saw.jpeg")`,
      // }}
      style={{
        backgroundImage: `url("/images/shut/gallery/1.jpg")`,
      }}
      className="bg-cover bg-center bg-no-repeat"
    >
      <div className="bg-gray-900/60">
        <div className="dark container grid h-screen max-h-[32rem] grid-cols-1 items-center justify-center text-title md:grid-cols-2 xl:max-h-[40rem]">
          <div className="hidden md:block"></div>
          <div className="dark space-y-4 text-title md:space-y-8">
            <div className="space-y-2">
              <div className="inline-block bg-primary px-2 text-sm font-medium uppercase tracking-widest text-primary-foreground">
                Photo Gallery
              </div>
              <h2 className="text-4xl uppercase md:text-5xl">
                Explore our before and after Gallery
              </h2>
            </div>
            <p className="text-lg">Result that speak for themselves</p>
            <div>
              <Button className="primary">Explore Gallery</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhotoGallerySection;
