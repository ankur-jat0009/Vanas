export interface MenuItem {
  name: string;
  price: string;
  veg: boolean;
  special?: boolean;
}

export interface MenuCategory {
  id: string;
  name: string;
  items: MenuItem[];
}

export const menuCategories: MenuCategory[] = [
  {
    id: "thali",
    name: "Thali",
    items: [
      { name: "Fish Thali", price: "₹70", veg: false },
      { name: "Veg Thali", price: "₹70", veg: true },
      { name: "Vanas Special Thali", price: "₹149", veg: false, special: true },
      { name: "Kori Roti (4 Pieces)", price: "₹207", veg: false },
    ],
  },
  {
    id: "veg-starters",
    name: "Veg Starters",
    items: [
      { name: "Paneer Urval", price: "₹322", veg: true },
      { name: "Paneer Chilli", price: "₹299", veg: true },
      { name: "Paneer Manchurian", price: "₹276", veg: true },
      { name: "Paneer Pepper Chilli", price: "₹299", veg: true },
      { name: "Paneer Pepper Fry", price: "₹299", veg: true },
      { name: "Paneer 65", price: "₹322", veg: true },
      { name: "Paneer Andhra Chilli", price: "₹322", veg: true },
      { name: "Mushroom Urval", price: "₹322", veg: true },
      { name: "Mushroom Chilli", price: "₹276", veg: true },
      { name: "Mushroom Manchurian", price: "₹276", veg: true },
      { name: "Mushroom Pepper Chilli", price: "₹299", veg: true },
      { name: "Mushroom Pepper Fry", price: "₹299", veg: true },
      { name: "Mushroom 65", price: "₹322", veg: true },
      { name: "Gobi Chilli", price: "₹207", veg: true },
      { name: "Gobi Manchurian", price: "₹207", veg: true },
    ],
  },
  {
    id: "non-veg-starters",
    name: "Non-Veg Starters",
    items: [
      { name: "Egg Chilli", price: "₹207", veg: false },
      { name: "Egg Pepper", price: "₹207", veg: false },
      { name: "Chicken Kabab", price: "₹207", veg: false },
      { name: "Chicken Sukka", price: "₹138", veg: false, special: true },
      { name: "Chicken 65", price: "₹380", veg: false },
      { name: "Chicken Chilli", price: "₹334", veg: false },
      { name: "Chicken Manchurian", price: "₹334", veg: false },
      { name: "Chicken Pepper Fry", price: "₹380", veg: false },
      { name: "Chicken Pepper Chilli", price: "₹380", veg: false },
      { name: "Chicken Lollipop", price: "₹276", veg: false },
      { name: "Chicken Urval", price: "₹403", veg: false },
      { name: "Lemon Chicken", price: "₹380", veg: false },
      { name: "Andhra Chilli Chicken", price: "₹391", veg: false },
    ],
  },
  {
    id: "seafood",
    name: "Seafood",
    items: [
      { name: "Anjal Masala Fry", price: "₹518", veg: false, special: true },
      { name: "Bangude Masala Fry", price: "₹207", veg: false },
      { name: "Koddai Masala Fry", price: "₹288", veg: false },
      { name: "Muru Masala Fry", price: "₹322", veg: false },
      { name: "Nang Masala Fry", price: "₹403", veg: false },
      { name: "Neimeen Masala Fry", price: "₹748", veg: false },
      { name: "Anjal Tawa", price: "₹529", veg: false, special: true },
      { name: "Anjal Rava", price: "₹529", veg: false },
      { name: "Bangude Tawa", price: "₹207", veg: false },
      { name: "Bangude Rava", price: "₹207", veg: false },
      { name: "Silver Fish Rava", price: "₹207", veg: false },
      { name: "Squid Tawa", price: "₹345", veg: false, special: true },
      { name: "Squid Rava", price: "₹345", veg: false },
      { name: "Prawns Tawa", price: "₹345", veg: false, special: true },
      { name: "Prawns Rava", price: "₹345", veg: false },
      { name: "Fish Egg Tawa", price: "₹322", veg: false },
      { name: "Kaane Tawa", price: "₹414", veg: false },
      { name: "Kaane Rava", price: "₹414", veg: false },
    ],
  },
  {
    id: "main-course",
    name: "Main Course",
    items: [
      { name: "Egg Curry", price: "₹127", veg: false },
      { name: "Chicken Curry", price: "₹207", veg: false },
      { name: "Anjal Curry", price: "₹518", veg: false },
      { name: "Bangude Curry", price: "₹219", veg: false },
      { name: "Silver Fish Curry", price: "₹230", veg: false },
      { name: "Prawns Curry", price: "₹414", veg: false },
    ],
  },
  {
    id: "ghee-roast",
    name: "Ghee Roast",
    items: [
      { name: "Chicken Ghee Roast", price: "₹391", veg: false, special: true },
      { name: "Chicken Green Ghee Roast", price: "₹403", veg: false },
      { name: "Egg Ghee Roast", price: "₹253", veg: false },
      { name: "Paneer Ghee Roast", price: "₹265", veg: true },
      { name: "Paneer Green Ghee Roast", price: "₹288", veg: true },
      { name: "Mushroom Ghee Roast", price: "₹265", veg: true },
      { name: "Mushroom Green Ghee Roast", price: "₹288", veg: true },
      { name: "Prawns Ghee Roast", price: "₹437", veg: false, special: true },
      { name: "Prawns Green Ghee Roast", price: "₹437", veg: false },
      { name: "Squid Ghee Roast", price: "₹345", veg: false },
      { name: "Squid Green Ghee Roast", price: "₹345", veg: false },
      { name: "Crab Ghee Roast", price: "₹518", veg: false },
      { name: "Crab Green Ghee Roast", price: "₹518", veg: false },
    ],
  },
  {
    id: "rice-biryani",
    name: "Rice & Biryani",
    items: [
      { name: "Boiled Rice", price: "₹81", veg: true },
      { name: "White Rice", price: "₹81", veg: true },
      { name: "Ghee Rice", price: "₹104", veg: true },
      { name: "Chicken Biryani", price: "₹161", veg: false, special: true },
      { name: "Egg Biryani", price: "₹207", veg: false },
      { name: "Veg Biryani", price: "₹207", veg: true },
      { name: "Paneer Biryani", price: "₹288", veg: true },
      { name: "Mushroom Biryani", price: "₹288", veg: true },
      { name: "Chicken Ghee Roast Biryani", price: "₹403", veg: false },
      { name: "Prawns Biryani", price: "₹460", veg: false },
      { name: "Prawns Ghee Roast Biryani", price: "₹518", veg: false },
      { name: "Anjal Fish Biryani", price: "₹633", veg: false },
    ],
  },
  {
    id: "fried-rice",
    name: "Fried Rice",
    items: [
      { name: "Veg Fried Rice", price: "₹173", veg: true },
      { name: "Chicken Fried Rice", price: "₹230", veg: false },
      { name: "Paneer Manchurian Fried Rice", price: "₹230", veg: true },
      { name: "Chicken Manchurian Fried Rice", price: "₹288", veg: false },
    ],
  },
  {
    id: "noodles",
    name: "Noodles",
    items: [
      { name: "Veg Noodles", price: "₹219", veg: true },
      { name: "Chicken Noodles", price: "₹253", veg: false },
      { name: "Paneer Manchurian Noodles", price: "₹299", veg: true },
      { name: "Chicken Manchurian Noodles", price: "₹299", veg: false },
    ],
  },
  {
    id: "bucket-biryani",
    name: "Bucket Biryani",
    items: [
      { name: "Veg Bucket Biryani", price: "₹1,150", veg: true },
      { name: "Chicken Dum Bucket Biryani", price: "₹1,725", veg: false },
      { name: "Mutton Dum Bucket Biryani", price: "₹2,530", veg: false },
      { name: "Chicken Ghee Roast Bucket Biryani", price: "₹2,760", veg: false, special: true },
    ],
  },
];

export interface SignatureDish {
  name: string;
  description: string;
}

export const signatureDishes: SignatureDish[] = [
  { name: "Chicken Ghee Roast", description: "Slow-roasted in clarified butter with coastal spice" },
  { name: "Prawns Ghee Roast", description: "Fresh prawns finished in a fiery ghee glaze" },
  { name: "Fish Thali", description: "A full coastal spread served the traditional way" },
  { name: "Chicken Biryani", description: "Fragrant rice layered with slow-cooked chicken" },
  { name: "Squid Fry", description: "Crisp-fried squid rings with home-ground masala" },
  { name: "Chicken Sukka", description: "Dry-roasted chicken tossed in coconut and spice" },
  { name: "Neer Dosa", description: "Delicate rice crepes, a Mangalorean breakfast staple" },
  { name: "Fish Tawa Fry", description: "Whole fish marinated and seared on the tawa" },
  { name: "Anjal Fry", description: "King fish steaks in a bold red masala crust" },
  { name: "Kori Roti", description: "Crisp rice wafers soaked in spicy chicken curry" },
];

export const stats = [
  { value: "1900+", label: "Happy Customers" },
  { value: "4.2★", label: "Google Rating" },
  { value: "50+", label: "Signature Dishes" },
  { value: "100%", label: "Fresh Seafood" },
];

export const testimonials = [
  { quote: "The ghee roast here is unmatched — rich, smoky, and made with real coastal spice.", author: "Google Review" },
  { quote: "Freshest seafood in Mangaluru. You can taste the difference immediately.", author: "Google Review" },
  { quote: "Generous portions, honest prices, and food that tastes like home.", author: "Google Review" },
  { quote: "Quick service even during peak hours, and the staff are genuinely warm.", author: "Google Review" },
  { quote: "Every dish tastes exactly like traditional Mangalorean home cooking.", author: "Google Review" },
  { quote: "Great for family dinners — spacious seating and something for everyone.", author: "Google Review" },
];

export const whyChooseUs = [
  "Fresh Daily Seafood",
  "Traditional Recipes",
  "Fast Service",
  "Family Dining",
  "Affordable Pricing",
  "Large Parking",
  "Takeaway",
  "Delivery",
  "Wheelchair Accessible",
];

export const contact = {
  addressLines: ["Kadri Temple Road", "Next to Tejaswini Hospital", "Kadri, Mangaluru - 575003"],
  phones: ["+91 96867 60009", "+91 90354 95854"],
  instagram: "vanas_mangalore",
  hours: ["12:00 PM – 3:45 PM", "7:00 PM – 10:45 PM"],
};
