"use client";
import { motion } from "framer-motion";

const photos = [
  { src: "https://images.unsplash.com/photo-1523050335392-9ae824979603?w=800", size: "md:col-span-2 md:row-span-2" },
  { src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800", size: "md:col-span-1 md:row-span-1" },
  { src: "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800", size: "md:col-span-1 md:row-span-1" },
  { src: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?w=800", size: "md:col-span-1 md:row-span-1" },
  { src: "https://images.unsplash.com/photo-1511629091441-ee46146481b6?w=800", size: "md:col-span-2 md:row-span-1" },
];

export default function Gallery() {
  return (
    <section id="galeri" className="py-24 bg-white">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900">Galeri Kegiatan</h2>
          <div className="h-1.5 w-20 bg-blue-600 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[200px]">
          {photos.map((photo, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 0.98 }}
              className={`relative overflow-hidden rounded-[2.5rem] bg-slate-100 ${photo.size}`}
            >
              <img 
                src={photo.src} 
                alt="School Activity" 
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-end p-6">
                <p className="text-white text-sm font-medium">Kegiatan Belajar Mengajar 2024</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}