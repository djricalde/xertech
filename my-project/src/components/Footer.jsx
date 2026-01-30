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
          © {year} DylanTech. All rights reserved.
        </motion.div>
        
        <div className="flex items-center gap-2">
          {[
            { icon: Github, href: "https://github.com/DylanRicalde", label: "GitHub" },
            { icon: Linkedin, href: "https://www.linkedin.com/in/dylan-ricalde-7a940b3a8/", label: "LinkedIn" },
            { icon: Facebook, href: "https://www.facebook.com/dylan.ricalde.5/", label: "Facebook" },
            { icon: Instagram, href: "https://www.instagram.com/dyljr2/", label: "Instagram" },
            { icon: Mail, href: "#contact", label: "Email", internal: true }
          ].map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              target={social.internal ? undefined : "_blank"}
              rel={social.internal ? undefined : "noreferrer"}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                delay: 0.3 + index * 0.05,
                duration: 0.3,
                ease: [0.16, 1, 0.3, 1]
              }}
              whileHover={{ 
                scale: 1.1,
                y: -3,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.95 }}
              className="grid h-10 w-10 place-items-center rounded-xl border shadow-sm transition-all
                         border-gray-200 bg-white
                         dark:border-white/10 dark:bg-white/5
                         hover:bg-gray-50 dark:hover:bg-white/10"
              aria-label={social.label}
            >
              <social.icon className="h-4.5 w-4.5" />
            </motion.a>
          ))}
        </div>
      </div>
    </motion.footer>
  );
}