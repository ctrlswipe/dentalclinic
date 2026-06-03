import React from 'react';
import { motion } from 'motion/react';
import { Baby, Users, Stethoscope, Clock } from 'lucide-react';

const services = [
  {
    icon: Baby,
    title: 'Stomatologie Copii',
    description: 'Tratamente blânde și educative pentru cei mici, într-un mediu prietenos.',
  },
  {
    icon: Users,
    title: 'Stomatologie Familie',
    description: 'Îngrijire completă pentru adulți, de la profilaxie la estetică dentară.',
  },
  {
    icon: Stethoscope,
    title: 'Tehnologie Modernă',
    description: 'Echipamente de ultimă generație pentru diagnostic precis și tratament eficient.',
  },
  {
    icon: Clock,
    title: 'Urgențe Dentare',
    description: 'Suntem alături de tine atunci când ai cea mai mare nevoie de ajutor.',
  },
];

export const About = () => {
  return (
    <section id="about" className="py-24 bg-brand-secondary/20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-brand-primary mb-4"
          >
            Despre noi
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 max-w-3xl mx-auto space-y-4 text-justify"
          >
            <p>
              Dental Clinic for Kids and Family din Sighetu Marmației a fost fondată în 2023 de către Dr. Bianca Trifoi, cu misiunea de a oferi îngrijire stomatologică de calitate atât copiilor, cât și adulților. Într-un timp scurt, clinica a câștigat încrederea comunității, având deja peste 4000 de pacienți mulțumiți de serviciile oferite.
            </p>
            <p>
              Credem că vizita la dentist nu trebuie să fie o experiență stresantă. Prin empatie, explicații clare și o abordare blândă, ne propunem să transformăm fiecare consultație într-o experiență pozitivă. La Dental Clinic for Kids and Family, punem accent pe confortul pacientului, pe comunicare și pe construirea unei relații de încredere cu fiecare familie care ne trece pragul.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="liquid-glass p-8 rounded-3xl group"
            >
              <div className="w-14 h-14 bg-brand-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-primary transition-colors">
                <service.icon className="text-brand-primary w-8 h-8 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-brand-primary mb-3">{service.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-[40px] overflow-hidden shadow-xl"
          >
            <img
              src="/copil.png"
              alt="Copil fericit la dentist"
              className="w-full h-auto"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-brand-primary mb-6">Un mediu creat special pentru confortul tău și al celui mic</h3>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Clinica noastră este concepută pentru a reduce anxietatea asociată cu vizitele la stomatolog. Culorile calde, spațiile deschise și echipa noastră empatică te vor face să te simți ca acasă.
            </p>
            <ul className="space-y-4">
              {['Atmosferă relaxantă', 'Echipă multidisciplinară', 'Abordare personalizată', 'Materiale premium'].map((item) => (
                <li key={item} className="flex items-center gap-3 text-brand-primary font-medium">
                  <div className="w-2 h-2 bg-brand-accent rounded-full" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
