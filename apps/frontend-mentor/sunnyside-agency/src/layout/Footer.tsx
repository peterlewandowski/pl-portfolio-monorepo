import { ReactComponent as FacebookIcon } from "../images/icon-facebook.svg";
import { ReactComponent as InstagramIcon } from "../images/icon-instagram.svg";
import { ReactComponent as PinterestIcon } from "../images/icon-pinterest.svg";
import { ReactComponent as TwitterIcon } from "../images/icon-twitter.svg";
import { ReactComponent as SunnyLogo } from "../images/logo-green.svg";

export const Footer = () => {
    return (
        <footer id="footer" className="bg-[#90D4C6]">
            <div className="flex flex-col items-center px-10 py-16 md:px-6">
                <a href="#">
                    <SunnyLogo />
                </a>
                <div className="mt-10 grid grid-cols-3 gap-14 text-lg font-semibold text-[#458D7E]">
                    <a className="hover:text-white" href="#">
                        About
                    </a>
                    <a className="hover:text-white" href="#">
                        Services
                    </a>
                    <a className="hover:text-white" href="#">
                        Projects
                    </a>
                </div>
                <div className="mt-16 flex gap-8 [&>*]:cursor-pointer [&>*]:hover:[&>*>*]:fill-white">
                    <span>
                        <FacebookIcon />
                    </span>
                    <span>
                        <InstagramIcon />
                    </span>
                    <span>
                        <TwitterIcon />
                    </span>
                    <span>
                        <PinterestIcon />
                    </span>
                </div>
            </div>
        </footer>
    );
};
