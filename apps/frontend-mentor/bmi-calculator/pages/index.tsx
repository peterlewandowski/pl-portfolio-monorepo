import { Hero } from "../src/layout/Hero";
import { LifestyleFactors } from "../src/layout/LifestyleFactors";
import { Limitations } from "../src/layout/Limitations";
import { WhatYourBMI } from "../src/layout/WhatYourBMI";

export default function Index() {
    /*
     * Replace the elements below with your own.
     *
     * Note: The corresponding styles are in the ./index.css file.
     */
    return (
        <>
            <Hero />
            <WhatYourBMI />
            <LifestyleFactors />
            <Limitations />
        </>
    );
}
