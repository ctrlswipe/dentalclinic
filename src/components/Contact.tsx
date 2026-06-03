import React from 'react';
import { motion } from 'motion/react';
import { Send, Phone, Mail, MapPin } from 'lucide-react';

export const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-brand-primary mb-6">Programează-te acum</h2>
            <p className="text-slate-600 mb-10 leading-relaxed">
              Echipa noastră este pregătită să te ajute. Completează formularul de mai jos și te vom contacta în cel mai scurt timp posibil pentru a confirma programarea.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-brand-primary font-medium">
                <div className="w-10 h-10 bg-brand-secondary rounded-xl flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>
                <span>+40 712 345 678</span>
              </div>
              <div className="flex items-center gap-4 text-brand-primary font-medium">
                <div className="w-10 h-10 bg-brand-secondary rounded-xl flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <span>contact@dentalclinic.ro</span>
              </div>
              <div className="flex items-center gap-4 text-brand-primary font-medium">
                <div className="w-10 h-10 bg-brand-secondary rounded-xl flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <span>Strada Principală, Nr. 123, Orașul Tău</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="liquid-glass p-10 rounded-[40px] shadow-2xl"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-brand-primary ml-2">Nume Complet</label>
                  <input
                    type="text"
                    placeholder="Ex: Ion Popescu"
                    className="w-full px-6 py-4 rounded-2xl bg-white/50 border border-brand-primary/10 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-brand-primary ml-2">Telefon</label>
                  <input
                    type="tel"
                    placeholder="Ex: 0712 345 678"
                    className="w-full px-6 py-4 rounded-2xl bg-white/50 border border-brand-primary/10 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition-all"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-bold text-brand-primary ml-2">Serviciul Dorit</label>
                <select className="w-full px-6 py-4 rounded-2xl bg-white/50 border border-brand-primary/10 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition-all appearance-none">
                  <option>Stomatologie Copii</option>
                  <option>Stomatologie Familie</option>
                  <option>Profilaxie</option>
                  <option>Urgențe</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-brand-primary ml-2">Mesaj (Opțional)</label>
                <textarea
                  rows={4}
                  placeholder="Cum te putem ajuta?"
                  className="w-full px-6 py-4 rounded-2xl bg-white/50 border border-brand-primary/10 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition-all"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-5 bg-brand-primary text-white rounded-2xl font-bold shadow-xl shadow-brand-primary/20 flex items-center justify-center gap-2 group"
              >
                Trimite Solicitarea
                <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
