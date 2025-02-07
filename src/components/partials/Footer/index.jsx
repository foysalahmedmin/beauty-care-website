import Address from "./Address";
import Contact from "./Contact";

const Footer = () => {
  return (
    <>
      <footer className="text-center">
        <div className="container">
          <div className="flex justify-between">
            <div className="flex flex-col items-center gap-6">
              <img src="/images/LOGO.png" alt="logo" className="h-10" />
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
