"use client";
import { motion } from "framer-motion";

const reviews = [
  { name: "Jokowoe", role: "Alumni 1945", text: "Selamat Berjuang, Sukses" },
  { name: "Raja Dewa", role: "Orang Tua Siswa", text: "Fasilitasnya lengkap dan guru-gurunya sangat peduli pada karakter anak." },
  { name: "Herman Deh Lu", role: "Alumni 2020", text: "Lingkungan belajar yang kompetitif tapi tetap suportif." },
  { name: "Gibran Rakabuomeng", role: "Siswa Aktif", text: "Ekskul robotiknya terbaik! Saya belajar banyak hal baru di sini." },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 mb-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Apa Kata Mereka?</h2>
      </div>
      
      <div className="flex gap-6 animate-marquee whitespace-nowrap">
        {[...reviews, ...reviews].map((rev, i) => (
          <div key={i} className="inline-block w-[350px] p-8 bg-slate-50 border border-slate-100 rounded-[2rem] whitespace-normal shadow-sm">
            <p className="text-slate-600 italic mb-6">"{rev.text}"</p>
            <div>
              <h4 className="font-bold text-slate-900">{rev.name}</h4>
              <p className="text-blue-600 text-xs">{rev.role}</p>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </section>
  );
}