/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { Github, Linkedin, Facebook, Instagram, Mail } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <motion.footer 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="border-t py-10 transition-colors
                 border-gray-200 bg-white text-gray-900
                 dark:border-white/5 dark:bg-[hsl(225_20%_7%)] dark:text-white"
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 sm:px-6 md:flex-row">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-sm text-gray-600 dark:text-white/70"
        >
          © {year} All rights reserved.
        </motion.div>
        
        <div className="flex items-center gap-2">
          
         <motion.div 
         initial={{ opacity: 0 }}
         whileInView={{ opacity: 1 }}
         viewport={{ once: true }}
         transition={{ delay: 0.3, duration: 0.6 }}
         className="text-sm text-gray-600 dark:text-white font-bold"
       >
        XerTech.
         </motion.div>
          
        </div>
      </div>
    </motion.footer>
  );
}