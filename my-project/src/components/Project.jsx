/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

export default function Project() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  const projects = [
    {
      id: "fullstack-app",
      title: "Full-Stack Dashboard",
      description:
        "A comprehensive data management system with secure authentication and real-time updates.",
      stack: ["React", "Express", "PostgreSQL", "Tailwind"],
      demoUrl: "https://example.com",
      repoUrl: "https://github.com/example",
    },
    {
      id: "api-service",
      title: "RESTful API Engine",
      description:
        "A robust backend service designed for high throughput, featuring JWT auth and rate limiting.",
      stack: ["Node.js", "Express", "MongoDB", "Redis"],
      demoUrl: "https://example.com",
      repoUrl: "https://github.com/example",
    },
    {
      id: "interface",
      title: "Dynamic UI System",
      description:
        "A highly responsive component library focused on accessibility and motion design.",
      stack: ["React", "TypeScript", "Framer Motion"],
      demoUrl: "https://example.com",
      repoUrl: "https://github.com/example",
    },
  ];

  return (
    <section
      id="project"
      className="min-h-screen py-20 px-8 transition-colors
                 bg-[hsl(220_25%_98%)] text-[hsl(222_25%_10%)]
                 dark:bg-[hsl(225_20%_7%)] dark:text-white"
    >
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 rounded-full border px-3 py-2 text-xs mb-4
                          border-purple-500/20 bg-purple-500/5
                          dark:border-blue-500/30 dark:bg-blue-500/10">
            <span className="text-blue-600 dark:text-blue-400">💼</span>
            <span>Work</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Project Showcase
          </h2>
          
          <p className="text-lg max-w-3xl mx-auto text-gray-600 dark:text-white/70">
            End-to-end applications built with a focus on performance, security, and exceptional user experience.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-10%" }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((p) => (
            <motion.div 
              key={p.id} 
              variants={item}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] }
              }}
            >
              <div className="group h-full flex flex-col rounded-3xl border p-6 shadow-lg transition-all
                              border-gray-200 bg-white
                              dark:border-blue-500/20 dark:bg-[hsl(225_18%_10%)]
                              hover:shadow-xl">
                
                {/* Header */}
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold tracking-tight mb-2">
                      {p.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-white/70">
                      {p.description}
                    </p>
                  </div>
                  
                  <motion.div 
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="grid h-12 w-12 place-items-center shrink-0 rounded-2xl transition-all
                               bg-gray-100 text-gray-700
                               dark:bg-white/10 dark:text-white
                               group-hover:bg-blue-500 group-hover:text-white
                               dark:group-hover:bg-blue-500"
                  >
                    <ExternalLink className="h-5 w-5" />
                  </motion.div>
                </div>

                {/* Stack Tags */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {p.stack.map((Project, index) => (
                    <motion.span
                      key={Project}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ 
                        delay: index * 0.1,
                        duration: 0.3,
                        ease: [0.16, 1, 0.3, 1]
                      }}
                      whileHover={{ scale: 1.05 }}
                      className="rounded-full px-3 py-1 text-xs font-medium
                                 bg-gray-100 text-gray-700
                                 dark:bg-white/10 dark:text-white"
                    >
                      {Project}
                    </motion.span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="mt-auto pt-6 grid grid-cols-2 gap-3">
                  <motion.a
                    href={p.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ 
                      type: "spring",
                      stiffness: 400,
                      damping: 20
                    }}
                    className="flex items-center justify-center rounded-xl px-4 py-2.5 text-sm font-semibold
                               bg-blue-500 text-white
                               hover:bg-blue-600 transition-colors"
                  >
                    Demo
                  </motion.a>
                  
                  <motion.a
                    href={p.repoUrl}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ 
                      type: "spring",
                      stiffness: 400,
                      damping: 20
                    }}
                    className="flex items-center justify-center rounded-xl px-4 py-2.5 text-sm font-semibold border
                               border-gray-300 bg-white text-gray-700
                               dark:border-white/20 dark:bg-white/10 dark:text-white
                               hover:bg-gray-50 dark:hover:bg-white/20 transition-colors"
                  >
                    Repo
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}