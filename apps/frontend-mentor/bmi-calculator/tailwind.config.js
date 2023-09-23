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
        },
        colors: {
            blue: "#345FF6",
            gunmetal: "#253347",
            electricBlue: "#5E6E85",
            borderColor: "#D8E2E7",
            white: colors.white,
        },
    },
    plugins: [],
};
