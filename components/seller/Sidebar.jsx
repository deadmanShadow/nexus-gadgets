import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { assets } from "../../assets/assets";

const SideBar = () => {
  const pathname = usePathname();
  const menuItems = [
    { name: "Add Product", path: "/seller", icon: assets.add_icon },
    {
      name: "Product List",
      path: "/seller/product-list",
      icon: assets.product_list_icon,
    },
    { name: "Orders", path: "/seller/orders", icon: assets.order_icon },
  ];

  return (
    <motion.div
      className="md:w-64 w-16 border-r min-h-screen text-base border-gray-300 py-2 flex flex-col"
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {menuItems.map((item, index) => {
        const isActive = pathname === item.path;

        return (
          <Link href={item.path} key={item.name} passHref>
            <motion.div
              className={`flex items-center py-3 px-4 gap-3 cursor-pointer ${
                isActive
                  ? "border-r-4 md:border-r-[6px] bg-orange-600/10 border-orange-500/90"
                  : "hover:bg-gray-100/90 border-white"
              }`}
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Image
                src={item.icon}
                alt={`${item.name.toLowerCase()}_icon`}
                className="w-7 h-7"
              />
              <p className="md:block hidden text-center">{item.name}</p>
            </motion.div>
          </Link>
        );
      })}
    </motion.div>
  );
};

export default SideBar;
