import { useAppContext } from "@/context/AppContext";
import { motion } from "framer-motion";
import ProductCard from "./ProductCard";

const HomeProducts = () => {
  const { products, router } = useAppContext();

  return (
    <motion.div
      className="flex flex-col items-center pt-14"
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.p
        className="text-2xl font-medium text-left w-full"
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Popular products
      </motion.p>
      <motion.div
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mt-6 pb-14 w-full"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 },
          },
        }}
      >
        {products.map((product, index) => (
          <motion.div
            key={index}
            variants={{
              visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
            }}
          >
            <ProductCard product={product} />
          </motion.div>
        ))}
      </motion.div>
      <motion.button
        onClick={() => router.push("/all-products")}
        className="px-12 py-2.5 border rounded text-gray-500/70 hover:bg-slate-50/90 transition"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        See more
      </motion.button>
    </motion.div>
  );
};

export default HomeProducts;
