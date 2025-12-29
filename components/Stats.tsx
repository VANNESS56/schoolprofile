"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Users2, GraduationCap, Trophy, Target } from "lucide-react";

const stats = [
  { label: "Siswa Aktif", value: 1200, suffix: "+", icon: <Users2 className="w-5 h-5" />, color: "from-blue-600 to-cyan-500" },
  { label: "Tenaga Pengajar", value: 85, suffix: "", icon: <GraduationCap className="w-5 h-5" />, color: "from-indigo-600 to-blue-500" },
  { label: "Juara Nasional", value: 150, suffix: "+", icon: <Trophy className="w-5 h-5" />, color: "from-blue-700 to-indigo-600" },
  { label: "Lulusan PTN", value: 98, suffix: "%", icon: <Target className="w-5 h-5" />, color: "from-cyan-600 to-blue-600" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

export default function Stats() {
  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Dekorasi Background Halus */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-100 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-100 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="relative group p-8 rounded-[2.5rem] bg-white border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(59,130,246,0.1)] transition-all duration-500"
            >
              {/* Icon Badge */}
              <div className={`mb-6 w-12 h-12 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center text-white shadow-lg shadow-blue-200 group-hover:scale-110 transition-transform duration-500`}>
                {stat.icon}
              </div>

              {/* Number */}
              <div className={`text-4xl md:text-5xl font-black tracking-tighter bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>

              {/* Label */}
              <div className="text-slate-500 font-semibold text-sm tracking-wide uppercase">
                {stat.label}
              </div>

              {/* Dekorasi Garis Hover */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-blue-600 to-cyan-400 group-hover:w-1/3 transition-all duration-500 rounded-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}