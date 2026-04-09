import { motion, AnimatePresence } from 'framer-motion';
import {
  ExternalLink,
  Github,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';

const projects = [
  {
    title: 'E-Commerce Platform',
    description:
      'Platform e-commerce modern dengan fitur lengkap termasuk payment gateway, inventory management, dan analytics dashboard.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    image: '🛒',
    color: 'from-blue-500 to-cyan-400',
    github: '#',
    demo: '#',
  },
  {
    title: 'Learning Management System',
    description:
      'Platform pembelajaran online dengan video streaming, quiz interaktif, dan progress tracking.',
    tags: ['Next.js', 'TypeScript', 'MongoDB', 'WebRTC'],
    image: '📚',
    color: 'from-cyan-400 to-blue-600',
    github: '#',
    demo: '#',
  },
  {
    title: 'Social Media Dashboard',
    description:
      'Dashboard analytics untuk social media dengan real-time data visualization dan reporting.',
    tags: ['React', 'D3.js', 'Firebase', 'Tailwind'],
    image: '📊',
    color: 'from-blue-400 to-cyan-300',
    github: '#',
    demo: '#',
  },
  {
    title: 'AI Content Generator',
    description:
      'Tool untuk generate konten menggunakan AI dengan integrasi berbagai model language.',
    tags: ['Python', 'FastAPI', 'OpenAI', 'React'],
    image: '🤖',
    color: 'from-cyan-300 to-blue-500',
    github: '#',
    demo: '#',
  },
];

export default function ProjectsSection() {
  const [index, setIndex] = useState(0);
  const [isHover, setIsHover] = useState(false);

  useEffect(() => {
    if (isHover) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % projects.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isHover]);

  const next = () => setIndex((prev) => (prev + 1) % projects.length);
  const prev = () =>
    setIndex((prev) => (prev - 1 + projects.length) % projects.length);

  return (
    <section
      id="projects"
      className="py-16 bg-gradient-to-b from-[#0a192f] via-[#0f172a] to-[#020617]"
    >
      <div className="container mx-auto px-4">

        {/* HEADER */}
        <div className="text-center mb-12">
          <span className="text-cyan-400 font-medium mb-2 block tracking-wider">
            Portfolio
          </span>

          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
            Projects &amp; Karya
          </h2>

          <div className="w-20 h-1 bg-cyan-400 mx-auto rounded-full shadow-[0_0_12px_rgba(34,211,238,0.9)]" />
        </div>

        {/* CAROUSEL */}
        <div
          className="relative max-w-3xl mx-auto"
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.4 }}
              className="p-4 rounded-2xl bg-white/5 backdrop-blur border border-white/10 shadow-lg hover:shadow-cyan-400/20 transition"
            >
              {/* IMAGE */}
              <div
                className={`aspect-video rounded-xl mb-4 flex items-center justify-center bg-gradient-to-br ${projects[index].color} shadow-[0_0_20px_rgba(34,211,238,0.3)]`}
              >
                <span className="text-6xl">
                  {projects[index].image}
                </span>
              </div>

              {/* TITLE */}
              <h3 className="text-xl font-bold mb-2 text-white">
                {projects[index].title}
              </h3>

              {/* DESC */}
              <p className="text-blue-200 mb-4">
                {projects[index].description}
              </p>

              {/* TAGS */}
              <div className="flex flex-wrap gap-2 mb-4">
                {projects[index].tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 text-xs rounded-md bg-cyan-400/10 text-cyan-300 border border-cyan-400/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* BUTTON */}
              <div className="flex gap-2">
                {projects[index].github !== '#' && (
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-cyan-400/30 text-cyan-300 hover:bg-cyan-400/10 hover:shadow-[0_0_10px_rgba(34,211,238,0.5)]"
                    asChild
                  >
                    <a href={projects[index].github}>
                      <Github className="h-4 w-4 mr-1" />
                      Code
                    </a>
                  </Button>
                )}

                {projects[index].demo !== '#' && (
                  <Button
                    size="sm"
                    className="bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-semibold hover:shadow-[0_0_15px_rgba(34,211,238,0.8)]"
                    asChild
                  >
                    <a href={projects[index].demo}>
                      <ExternalLink className="h-4 w-4 mr-1" />
                      Demo
                    </a>
                  </Button>
                )}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* NAV */}
          <Button
            size="icon"
            variant="outline"
            className="absolute left-[-40px] top-1/2 -translate-y-1/2 border-cyan-400/30 text-cyan-300 hover:bg-cyan-400/10"
            onClick={prev}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>

          <Button
            size="icon"
            variant="outline"
            className="absolute right-[-40px] top-1/2 -translate-y-1/2 border-cyan-400/30 text-cyan-300 hover:bg-cyan-400/10"
            onClick={next}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>

          {/* DOTS */}
          <div className="flex justify-center gap-2 mt-4">
            {projects.map((_, i) => (
              <div
                key={i}
                onClick={() => setIndex(i)}
                className={`h-1.5 rounded-full cursor-pointer transition-all ${
                  i === index
                    ? 'w-6 bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.9)]'
                    : 'w-2 bg-blue-900'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}