import { motion } from "framer-motion";
import Image from "next/image";
import admikLogo from "/public/images/admik-logo.svg";

export default function Intro() {
  return (
    <section className="flex h-screen items-center justify-center">
      <div className="h-fit w-fit overflow-hidden">
        <motion.div initial={{ y: 400 }} animate={{ y: 0 }} transition={{ duration: 0.5 }}>
          <Image src={admikLogo} alt="admik logo" />
        </motion.div>
      </div>
    </section>
  );
}
