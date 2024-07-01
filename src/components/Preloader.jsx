import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const Preloader = ({ setLoading }) => {
  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 200);

    return () => clearTimeout(timer);
  }, [location, setLoading]);

  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-white z-50"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.1, delay: 0.2 }}
    >
      <motion.div
        className="w-10 h-10 border-4 border-gray-200 border-t-black rounded-full animate-spin"
        initial={{ scale: 1 }}
        animate={{ rotate: 360, scale: 1.2 }}
        transition={{ duration: 1, repeat: Infinity }}
      ></motion.div>
    </motion.div>
  );
};

export default Preloader;
