import { useCallback, useEffect, useState } from "react";
import { cn } from "@pl-portfolio-monorepo/utils";
import useClickOutside from "../hooks/useClickOutside";
import { ReactComponent as HamburgerIcon } from "../images/icon-hamburger.svg";
import { ReactComponent as LogoSvg } from "../images/logo.svg";

export const Header = () => {
    const [toggleMobileNav, setToggleMobileNav] = useState(false);
    const { ref, isComponentVisible, setIsComponentVisible } =
        useClickOutside<HTMLUListElement>(toggleMobileNav);

    useEffect(() => {
        // Update isComponentVisible when toggleMobileNav changes
        if (!isComponentVisible) {
            setToggleMobileNav(false);
        }
    }, [isComponentVisible]);

    const handleToggleMobileNav = useCallback(() => {
        setToggleMobileNav(!toggleMobileNav);
        setIsComponentVisible(!toggleMobileNav);
    }, [toggleMobileNav, setIsComponentVisible]);

    return (
        <header id="header" className="relative">
            {/* Navigation */}
            <nav className="relative flex justify-between">
                {/* Logo */}
                <a href="#">
                    <LogoSvg className="mt-1" />
                </a>
                {/* Mobile Menu Button */}
                <div onClick={handleToggleMobileNav} className="block md:hidden">
                    <HamburgerIcon
                        className={cn("mt-1", { "[&>*]:fill-white/50": toggleMobileNav })}
                    />
                </div>
                {/* TODO: mobileNav stretch to viewport width with margins */}
                <ul
                    ref={ref}
                    className={cn([
                        "md:static md:flex-row md:items-stretch md:gap-12 md:bg-transparent md:p-0 md:md:text-lg md:font-semibold md:text-white md:before:hidden",

                        // Hide navigation items on small screens
                        !toggleMobileNav && "hidden md:flex",

                        // Mobile navigation styles
                        toggleMobileNav &&
                            "absolute right-0 top-20 z-10 flex w-full flex-col items-center gap-8 bg-white p-10 text-xl font-semibold text-slate-500",

                        // Right triangle styles
                        toggleMobileNav &&
                            "before:absolute before:-top-[20px] before:right-0 before:h-0 before:w-0 before:border-x-[10px] before:border-y-[10px] before:border-b-[10px] before:border-r-[10px] before:border-solid before:border-x-transparent before:border-y-transparent before:border-b-white before:border-r-white",
                    ])}>
                    <li>
                        <a href="#about">About</a>
                    </li>
                    <li>
                        <a href="#services">Services</a>
                    </li>
                    <li>
                        <a href="#projects">Projects</a>
                    </li>
                    <li>
                        <a
                            className="font-fraunces rounded-full bg-yellow-400 px-8 py-4 font-bold uppercase text-black md:rounded-3xl md:bg-white md:px-7 md:py-3  md:hover:bg-white/25 md:hover:text-white"
                            href="#footer">
                            Contact
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};
