import Address from "./Address";
import Contact from "./Contact";

const Footer = () => {
  return (
    <>
      <footer className="space-y-16">
        <div className="container py-16 md:py-24">
          <div className="flex justify-between">
            <div className="">
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
