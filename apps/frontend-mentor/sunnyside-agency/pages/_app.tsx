import { AppProps } from "next/app";
import Head from "next/head";
import "./styles.css";

function CustomApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
                <title>Sunnyside Agency</title>
            </Head>
            <main className="app">
                <Component {...pageProps} />
            </main>
        </>
    );
}

export default CustomApp;
