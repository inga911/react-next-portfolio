"use client";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

function PageTransitions({ children }) {
  const pathName = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathName}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.4, ease: "easeInOut" }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

export default PageTransitions;
