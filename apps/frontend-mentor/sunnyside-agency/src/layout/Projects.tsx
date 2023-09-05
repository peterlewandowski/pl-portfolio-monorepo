import Image from "next/image";
import cone from "../images/desktop/image-gallery-cone.jpg";
import milkBottles from "../images/desktop/image-gallery-milkbottles.jpg";
import orange from "../images/desktop/image-gallery-orange.jpg";
import sugarCubes from "../images/desktop/image-gallery-sugarcubes.jpg";

export const Projects = () => {
    return (
        <section id="projects">
            <div className="grid grid-cols-2 md:flex md:[&>*]:flex-1">
                <div>
                    <Image
                        width="0"
                        height="0"
                        sizes="100vw"
                        className="h-auto w-full"
                        src={milkBottles}
                        alt="milk bottles"
                    />
                </div>
                <div>
                    <Image
                        width="0"
                        height="0"
                        sizes="100vw"
                        className="h-auto w-full"
                        src={orange}
                        alt="orange"
                    />
                </div>
                <div>
                    <Image
                        width="0"
                        height="0"
                        sizes="100vw"
                        className="h-auto w-full"
                        src={cone}
                        alt="cone"
                    />
                </div>
                <div>
                    <Image
                        width="0"
                        height="0"
                        sizes="100vw"
                        className="h-auto w-full"
                        src={sugarCubes}
                        alt="sugar cubes"
                    />
                </div>
            </div>
        </section>
    );
};
