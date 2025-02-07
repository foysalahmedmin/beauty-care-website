import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";
import NavItems from "./NavItems";

const routes = [
  {
    path: "#home",
    label: "Home ",
  },
  {
    path: "#services",
    label: "Services",
    children: [
      {
        label: "Private GP Clinic",
        path: "/private_gp_clinic",
      },
      {
        label: "Aesthetic Clinic",
        path: "/aesthetic_clinic",
      },
      {
        label: "Concierge Service",
        path: "/concierge_service",
      },
    ],
  },
  {
    path: "#blog",
    label: "Blog",
  },
  {
    path: "/contact",
    label: "Contact",
  },
  {
    path: "/about",
    label: "About",
  },
];

const NavMenu = ({ isOpen, setIsOpen }) => {
  return (
    <>
      {/* Desktop Screen */}
      <div className="dark relative hidden md:block">
        <ul className="flex size-full items-center justify-center gap-[1em] text-title">
          <NavItems routes={routes} isOpen={isOpen} setIsOpen={setIsOpen} />
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
