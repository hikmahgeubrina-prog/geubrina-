import { motion } from 'framer-motion';

const skills = {
  Science: [
    { name: 'Biology', level: 95 },
    { name: 'Physics', level: 90 },
    { name: 'Math', level: 95 },
    { name: 'Chemistry', level: 90 },
  ],
  Languages: [
    { name: 'Indonesian Language', level: 90 },
    { name: 'English Language', level: 85 },
    { name: 'Arabic Language', level: 98 },
  ],
};

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="space-y-2"
    >
      <div className="flex justify-between items-center text-white">
        <span className="font-medium">{name}</span>
        <span className="text-sm text-blue-200">{level}%</span>
      </div>

      <div className="h-2 bg-blue-900/50 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: delay + 0.2, ease: 'easeOut' }}
          className="h-full rounded-full bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-300 shadow-[0_0_10px_rgba(56,189,248,0.8)]"
        />
      </div>
    </motion.div>
  );
}

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="py-20 md:py-32 bg-gradient-to-b from-[#0a192f] via-[#0f172a] to-[#020617]"
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-cyan-400 font-medium mb-2 block tracking-wider">
            Keahlian
          </span>

          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4 text-white">
            Skills & Teknologi
          </h2>

          <div className="w-20 h-1 bg-cyan-400 mx-auto rounded-full shadow-[0_0_12px_rgba(34,211,238,0.9)]" />
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Science */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-6 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 shadow-lg hover:shadow-cyan-500/20 transition"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-cyan-400/10 shadow-[0_0_10px_rgba(34,211,238,0.5)]">
                <span className="text-2xl">🧪</span>
              </div>
              <h3 className="font-display text-xl font-bold text-white">
                Science
              </h3>
            </div>

            <div className="space-y-4">
              {skills.Science.map((skill, index) => (
                <SkillBar key={skill.name} {...skill} delay={index * 0.1} />
              ))}
            </div>
          </motion.div>

          {/* Languages */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="p-6 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 shadow-lg hover:shadow-cyan-500/20 transition"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-cyan-400/10 shadow-[0_0_10px_rgba(34,211,238,0.5)]">
                <span className="text-2xl">🌐</span>
              </div>
              <h3 className="font-display text-xl font-bold text-white">
                Languages
              </h3>
            </div>

            <div className="space-y-4">
              {skills.Languages.map((skill, index) => (
                <SkillBar key={skill.name} {...skill} delay={index * 0.1} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}