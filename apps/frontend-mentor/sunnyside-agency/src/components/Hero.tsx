import {ReactComponent as HeroArrowIcon} from "../images/icon-arrow-down.svg";

export const Hero = () => {
    return (
        <section id="hero" className="relative">
            <div className="flex flex-col items-center gap-24 pb-60 pt-[7.5rem]">
                <h1 className="font-fraunces text-5xl tracking-widest text-center font-bold uppercase text-white">
                    We are creatives
                </h1>
                <a href="#about">
                    <HeroArrowIcon />
                </a>
            </div>
        </section>
    );
};
