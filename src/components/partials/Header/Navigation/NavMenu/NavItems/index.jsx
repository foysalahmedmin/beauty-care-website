import { ActiveLink } from "@/components/ui/ActiveLink";
import trimPath from "@/utils/trimPath";
import { ChevronRight, ChevronDown } from "lucide-react";
import { useState } from "react";

const NavItem = ({ item, isOpen, setIsOpen }) => {
  const { path, label, children } = item;
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const Comp = path ? ActiveLink : "div";
  
  const toggleDropdown = (e) => {
    if (children && children.length > 0) {
      // Only prevent default if there are children to show
      e.preventDefault();
      setDropdownOpen(!dropdownOpen);
    } else if (path) {
      // If it's a regular link with no children, just close the mobile menu
      setIsOpen(false);
    }
  };

  return (
    <li className="group relative font-light">
      <Comp
        to={"/" + trimPath(path)}
        className="flex items-center gap-1 text-sm uppercase"
        onClick={toggleDropdown}
      >
        {label}
        {children && children?.length > 0 && (
          <>
            {/* Desktop chevron */}
            <ChevronRight
              className="size-4 rotate-90 group-hover:-rotate-90 md:block hidden"
            />
            {/* Mobile chevron */}
            <ChevronDown
              className={`size-4 transition-transform duration-300 md:hidden ${dropdownOpen ? 'rotate-180' : 'rotate-0'}`}
            />
          </>
        )}
      </Comp>
      {children && children?.length > 0 && (
        <>
          {/* Desktop dropdown (hover-based) */}
          <div className="light invisible absolute -bottom-6 left-0 w-80 translate-y-full bg-card p-4 text-title opacity-0 shadow-xl transition-all duration-300 group-hover:visible group-hover:opacity-100 lg:w-[32rem] md:block hidden">
            <ul className="grid w-full grid-cols-2">
              {children.map((child, index) => (
                <li onClick={() => setIsOpen(false)} key={index}>
                  <ActiveLink
                    to={"/" + trimPath(child?.path)}
                    className="block space-y-1 p-4 px-6 text-xs hover:bg-primary/5"
                  >
                    <div className="uppercase">{child?.label}</div>
                    <p className="text-xs">{child?.text}</p>
                  </ActiveLink>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Mobile dropdown (toggle-based) */}
          <div className={`w-full bg-card/80 text-title transition-all duration-300 md:hidden ${dropdownOpen ? 'block' : 'hidden'}`}>
            <ul className="w-full">
              {children.map((child, index) => (
                <li onClick={() => setIsOpen(false)} key={index}>
                  <ActiveLink
                    to={"/" + trimPath(child?.path)}
                    className="block space-y-1 p-4 px-6 text-xs hover:bg-primary/5"
                  >
                    <div className="uppercase">{child?.label}</div>
                    <p className="text-xs">{child?.text}</p>
                  </ActiveLink>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </li>
  );
};

const NavItems = ({ routes, isOpen, setIsOpen }) => {
  return (
    <>
      {routes?.map((item, index) => (
        <NavItem
          key={index}
          item={item}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      ))}
    </>
  );
};

export default NavItems;
