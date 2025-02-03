import { cn } from "@/lib/utils";
import NavMenu from "./NavMenu";

const Navigation = ({ className, isOpen, setIsOpen }) => {
  return (
    <nav className={cn("z-50 w-full", className)}>
      <div className="size-full">
        <div className="container h-full">
          <div className="relative flex h-full items-center justify-center gap-[1em] pb-4 lg:gap-[1.5em]">
            <NavMenu isOpen={isOpen} setIsOpen={setIsOpen} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
