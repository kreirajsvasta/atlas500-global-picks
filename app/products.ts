export type Product = {
  asin: string;
  title: string;
  category: string;
  signal: string;
  signalLevel: "high" | "verified";
};

export const products: Product[] = [
  { asin: "B08WM3LMJF", title: "JBL Tune 510BT Wireless On-Ear Headphones", category: "Tech", signal: "10K+ bought signal observed", signalLevel: "high" },
  { asin: "B00BYH6C1E", title: "Drop Stop Original Car Seat Gap Filler", category: "Auto", signal: "10K+ bought signal observed", signalLevel: "high" },
  { asin: "B0H8NN1GJW", title: "SEDOZIK Vibration Plate Exercise Machine", category: "Fitness", signal: "10K+ bought signal observed", signalLevel: "high" },
  { asin: "B0030FCG1S", title: "Business Source Premium Invisible Tape, 12-Pack", category: "Office", signal: "9K+ bought signal observed", signalLevel: "high" },
  { asin: "B0GVDB4ZPY", title: "imarku 7-Inch Santoku Knife", category: "Kitchen", signal: "#1 Best Seller signal observed", signalLevel: "high" },
  { asin: "B0D54KV4HH", title: "Hoki Found Large Silicone Pet Feeding Mat", category: "Pets", signal: "#1 category signal observed", signalLevel: "high" },
  { asin: "B0BYGMR4DX", title: "Kasa Matter Smart Plug, 4-Pack", category: "Smart Home", signal: "500+ bought signal observed", signalLevel: "high" },
  { asin: "B01CHRY20W", title: "Maison d'Hermine Cotton Apron", category: "Kitchen", signal: "400+ bought signal observed", signalLevel: "high" },
  { asin: "B0024E9IVM", title: "Petstages Stuffing-Free Squeaky Dog Toy", category: "Pets", signal: "200+ bought signal observed", signalLevel: "high" },
  { asin: "B0CVNHHVD1", title: "simplehuman Compact Steel Frame Dishrack", category: "Kitchen", signal: "Amazon's Choice signal observed", signalLevel: "high" },
  { asin: "B07C632MTG", title: "Dash Express Waffle Maker", category: "Kitchen", signal: "Amazon's Choice signal observed", signalLevel: "high" },
  { asin: "B09B8V1LZ3", title: "Amazon Echo Dot (5th Gen), Charcoal", category: "Tech", signal: "Official listing matched", signalLevel: "verified" },
  { asin: "B0BP9SNVH9", title: "Amazon Fire TV Stick 4K Max", category: "Tech", signal: "Official listing matched", signalLevel: "verified" },
  { asin: "B089DR29T6", title: "Amazon Smart Plug", category: "Smart Home", signal: "Official listing matched", signalLevel: "verified" },
  { asin: "B0916TKFF2", title: "Roku Express 4K+ Streaming Player", category: "Tech", signal: "Official listing matched", signalLevel: "verified" },
  { asin: "B08LN3C7WK", title: "Kasa Smart Plug Mini with Energy Monitoring", category: "Smart Home", signal: "Official listing matched", signalLevel: "verified" },
  { asin: "B09BKCDXZC", title: "Roku Streaming Stick 4K", category: "Tech", signal: "Official listing matched", signalLevel: "verified" },
  { asin: "B010TCP3SC", title: "Dash Mini Waffle Maker", category: "Kitchen", signal: "Official listing matched", signalLevel: "verified" },
  { asin: "B00006JSUA", title: "Lodge 10.25-Inch Cast Iron Skillet", category: "Kitchen", signal: "Official listing matched", signalLevel: "verified" },
  { asin: "B00WTSCXIS", title: "Lodge Cast Iron Skillet with Silicone Handle Holder", category: "Kitchen", signal: "Official listing matched", signalLevel: "verified" },
  { asin: "B071VT8PL8", title: "Lodge L8SKL Pre-Seasoned Cast Iron Skillet", category: "Kitchen", signal: "Official listing matched", signalLevel: "verified" },
  { asin: "B002YHPQP6", title: "Lodge Cast Iron Skillet, 2-Pack", category: "Kitchen", signal: "Official listing matched", signalLevel: "verified" },
  { asin: "B0FDKKMVT2", title: "Runglecho 56.5-Inch Mobile Kitchen Island", category: "Home", signal: "Official listing matched", signalLevel: "verified" },
  { asin: "B08XXVVWR3", title: "CADUKE 3-Tier Rolling Kitchen Cart", category: "Home", signal: "Official listing matched", signalLevel: "verified" },
  { asin: "B0DSB3968B", title: "DPZM 2-Pack Expandable Pull-Out Cabinet Organizer", category: "Home", signal: "Official listing matched", signalLevel: "verified" },
  { asin: "B0GRZQYX5B", title: "Upstreman 24-Bottle Wine Cooler", category: "Home", signal: "Official listing matched", signalLevel: "verified" },
  { asin: "B098BP46FS", title: "GORILLA GRIP Stainless Steel Dog Bowls, Set of 2", category: "Pets", signal: "Official listing matched", signalLevel: "verified" },
  { asin: "B0G43QJZS6", title: "MZNZ Portable Dog Playpen", category: "Pets", signal: "Official listing matched", signalLevel: "verified" },
  { asin: "B0BC1RZFCK", title: "Cuperay Dog Training Clickers, 5-Pack", category: "Pets", signal: "Official listing matched", signalLevel: "verified" },
  { asin: "B0CZ9CJ5RK", title: "Petiry Corduroy Cat Collars, 2-Pack", category: "Pets", signal: "Official listing matched", signalLevel: "verified" },
  { asin: "B0CH55DXYZ", title: "SALTYFACE Tanning Water", category: "Beauty", signal: "Official listing matched", signalLevel: "verified" },
  { asin: "B074VFMRLZ", title: "Beauticom 1 oz Frosted Cosmetic Jars, 24-Pack", category: "Beauty", signal: "Official listing matched", signalLevel: "verified" },
  { asin: "B09VGXQVX8", title: "6-Piece Triangle Powder Puff Set", category: "Beauty", signal: "Official listing matched", signalLevel: "verified" },
  { asin: "B0044UQEFM", title: "GE Advanced Silicone Kitchen & Bathroom Caulk", category: "Home", signal: "Official listing matched", signalLevel: "verified" },
  { asin: "B00G93CFK0", title: "Large Antibacterial Kids Bandages, 10 Count", category: "Health", signal: "Official listing matched", signalLevel: "verified" },
];

export const productCategories = [
  "All",
  ...Array.from(new Set(products.map((product) => product.category))).sort(),
];
