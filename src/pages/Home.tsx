import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { menuCategories, signatureDishes, stats, testimonials, whyChooseUs, contact } from "@/data/menu";
import { MapPin, Phone, Clock, Instagram, Menu as MenuIcon, X } from "lucide-react";

// Asset imports
import logoImage from "@assets/image_1783269532912.png";
import heroImage from "@assets/image_1783269582142.png";
import heroBg from "@assets/image_1783270548479.png";
import exteriorImage from "@assets/image_1783269558163.png";
import dish1 from "@assets/image_1783269564429.png";
import dish2 from "@assets/image_1783269569196.png";
import dish3 from "@assets/image_1783269576069.png";
import dish4 from "@assets/image_1783269588273.png";
import crabRoast from "@assets/Screenshot_2026-07-05_222736_1783271204497.png";
import prawnsFry from "@assets/Screenshot_2026-07-05_222706_1783271204497.png";
import prawnsTawaFry from "@assets/Screenshot_2026-07-05_222646_1783271204498.png";
import koriRoti from "@assets/Screenshot_2026-07-05_222615_1783271204498.png";

const galleryImages = [
  exteriorImage,
  crabRoast,
  prawnsFry,
  prawnsTawaFry,
  koriRoti,
  dish1,
  dish2,
  dish3,
  dish4,
  heroImage,
];

const mapQuery = encodeURIComponent(
  "VANAS Authentic Coastal Cuisine, Kadri Temple Road, Kadri, Mangaluru - 575003"
);

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMenuCategory, setActiveMenuCategory] = useState(menuCategories[0].id);
  const { toast } = useToast();

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const handleReservation = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Reservation Confirmed",
      description: "We look forward to hosting you at VANAS.",
    });
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="relative min-h-screen bg-background overflow-x-hidden">
      <AnimatePresence>
        {loading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-secondary"
          >
            <motion.img
              src={logoImage}
              alt="VANAS Logo"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
              className="h-32 w-auto rounded-md"
            />
          </motion.div>
        )}
      </AnimatePresence>
      {/* Navbar */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 bg-background/95 backdrop-blur-md ${
          isScrolled ? "py-3 shadow-md" : "py-4 shadow-sm"
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <img src={logoImage} alt="VANAS" className="h-10 md:h-12 w-auto rounded-sm" />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {["Home", "About", "Menu", "Order Online", "Gallery", "Reviews", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className="text-sm font-medium tracking-wide transition-colors hover:text-accent text-foreground"
              >
                {item}
              </a>
            ))}
            <Button
              className="rounded-none px-8 font-serif text-lg tracking-wider bg-primary hover:bg-secondary text-white"
              onClick={() => document.getElementById("reservation")?.scrollIntoView({ behavior: "smooth" })}
            >
              Reserve Table
            </Button>
          </nav>

          {/* Mobile Nav Toggle */}
          <button
            className="md:hidden p-2 rounded-full bg-secondary/10 text-secondary hover:bg-secondary/20 hover:text-primary transition-all duration-200 focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} strokeWidth={2.5} /> : <MenuIcon size={24} strokeWidth={2.5} />}
          </button>
        </div>
      </header>
      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-30 bg-background pt-24 px-6 flex flex-col gap-6"
          >
            {["Home", "About", "Menu", "Order Online", "Gallery", "Reviews", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl font-serif text-foreground border-b border-border pb-4"
              >
                {item}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      <main>
        {/* Hero Section */}
        <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-black/55 z-10" />
            <img src={heroBg} alt="VANAS Coastal Prawns Fry" className="w-full h-full object-cover object-center" />
          </div>
          
          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-20">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif text-white font-bold leading-tight mb-6"
            >
              AUTHENTIC MANGALOREAN<br />
              <span className="text-accent italic">Coastal Cuisine</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl text-white/90 font-sans max-w-2xl mx-auto mb-10 tracking-wide font-light"
            >
              Experience the true taste of the coast with fresh seafood, signature ghee roasts, and heritage recipes passed down through generations.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-6"
            >
              <Button
                size="lg"
                className="rounded-none bg-accent hover:bg-accent/90 text-white font-serif text-xl px-10 py-6 h-auto w-full sm:w-auto"
                onClick={() => document.getElementById("reservation")?.scrollIntoView({ behavior: "smooth" })}
              >
                Reserve Table
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-none border-white text-white hover:bg-white hover:text-secondary font-serif text-xl px-10 py-6 h-auto w-full sm:w-auto bg-transparent"
                onClick={() => document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" })}
              >
                Explore Menu
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Stats Strip */}
        <section className="bg-secondary py-12 relative z-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-serif text-accent mb-2">{stat.value}</div>
                  <div className="text-sm md:text-base text-white/80 font-medium uppercase tracking-wider">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-primary/10 translate-x-2 translate-y-2 md:translate-x-4 md:translate-y-4 -z-10" />
                <img src={exteriorImage} alt="VANAS Exterior" className="w-full h-auto object-cover rounded-sm shadow-xl" />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h4 className="text-accent font-sans font-semibold tracking-widest uppercase mb-4 text-sm">Our Story</h4>
                <h2 className="text-4xl md:text-5xl font-serif text-secondary font-bold mb-6">A Heritage of Flavor</h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Located in the heart of Kadri, Mangaluru, VANAS is a celebration of authentic coastal cuisine. We believe in preserving the traditional recipes that have defined Mangalorean homes for decades.
                </p>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  From our signature Ghee Roasts to the freshest seafood catch of the day, every dish is prepared with hand-ground spices and warm hospitality. Whether it's a family dinner or a quick craving, we offer an affordable, premium dining experience with spacious seating.
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {whyChooseUs.slice(0, 6).map((reason, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm font-medium text-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                      {reason}
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Signature Dishes */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h4 className="text-accent font-sans font-semibold tracking-widest uppercase mb-4 text-sm">Chef's Recommendations</h4>
              <h2 className="text-4xl md:text-5xl font-serif text-secondary font-bold">Signature Dishes</h2>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {[
                { img: crabRoast, title: "Crab Green Roast", desc: "Whole crab hand-tossed in fiery coastal green masala" },
                { img: prawnsFry, title: "Prawns Fry", desc: "Golden fried prawns finished with curry leaf and spice" },
                { img: prawnsTawaFry, title: "Prawns Tawa Fry", desc: "Griddle-seared prawns with home-ground masala" },
                { img: koriRoti, title: "Kori Roti", desc: "Crisp rice wafers with spicy traditional chicken curry" }
              ].map((dish, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="group relative overflow-hidden bg-white shadow-lg cursor-pointer"
                >
                  <div className="aspect-[4/5] overflow-hidden">
                    <img src={dish.img} alt={dish.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  </div>
                  {/* Subtle dark tint to enhance central badge visibility */}
                  <div className="absolute inset-0 bg-black/15 group-hover:bg-black/30 transition-colors duration-300" />
                  
                  {/* Centered cream badge with dark brown text */}
                  <div className="absolute inset-0 flex items-center justify-center p-4">
                    <div className="bg-background/95 backdrop-blur-md border border-border/40 p-6 text-center shadow-xl max-w-[90%] transform transition-all duration-300 group-hover:scale-105">
                      <h3 className="text-xl md:text-2xl font-serif font-bold text-foreground mb-2">
                        {dish.title}
                      </h3>
                      <p className="text-xs md:text-sm text-muted-foreground font-light leading-relaxed">
                        {dish.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Full Menu */}
        <section id="menu" className="py-24 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h4 className="text-accent font-sans font-semibold tracking-widest uppercase mb-4 text-sm">Discover Our Offerings</h4>
              <h2 className="text-4xl md:text-5xl font-serif text-secondary font-bold">The Menu</h2>
            </div>

            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {menuCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveMenuCategory(category.id)}
                  className={`px-6 py-2 rounded-full font-serif text-lg transition-all ${
                    activeMenuCategory === category.id
                      ? "bg-primary text-white shadow-md"
                      : "bg-muted/50 text-foreground hover:bg-muted"
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>

            <div className="max-w-4xl mx-auto">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeMenuCategory}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="grid md:grid-cols-2 gap-x-12 gap-y-6"
                >
                  {menuCategories.find(c => c.id === activeMenuCategory)?.items.map((item, idx) => (
                    <div key={idx} className="flex flex-col border-b border-border/50 pb-4">
                      <div className="flex justify-between items-start gap-4 mb-1">
                        <div className="flex flex-wrap items-center gap-2 min-w-0">
                          <div className={`w-3 h-3 border ${item.veg ? 'border-green-600' : 'border-red-600'} flex items-center justify-center shrink-0`}>
                            <div className={`w-1.5 h-1.5 rounded-full ${item.veg ? 'bg-green-600' : 'bg-red-600'}`} />
                          </div>
                          <h4 className="font-serif text-xl font-bold text-foreground break-words">{item.name}</h4>
                          {item.special && (
                            <span className="bg-accent/10 text-accent text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full border border-accent/20 shrink-0">
                              Chef's Pick
                            </span>
                          )}
                        </div>
                        <span className="font-mono text-lg font-medium text-secondary shrink-0">{item.price}</span>
                      </div>
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </section>

        {/* Order Online Section */}
        <section id="order-online" className="py-24 bg-muted/40">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h4 className="text-accent font-sans font-semibold tracking-widest uppercase mb-4 text-sm">Delivery Partners</h4>
              <h2 className="text-4xl md:text-5xl font-serif text-secondary font-bold mb-4">Order Online</h2>
              <p className="text-muted-foreground text-lg">Bring the authentic flavors of VANAS to your doorstep. Order fresh coastal delicacies via our delivery partners.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Zomato Card */}
              <motion.div
                whileHover={{ y: -8, scale: 1.01 }}
                transition={{ duration: 0.3 }}
                className="bg-white border border-border/60 p-8 rounded-2xl shadow-lg flex flex-col justify-between hover:shadow-xl transition-shadow relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#E23744]/5 rounded-bl-full -z-10 group-hover:bg-[#E23744]/10 transition-colors" />
                <div>
                  <div className="flex items-center justify-between gap-4 mb-8">
                    {/* Actual Zomato Wordmark Logo */}
                    <svg viewBox="0 0 2500 535.29" className="h-7 w-auto fill-[#E23744]" xmlns="http://www.w3.org/2000/svg">
                      <path d="m381.02 135.1-2.25 72.32-188.62 205.03c78.79 0 128.75-.77 157.56-2.37-8.35 38.91-15.14 70.72-21.98 118.41-37.89-3.2-96.96-4-156.06-4-65.88 0-123.46.79-169.67 4l1.54-73.14 188.61-204.21c-82.57 0-112.88.78-146.95 1.58 7.55-36.56 12.86-77.07 18.16-117.62 59.84 2.38 83.32 3.16 161.35 3.16 71.97.01 112.85-.78 158.31-3.16zm214.39-21.48c-122.75 0-216.64 109.67-216.64 240.84 0 98.53 56.8 174.03 167.39 174.03 123.48 0 216.65-109.69 216.65-241.63.01-97.7-55.31-173.24-167.4-173.24zm-37.13 309.46c-27.28 0-43.17-24.67-43.17-73.14 0-72.32 29.54-130.32 65.92-130.32 26.49 0 42.4 23.86 42.4 73.1-.01 71.52-28.77 130.36-65.15 130.36zm1772.1-314.9c-124.32 0-219.47 111.12-219.47 243.94 0 99.87 57.55 176.37 169.59 176.37 125.09 0 219.49-111.13 219.49-244.78.01-99.02-55.99-175.53-169.61-175.53zm-39.95 314.48c-27.29 0-43.17-24.67-43.17-73.14 0-72.32 29.55-130.31 65.92-130.31 26.48 0 42.42 23.84 42.42 73.09-.02 71.55-28.81 130.36-65.17 130.36zm-890.58-165.97c9.86-67.53 4.56-128.74-70.42-128.74-54.55 0-113.63 46.1-155.29 123.19 9.1-63.6 3.78-123.19-70.45-123.19-56.05 0-116.65 48.47-158.33 128.74 10.61-52.45 8.35-112.07 5.31-124.78-43.17 7.16-81.03 11.12-134.07 12.71 1.52 36.57-.76 84.22-7.58 129.56l-17.42 119.19c-6.82 46.91-14.4 100.95-21.98 135.13h140.9c.77-20.69 6.08-53.26 9.86-81.87l12.12-81.84c9.84-53.28 52.25-116.03 84.82-116.03 18.94 0 18.2 18.27 12.89 52.44l-13.64 92.16c-6.84 46.91-14.39 100.95-21.98 135.13h142.41c.77-20.69 5.31-53.26 9.09-81.87l12.11-81.84c9.86-53.28 52.3-116.03 84.85-116.03 18.96 0 18.21 17.46 15.15 41.32l-34.02 238.41h129.97zm680.51 147.03-15.15 93.79c-23.49 12.71-67.43 31-118.18 31-86.36 0-103.76-46.1-90.15-143.85l21.98-157.36h-42.5l12-101.86 46.4-2.24 17.43-73.91 131.03-49.29-16.65 123.19h90.15c-3.02 12.71-13.66 82.67-16.64 104.1h-87.92l-19.7 145.44c-5.3 37.35-2.25 50.87 23.47 50.87 18.98-.02 46.98-11.15 64.43-19.88zm-497.04 50.66c47.69-5.91 80.51-51.88 88.4-97.75l1.33-12.29c-20.49-4.58-50.11-8.07-78.83-4.56-27.35 3.33-50.11 14.7-62.35 31.16-9.23 11.82-13.87 25.96-11.81 42.82 3.11 25.25 31.04 44.55 63.26 40.62zm-40.59 72.64c-67.31 8.27-111.64-18.45-124.95-79.22-8.35-38.24 3.24-81.8 23.51-107.79 27.15-33.99 71.39-55.81 125.38-62.4 43.45-5.39 80.06-2.73 114.3 3.75l1.42-5.87c.98-9.39 1.97-18.76.6-29.98-3.55-28.81-26.27-45.97-82.37-39.07-37.85 4.65-73.86 18.32-101.82 33.88l-27.2-82.19c37.9-21.76 85.67-38.32 140.34-45.03 104.43-12.81 177.81 20.49 187.21 97.05 2.49 20.36 2.79 41.94.22 61.52-13.41 94.66-22 165.89-25.77 213.63-.61 7.39-.56 20.09.1 38.09l-129.59-.12c2.76-7.46 5.23-17.58 7.43-30.27 1.46-8.35 2.5-18.88 3.15-31.64-27.39 37.58-65.04 59.9-111.96 65.66z" fill="#e23744" />
                    </svg>
                    <span className="text-xs bg-[#E23744]/10 text-[#E23744] px-2.5 py-0.5 rounded-full font-medium shrink-0">Fast Delivery</span>
                  </div>
 
                  <div className="space-y-4 mb-8 text-left">
                    <div className="flex items-center gap-3">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#E23744] shrink-0" />
                      <p className="text-foreground text-sm font-medium">Delivery fee ₹40–₹60 <span className="text-muted-foreground font-light">· Service fee may apply</span></p>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#E23744] shrink-0" />
                      <p className="text-foreground text-sm font-medium">Delivers in 30–40 min</p>
                    </div>
                  </div>
                </div>
 
                <a
                  href="https://www.zomato.com/mangalore/vanas-mallikatte/order"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center py-4 bg-[#E23744] hover:bg-[#cb2f3b] text-white font-serif text-lg tracking-wider transition-colors rounded-xl shadow-md shadow-[#E23744]/20 block"
                >
                  Order on Zomato
                </a>
              </motion.div>
 
              {/* Swiggy Card */}
              <motion.div
                whileHover={{ y: -8, scale: 1.01 }}
                transition={{ duration: 0.3 }}
                className="bg-white border border-border/60 p-8 rounded-2xl shadow-lg flex flex-col justify-between hover:shadow-xl transition-shadow relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#FC8019]/5 rounded-bl-full -z-10 group-hover:bg-[#FC8019]/10 transition-colors" />
                <div>
                  <div className="flex items-center justify-between gap-4 mb-8">
                    {/* Actual Swiggy Logo (S icon + Wordmark) */}
                    <div className="flex items-center gap-1.5 shrink-0">
                      <svg viewBox="0 0 24 24" className="h-8 w-auto fill-[#FC8019]" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.034 24c-.376-.411-2.075-2.584-3.95-5.513-.547-.916-.901-1.63-.833-1.814.178-.48 3.355-.743 4.333-.308.298.132.29.307.29.409 0 .44-.022 1.619-.022 1.619a.441.441 0 1 0 .883-.002l-.005-2.939c0-.255-.278-.319-.331-.329-.511-.002-1.548-.006-2.661-.006-2.457 0-3.006.101-3.423-.172-.904-.591-2.383-4.577-2.417-6.819C3.849 4.964 5.723 2.225 8.362.868A8.13 8.13 0 0 1 12.026 0c4.177 0 7.617 3.153 8.075 7.209l.001.011c.084.981-5.321 1.189-6.39.904-.164-.044-.206-.212-.206-.284L13.5 4.996a.442.442 0 0 0-.884.002l.009 3.866a.33.33 0 0 0 .268.32l3.354-.001c1.79 0 2.542.207 3.042.588.333.254.461.739.349 1.37C18.633 16.755 12.273 23.71 12.034 24z" />
                      </svg>
                      <span className="text-2xl font-sans font-black tracking-tight text-[#FC8019] italic">swiggy</span>
                    </div>
                    <span className="text-xs bg-[#FC8019]/10 text-[#FC8019] px-2.5 py-0.5 rounded-full font-medium shrink-0">Highly Rated</span>
                  </div>
 
                  <div className="space-y-4 mb-8 text-left">
                    <div className="flex items-center gap-3">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#FC8019] shrink-0" />
                      <p className="text-foreground text-sm font-medium">Delivery fees up to ₹10 <span className="text-muted-foreground font-light">· Service fee may apply</span></p>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#FC8019] shrink-0" />
                      <p className="text-foreground text-sm font-medium">Delivers in 25–40 min</p>
                    </div>
                  </div>
                </div>
 
                <a
                  href="https://www.swiggy.com/city/mangaluru/vanas-road-kadri-rest365937?is_retargeting=true&media_source=GooglePlaceOrder"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center py-4 bg-[#FC8019] hover:bg-[#e46e10] text-white font-serif text-lg tracking-wider transition-colors rounded-xl shadow-md shadow-[#FC8019]/20 block"
                >
                  Order on Swiggy
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section id="gallery" className="py-24 bg-secondary text-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h4 className="text-accent font-sans font-semibold tracking-widest uppercase mb-4 text-sm">Visual Journey</h4>
              <h2 className="text-4xl md:text-5xl font-serif font-bold">Gallery</h2>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
              {galleryImages.map((img, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.05 }}
                  className={`overflow-hidden relative group cursor-pointer ${idx === 0 || idx === 3 ? 'row-span-2' : ''}`}
                >
                  <img src={img} alt={`VANAS Gallery ${idx + 1}`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 min-h-[160px] md:min-h-[250px]" />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Reviews */}
        <section id="reviews" className="py-24 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="flex justify-center items-center gap-2 mb-4 text-accent">
                {[1, 2, 3, 4, 5].map(star => <span key={star} className="text-2xl">★</span>)}
              </div>
              <h2 className="text-4xl md:text-5xl font-serif text-secondary font-bold mb-4">Loved by Mangaluru</h2>
              <p className="text-muted-foreground text-lg">Rated 4.2 stars by over 1900+ happy customers on Google</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((test, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-muted/30 p-8 rounded-sm relative"
                >
                  <div className="text-5xl text-accent/20 absolute top-4 left-4 font-serif">"</div>
                  <p className="text-foreground text-lg font-serif italic relative z-10 mb-6 mt-4">
                    {test.quote}
                  </p>
                  <div className="flex items-center justify-between border-t border-border pt-4">
                    <span className="font-semibold text-sm uppercase tracking-wider">{test.author}</span>
                    <div className="flex text-accent text-sm">★★★★★</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Reservation */}
        <section id="reservation" className="py-24 bg-muted/40 relative">
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-4xl mx-auto bg-white shadow-2xl p-8 md:p-16">
              <div className="text-center mb-10">
                <h4 className="text-accent font-sans font-semibold tracking-widest uppercase mb-4 text-sm">Book Your Table</h4>
                <h2 className="text-4xl md:text-5xl font-serif text-secondary font-bold">Make a Reservation</h2>
              </div>

              <form onSubmit={handleReservation} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-secondary font-semibold">Full Name</Label>
                    <Input id="name" required className="border-border bg-transparent focus-visible:ring-accent rounded-none h-12" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-secondary font-semibold">Phone Number</Label>
                    <Input id="phone" type="tel" required className="border-border bg-transparent focus-visible:ring-accent rounded-none h-12" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="guests" className="text-secondary font-semibold">Number of Guests</Label>
                    <select id="guests" required className="flex h-12 w-full border border-border bg-transparent px-3 py-1 text-base shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent rounded-none">
                      {[1, 2, 3, 4, 5, 6, 7, 8, '9+'].map(n => <option key={n} value={n}>{n} People</option>)}
                    </select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="date" className="text-secondary font-semibold">Date</Label>
                    <Input id="date" type="date" required className="border-border bg-transparent focus-visible:ring-accent rounded-none h-12" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-secondary font-semibold">Special Requests (Optional)</Label>
                  <Textarea id="message" className="border-border bg-transparent focus-visible:ring-accent rounded-none min-h-[100px]" />
                </div>
                <Button type="submit" className="w-full bg-primary hover:bg-secondary text-white rounded-none h-14 font-serif text-xl tracking-wide">
                  Confirm Reservation
                </Button>
              </form>
            </div>
          </div>
        </section>
        {/* Find Us / Map */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h4 className="text-accent font-sans font-semibold tracking-widest uppercase mb-4 text-sm">Visit Us</h4>
              <h2 className="text-4xl md:text-5xl font-serif text-secondary font-bold">Find VANAS</h2>
            </div>
            <div className="grid md:grid-cols-5 gap-0 max-w-5xl mx-auto shadow-xl">
              <div className="md:col-span-3 h-[300px] md:h-[420px]">
                <iframe
                  title="VANAS Location Map"
                  src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="md:col-span-2 bg-secondary text-white p-8 md:p-10 flex flex-col justify-center gap-6">
                <div className="flex items-start gap-3">
                  <MapPin className="text-accent shrink-0 mt-1" size={20} />
                  <span className="text-white/90">{contact.addressLines.join(", ")}</span>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="text-accent shrink-0 mt-1" size={20} />
                  <div className="flex flex-col text-white/90">
                    {contact.phones.map(p => <span key={p}>{p}</span>)}
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="text-accent shrink-0 mt-1" size={20} />
                  <div className="flex flex-col gap-1 text-white/90">
                    <span>Lunch: {contact.hours[0]}</span>
                    <span>Dinner: {contact.hours[1]}</span>
                  </div>
                </div>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${mapQuery}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block text-center mt-2 border border-accent text-accent hover:bg-accent hover:text-white transition-colors font-serif tracking-wide px-6 py-3"
                >
                  Get Directions
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      {/* Footer */}
      <footer id="contact" className="bg-secondary text-white pt-20 pb-10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div>
              <img src={logoImage} alt="VANAS" className="h-16 w-auto mb-6 rounded-sm bg-white/95 p-1" />
              <p className="text-white/70 font-light leading-relaxed mb-6">
                Authentic Mangalorean coastal cuisine in the heart of Kadri. Experience heritage recipes, fresh seafood, and warm hospitality.
              </p>
              <div className="flex gap-4">
                <a href={`https://instagram.com/${contact.instagram}`} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-accent hover:border-accent transition-colors">
                  <Instagram size={18} />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-serif font-bold mb-6 text-accent">Quick Links</h3>
              <ul className="space-y-3 font-light text-white/80">
                {["Home", "About", "Menu", "Order Online", "Gallery", "Reviews"].map(link => (
                  <li key={link}>
                    <a href={`#${link.toLowerCase().replace(" ", "-")}`} className="hover:text-accent transition-colors">{link}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-serif font-bold mb-6 text-accent">Contact Us</h3>
              <ul className="space-y-4 font-light text-white/80">
                <li className="flex items-start gap-3">
                  <MapPin className="text-accent shrink-0 mt-1" size={18} />
                  <span>{contact.addressLines.join(", ")}</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="text-accent shrink-0" size={18} />
                  <div className="flex flex-col">
                    {contact.phones.map(p => <span key={p}>{p}</span>)}
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-serif font-bold mb-6 text-accent">Opening Hours</h3>
              <ul className="space-y-4 font-light text-white/80">
                <li className="flex items-start gap-3">
                  <Clock className="text-accent shrink-0 mt-1" size={18} />
                  <div className="flex flex-col gap-1">
                    <span>Lunch: {contact.hours[0]}</span>
                    <span>Dinner: {contact.hours[1]}</span>
                  </div>
                </li>
                <li className="mt-4 p-4 border border-white/10 bg-white/5 inline-block">
                  Open all days of the week
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/50 font-light">
            <p>&copy; {new Date().getFullYear()} VANAS Mangaluru. All rights reserved.</p>
            <p>Designed for excellence.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
