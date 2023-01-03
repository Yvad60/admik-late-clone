import Head from "next/head";
import Hero from "../components/sections/Hero";

export default function Home() {
  return (
    <>
      <Head>
        <title>Admik late clone</title>
        <meta name="description" content="Admik website clone" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Hero />
      </main>
    </>
  );
}
