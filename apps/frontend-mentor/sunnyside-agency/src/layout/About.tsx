import Image from "next/image";
import graphicDesign from "../images/desktop/image-graphic-design.jpg";
import photography from "../images/desktop/image-photography.jpg";
import standout from "../images/desktop/image-stand-out.jpg";
import transform from "../images/desktop/image-transform.jpg";
import graphicDesignMobile from "../images/figma/graphicDesignMobile.jpg";

export const About = () => {
    return (
        <section id="about">
            <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="flex flex-col items-center overflow-hidden px-6 py-16 text-center md:items-start md:p-40 md:pr-24 md:text-left">
                    <h2 className="font-fraunces normal mb-6 text-4xl font-black md:mb-8">
                        Transform your brand
                    </h2>
                    <p className="mb-8 text-lg font-semibold leading-8 text-slate-500 md:mb-10">
                        We are a full-service creative agency specializing in helping brands grow
                        fast. Engage your clients through compelling visuals that do most of the
                        marketing for you.
                    </p>
                    <a
                        className="font-fraunces relative w-max p-2 text-lg font-black uppercase tracking-wider before:absolute before:bottom-[15%] before:left-0 before:-z-10 before:h-3 before:w-full before:rounded-3xl before:bg-[#FAD400] before:opacity-25 hover:before:opacity-100"
                        href="#footer">
                        Learn more
                    </a>
                </div>
                <div className="relative order-first h-80 md:order-none md:h-auto">
                    <Image
                        src={transform}
                        alt="transform"
                        fill
                        style={{ objectFit: "cover", objectPosition: "center" }}
                    />
                </div>
                <div className="relative h-80 md:h-auto">
                    <Image
                        src={standout}
                        alt="standout"
                        fill
                        style={{ objectFit: "cover", objectPosition: "center" }}
                    />
                </div>
                <div className="flex flex-col items-center px-6 py-16 text-center md:items-start md:p-40 md:pl-24 md:text-left">
                    <h2 className="font-fraunces mb-6 text-4xl font-black md:mb-8">
                        Stand out to the right audience
                    </h2>
                    <p className="mb-8 text-lg font-semibold leading-8 text-slate-500 md:mb-10">
                        Using a collaborative formula of designers, researchers, photographers,
                        videographers, and copywriters, we’ll build and extend your brand in digital
                        places.
                    </p>
                    <a
                        className="font-fraunces relative w-max p-2 text-lg font-black uppercase tracking-wider before:absolute before:bottom-[15%] before:left-0 before:-z-10 before:h-3 before:w-full before:rounded-3xl before:bg-[#FE7867] before:opacity-25 hover:before:opacity-100"
                        href="#footer">
                        Learn more
                    </a>
                </div>
                <div id="services" className="relative">
                    <picture>
                        <source media={`(max-width: 567px)`} srcSet={graphicDesignMobile.src} />
                        <Image
                            src={graphicDesign}
                            alt="transform"
                            fill
                            style={{ objectFit: "cover", objectPosition: "center" }}
                        />
                    </picture>
                    <div className="relative flex flex-col items-center gap-6 px-6 pb-14 pt-96 text-center text-[#24554A] md:px-40 [&>*]:max-w-xs">
                        <h2 className="font-fraunces text-2xl font-black">Graphic design</h2>
                        <p className="text-base font-semibold">
                            Great design makes you memorable. We deliver artwork that underscores
                            your brand message and captures potential clients’ attention.
                        </p>
                    </div>
                </div>
                <div className="relative">
                    <Image
                        src={photography}
                        alt="photography"
                        fill
                        style={{ objectFit: "cover", objectPosition: "center" }}
                    />
                    <div className="relative flex flex-col items-center gap-6 px-6 pb-14 pt-96 text-center text-[#052C3B] md:px-40 [&>*]:max-w-xs">
                        <h2 className="font-fraunces text-2xl font-black">Photography</h2>
                        <p className="text-base font-semibold">
                            Increase your credibility by getting the most stunning, high-quality
                            photos that improve your business image.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
