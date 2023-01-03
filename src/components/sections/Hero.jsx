import { motion, useScroll } from "framer-motion";

import Image from "next/image";
import Navbar from "../layout/Navbar";
import admikLogo from "/public/images/admik-logo.svg";

export default function Hero() {
  const { scrollYProgress } = useScroll();

  return (
    <section>
      <div className="absolute flex items-center justify-center w-full h-screen z-50">
        <div className="overflow-hidden h-fit w-fit">
          <motion.div
            initial={{ y: 400, display: "block" }}
            animate={{ y: 0, display: "none" }}
            transition={{
              y: { delay: 0.2, duration: 0.4, ease: "easeIn" },
              display: { delay: 1.7, duration: 0.4 },
            }}
          >
            <Image src={admikLogo} alt="admik logo" className="max-w-[840px]" />
          </motion.div>
        </div>
      </div>
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: -1000 }}
        transition={{
          delay: 1.2,
          duration: 0.7,
          ease: [0.87, 0.05, 0.69, -0.06],
        }}
        className="relative z-[40] w-full h-screen bg-white"
      ></motion.div>

      <div className="fixed top-0 flex flex-col w-full h-screen bg-black z-[30]">
        <div className="absolute top-0 w-full z-[30]">
          <Navbar />
        </div>
        <video
          src="/videos/home-admik.webm"
          className="self-center my-auto max-w-[1240px]"
          autoPlay
          muted
          loop
        ></video>
      </div>
      <motion.section className="w-full h-screen bg-white relative z-[70]">
        <div className="font-monument_grotesk uppercase text-[82px] leading-[82px] px-3">
          <span className="block">Content for brands that is </span>
          <span className="block">Powerful, Evocative, And</span>
          <span className="block">Unforgettable</span>
        </div>
        <p></p>
      </motion.section>
    </section>
  );
}
