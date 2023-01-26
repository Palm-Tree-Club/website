import Head from "next/head";
import Navbar from "../src/components/Navbar";
import Hero from "../src/components/Hero";
import Domain from "../src/components/Domain";
import Achievements from "../src/components/Achivements";
import Events from "../src/components/Events";
import Contact from "../src/components/Contact";
import { useEffect } from "react";
import firebase from "../src/services/firebase";
import { getAnalytics, logEvent } from "firebase/analytics";
import Faculty from "../src/components/Faculty";
import Loading from "../src/components/Loading";
import { Suspense } from "react";
import { getPerformance } from "firebase/performance";

export default function Home() {
  useEffect(() => {
    getAnalytics(firebase);
    getPerformance(firebase);
  }, []);
  return (
    <Suspense fallback={<Loading />}>
      <Head>
        <title>Palm Tree Club</title>
        <meta
          name="description"
          content="Palm Tree Club is offical club of SOCCA - Silver Oak University"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/Assets/Images/palm.png" />
        <link href="/Assets/Images/palm.png" rel="apple-touch-icon" />
        <meta
          content="Palm tree club, rde, silver oak university, palm, tree, club, silver oak, univeristy, silver, oak, club, community, coding, programming, google, gls, indus, nirma, btech, microsoft"
          name="keywords"
        />
      </Head>
      <Navbar />
      <main
        suppressHydrationWarning={true}
        style={{ minHeight: 100 + "vh" }}
        className="flex flex-col justify-center items-center overflow-hidden"
      >
        <Hero />
        <Domain />
        <Achievements />
        <Events />
        <Faculty />
      </main>
      <footer style={{ overflow: "hidden" }}>
        <Contact />
      </footer>
    </Suspense>
  );
}
