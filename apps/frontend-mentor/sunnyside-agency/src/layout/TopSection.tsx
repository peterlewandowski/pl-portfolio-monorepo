import Image from "next/image";
import { Header, Hero } from "../components";
import bg from "../images/figma/mae-mu-1-a-pt-yqz-naj-a-unsplash.png";
import mobileBg from "../images/mobile/image-header.jpg";

export const TopSection = () => {
    return (
        <div className="relative px-8 pb-12 pt-8">
            {/* for loading different image per screen size using next/image */}
            <picture>
                <source media={`(max-width: 567px)`} srcSet={mobileBg.src} />
                <Image
                    src={bg}
                    alt="background"
                    fill
                    style={{ objectFit: "cover", objectPosition: "center" }}
                />
            </picture>
            <Header />
            <Hero />
        </div>
    );
};
