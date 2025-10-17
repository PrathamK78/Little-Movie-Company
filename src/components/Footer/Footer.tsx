import { FunctionComponent } from "react";
import { AiFillGithub } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";

interface FooterProps {}

const Footer: FunctionComponent<FooterProps> = () => {
  return (
    <div className="bg-slate-950 text-white flex justify-between items-center py-3 px-4 shadow-md mt-3">
      <p className="flex gap-2">
        <span>Made with ❤️</span>
        <span className="hidden md:block"> &copy; By Pratham Kapoor</span>
      </p>
    </div>
  );
};

export default Footer;
