import {ReactComponent as HeroArrowIcon} from "../images/icon-arrow-down.svg";

export const Hero = () => {
    return (
        <section id="hero" className="relative">
            <div className="flex flex-col items-center gap-14 md:gap-24 pb-24 md:pb-60 pt-20 md:pt-28">
                <h1 className="font-fraunces text-[2.5rem] leading-none md:text-6xl tracking-[0.39rem] md:tracking-[0.54rem] text-center font-black uppercase text-white">
                    We are creatives
                </h1>
                <a href="#about">
                    <HeroArrowIcon />
                </a>
            </div>
        </section>
    );
};
