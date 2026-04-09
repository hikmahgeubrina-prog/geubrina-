import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Youtube, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import ThreeScene from "./ThreeScene";

export default function HeroSection() {
  const scrollTo = (id) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const socials = [
    { icon: Github, href: "https://github.com/hikmahgeubrina-prog", label: "GitHub" },
    // { icon: Linkedin, href: "https://linkedin.com/", label: "LinkedIn" },
    // { icon: Youtube, href: "https://youtube.com/", label: "YouTube" },
    { icon: Instagram, href: "https://www.instagram.com/gebrinaahkmh_?igsh=MThyaG92bG43N3BudA==", label: "Instagram" },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden 
      bg-gradient-to-br from-[#020617] via-[#020c2b] to-[#001233]"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute w-full h-full bg-[radial-gradient(circle_at_top,rgba(0,140,255,0.15),transparent_60%)]" />
        <div className="absolute inset-0 animate-pulse opacity-20 bg-[linear-gradient(120deg,transparent,rgba(0,170,255,0.4),transparent)] blur-2xl" />
      </div>

      <ThreeScene />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">

          {/* FOTO PROFIL */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-shrink-0"
          >
            <div className="w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden 
              border-4 border-blue-400/40 shadow-[0_0_25px_rgba(0,140,255,0.8)]">
              
              <img
                src="/WhatsApp Image 2026-04-09 at 17.53.22.jpeg" // ganti dengan foto kamu
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* TEXT CONTENT */}
          <div className="text-center md:text-left max-w-2xl">

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

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="font-display text-4xl md:text-6xl font-bold mb-6 text-white"
            >
              Come with me <br />
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 text-transparent bg-clip-text">
                & Explore my world
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-lg text-blue-200/80 mb-8"
            >
              This website is a reflection of who I am. Take a moment to explore
              and discover more about me.
            </motion.p>

            {/* Buttons */}
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
                Lihat Projects
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="rounded-full px-8 border-blue-400 text-blue-300 
                hover:bg-blue-500/10"
                onClick={() => scrollTo("#contact")}
              >
                Hubungi Saya
              </Button>
            </motion.div>

            {/* Social */}
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

      {/* Scroll */}
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