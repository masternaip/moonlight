import { FunctionComponent } from "react";
import { BsTelegram } from "react-icons/bs";

interface FooterProps {}

const Footer: FunctionComponent<FooterProps> = () => {
  return (
    <div className="bg-dark-lighten text-white flex justify-between items-center py-3 px-4 shadow-md mt-3">
      <p className="flex gap-2">
        <span>Copyright</span>
        <span className="hidden md:block"> &copy; 2025</span>
      </p>
      <div className="flex gap-3 items-center">
        <p className="hidden md:block">Contact me: </p>
        <div className="flex gap-2">
          <a
            href="https://t.me/meeecloud"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#0088cc] transition duration-300"
          >
            <BsTelegram size={25} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
