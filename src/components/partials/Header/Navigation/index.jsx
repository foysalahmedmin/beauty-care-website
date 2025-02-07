import { cn } from "@/lib/utils";
import Logo from "../../Logo";
import NavMenu from "./NavMenu";

const Navigation = ({ className, isOpen, setIsOpen }) => {
  return (
    <nav className={cn("z-50 w-full", className)}>
      <div className="size-full">
        <div className="container h-full">
          <div className="relative grid h-full items-center gap-[1em] pb-4 md:grid-cols-5 lg:gap-[1.5em]">
            <div className="flex items-center justify-start">
              <Logo />
            </div>
            <div className="md:col-span-3">
              <NavMenu isOpen={isOpen} setIsOpen={setIsOpen} />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
