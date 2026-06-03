import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export const Location = () => {
  return (
    <section id="location" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-brand-primary mb-8 leading-tight">Unde ne găsești?</h2>
            <div className="space-y-8">
              <div className="flex gap-6 items-start">
                <div className="w-14 h-14 bg-brand-secondary rounded-2xl flex items-center justify-center shrink-0">
                  <MapPin className="text-brand-primary w-7 h-7" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-brand-primary mb-2">Adresă</h4>
                  <p className="text-slate-600">Str. Gheorghe Doja nr.61, <br />Sighetu Marmației, România, 435500</p>
                </div>
              </div>
              
              <div className="flex gap-6 items-start">
                <div className="w-14 h-14 bg-brand-secondary rounded-2xl flex items-center justify-center shrink-0">
                  <Phone className="text-brand-primary w-7 h-7" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-brand-primary mb-2">Telefon</h4>
                  <p className="text-slate-600">+40 712 345 678</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative h-[500px] rounded-[40px] overflow-hidden shadow-2xl border-8 border-brand-secondary/30"
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2668.643261642838!2d23.8967453!3d47.9284567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4737976e8e8e8e8e%3A0x8e8e8e8e8e8e8e8e!2sStrada%20Gheorghe%20Doja%2061%2C%20Sighetu%20Marma%C5%A3iei%20435500!5e0!3m2!1sro!2sro!4v1710000000000!5m2!1sro!2sro" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
