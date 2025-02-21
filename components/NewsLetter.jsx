import { motion } from "framer-motion";

const NewsLetter = () => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center text-center space-y-2 pt-8 pb-14"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <motion.h1
        className="md:text-4xl text-2xl font-medium"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Subscribe now & get 20% off
      </motion.h1>

      <motion.p
        className="md:text-base text-gray-500/80 pb-8"
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        Upgrade Your Tech, Elevate Your Experience! 🔥 Find top-quality PC parts
        and the latest mobile phones, all at unbeatable prices.
      </motion.p>

      <motion.div
        className="flex items-center justify-between max-w-2xl w-full md:h-14 h-12"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <input
          className="border border-gray-500/30 rounded-md h-full border-r-0 outline-none w-full rounded-r-none px-3 text-gray-500"
          type="text"
          placeholder="Enter your email id"
        />
        <motion.button
          className="md:px-12 px-8 h-full text-white bg-orange-600 rounded-md rounded-l-none"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Subscribe
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default NewsLetter;
