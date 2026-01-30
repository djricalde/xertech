import { useState, useEffect } from "react";
import Home from "./home";
import About from "../components/About";
import Tech from "../components/Tech";
import Project from "../components/Project";
import Contact from "../components/Contact";

export default function Landing() {
  const [dark, setDark] = useState(false);
  
  useEffect(() => {
    const html = document.documentElement;
    if (dark) {
      html.setAttribute("data-theme", "dark");
    } else {
      html.removeAttribute("data-theme");
    }
  }, [dark]);

  return (
    <div className={dark ? "dark" : ""}>
      <div className="h-screen overflow-y-auto scroll-smooth">
        <Home dark={dark} setDark={setDark} />
        <About dark={dark} />
        <Tech dark ={dark} />
        <Project dark ={dark} />
        <Contact dark ={dark} />
      </div>
    </div>
  );
}