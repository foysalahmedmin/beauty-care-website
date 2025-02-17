import Address from "./Address";

const Footer = () => {
  return (
    <>
      <footer className="bg-card/5 pt-16">
        <div className="container">
          <div className="grid grid-cols-1 gap-8 pb-16 md:grid-cols-2 lg:grid-cols-4">
            {/* Logo and Address */}
            <div className="flex flex-col gap-6">
              <img src="/images/LOGO.png" alt="logo" className="w-auto" />
              <Address />
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="mb-6 text-lg font-semibold">Quick Links</h3>
              <ul className="space-y-4">
                <li>
                  <a href="/" className="hover:text-primary">Home</a>
                </li>
                <li>
                  <a href="/about" className="hover:text-primary">About Us</a>
                </li>
                <li>
                  <a href="/contact" className="hover:text-primary">Contact</a>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="mb-6 text-lg font-semibold">Our Services</h3>
              <ul className="space-y-4">
                <li>
                  <a href="/private_gp_clinic" className="hover:text-primary">Private GP Services</a>
                </li>
                <li>
                  <a href="/aesthetic_clinic" className="hover:text-primary">Aesthetic Treatments</a>
                </li>
                <li>
                  <a href="/concierge_service" className="hover:text-primary">Concierge Services</a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Contact Us</h3>
              <div className="space-y-2">
                <h4 className="font-medium">Contact</h4>
                <p className="text-muted-foreground hover:text-primary">
                  <a href="tel:02081495432">02081495432</a>
                </p>
              </div>
              <div className="flex items-center gap-4">
                <a
                  href="https://instagram.com/arkangelclinic"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </a>
                <a
                  href="https://linkedin.com/company/arkangelclinic"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/50 bg-card/5">
          <div className="container py-4">
            <div className="flex flex-col items-center justify-between gap-4 text-sm text-muted-foreground md:flex-row">
              <div>© ARKangel Clinic {new Date().getFullYear()}. All rights reserved.</div>
              <div className="flex gap-4">
                <a href="/privacy-policy" className="hover:text-primary">Privacy Policy</a>
                <a href="/terms" className="hover:text-primary">Terms of Service</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
