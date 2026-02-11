/* eslint-disable no-unused-vars */
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TypeAnimation } from 'react-type-animation';

import { FileText, Moon, Sun } from "lucide-react";

export default function Home({ dark, theme, setTheme, navScrolled = false }) {
  const [themeOpen, setThemeOpen] = useState(false);
  const themeRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (themeRef.current && !themeRef.current.contains(e.target)) setThemeOpen(false);
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);
  return (
    <div className="relative min-h-screen bg-[hsl(220_25%_98%)] text-[hsl(222_25%_10%)]
                    dark:bg-[hsl(225_20%_7%)] dark:text-[hsl(220_15%_92%)]
                    overflow-hidden transition-colors">
      {/* Background Effects */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div 
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ 
            duration: 2,
            ease: [0.16, 1, 0.3, 1] // Custom smooth easing
          }}
          className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-[hsl(231_87%_60%/0.15)] blur-3xl" 
        />
        <motion.div 
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ 
            duration: 2,
            delay: 0.3,
            ease: [0.16, 1, 0.3, 1]
          }}
          className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-[hsl(231_87%_60%/0.15)] blur-3xl" 
        />
      </div>

      {/* Header */}
      <motion.header 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ 
          duration: 0.8,
          delay: 0.2,
          ease: [0.16, 1, 0.3, 1]
        }}
        className={`fixed top-0 left-0 right-0 z-50 py-2 transition-colors duration-300 ${
          navScrolled
            ? "bg-transparent"
            : "bg-[hsl(220_25%_98%/0.85)] dark:bg-[hsl(225_20%_7%/0.85)] backdrop-blur-sm"
        }`}
      >
        <div className="mx-auto flex max-w-[1200px] items-center justify-between px-8">
        {/* Logo + Title */}
        <motion.a
          href="#home"
          className="flex items-center gap-3"
          whileHover={{ scale: 1.03 }}
        >
          <motion.div
            whileHover={{ rotate: 360, scale: 1.1 }}
            transition={{
              duration: 0.7,
              ease: [0.16, 1, 0.3, 1]
            }}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[hsl(222_25%_10%)] dark:bg-white"
          >
            <img
              src="/logo.png"
              alt="XerTech Home"
              className="block h-8 w-8 object-contain"
            />
          </motion.div>
          <span className="font-semibold tracking-tight dark:text-white">
            XerTech.
          </span>
        </motion.a>


        {/* Center Nav */}
        <nav className="hidden md:flex items-center justify-center gap-10 text-sm">
          {[
            { href: "#about", label: "About" },
            { href: "#skills", label: "Skills" },
            { href: "#project", label: "Project" },
            { href: "#contact", label: "Contact" }
          ].map((link, index) => (
            <motion.a
              key={link.href}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 0.7, y: 0 }}
              transition={{ 
                delay: 0.5 + index * 0.08,
                duration: 0.5,
                ease: [0.16, 1, 0.3, 1]
              }}
              whileHover={{ 
                opacity: 1,
                y: -3,
                transition: { duration: 0.2 }
              }}
              className={`relative dark:text-white text-base transition-opacity duration-300
                         after:absolute after:left-0 after:bottom-[-2px] after:block after:h-px after:w-full after:bg-linear-to-r after:from-blue-600 after:to-blue-400 after:content-['']
                         after:scale-x-0 after:origin-center hover:after:scale-x-100 after:transition-transform after:duration-200
                         ${navScrolled ? "opacity-40 hover:opacity-70" : "opacity-70 hover:opacity-100"}`}
            >
              {link.label}
            </motion.a>
          ))}
        </nav>

        {/* Theme dropdown */}
        <div className="relative" ref={themeRef}>
          <span
            className={`inline-block rounded-xl ${!dark ? "p-[2px]" : ""}`}
          >
            <motion.button
              type="button"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setThemeOpen((o) => !o)}
              className={`flex items-center justify-center rounded-[10px] p-2.5 shadow-sm transition-colors
                ${!dark
                  ? "bg-white text-gray-800"
                  : "border border-white/20 bg-[hsl(225_15%_6%)] text-white"
                }`}
              aria-expanded={themeOpen}
              aria-haspopup="true"
            >
              {!dark ? (
                <Sun className="h-4 w-4" strokeWidth={2} />
              ) : (
                <Moon className="h-4 w-4" strokeWidth={2} />
              )}
            </motion.button>
          </span>
          <AnimatePresence>
            {themeOpen && (
              <motion.div
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.15 }}
                className={`absolute right-0 top-full mt-1.5 min-w-[100px] rounded-lg border py-1 shadow-xl transition-colors ${
                  dark
                    ? "border-white/20 bg-[hsl(225_15%_6%)] text-white"
                    : "border-gray-200 bg-white text-gray-800"
                }`}
              >
                {["Light", "Dark", "System"].map((label) => {
                  const value = label.toLowerCase();
                  const active = theme === value;
                  return (
                    <button
                      key={value}
                      type="button"
                      onClick={() => {
                        setTheme(value);
                        setThemeOpen(false);
                      }}
                      className={`w-full px-4 py-2 text-left text-sm ${
                        dark
                          ? active ? "bg-white/10" : ""
                          : active ? "bg-gray-100" : ""
                      }`}
                    >
                      {label}
                    </button>
                  );
                })}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        </div>
      </motion.header>

      {/* Hero Section */}
      <main className="relative z-10 mx-auto max-w-[1200px] px-8 pt-32 pb-36 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center"
      id="home"
      >
       {/* Left */}
        <motion.section
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ 
            duration: 1,
            delay: 0.4,
            ease: [0.16, 1, 0.3, 1]
          }}
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              delay: 0.7,
              duration: 0.6,
              ease: [0.16, 1, 0.3, 1]
            }}
            className="inline-flex items-center gap-2 rounded-full border border-white/60 dark:border-white/20 bg-white/80 dark:bg-white/10 dark:text-white px-4 py-1 text-xs font-medium shadow-sm"
          >
            <motion.span 
              animate={{ 
                scale: [1, 1.3, 1],
                opacity: [1, 0.8, 1]
              }}
              transition={{ 
                repeat: Infinity,
                duration: 2,
                ease: "easeInOut"
              }}
              className="h-2 w-2 rounded-full bg-[hsl(231_87%_60%)]" 
            />
            Open for collaboration
          </motion.span>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              delay: 0.9,
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1]
            }}
            className="mt-6 text-5xl md:text-6xl font-extrabold leading-tight tracking-tight dark:text-white"
          >
            Hi, I'm{" "}
            <TypeAnimation
              sequence={[
                'Dylan Jay Ricalde',
                500,
                'Aspiring Full-Stack Developer',
                500,
              ]}
              wrapper="span"
              speed={10}
              repeat={Infinity}
            />
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              delay: 1.1,
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1]
            }}
            className="mt-6 max-w-xl text-base md:text-lg opacity-80 dark:text-white/80"
          >
            I am a Front-End Developer who wants to be a Full-Stack Developer. I have a strong foundation in modern web technologies, driven by curiosity and a passion for problem‑solving. I enjoy building scalable, user‑focused applications clean frontend design, while continuously learning backend systems and new tools to sharpen my skills.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              delay: 1.3,
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1]
            }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <motion.a 
            href = "https://github.com/DylanRicalde?tab=repositories"
              target="_blank"
            rel="noopener noreferrer"
              whileHover={{ 
                scale: 1.05,
                y: -3,
                boxShadow: "0 20px 40px rgba(66, 99, 235, 0.3)"
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ 
                type: "spring",
                stiffness: 400,
                damping: 20
              }}
              className="inline-flex items-center gap-2 rounded-full bg-[hsl(231_87%_60%)] px-7 py-2 text-sm md:text-base text-white font-semibold shadow-lg shadow-blue-500/40 hover:opacity-90 transition"
            >
              View Projects →
            </motion.a>
            <motion.a
  href="/resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
  whileHover={{ 
    scale: 1.05,
    y: -3
  }}
  whileTap={{ scale: 0.98 }}
  transition={{ 
    type: "spring",
    stiffness: 400,
    damping: 20
  }}
  className="inline-flex items-center gap-2 rounded-full border border-white/10 dark:border-white/20 px-7 py-3 text-sm md:text-base font-semibold bg-white dark:bg-white/10 dark:text-white hover:bg-black/5 dark:hover:bg-white/20 transition"
>
  <FileText size={18} />
  Resume
</motion.a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ 
              delay: 1.5,
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1]
            }}
            className="mt-10 flex flex-wrap gap-3 text-xs md:text-sm"
          >
          
          </motion.div>
        </motion.section>

        {/* Right Card */}
        <motion.aside
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ 
            duration: 1,
            delay: 0.6,
            ease: [0.16, 1, 0.3, 1]
          }}
          whileHover={{ 
            y: -8,
            transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] }
          }}
          className="rounded-3xl border border-black/5 border-[hsl(231 87% 60%)]/30 bg-white dark:bg-[hsl(225_18%_10%)] dark:shadow-[0_0_30px_rgba(139,92,246,0.2)] p-8 shadow-xl"
        >
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ 
              delay: 1,
              duration: 0.6,
              ease: [0.16, 1, 0.3, 1]
            }}
            className="flex items-center justify-between"
          >
            <p className="text-sm opacity-70 dark:text-white/70">Current Focus</p>
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ 
                delay: 1.2,
                type: "spring",
                stiffness: 400,
                damping: 20
              }}
              className="rounded-full bg-black/5 dark:bg-white/10 dark:text-white px-3 py-1 text-xs"
            >
              2026
            </motion.span>
          </motion.div>

          <motion.h3 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              delay: 1.1,
              duration: 0.6,
              ease: [0.16, 1, 0.3, 1]
            }}
            className="mt-2 text-xl font-semibold dark:text-white"
          >
            Building scalable applications
          </motion.h3>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ 
              delay: 1.2,
              duration: 0.6,
              ease: [0.16, 1, 0.3, 1]
            }}
            className="mt-6 space-y-4"
          >
            {["React + Tailwind", "Express.js + Node.js", "PostgreSQL + MongoDB"].map((item, index) => (
              <motion.div 
                key={item}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ 
                  delay: 1.3 + index * 0.1,
                  duration: 0.6,
                  ease: [0.16, 1, 0.3, 1]
                }}
                whileHover={{ 
                  x: 6,
                  transition: { duration: 0.2 }
                }}
                className="flex items-center justify-between rounded-xl border border-black/5 dark:border-white/10 dark:bg-white/5 px-4 py-3 cursor-default"
              >
                <span className="dark:text-white">{item}</span>
                <span className="text-xs opacity-60 dark:text-white/60">Exploring</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ 
              delay: 1.6,
              duration: 0.6,
              ease: [0.16, 1, 0.3, 1]
            }}
            className="mt-6 grid grid-cols-2 gap-4"
          >
            {[
              { label: "Apps Built", value: "3+" },
              { label: "Tech Stack", value: "7+" }
            ].map((stat, index) => (
              <motion.div 
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  delay: 1.7 + index * 0.1,
                  duration: 0.5,
                  ease: [0.16, 1, 0.3, 1]
                }}
                whileHover={{ 
                  scale: 1.05,
                  y: -2,
                  transition: { duration: 0.2 }
                }}
                className="rounded-xl border border-black/5 dark:border-white/10 dark:bg-white/5 p-4 cursor-default"
              >
                <p className="text-sm opacity-70 dark:text-white/70">{stat.label}</p>
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.9 + index * 0.1 }}
                  className="text-2xl font-bold dark:text-white"
                >
                  {stat.value}
                </motion.p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              delay: 1.9,
              duration: 0.6,
              ease: [0.16, 1, 0.3, 1]
            }}
            className="mt-6 rounded-xl border border-black/5 dark:border-white/10 dark:bg-white/5 p-4"
          >
            <p className="text-sm opacity-70 dark:text-white/70">Core Goal</p>
            <p className="mt-1 text-sm dark:text-white/80">
              Combining strong, high-performance backend systems with creative frontend design to produce successful user experiences.
            </p>
          </motion.div>
        </motion.aside>
      </main>
    </div>
  );
}
