import { Button } from "@/components/ui/Button";
import {
  Toggle,
  ToggleOffComp,
  ToggleOnComp,
  ToggleTrigger,
} from "@/components/ui/Toggle";
import { Menu, PhoneCall, X } from "lucide-react";

const TopHeader = ({ isOpen, setIsOpen }) => {
  return (
    <div className="dark py-4">
      <div className="container h-full">
        <div className="flex h-full items-center justify-between">
          <div className="flex items-center gap-2 text-title">
            <PhoneCall /> <span>02081495432</span>
          </div>
          <div className="flex items-center justify-end">
            <div className="hidden md:block">
              <Button className="font-light tracking-widest">
                Bock A Visit
              </Button>
            </div>
            <div className="flex text-title md:hidden">
              <Toggle isOn={isOpen} setIsOn={setIsOpen}>
                <ToggleTrigger>
                  <ToggleOnComp>
                    <X className="size-[1.25em]" />
                  </ToggleOnComp>
                  <ToggleOffComp>
                    <Menu className="size-[1.25em]" />
                  </ToggleOffComp>
                </ToggleTrigger>
              </Toggle>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
