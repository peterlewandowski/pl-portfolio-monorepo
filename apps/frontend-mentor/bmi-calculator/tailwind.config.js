const { createGlobPatternsForDependencies } = require("@nx/react/tailwind");
const { join } = require("path");

const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        join(__dirname, "{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}"),
        ...createGlobPatternsForDependencies(__dirname),
    ],
    theme: {
        extend: {
            fontFamily: {
                inter: "var(--font-inter)",
            },
            fontSize: {
                "body-s": [
                    "14px",
                    {
                        lineHeight: "150%",
                        fontWeight: "400",
                    },
                ],
                "body-m-bold": [
                    "16px",
                    {
                        lineHeight: "150%",
                        fontWeight: "600",
                    },
                ],
                "body-m": [
                    "16px",
                    {
                        lineHeight: "150%",
                        fontWeight: "400",
                    },
                ],
                "heading-s": [
                    "20px",
                    {
                        lineHeight: "110%",
                        letterSpacing: "-0.025rem",
                        fontWeight: "600",
                    },
                ],
                "heading-m": [
                    "24px",
                    {
                        lineHeight: "110%",
                        letterSpacing: "-0.075rem",
                        fontWeight: "600",
                    },
                ],
                "heading-l": [
                    "48px",
                    {
                        lineHeight: "110%",
                        letterSpacing: "-0.15rem",
                        fontWeight: "600",
                    },
                ],
                "heading-xl": [
                    "64px",
                    {
                        lineHeight: "110%",
                        letterSpacing: "-0.02rem",
                        fontWeight: "600",
                    },
                ],
            },
            colors: {
                bmiBlue: "#345FF6",
                gunmetal: "#253347",
                electricBlue: "#5E6E85",
                borderColor: "#D8E2E7",
            },
        },
        darkMode: "class",
    },
    // plugins: [],
    plugins: [require("daisyui")],
    daisyui: {
        themes: ["light"], // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
        base: true, // applies background color and foreground color for root element by default
        styled: true, // include daisyUI colors and design decisions for all components
        utils: true, // adds responsive and modifier utility classes
        prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
        logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
        themeRoot: ":root", // The element that receives theme color CSS variables
    },
};
