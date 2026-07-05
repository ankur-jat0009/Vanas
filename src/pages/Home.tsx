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

  const handleReservation = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Reservation Confirmed",
      description: "We look forward to hosting you at VANAS.",
    });
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="relative min-h-screen bg-background">
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
            {["Home", "About", "Menu", "Gallery", "Reviews", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
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
            className="md:hidden p-2 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
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
            {["Home", "About", "Menu", "Gallery", "Reviews", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
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
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-primary/10 translate-x-4 translate-y-4 -z-10" />
                <img src={exteriorImage} alt="VANAS Exterior" className="w-full h-auto object-cover rounded-sm shadow-xl" />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
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
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform transition-transform duration-300">
                    <h3 className="text-2xl font-serif font-bold mb-2">{dish.title}</h3>
                    <p className="text-sm text-white/80 font-light">{dish.desc}</p>
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
                      <div className="flex justify-between items-start mb-1">
                        <div className="flex items-center gap-2">
                          <div className={`w-3 h-3 border ${item.veg ? 'border-green-600' : 'border-red-600'} flex items-center justify-center`}>
                            <div className={`w-1.5 h-1.5 rounded-full ${item.veg ? 'bg-green-600' : 'bg-red-600'}`} />
                          </div>
                          <h4 className="font-serif text-xl font-bold text-foreground">{item.name}</h4>
                          {item.special && (
                            <span className="bg-accent/10 text-accent text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full border border-accent/20">
                              Chef's Pick
                            </span>
                          )}
                        </div>
                        <span className="font-mono text-lg font-medium text-secondary">{item.price}</span>
                      </div>
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>
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
                {["Home", "About", "Menu", "Gallery", "Reviews"].map(link => (
                  <li key={link}>
                    <a href={`#${link.toLowerCase()}`} className="hover:text-accent transition-colors">{link}</a>
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
