import AnimatedLogo from "@/components/ui/AnimatedLogo";
import {
  Toggle,
  ToggleOffComp,
  ToggleOnComp,
  ToggleTrigger,
} from "@/components/ui/Toggle";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import NavMenu from "./NavMenu";

const Navigation = ({ className, isOpen, setIsOpen }) => {
  return (
    <nav className={cn("relative z-50 w-full", className)}>
      <div className="size-full">
        <div className="container h-full">
          <div className="relative flex h-full items-center justify-between gap-[1em] pb-4 md:grid md:grid-cols-5 lg:gap-[1.5em]">
            <div className="flex items-center justify-start">
              <AnimatedLogo />
            </div>
            <div className="md:col-span-3">
              <NavMenu isOpen={isOpen} setIsOpen={setIsOpen} />
            </div>
            <div className="dark flex justify-end text-title md:hidden">
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
    </nav>
  );
};

export default Navigation;
