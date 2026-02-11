import { useState, useEffect, useRef, useSyncExternalStore } from "react";
import Home from "./home";
import About from "../components/About";
import Skills from "../components/Skills";
import Project from "../components/Project";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

function usePrefersDark() {
  return useSyncExternalStore(
    (cb) => {
      const m = window.matchMedia("(prefers-color-scheme: dark)");
      m.addEventListener("change", cb);
      return () => m.removeEventListener("change", cb);
    },
    () => window.matchMedia("(prefers-color-scheme: dark)").matches,
    () => false
  );
}

export default function Landing() {
  const [theme, setTheme] = useState("system");
  const [navScrolled, setNavScrolled] = useState(false);
  const scrollRef = useRef(null);
  const prefersDark = usePrefersDark();
  const resolvedDark = theme === "system" ? prefersDark : theme === "dark";

  useEffect(() => {
    const html = document.documentElement;
    if (resolvedDark) {
      html.setAttribute("data-theme", "dark");
    } else {
      html.removeAttribute("data-theme");
    }
  }, [resolvedDark]);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const onScroll = () => setNavScrolled(el.scrollTop > 20);
    onScroll();
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={resolvedDark ? "dark" : ""}>
      <div ref={scrollRef} className="h-screen overflow-y-auto scroll-smooth">
        <Home dark={resolvedDark} theme={theme} setTheme={setTheme} navScrolled={navScrolled} />
        <About dark={resolvedDark} />
        <Skills dark={resolvedDark} />
        <Project dark={resolvedDark} />
        <Contact dark={resolvedDark} />
        <Footer dark={resolvedDark} /> 
      </div>
    </div>
  );
}