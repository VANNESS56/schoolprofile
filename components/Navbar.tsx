"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GraduationCap, Menu, X, ArrowRight } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "Visi Misi", id: "visi-misi" },
    { name: "Fasilitas", id: "fasilitas" },
    { name: "Ekskul", id: "ekskul" },
    { name: "Galeri", id: "galeri" },
    { name: "Kontak", id: "kontak" },
  ];

  return (
    <div className="fixed w-full flex justify-center top-6 z-[100] px-4">
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={`flex items-center justify-between px-6 py-3 rounded-full transition-all duration-500 w-full max-w-6xl border ${
          isScrolled 
            ? "bg-white/70 backdrop-blur-xl border-slate-200 shadow-lg" 
            : "bg-white/30 border-transparent"
        }`}
      >
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
          <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
            <GraduationCap className="text-white w-6 h-6" />
          </div>
          <span className="text-slate-900 font-bold text-xl hidden sm:block">Vanness <span className="text-blue-600">School</span></span>
        </div>

        <div className="hidden md:flex items-center gap-2">
          {menuItems.map((item) => (
            <a key={item.id} href={`#${item.id}`} className="px-4 py-2 text-sm text-slate-600 hover:text-blue-600 font-medium transition-all rounded-full hover:bg-blue-50">
              {item.name}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button className="bg-slate-900 text-white px-5 py-2.5 rounded-full font-bold text-sm hover:bg-blue-600 transition-all flex items-center gap-2">
            PPDB <ArrowRight className="w-4 h-4" />
          </button>
          <button className="md:hidden text-slate-900" onClick={() => setMobileMenu(!mobileMenu)}>
            {mobileMenu ? <X /> : <Menu />}
          </button>
        </div>
      </motion.nav>
    </div>
  );
}