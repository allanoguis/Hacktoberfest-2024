import { motion } from "framer-motion";
import Sky from "./safari/sky";
import Clouds from "./safari/clouds";
import Ground from "./safari/ground";
import Rocks from "./safari/rocks";
import Cacti from "./safari/cacti";

const Safari = ({ isRunning }) => {
  return (
    <div
      className="flex w-full border-dotted border-8 overflow-hidden"
      id="safari"
    >
      <motion.svg
        className="inline-block animate-scroll"
        width="550"
        height="200"
        viewBox="0 0 550 200"
        xmlns="http://www.w3.org/2000/svg"
        animate={{ x: isRunning ? -550 : 0 }} // Animate the x position
        transition={{ duration: 5, repeat: Infinity, ease: "linear" }} // Animation properties
      >
        {/* Sky */}
        <Sky />

        {/* Clouds */}
        <Clouds />

        {/* Ground */}
        <Ground />

        {/* Rocks */}
        <Rocks />

        {/* Cacti */}
        <Cacti />
      </motion.svg>
    </div>
  );
};

export default Safari;
