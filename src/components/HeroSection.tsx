import { motion } from "framer-motion";
import { ArrowDown, Github, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import ThreeScene from "./ThreeScene";

export default function HeroSection() {
  const scrollTo = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const socials = [
    {
      icon: Github,
      href: "https://github.com/hikmahgeubrina-prog",
      label: "GitHub",
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/gebrinaahkmh_",
      label: "Instagram",
    },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden 
      bg-gradient-to-br from-[#020617] via-[#020c2b] to-[#001233]"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute w-full h-full bg-[radial-gradient(circle_at_top,rgba(0,140,255,0.15),transparent_60%)]" />
        <div className="absolute inset-0 animate-pulse opacity-20 bg-[linear-gradient(120deg,transparent,rgba(0,170,255,0.4),transparent)] blur-2xl" />
      </div>

      <ThreeScene />

      {/* CONTENT */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-16">

          {/* FOTO */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-shrink-0"
          >
            <div
             className="w-[220px] h-[220px] 
                    sm:w-[260px] sm:h-[260px]
                    md:w-[320px] md:h-[320px]
                    lg:w-[380px] lg:h-[380px] 
              border-4 border-blue-400/40 
              shadow-[0_0_25px_rgba(0,140,255,0.8)]"
            >
              <img
                src="/WhatsApp Image 2026-04-09 at 17.53.22.jpeg"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* TEXT */}
          <div className="text-center md:text-left max-w-lg md:pl-6">

            {/* Badge */}
            <motion.span
              className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-6
              bg-white/5 backdrop-blur-md border border-blue-400/30 text-blue-300 
              shadow-[0_0_15px_rgba(0,140,255,0.5)]"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              👋 Hello! Come get to know me
            </motion.span>

            {/* TITLE */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight"
            >
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 text-transparent bg-clip-text">
                geubrina hikmah
              </span>
            </motion.h1>

            {/* DESC */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-lg text-blue-200/80 mb-8"
            >
              This website is a reflection of who I am. Take a moment to explore
              and discover more about me.
            </motion.p>

            {/* BUTTON */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-wrap gap-4 justify-center md:justify-start mb-8"
            >
              <Button
                size="lg"
                className="rounded-full px-8 text-white 
                bg-gradient-to-r from-blue-600 to-cyan-500 
                shadow-[0_0_20px_rgba(0,140,255,0.8)] hover:scale-105 transition"
                onClick={() => scrollTo("#projects")}
              >
                View Projects
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="rounded-full px-8 border-blue-400 text-blue-300 
                hover:bg-blue-500/10"
                onClick={() => scrollTo("#contact")}
              >
                Contact Me
              </Button>
            </motion.div>

            {/* SOCIAL */}
            <div className="flex gap-5 justify-center md:justify-start">
              {socials.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-white/5 border border-blue-400/20
                    hover:shadow-[0_0_15px_rgba(0,140,255,0.8)] transition"
                  >
                    <Icon className="h-5 w-5 text-blue-300" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* SCROLL */}
      <button
        onClick={() => scrollTo("#about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 p-3 rounded-full 
        bg-white/5 border border-blue-400/30 animate-bounce"
      >
        <ArrowDown className="h-5 w-5 text-blue-400" />
      </button>
    </section>
  );
}