import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

const ButtonLink = ({ className, ...props }) => {
  return (
    <Button as={Link} className={cn("rounded-full", className)} {...props} />
  );
};

export default ButtonLink;
