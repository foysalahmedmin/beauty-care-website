import { useState } from "react";
import Navigation from "./Navigation";
import TopHeader from "./TopHeader";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <TopHeader isOpen={isOpen} setIsOpen={setIsOpen} />
      <Navigation isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default Header;
