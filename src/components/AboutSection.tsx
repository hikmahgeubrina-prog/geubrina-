import { motion } from "framer-motion";
import { Code2, Video } from "lucide-react";

export default function AboutSection() {
  const stats = [
    { icon: Code2, value: "50+", label: "my fav book" },
    { icon: Video, value: "100+", label: "achievment" },
  ];

  return (
    <section
      id="about"
      className="relative py-20 md:py-32 bg-gray-950 text-gray-200 overflow-hidden"
    >
      {/* 🔵 LIGHTING EFFECT */}
      <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-blue-500 opacity-20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] bg-purple-500 opacity-20 blur-[120px] rounded-full"></div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="text-blue-400 font-medium tracking-wider">
            𝓪𝓫𝓸𝓾𝓽 𝓶𝓮
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-3 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Know Me Better.✦ ݁˖
          </h2>

          <div className="w-24 h-[3px] bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* CONTENT */}
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          
          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative group">
              
              {/* glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 blur-xl opacity-20 group-hover:opacity-40 transition"></div>

              <div className="relative aspect-square rounded-2xl overflow-hidden bg-gray-900 border border-gray-800 shadow-2xl flex items-center justify-center">
                <span className="text-8xl">👨‍💻</span>
              </div>

              {/* floating badge */}
              <div className="absolute -bottom-6 -right-6 p-4 bg-gray-900 rounded-xl shadow-lg border border-gray-700 backdrop-blur-md">
                <p className="font-bold text-2xl text-blue-400">5+ Tahun</p>
                <p className="text-sm text-gray-400">Pengalaman</p>
              </div>
            </div>
          </motion.div>

          {/* TEXT */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <h3 className="text-2xl md:text-3xl font-bold">
              Introduction & Education
            </h3>

            <p className="text-gray-400 leading-relaxed">
              𝙈𝙮 𝙣𝙖𝙢𝙚 𝙞𝙨 <span className="text-blue-400">𝙂𝙚𝙗𝙧𝙞𝙣𝙖 𝙃𝙞𝙠𝙢𝙖𝙝</span>. 
              𝙄 𝙬𝙖𝙨 𝙗𝙤𝙧𝙣 𝙞𝙣 𝘽𝙖𝙣𝙙𝙖 𝘼𝙘𝙚𝙝 𝙤𝙣 𝘿𝙚𝙘𝙚𝙢𝙗𝙚𝙧 27, 2009. 𝙈𝙮 𝙝𝙤𝙗𝙗𝙮 𝙞𝙨 𝙧𝙚𝙖𝙙𝙞𝙣𝙜.               
              𝙄 𝙖𝙢 𝙖 𝙨𝙩𝙪𝙙𝙚𝙣𝙩 𝙬𝙝𝙤 𝙝𝙖𝙨 𝙖 𝙜𝙧𝙚𝙖𝙩 𝙞𝙣𝙩𝙚𝙧𝙚𝙨𝙩 𝙞𝙣 𝙢𝙖𝙩𝙝𝙚𝙢𝙖𝙩𝙞𝙘𝙨.               
              𝘾𝙪𝙧𝙧𝙚𝙣𝙩𝙡𝙮, 𝙄 𝙖𝙢 𝙨𝙩𝙪𝙙𝙮𝙞𝙣𝙜 𝙖𝙩 𝙈𝘼𝙉 𝙈𝙤𝙙𝙚𝙡 𝘽𝙖𝙣𝙙𝙖 𝘼𝙘𝙚𝙝.
            </p>

            <p className="text-gray-400 leading-relaxed">
              <span className="text-blue-400">
              𝙄𝙛 𝙞 𝙝𝙖𝙙 𝙩𝙤 𝙙𝙚𝙨𝙘𝙧𝙞𝙗𝙚 𝙢𝙮 𝙨𝙚𝙡𝙛 𝙞𝙣 𝙩𝙝𝙧𝙚𝙚𝙚 𝙬𝙤𝙧𝙙𝙨: 𝘾𝙪𝙧𝙞𝙤𝙪𝙨, 𝙘𝙧𝙚𝙖𝙩𝙞𝙫𝙚, 𝙖𝙣𝙙 𝙘𝙤𝙣𝙨𝙩𝙖𝙣𝙡𝙮 𝙡𝙚𝙖𝙧𝙣𝙞𝙣𝙜. 𝙄 𝙗𝙚𝙡𝙞𝙚𝙫𝙚 𝙚𝙫𝙚𝙧𝙮 𝙙𝙖𝙮 𝙞𝙨 𝙖𝙣 𝙤𝙥𝙥𝙤𝙧𝙩𝙪𝙣𝙞𝙩𝙮 𝙩𝙤 𝙗𝙚𝙘𝙤𝙢𝙚 𝙖 𝙗𝙚𝙩𝙩𝙚𝙧 𝙫𝙚𝙧𝙨𝙞𝙤𝙣 𝙤𝙛 𝙤𝙪𝙧𝙨𝙚𝙡𝙫𝙚𝙨. 𝙎𝙤, 𝙞'𝙢 𝙣𝙤𝙩 𝙟𝙪𝙨𝙩 𝙝𝙚𝙧𝙚 𝙩𝙤 𝙞𝙣𝙩𝙧𝙤𝙙𝙪𝙘𝙚 𝙢𝙮𝙨𝙚𝙡𝙛, 𝙗𝙪𝙩 𝙖𝙡𝙨𝙤 𝙩𝙤 𝙜𝙧𝙤𝙬 𝙩𝙤𝙜𝙚𝙩𝙝𝙚𝙧..              </span>
            </p>

            {/* STATS (2 CARD SAJA) */}
            <div className="grid grid-cols-2 gap-4 pt-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.15 }}
                  className="p-5 bg-gray-900 rounded-xl text-center border border-gray-800 hover:border-blue-500 transition group"
                >
                  <stat.icon className="h-6 w-6 text-blue-400 mx-auto mb-2 group-hover:scale-110 transition" />
                  <p className="text-2xl font-bold">{stat.value}</p>
                  <p className="text-sm text-gray-400">{stat.label}</p>
                </motion.div>
              ))}
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}