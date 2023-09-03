import FacebookIcon from "../images/icon-facebook.svg";
import InstagramIcon from "../images/icon-instagram.svg";
import PinterestIcon from "../images/icon-pinterest.svg";
import TwitterIcon from "../images/icon-twitter.svg";
import SunnyLogo from "../images/logo-green.svg";

console.log(FacebookIcon);

export const Footer = () => {
    return (
        <footer className="bg-[#90D4C6]">
            <div className="flex flex-col items-center px-6 py-16">
                <SunnyLogo />
                <div className="mt-10 grid grid-cols-3 gap-14 font-barlow text-lg font-semibold text-[#458D7E]">
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
                <div className="mt-16 flex gap-10 [&>*]:cursor-pointer [&>*]:hover:[&>*>*]:fill-white">
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
