import BookingModal from "@/components/modals/BookingModal";
import { Button } from "@/components/ui/Button";
import { useState } from "react";

const HomeBannerBottomSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);
  return (
    <section
      style={{
        backgroundImage: `url("/images/shut/treatments/1698866671.jpg")`,
      }}
      className="bg-cover bg-center bg-no-repeat"
    >
      <div className="bg-black/25">
        <div className="dark container grid h-screen max-h-[32rem] grid-cols-1 items-center justify-center text-title md:grid-cols-2 xl:max-h-[40rem]">

          <div className="dark space-y-4 text-title md:space-y-8">
            <div className="space-y-2">
              <h2 className="text-4xl uppercase md:text-5xl">
                Not sure which <br /> procedure is <br /> right for you ?
              </h2>
            </div>
            <p className="text-lg">
              Schedule a consultation with our expert providers to discus your
              aesthetic needs
            </p>
            <div>
              <Button onClick={handleOpenModal} className="primary">Request a consultation </Button>
            </div>
          </div>
          <div className="hidden md:block"></div>
        </div>
      </div>
      <BookingModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </section>
  );
};

export default HomeBannerBottomSection;
