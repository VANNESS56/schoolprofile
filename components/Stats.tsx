"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Users2, Trophy, Target, GraduationCap } from "lucide-react";

const stats = [
  { label: "Siswa Aktif", value: 1200, suffix: "+", icon: <Users2 className="w-5 h-5" />, color: "from-blue-600 to-cyan-500" },
  { label: "Tenaga Pengajar", value: 85, suffix: "", icon: <GraduationCap className="w-5 h-5" />, color: "from-indigo-600 to-blue-500" },
  { label: "Juara Nasional", value: 150, suffix: "+", icon: <Trophy className="w-5 h-5" />, color: "from-blue-700 to-indigo-600" },
  { label: "Lulusan PTN", value: 98, suffix: "%", icon: <Target className="w-5 h-5" />, color: "from-cyan-600 to-blue-600" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  
  // PERBAIKAN: Gunakan margin -50px agar animasi jalan lebih awal di HP
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const totalFrames = 60;
      const increment = end / totalFrames;
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, duration / totalFrames);
      
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

export default function Stats() {
  return (
    <section className="relative py-20 bg-white overflow-hidden">
      <div className="container mx-auto max-w-6xl px-6">
        {/* Grid disesuaikan: 2 kolom di HP, 4 kolom di Laptop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] bg-white border border-slate-100 shadow-sm flex flex-col items-center text-center"
            >
              <div className={`mb-4 w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center text-white`}>
                {stat.icon}
              </div>
              <div className={`text-2xl md:text-4xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-1`}>
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-slate-400 font-bold text-[10px] md:text-xs uppercase tracking-widest">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
