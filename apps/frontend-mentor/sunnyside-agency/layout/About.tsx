import Image from "next/image";
import graphicDesign from "../images/desktop/image-graphic-design.jpg";
import photography from "../images/desktop/image-photography.jpg";
import standout from "../images/desktop/image-stand-out.jpg";
import transform from "../images/desktop/image-transform.jpg";

export const About = () => {
    return (
        <section id="about">
            <div className="grid grid-cols-1 grid-rows-4 md:grid-cols-2">
                <div className="flex flex-col gap-10 overflow-hidden px-6 md:p-40 md:pr-24">
                    <h2 className="font-fraunces text-[2.5rem] font-black leading- normal">
                        Transform your brand
                    </h2>
                    <p className="font-barlow font-thin">
                        We are a full-service creative agency specializing in helping brands grow
                        fast. Engage your clients through compelling visuals that do most of the
                        marketing for you.
                    </p>
                    <a
                        className="relative w-max p-2 font-fraunces text-lg font-black uppercase tracking-wider before:absolute before:bottom-[15%] before:left-0 before:-z-10 before:h-3 before:w-full before:rounded-3xl before:bg-[#FAD400] before:opacity-25 hover:before:opacity-100"
                        href="#"
                    >
                        Learn more
                    </a>
                </div>
                <div className="relative">
                    {/* <Image src={transform.src} alt="transform" width={100} height={100} /> */}
                    <Image src={transform.src} alt="transform" fill objectFit="cover" className="h-auto" />
                </div>
                <div className="relative">
                    {/* <Image src={standout.src} alt="standout" width={100} height={100} /> */}
                    <Image src={standout.src} alt="standout" fill objectFit="cover" />
                </div>
                <div className="flex flex-col gap-10 px-6 md:p-40 md:pl-24">
                    <h2 className="font-fraunces text-[2.5rem] font-black  leading-normal">
                        Stand out to the right audience
                    </h2>
                    <p className="font-barlow font-thin">
                        Using a collaborative formula of designers, researchers, photographers,
                        videographers, and copywriters, we’ll build and extend your brand in digital
                        places.
                    </p>
                    <a
                        className="relative w-max p-2 font-fraunces text-lg font-black uppercase tracking-wider before:absolute before:bottom-[15%] before:left-0 before:-z-10 before:h-3 before:w-full before:rounded-3xl before:bg-[#FE7867] before:opacity-25 hover:before:opacity-100"
                        href="#"
                    >
                        Learn more
                    </a>
                </div>
                <div className="relative">
                    <Image
                        src={graphicDesign.src}
                        alt="transform"
                        fill
                        objectFit="cover"
                        objectPosition="center"
                    />
                    <div className="relative flex flex-col items-center gap-6 px-40 pb-10 pt-96 text-center text-[#4E7E74] [&>*]:max-w-xs">
                        <h2 className="font-fraunces text-2xl font-black">Graphic design</h2>
                        <p className="font-barlow text-base font-semibold">
                            Great design makes you memorable. We deliver artwork that underscores
                            your brand message and captures potential clients’ attention.
                        </p>
                    </div>
                </div>
                <div className="relative">
                    <Image src={photography.src} alt="photography" fill objectFit="cover" />
                    <div className="relative flex flex-col items-center gap-6 px-40 pb-10 pt-96 text-center text-[#19536B] [&>*]:max-w-xs">
                        <h2 className="font-fraunces text-2xl font-black">Photography</h2>
                        <p className="font-barlow text-base font-semibold">
                            Increase your credibility by getting the most stunning, high-quality
                            photos that improve your business image.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
