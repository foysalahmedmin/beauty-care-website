import { Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="space-y-6 text-center">
      <h4>Contact</h4>
      <div>
        <p className="text-lg">02081495432</p>
      </div>
      <ul className="flex items-center justify-center gap-4">
        <li>
          <Link>
            <Instagram />
          </Link>
        </li>
        <li>
          <Link>
            <Linkedin />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Contact;
