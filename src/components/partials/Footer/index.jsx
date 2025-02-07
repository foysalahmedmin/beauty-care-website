import Address from "./Address";
import Contact from "./Contact";

const Footer = () => {
  return (
    <>
      <footer className="text-center">
        <div className="container">
          <div className="flex justify-between">
            <div className="">
              <img src="/images/LOGO.png" alt="logo" className="h-10 ml-8" />
              <Address />
            </div>
            <div>
              <Contact />
            </div>
          </div>
        </div>
        <div className="bg-card text-center">
          <div className="container py-4">
            <div>© ARKangel Clinic {new Date().getFullYear()}</div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
