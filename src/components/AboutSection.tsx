import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function AboutSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const accordionData = [
    {
      title: "Who am I?",
      content:
        "I am a student who loves learning new things, especially mathematics and creativity. I really enjoy reading books and exploring knowledge that helps me grow every day.",
    },
    {
      title: "My Goals",
      content:
        "To keep learning, improve myself, and achieve meaningful success in the future.",
    },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section
      id="about"
      className="relative py-20 md:py-32 bg-gray-950 text-gray-200 overflow-hidden"
    >
      {/* LIGHT EFFECT */}
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
          
          {/* FOTO PROFIL */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="flex justify-center"
          >
            <div className="relative group">
              
              {/* glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 blur-2xl opacity-30 group-hover:opacity-50 transition rounded-full"></div>

              {/* FOTO */}
              <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-gray-800 shadow-2xl">
                <img
                  src="/aauu.jpeg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
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
              My name is <span className="text-blue-400">Gebrina Hikmah</span>. 
              I am a student with a strong interest in mathematics and learning.
            </p>

            {/* ACCORDION */}
            <div className="pt-6 space-y-4">
              {accordionData.map((item, index) => (
                <div
                  key={index}
                  className="border border-gray-800 rounded-xl overflow-hidden"
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full flex justify-between items-center p-4 bg-gray-900 hover:bg-gray-800 transition"
                  >
                    <span className="text-left font-medium">
                      {item.title}
                    </span>
                    <ChevronDown
                      className={`transition-transform ${
                        activeIndex === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {activeIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="px-4 pb-4 text-gray-400"
                      >
                        {item.content}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}