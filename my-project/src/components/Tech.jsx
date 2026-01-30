/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { Globe, Terminal, Database, Cpu } from "lucide-react";

export default function Tech() {
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const categories = [
    {
      title: "Frontend",
      icon: <Globe className="h-5 w-5" />,
      skills: ["HTML, CSS, JS", "React, TypeScript", "Tailwind CSS"],
    },
    {
      title: "Backend",
      icon: <Terminal className="h-5 w-5" />,
      skills: ["Node.js, Express", "RESTful APIs", "JWT Auth & Sessions"],
    },
    {
      title: "Database",
      icon: <Database className="h-5 w-5" />,
      skills: ["MongoDB / PostgreSQL", "CRUD Operations", "Data Modeling"],
    },
    {
      title: "DevOps & Tools",
      icon: <Cpu className="h-5 w-5" />,
      skills: ["Git & GitHub", "Environment Variables", "Postman & Vercel"],
    },
  ];

  return (
    <section 
      id="tech"
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
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 rounded-full border px-3 py-2 text-xs mb-4
                          border-purple-500/20 bg-purple-500/5
                          dark:border-blue-500/30 dark:bg-blue-500/10">
            <span className="text-blue-600 dark:text-blue-400">⚡</span>
            <span>Expertise</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical Toolkit
          </h2>
          
          <p className="text-lg max-w-3xl mx-auto text-gray-600 dark:text-white/70">
            Grouped by role, my tech stack represents a commitment to end-to-end web development.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-10%" }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {categories.map((cat) => (
            <motion.div 
              key={cat.title} 
              variants={item}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <div
                className="group h-full rounded-3xl border p-6 shadow-lg transition-all
                           border-gray-200 bg-white
                           dark:border-purple-500/20 dark:bg-[hsl(225_18%_10%)]
                           hover:shadow-xl"
              >
                {/* Icon & Title */}
                <div className="flex items-center gap-3 mb-5">
                  <motion.div 
                    className="grid h-12 w-12 place-items-center rounded-2xl transition-all
                               bg-gray-100 text-gray-700
                               dark:bg-white/10 dark:text-white
                               group-hover:bg-blue-500 group-hover:text-white
                               dark:group-hover:bg-blue-500"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    {cat.icon}
                  </motion.div>
                  <div className="text-xl font-bold tracking-tight">
                    {cat.title}
                  </div>
                </div>

                {/* Skills List */}
                <div className="space-y-3">
                  {cat.skills.map((Tech, index) => (
                    <motion.div
                      key={Tech}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.3 }}
                      className="flex items-center gap-3 text-sm text-gray-600 dark:text-white/70"
                    >
                      <div className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                      {Tech}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}