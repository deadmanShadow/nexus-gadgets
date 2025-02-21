import { useAppContext } from "@/context/AppContext";
import { motion } from "framer-motion";
import Image from "next/image";
import { assets } from "../../assets/assets";

const Navbar = () => {
  const { router } = useAppContext();

  return (
    <motion.div
      className="flex items-center px-4 md:px-8 py-3 justify-between border-b"
      initial={{ opacity: 0, y: -10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Image
          onClick={() => router.push("/")}
          className="w-28 lg:w-32 cursor-pointer"
          src={assets.logo}
          alt="Logo"
        />
      </motion.div>

      <motion.button
        className="bg-gray-600 text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full text-xs sm:text-sm"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Logout
      </motion.button>
    </motion.div>
  );
};

export default Navbar;
