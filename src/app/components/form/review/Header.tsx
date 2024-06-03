"use client";
import { motion } from "framer-motion";

const Header = ({ setterform }: { setterform: (value: boolean) => void }) => {
  return (
    <div className="flex flex-col justify-center items-center w-full gap-5 lg:gap-8">
      <h2 className="text-2xl">Ratings & Reviews</h2>
      <p className="text-[#666666]">Share your thoughts with other customers</p>
      <motion.button
        onClick={() => setterform(true)}
        whileHover={{ scale: 1.02 }}
        className="border-[#666666] border py-2 w- lg:w-1/4 hover:bg-[#E7C13C] text-lg font-semibold px-4"
      >
        Write a review
      </motion.button>
    </div>
  );
};

export default Header;