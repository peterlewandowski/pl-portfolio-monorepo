import React from "react";
import { Barlow, Fraunces } from "next/font/google";
import { About, Footer, Projects, Testimonials, TopSection } from "./layout";

const barlow = Barlow({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600"],
    variable: "--font-barlow",
});
const fraunces = Fraunces({
    subsets: ["latin"],
    weight: ["700", "900"],
    variable: "--font-fraunces",
});

export const Home: React.FC = () => {
    return (
        <main className={`${fraunces.variable} ${barlow.variable} font-barlow text-lg`}>
            <TopSection />
            <About />
            <Testimonials />
            <Projects />
            <Footer />
        </main>
    );
};
