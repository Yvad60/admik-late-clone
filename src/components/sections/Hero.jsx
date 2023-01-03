import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "../layout/Navbar";
import admikLogo from "/public/images/admik-logo.svg";

export default function Hero() {
  return (
    <section>
      <div className="absolute flex items-center justify-center w-full h-screen z-[100]">
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
        className="relative z-50 w-full h-screen bg-white"
      ></motion.div>
      <div className="absolute top-0 flex flex-col w-full h-screen bg-black z-[40]">
        <Navbar />
        <video
          src="/videos/home-admik.webm"
          className="self-center my-auto max-w-[1240px]"
          autoPlay
          muted
          loop
        ></video>
      </div>
    </section>
  );
}
