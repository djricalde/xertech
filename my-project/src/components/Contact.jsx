/* eslint-disable no-unused-vars */
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, Github, Linkedin, Facebook, Instagram, Mail } from "lucide-react";

export default function Contact() {
  const [sending, setSending] = useState(false);

  function onSubmit(e) {
    e.preventDefault();
    setSending(true);
  
    window.setTimeout(() => {
      setSending(false);
      alert("Message sent! I'll get back to you as soon as possible.");
      e.target.reset();
    }, 700);
  }

  return (
    <section 
      id="contact"
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
          <div className="inline-flex items-center gap-2 rounded-full border px-3 py-2 text-sm mb-4
                          border-blue-500/20 bg-blue-500/5
                          dark:border-blue-500/30 dark:bg-blue-500/10">
            <span className="text-blue-600 dark:text-blue-400">✉️</span>
            <span>Reach Out</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's Connect
          </h2>
          
          <p className="text-lg max-w-3xl mx-auto text-gray-600 dark:text-white/70">
            Interested in working together or just want to say hi? My inbox is always open.
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-3xl border p-8 shadow-1g
                       border-gray-200 bg-white
                       dark:border-blue-500/20 dark:bg-[hsl(225_18%_10%)]"
          >
            <form onSubmit={onSubmit} className="grid gap-6">
              {/* Name Field */}
              <div className="grid gap-2">
                <label className="text-sm font-medium" htmlFor="name">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="How should I call you?"
                  required
                  className="rounded-xl border px-4 py-3 text-sm transition-all
                             border-gray-300 bg-white text-gray-900
                             dark:border-white/20 dark:bg-white/5 dark:text-white
                             focus:outline-none focus:ring-2 focus:ring-blue-500
                             placeholder:text-gray-400 dark:placeholder:text-white/40"
                />
              </div>

              {/* Email Field */}
              <div className="grid gap-2">
                <label className="text-sm font-medium" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  required
                  className="rounded-xl border px-4 py-3 text-sm transition-all
                             border-gray-300 bg-white text-gray-900
                             dark:border-white/20 dark:bg-white/5 dark:text-white
                             focus:outline-none focus:ring-2 focus:ring-blue-500
                             placeholder:text-gray-400 dark:placeholder:text-white/40"
                />
              </div>

              {/* Message Field */}
              <div className="grid gap-2">
                <label className="text-sm font-medium" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="What's on your mind?"
                  rows={5}
                  required
                  className="rounded-xl border px-4 py-3 text-sm transition-all resize-none
                             border-gray-300 bg-white text-gray-900
                             dark:border-white/20 dark:bg-white/5 dark:text-white
                             focus:outline-none focus:ring-2 focus:ring-blue-500
                             placeholder:text-gray-400 dark:placeholder:text-white/40"
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={sending}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ 
                  type: "spring",
                  stiffness: 400,
                  damping: 20
                }}
                className="flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold
                           bg-blue-500 text-white
                           hover:bg-blue-600 transition-colors
                           disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {sending ? "Sending..." : "Send message"}
                <ArrowRight className="h-4 w-4" />
              </motion.button>
            </form>
          </motion.div>

          {/* Right Column */}
          <div className="grid gap-6 content-start">
            {/* Social Links Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-3xl border p-6 shadow-lg
                         border-gray-200 bg-white
                         dark:border-blue-500/20 dark:bg-[hsl(225_18%_10%)]"
            >
              <div className="text-sm font-medium mb-2">Social Channels</div>
              <p className="text-sm text-gray-600 dark:text-white/70 mb-5">
                Where to find my latest updates and projects.
              </p>

              <div className="grid gap-2">
                {[
                  { icon: Github, label: "GitHub", href: "https://github.com/DylanRicalde" },
                  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/" },
                  { icon: Facebook, label: "Facebook", href: "https://www.facebook.com/dylan.ricalde.5/" },
                  { icon: Instagram, label: "Instagram", href: "https://instagram.com/" },
                  { icon: Mail, label: "Email", href: "mailto:dylanricalde20@gmail.com" }
                ].map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target={social.label !== "Email" ? "_blank" : undefined}
                    rel={social.label !== "Email" ? "noreferrer" : undefined}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                      delay: index * 0.1,
                      duration: 0.4,
                      ease: [0.16, 1, 0.3, 1]
                    }}
                    whileHover={{ x: 5 }}
                    className="flex items-center justify-between rounded-2xl border px-4 py-3 text-sm font-medium transition-all
                               border-gray-200 bg-gray-50
                               dark:border-white/10 dark:bg-white/5
                               hover:bg-gray-100 dark:hover:bg-white/10"
                  >
                    <span className="inline-flex items-center gap-2">
                      <social.icon className="h-4 w-4" /> {social.label}
                    </span>
                    <ExternalLink className="h-4 w-4 text-gray-500 dark:text-white/60" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Collaboration Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                delay: 0.2,
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1]
              }}
              className="rounded-3xl border p-6 shadow-lg
                         border-gray-200 bg-white
                         dark:border-purple-500/20 dark:bg-[hsl(225_18%_10%)]"
            >
              <div className="text-sm font-medium mb-2">Collaboration</div>
              <p className="text-sm text-gray-600 dark:text-white/70">
                I'm passionate about building impactful software. If you have a project
                in mind or just want to chat tech, feel free to reach out.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}