import BookingModal from "@/components/modals/BookingModal";
import { Button } from "@/components/ui/Button";
import { PhoneCall } from "lucide-react";
import { useState } from "react";

const TopHeader = ({ isOpen, setIsOpen }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <>
      <div className="dark relative z-50 py-4">
        <div className="container h-full">
          <div className="flex h-full items-center justify-between">
            <div className="flex items-center gap-2 text-title">
              <PhoneCall /> <span>02081495432</span>
            </div>
            <div className="flex items-center justify-end">
              <div className="hidden md:block">
                <Button
                  className="font-light tracking-widest"
                  onClick={handleOpenModal}
                >
                  Book A Free Consultation
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <BookingModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </>
  );
};

export default TopHeader;
