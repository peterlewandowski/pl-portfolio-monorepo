import Image from "next/image";
import cone from "../images/desktop/image-gallery-cone.jpg";
import milkBottles from "../images/desktop/image-gallery-milkbottles.jpg";
import orange from "../images/desktop/image-gallery-orange.jpg";
import sugarCubes from "../images/desktop/image-gallery-sugarcubes.jpg";

export const Projects = () => {
    return (
        <section id="projects">
            <div className="flex [&>*]:flex-1">
                <div>
                    <Image
                        width="0"
                        height="0"
                        sizes="100vw"
                        className="h-auto w-full"
                        src={milkBottles.src}
                        alt="milk bottles"
                    />
                </div>
                <div>
                    <Image
                        width="0"
                        height="0"
                        sizes="100vw"
                        className="h-auto w-full"
                        src={orange.src}
                        alt="orange"
                    />
                </div>
                <div>
                    <Image
                        width="0"
                        height="0"
                        sizes="100vw"
                        className="h-auto w-full"
                        src={cone.src}
                        alt="cone"
                    />
                </div>
                <div>
                    <Image
                        width="0"
                        height="0"
                        sizes="100vw"
                        className="h-auto w-full"
                        src={sugarCubes.src}
                        alt="sugar cubes"
                    />
                </div>
            </div>
        </section>
    );
};
