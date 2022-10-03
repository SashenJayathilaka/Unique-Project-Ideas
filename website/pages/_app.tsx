import "../styles/globals.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className="hero">
        <div className="cube"></div>
        <div className="cube"></div>
        <div className="cube"></div>
        <Component {...pageProps} />
        <div className="cube"></div>
        <div className="cube"></div>
        <div className="cube"></div>
      </div>
    </>
  );
}

export default MyApp;
