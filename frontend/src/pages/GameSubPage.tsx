import { motion } from "framer-motion";

const GameSubPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    ></motion.div>
  );
};

export default GameSubPage;