import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    name: 'Lăcrămioara',
    role: 'Pacient',
    content: 'Felicitări pentru tot ceea ce faci! Aduci multe zâmbete pe chipul pacienților tăi. Te îmbrățișez 🤗!',
    rating: 5,
  },
  {
    name: 'Anuța',
    role: 'Mamă',
    content: 'Recomand cu drag! Băiețelul meu a stat cuminte 40 minute, foarte frumos au vorbit cu el!',
    rating: 5,
  },
  {
    name: 'Gheorghe',
    role: 'Pacient',
    content: 'Recomand. 👍🤗😘❤️ Nu pierdeți această ocazie! O clinică de excepție și servicii profesionale. Aveți grijă de dantura voastră, oameni buni!',
    rating: 5,
  },
];

export const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-brand-secondary/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-brand-primary mb-4"
          >
            Ce spun pacienții noștri
          </motion.h2>
          <div className="flex justify-center gap-1 mb-4">
            {[1, 2, 3, 4, 5].map((s) => (
              <Star key={s} className="w-6 h-6 text-yellow-500 fill-yellow-500" />
            ))}
          </div>
          <p className="text-slate-600">Peste 500 de recenzii pozitive pe Google și Facebook.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="liquid-glass p-8 rounded-[40px] relative"
            >
              <Quote className="absolute top-6 right-8 w-12 h-12 text-brand-primary/10" />
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                ))}
              </div>
              <p className="text-slate-600 mb-6 italic leading-relaxed">"{review.content}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-brand-primary rounded-full flex items-center justify-center text-white font-bold">
                  {review.name[0]}
                </div>
                <div>
                  <h4 className="font-bold text-brand-primary">{review.name}</h4>
                  <p className="text-xs text-slate-500">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
