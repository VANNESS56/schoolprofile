"use client";
import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { Users2, Trophy, Target, GraduationCap } from "lucide-react";

const stats = [
  { label: "Siswa Aktif", value: 1200, suffix: "+", icon: <Users2 className="w-5 h-5" />, color: "from-blue-600 to-cyan-500" },
  { label: "Tenaga Pengajar", value: 85, suffix: "", icon: <GraduationCap className="w-5 h-5" />, color: "from-indigo-600 to-blue-500" },
  { label: "Juara Nasional", value: 150, suffix: "+", icon: <Trophy className="w-5 h-5" />, color: "from-blue-700 to-indigo-600" },
  { label: "Lulusan PTN", value: 98, suffix: "%", icon: <Target className="w-5 h-5" />, color: "from-cyan-600 to-blue-600" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const [vibe, setVibe] = useState(false);
  const countRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVibe(true);
        }
      },
      { threshold: 0.1 } // Hanya butuh 10% terlihat untuk mulai
    );

    if (countRef.current) observer.observe(countRef.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (vibe) {
      let start = 0;
      const end = value;
      const duration = 2000; // 2 detik
      const increment = end / (duration / 16); // 60fps

      const handle = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(handle);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(handle);
    }
  }, [vibe, value]);

  return <span ref={countRef}>{count.toLocaleString()}{suffix}</span>;
}

export default function Stats() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="p-6 md:p-8 rounded-[2.5rem] bg-white border border-slate-100 shadow-sm flex flex-col items-center text-center"
            >
              <div className={`mb-4 w-12 h-12 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center text-white shadow-lg`}>
                {stat.icon}
              </div>
              <div className={`text-3xl md:text-4xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-slate-400 font-bold text-[10px] uppercase tracking-widest mt-2">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
