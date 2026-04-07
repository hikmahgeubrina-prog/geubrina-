import { motion } from "framer-motion";

/* =========================
   DATA
========================= */
const skills = {
  frontend: [
    { name: "React", level: 95 },
    { name: "TypeScript", level: 90 },
    { name: "Next.js", level: 88 },
    { name: "Tailwind CSS", level: 95 },
    { name: "Vue.js", level: 75 },
  ],
  backend: [
    { name: "Node.js", level: 90 },
    { name: "Python", level: 85 },
    { name: "PostgreSQL", level: 88 },
    { name: "MongoDB", level: 82 },
    { name: "GraphQL", level: 78 },
  ],
  tools: [
    { name: "Git", level: 95 },
    { name: "Docker", level: 80 },
    { name: "AWS", level: 75 },
    { name: "Figma", level: 85 },
    { name: "CI/CD", level: 82 },
  ],
};

/* =========================
   SKILL BAR
========================= */
function SkillBar({ name, level, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="space-y-2"
    >
      <div className="flex justify-between text-gray-300">
        <span className="font-medium">{name}</span>
        <span className="text-sm">{level}%</span>
      </div>

      <div className="h-2 bg-gray-800 rounded-full overflow-hidden relative">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: delay + 0.2 }}
          className="h-full rounded-full bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500 relative"
        >
          {/* lightning shimmer */}
          <div className="absolute inset-0 shimmer" />
        </motion.div>
      </div>
    </motion.div>
  );
}

/* =========================
   MAIN COMPONENT
========================= */
export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="relative py-20 md:py-32 bg-gradient-to-b from-gray-900 via-gray-950 to-black overflow-hidden"
    >
      {/* LIGHTNING BACKGROUND */}
      <div className="absolute inset-0 lightning-bg pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-blue-400 font-medium mb-2 block tracking-wider">
            KEAHLIAN
          </span>

          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Skills & Teknologi
          </h2>

          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full glow" />
        </motion.div>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "Frontend",
              icon: "🎨",
              data: skills.frontend,
              delay: 0,
            },
            {
              title: "Backend",
              icon: "⚙️",
              data: skills.backend,
              delay: 0.1,
            },
            {
              title: "Tools",
              icon: "🛠️",
              data: skills.tools,
              delay: 0.2,
            },
          ].map((section, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: section.delay }}
              className="p-6 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 shadow-lg hover:shadow-blue-500/20 transition-all"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-blue-500/10 glow">
                  <span className="text-2xl">{section.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-white">
                  {section.title}
                </h3>
              </div>

              <div className="space-y-4">
                {section.data.map((skill, index) => (
                  <SkillBar
                    key={skill.name}
                    {...skill}
                    delay={index * 0.1}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* STYLE */}
      <style jsx>{`
        .glow {
          box-shadow: 0 0 10px rgba(59, 130, 246, 0.6);
        }

        .lightning-bg {
          background: radial-gradient(
              circle at 20% 20%,
              rgba(59, 130, 246, 0.1),
              transparent
            ),
            radial-gradient(
              circle at 80% 80%,
              rgba(168, 85, 247, 0.1),
              transparent
            );
          animation: lightningMove 6s infinite linear;
        }

        @keyframes lightningMove {
          0% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(20px, -20px);
          }
          100% {
            transform: translate(0, 0);
          }
        }

        .shimmer {
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.5),
            transparent
          );
          animation: shimmerMove 2s infinite;
        }

        @keyframes shimmerMove {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </section>
  );
}