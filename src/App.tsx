import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Location } from './components/Location';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-brand-primary/20 selection:text-brand-primary">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Testimonials />
        <Location />
      </main>
      <Footer />
    </div>
  );
}
