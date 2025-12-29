"use client";
import { motion } from "framer-motion";
import { GraduationCap, Facebook, Instagram, Twitter, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-50 border-t border-slate-200 pt-16 pb-8">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <GraduationCap className="text-white w-5 h-5" />
              </div>
              <span className="text-slate-900 font-bold text-xl tracking-tight">Vanness<span className="text-blue-600">School</span></span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed mb-6">
              Membentuk generasi unggul dengan pendidikan berbasis teknologi dan karakter mulia sejak tahun 2026.
            </p>
            <div className="flex gap-4">
              {[Facebook, Instagram, Twitter].map((Icon, i) => (
                <motion.a 
                  key={i} 
                  href="#" 
                  whileHover={{ y: -3 }}
                  className="w-10 h-10 bg-white border border-slate-200 rounded-full flex items-center justify-center text-slate-400 hover:text-blue-600 hover:border-blue-600 transition-all shadow-sm"
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-slate-900 font-bold mb-6">Tautan Cepat</h4>
            <ul className="space-y-4">
              {["Tentang Kami", "Program Studi", "Pendaftaran", "Berita Utama"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-slate-500 hover:text-blue-600 text-sm transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-slate-900 font-bold mb-6">Akademik</h4>
            <ul className="space-y-4">
              {["Kurikulum", "Kalender Pendidikan", "E-Learning", "Perpustakaan"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-slate-500 hover:text-blue-600 text-sm transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-slate-900 font-bold mb-6">Kontak Kami</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-slate-500">
                <MapPin size={18} className="text-blue-600 shrink-0" />
                <span>Jl. Perumnas No. 123, Kota Indonesia, Konoha</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-500">
                <Phone size={18} className="text-blue-600 shrink-0" />
                <span>+62 899-999-1950</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-500">
                <Mail size={18} className="text-blue-600 shrink-0" />
                <span>info@vannessschool.sch.id</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-slate-200 flex flex-col md:row justify-between items-center gap-4">
          <p className="text-slate-400 text-xs text-center">
            © {currentYear} Vanness School. Hak Cipta Dilindungi Undang-Undang.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-slate-400 hover:text-slate-600 text-xs transition-colors">Privacy Policy</a>
            <a href="#" className="text-slate-400 hover:text-slate-600 text-xs transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}