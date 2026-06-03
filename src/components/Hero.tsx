import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles, Heart, ShieldCheck } from 'lucide-react';

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-secondary/30 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-brand-primary/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-brand-primary leading-[1.1] mb-6">
            Zâmbete sănătoase pentru întreaga familie
          </h1>
          <p className="text-lg text-slate-600 mb-8 max-w-lg">
            La Dental Clinic for Kids and Family, transformăm vizita la stomatolog într-o experiență plăcută și relaxantă pentru cei mici și cei mari.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <motion.a
              href="#location"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-brand-primary text-white rounded-2xl font-bold shadow-xl shadow-brand-primary/20 flex items-center gap-2 group"
            >
              Programează-te acum
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>
            <motion.a
              href="#about"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 liquid-glass text-brand-primary rounded-2xl font-bold"
            >
              Află mai multe
            </motion.a>
          </div>

          <div className="mt-12 flex items-center gap-8">
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-brand-primary">4000+</span>
              <span className="text-sm text-slate-500">Pacienți mulțumiți</span>
            </div>
            <div className="w-px h-10 bg-slate-200" />
            <div className="flex flex-col">
              <span className="text-sm text-slate-500">Fondat în</span>
              <span className="text-2xl font-bold text-brand-primary">2023</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative"
        >
          <div className="relative z-10 rounded-[40px] overflow-hidden shadow-2xl border-8 border-white/50">
            <img
              src="/echipa.png"
              alt="Echipa Dental Clinic"
              className="w-full h-auto"
              referrerPolicy="no-referrer"
            />
          </div>
          
          {/* Floating Cards */}
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-6 -right-6 z-20 liquid-glass p-4 rounded-2xl flex items-center gap-3"
          >
            <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
              <ShieldCheck className="text-emerald-600 w-6 h-6" />
            </div>
            <div>
              <p className="text-xs font-bold text-brand-primary">Siguranță Maximă</p>
              <p className="text-[10px] text-slate-500">Standarde înalte</p>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-6 -left-6 z-20 liquid-glass p-4 rounded-2xl flex items-center gap-3"
          >
            <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center">
              <Heart className="text-pink-600 w-6 h-6" />
            </div>
            <div>
              <p className="text-xs font-bold text-brand-primary">Fără Durere</p>
              <p className="text-[10px] text-slate-500">Tehnologie modernă</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
