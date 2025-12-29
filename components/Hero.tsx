"use client";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, GraduationCap, Laptop } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-10 bg-white overflow-hidden">
  
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-50/50 rounded-full blur-[120px] -z-10" />
      
      <div className="container mx-auto px-6 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          

          <div className="lg:col-span-6">
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-2xl mb-8 shadow-lg shadow-blue-200"
            >
              <Sparkles className="w-4 h-4 text-yellow-300 fill-current" />
              <span className="text-xs font-bold uppercase tracking-widest">Akreditasi A National</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-7xl font-black text-slate-900 leading-[1.1] tracking-tight mb-8"
            >
              Unlock Your <br />
              <span className="text-blue-600">Greatness.</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-slate-500 text-lg md:text-xl max-w-lg mb-12 leading-relaxed"
            >
              Temukan lingkungan belajar yang mendukung setiap langkah inovasi dan kreativitas siswa untuk masa depan yang gemilang.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-5"
            >
              <a href="#visi-misi">
                <button className="bg-slate-900 text-white px-10 py-5 rounded-3xl font-bold hover:bg-blue-600 transition-all shadow-2xl flex items-center gap-3">
                  Join Vanness School <ArrowRight className="w-5 h-5" />
                </button>
              </a>
              <button className="bg-white text-slate-900 border-2 border-slate-100 px-10 py-5 rounded-3xl font-bold hover:bg-slate-50 transition-all">
                Learn More
              </button>
            </motion.div>
          </div>

      
          <div className="lg:col-span-6 relative flex justify-center items-center h-[500px]">
            
         
            <motion.div
              animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-10 left-10 p-5 bg-white shadow-2xl rounded-3xl z-20 border border-slate-50"
            >
              <GraduationCap className="w-8 h-8 text-blue-600" />
            </motion.div>

        
            <motion.div
              animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-10 right-10 p-5 bg-white shadow-2xl rounded-3xl z-20 border border-slate-50"
            >
              <Laptop className="w-8 h-8 text-cyan-500" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative z-10 w-full h-full flex justify-center items-center"
            >
            
              <div className="absolute w-[400px] h-[400px] border-2 border-dashed border-blue-200 rounded-full animate-[spin_20s_linear_infinite]" />
              
              <motion.img 
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                src="https://www.transparentpng.com/download/student/I4E9X6-student-high-quality-png.png" 
                alt="Student Floating"
                className="max-h-full w-auto object-contain z-10 drop-shadow-[0_35px_35px_rgba(59,130,246,0.3)]"
              />
            </motion.div>

            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute bottom-1/4 -left-5 z-20 bg-white/80 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white"
            >
              <p className="text-2xl font-black text-blue-600 leading-none">95%</p>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Success Rate</p>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}