import { motion } from "framer-motion";
import { ExternalLink, Github, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

/* =========================
   DATA
========================= */
const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "Platform e-commerce modern dengan fitur lengkap termasuk payment gateway, inventory management, dan analytics dashboard.",
    tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
    image: "🛒",
    color: "from-blue-500/20 to-cyan-500/20",
    github: "#",
    demo: "#",
  },
  {
    title: "Learning Management System",
    description:
      "Platform pembelajaran online dengan video streaming, quiz interaktif, dan progress tracking.",
    tags: ["Next.js", "TypeScript", "MongoDB", "WebRTC"],
    image: "📚",
    color: "from-purple-500/20 to-pink-500/20",
    github: "#",
    demo: "#",
  },
  {
    title: "Social Media Dashboard",
    description:
      "Dashboard analytics untuk social media dengan real-time data visualization dan reporting.",
    tags: ["React", "D3.js", "Firebase", "Tailwind"],
    image: "📊",
    color: "from-orange-500/20 to-red-500/20",
    github: "#",
    demo: "#",
  },
  {
    title: "AI Content Generator",
    description:
      "Tool untuk generate konten menggunakan AI dengan integrasi berbagai model language.",
    tags: ["Python", "FastAPI", "OpenAI", "React"],
    image: "🤖",
    color: "from-green-500/20 to-teal-500/20",
    github: "#",
    demo: "#",
  },
  {
    title: "Video Editing Tutorial",
    description:
      "Seri tutorial video editing dengan 100+ episode dan 10k+ subscribers.",
    tags: ["Premiere Pro", "After Effects", "YouTube"],
    image: "🎬",
    color: "from-red-500/20 to-orange-500/20",
    isContent: true,
    youtube: "#",
  },
  {
    title: "Coding Tips & Tricks",
    description:
      "Konten tips programming dan best practices untuk developer Indonesia.",
    tags: ["Instagram", "TikTok", "YouTube Shorts"],
    image: "💡",
    color: "from-cyan-500/20 to-blue-500/20",
    isContent: true,
    youtube: "#",
  },
];

/* =========================
   COMPONENT
========================= */
export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative py-20 md:py-32 bg-gradient-to-b from-gray-900 via-gray-950 to-black overflow-hidden"
    >
      {/* LIGHTNING BACKGROUND */}
      <div className="absolute inset-0 lightning-bg pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-blue-400 font-medium block mb-2 tracking-wider">
            PORTFOLIO
          </span>

          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Projects & Karya
          </h2>

          <div className="w-20 h-1 mx-auto rounded-full bg-gradient-to-r from-blue-400 to-purple-500 glow" />
        </motion.div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full p-6 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 hover:border-blue-400/40 shadow-lg hover:shadow-blue-500/20 transition-all duration-300 hover:-translate-y-2">
                
                {/* IMAGE */}
                <div
                  className={`aspect-video rounded-xl mb-4 flex items-center justify-center bg-gradient-to-br ${project.color} relative overflow-hidden`}
                >
                  <span className="text-6xl z-10">
                    {project.image}
                  </span>

                  {/* lightning overlay */}
                  <div className="absolute inset-0 lightning-overlay" />
                </div>

                {/* CONTENT */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    {project.isContent && (
                      <span className="px-2 py-0.5 text-xs rounded-full bg-blue-500/10 text-blue-400 font-medium">
                        Content
                      </span>
                    )}

                    <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-sm text-gray-400 line-clamp-2">
                    {project.description}
                  </p>

                  {/* TAGS */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs rounded-md bg-white/10 text-gray-300 border border-white/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* BUTTONS */}
                  <div className="flex gap-2 pt-2 flex-wrap">
                    {project.github && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="rounded-full border-white/20 hover:border-blue-400 hover:text-blue-400"
                        asChild
                      >
                        <a href={project.github}>
                          <Github className="h-4 w-4 mr-1" />
                          Code
                        </a>
                      </Button>
                    )}

                    {project.demo && (
                      <Button
                        size="sm"
                        className="rounded-full bg-gradient-to-r from-blue-500 to-purple-500 hover:opacity-90"
                        asChild
                      >
                        <a href={project.demo}>
                          <ExternalLink className="h-4 w-4 mr-1" />
                          Demo
                        </a>
                      </Button>
                    )}

                    {project.youtube && (
                      <Button
                        size="sm"
                        className="rounded-full bg-red-500 hover:bg-red-600"
                        asChild
                      >
                        <a href={project.youtube}>
                          <Play className="h-4 w-4 mr-1" />
                          Watch
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* STYLE */}
      <style jsx>{`
        .glow {
          box-shadow: 0 0 15px rgba(59, 130, 246, 0.7);
        }

        .lightning-bg {
          background: radial-gradient(
              circle at 20% 30%,
              rgba(59, 130, 246, 0.08),
              transparent
            ),
            radial-gradient(
              circle at 80% 70%,
              rgba(168, 85, 247, 0.08),
              transparent
            );
          animation: lightningMove 8s infinite linear;
        }

        .lightning-overlay {
          background: linear-gradient(
            120deg,
            transparent,
            rgba(255, 255, 255, 0.2),
            transparent
          );
          opacity: 0;
          transition: 0.3s;
        }

        .group:hover .lightning-overlay {
          opacity: 1;
        }

        @keyframes lightningMove {
          0% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(30px, -30px);
          }
          100% {
            transform: translate(0, 0);
          }
        }
      `}</style>
    </section>
  );
}