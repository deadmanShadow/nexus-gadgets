"use client";
import { assets } from "@/assets/assets";
import { useAppContext } from "@/context/AppContext";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const { isSeller, router } = useAppContext();

  return (
    <motion.nav
      className="flex items-center justify-between px-6 md:px-16 lg:px-32 py-3 border-b border-gray-300 text-gray-700"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Logo */}
      <motion.div
        className="cursor-pointer w-28 md:w-32"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => router.push("/")}
      >
        <Image src={assets.logo} alt="logo" />
      </motion.div>

      {/* Navigation Links */}
      <div className="flex items-center gap-4 lg:gap-8 max-md:hidden">
        {["Home", "Shop", "About Us", "Contact"].map((text, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
          >
            <Link
              href={index === 1 ? "/all-products" : "/"}
              className="hover:text-gray-900 transition"
            >
              {text}
            </Link>
          </motion.div>
        ))}
        {isSeller && (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => router.push("/seller")}
            className="text-xs border px-4 py-1.5 rounded-full"
          >
            Seller Dashboard
          </motion.button>
        )}
      </div>

      {/* Icons Section */}
      <ul className="hidden md:flex items-center gap-4">
        <motion.div whileHover={{ scale: 1.2 }} transition={{ duration: 0.2 }}>
          <Image
            className="w-4 h-4"
            src={assets.search_icon}
            alt="search icon"
          />
        </motion.div>
        <motion.button
          className="flex items-center gap-2 hover:text-gray-900 transition"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Image src={assets.user_icon} alt="user icon" />
          Account
        </motion.button>
      </ul>

      {/* Mobile Menu */}
      <div className="flex items-center md:hidden gap-3">
        {isSeller && (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => router.push("/seller")}
            className="text-xs border px-4 py-1.5 rounded-full"
          >
            Seller Dashboard
          </motion.button>
        )}
        <motion.button
          className="flex items-center gap-2 hover:text-gray-900 transition"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Image src={assets.user_icon} alt="user icon" />
          Account
        </motion.button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
