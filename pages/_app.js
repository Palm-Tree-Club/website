import "../styles/globals.css";
import { Open_Sans } from "@next/font/google";
import "aos/dist/aos.css";
import Aos from "aos";
import { useEffect } from "react";

const openSans = Open_Sans({ subsets: ["latin"], variable: "--font-opensans" });
export default function App({ Component, pageProps }) {
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);

  if (typeof window !== "undefined") {
    return (
      <div suppressHydrationWarning className={`${openSans.variable} font-sans`}>
        <Component {...pageProps} />
      </div>
    );
  }
  return <div className={`${openSans.variable} font-sans`}>Loading ...</div>;
}
