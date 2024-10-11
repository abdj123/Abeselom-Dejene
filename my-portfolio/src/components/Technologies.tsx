import { RiFlutterFill } from "react-icons/ri";
import { SiDjango, SiMysql } from "react-icons/si";
import pythonIcon from "/python.png"; // Ensure the path is correct
import { motion, Variants, Transition } from "framer-motion"; // Import Variants and Transition
import { FaJava, FaReact } from "react-icons/fa";

const iconVariants = (duration: number): Variants => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "linear",
    } as Transition, // Explicitly cast to Transition type
  },
});

const Technologies: React.FC = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h1 className="my-20 text-center text-4xl">Technologies</h1>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border border-neutral-800 p-4"
        >
          <RiFlutterFill className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border border-neutral-800 p-4"
        >
          <img
            src={pythonIcon}
            alt="Python Icon"
            className="w-[4.4rem] h-[4.4rem] object-fit"
          />
        </motion.div>
        <motion.div
          variants={iconVariants(3.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border border-neutral-800 p-4"
        >
          <FaReact className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border border-neutral-800 p-4"
        >
          <SiDjango className="text-7xl" />
        </motion.div>
        <motion.div
          variants={iconVariants(6.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border border-neutral-800 p-4"
        >
          <FaJava className="text-7xl text-[#F0931C]" />
        </motion.div>
        <motion.div
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border border-neutral-800 p-4"
        >
          <SiMysql className="text-7xl text-[#015b85]" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
