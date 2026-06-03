import React from 'react';
import { Stethoscope, Facebook, Instagram, Linkedin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="py-12 bg-white border-t border-brand-secondary/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="Dental Clinic Logo" className="h-8 w-auto object-contain" referrerPolicy="no-referrer" />
          </div>
          
          <div className="flex items-center gap-6">
            <a href="https://www.facebook.com/p/Dental-Clinic-for-Kids-and-Family-61554507180848/" target="_blank" rel="noopener noreferrer" className="text-brand-primary/60 hover:text-brand-primary transition-colors">
              <Facebook className="w-6 h-6" />
            </a>
            <a href="https://www.instagram.com/dentalclinic.kidsandfamily/" target="_blank" rel="noopener noreferrer" className="text-brand-primary/60 hover:text-brand-primary transition-colors">
              <Instagram className="w-6 h-6" />
            </a>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-brand-secondary/30">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Dental Clinic for Kids and Family. Toate drepturile rezervate.
          </p>
          <p className="text-slate-500 text-sm">
            Made with ❤️ by CTRL Swipe.
          </p>
        </div>
      </div>
    </footer>
  );
};
