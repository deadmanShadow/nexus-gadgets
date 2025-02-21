import { assets } from "@/assets/assets";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <motion.footer
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex flex-col md:flex-row items-start justify-center px-6 md:px-16 lg:px-32 gap-10 py-14 border-b border-gray-500/30 text-gray-500"
      >
        <div className="w-full md:w-4/5">
          <Link href={"/"}>
            <Image className="w-28 md:w-32" src={assets.logo} alt="logo" />
          </Link>
          <p className="mt-2 text-sm">
            Your One-Stop Shop for high-performance PC parts, the latest
            smartphones, and premium tech accessories. We offer top brands,
            unbeatable prices, and expert support for all your tech needs!
          </p>
        </div>

        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full md:w-1/2 flex items-center justify-start md:justify-center"
        >
          <div>
            <h2 className="font-medium text-gray-900 mb-5">Company</h2>
            <ul className="text-sm space-y-2">
              {["Home", "About us", "Contact us", "Privacy policy"].map(
                (item, index) => (
                  <motion.li
                    key={index}
                    whileHover={{ scale: 1.05, color: "#EA580C" }} // Orange hover effect
                    transition={{ duration: 0.2 }}
                  >
                    <a
                      className="hover:underline transition"
                      href="#"
                      aria-label={item}
                    >
                      {item}
                    </a>
                  </motion.li>
                )
              )}
            </ul>
          </div>
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="w-full md:w-1/2 flex items-start justify-start md:justify-center"
        >
          <div>
            <h2 className="font-medium text-gray-900 mb-5">Get in touch</h2>
            <div className="text-sm space-y-2">
              <motion.p
                whileHover={{ scale: 1.05, color: "#EA580C" }}
                transition={{ duration: 0.2 }}
              >
                +8801777777777
              </motion.p>
              <motion.p
                whileHover={{ scale: 1.05, color: "#EA580C" }}
                transition={{ duration: 0.2 }}
              >
                contact@nexus.dev
              </motion.p>
            </div>
          </div>
        </motion.div>
      </motion.div>

      <motion.p
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="py-4 text-center text-xs md:text-sm"
      >
        Copyright 2025 © Nexus Gadgets. All Right Reserved.
      </motion.p>
    </motion.footer>
  );
};

export default Footer;
