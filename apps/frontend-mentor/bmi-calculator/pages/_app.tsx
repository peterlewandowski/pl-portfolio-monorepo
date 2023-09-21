import { AppProps } from "next/app";
import Inter from "next/font/local";
import Head from "next/head";
import "./styles.css";

const inter = Inter({
    src: [{ path: "../src/fonts/Inter-VariableFont_slnt,wght.ttf" }],
    variable: "--font-inter",
});

console.log(inter);

function CustomApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>Welcome to frontend-mentor/bmi-calculator!</title>
            </Head>
            <main className={inter.variable}>
                <Component {...pageProps} />
            </main>
        </>
    );
}

export default CustomApp;
