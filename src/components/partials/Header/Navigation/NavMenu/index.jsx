import Logo from "@/components/partials/Logo";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";
import NavItems from "./NavItems";

const routes = [
  {
    path: "#home",
    label: "Home ",
    children: [
      {
        label: "Home-1",
        path: "#",
      },
      {
        label: "Home-2",
        path: "#",
      },
    ],
  },
  {
    path: "#services",
    label: "Services",
    children: [
      {
        label: "Services-1",
        path: "#",
      },
      {
        label: "Services-2",
        path: "#",
      },
    ],
  },
  {
    path: "#pages",
    label: "Pages",
    children: [
      {
        label: "Page-1",
        path: "#",
      },
      {
        label: "Page-2",
        path: "#",
      },
    ],
  },
  {
    path: "#blog",
    label: "Blog",
  },
  {
    path: "#contact",
    label: "Contact",
  },
];

const NavMenu = ({ isOpen, setIsOpen }) => {
  return (
    <>
      {/* Desktop Screen */}
      <div className="dark relative hidden md:block">
        <ul className="flex size-full items-center justify-start gap-[1em] text-title">
          <NavItems routes={routes} />
        </ul>
      </div>
      {/* Mobile Screen */}
      <div
        className={cn(
          "fixed inset-0 z-50 h-screen w-screen origin-left bg-card transition-all duration-300 lg:hidden",
          {
            "visible translate-x-0": isOpen,
            "invisible -translate-x-full": !isOpen,
          },
        )}
      >
        <div className="container space-y-6">
          <div className="flex h-header items-center justify-between">
            <div>
              <Logo />
            </div>
            <Button
              onClick={() => setIsOpen(false)}
              variant="ghost"
              shape="icon"
              className="rounded-full bg-accent/5"
            >
              <X className="size-[1.25em]" />
            </Button>
          </div>
          <ul className="flex size-full flex-col gap-[1em]">
            <NavItems isOpen={isOpen} setIsOpen={setIsOpen} routes={routes} />
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavMenu;
