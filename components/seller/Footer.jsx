import { assets } from "@/assets/assets";
import { motion } from "framer-motion";
import Image from "next/image";

const Footer = () => {
  return (
    <motion.div
      className="flex md:flex-row flex-col-reverse items-center justify-between text-left w-full px-10 py-4 border-t"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="flex items-center gap-4">
        <Image className="hidden md:block" src={assets.logo} alt="logo" />
        <div className="hidden md:block h-7 w-px bg-gray-500/60"></div>
        <p className="py-4 text-center text-xs md:text-sm text-gray-500">
          Copyright 2025 © Nexus Gadgets. All Rights Reserved.
        </p>
      </div>

      <div className="flex items-center gap-3">
        {["facebook_icon", "twitter_icon", "instagram_icon"].map(
          (icon, index) => (
            <motion.a
              key={index}
              href="#"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Image src={assets[icon]} alt={`${icon}`} />
            </motion.a>
          )
        )}
      </div>
    </motion.div>
  );
};

export default Footer;
