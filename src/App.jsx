import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Categories from './components/Categories';
import Shop from './components/Shop';
import Story from './components/Story';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

export default function App() {
  return (
    <div className="min-h-screen bg-paper text-ink lg:pl-20">
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[70] focus:bg-accent focus:px-5 focus:py-2.5 focus:text-sm focus:text-paper"
      >
        Skip to content
      </a>
      <Navigation />
      <main>
        <Hero />
        <Marquee />
        <Categories />
        <Shop />
        <Story />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}