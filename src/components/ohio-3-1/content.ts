export const navigation = [
  ["Home", "#o31-home"],
  ["Our services", "#o31-services"],
  ["Warranty hub", "#o31-warranty"],
  ["Join a studio", "#o31-studio"],
  ["Blog", "#o31-journal"],
  ["Connect", "#o31-contact"],
] as const;

// Confirmed by the user; also present in layout-02/services-02-conversion.tsx.
// Keep the destination in one place so the studio can update it independently.
export const contact = { phone: "+91 97793 97773", whatsapp: "919779397773" };
export const quoteUrl = `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent("Hello Mr. Detailer, I would like a quote for my vehicle.")}`;
export const photo = (name: string) => `/images/${name}`;

export const services = [
  {
    id: "ppf",
    title: "Paint protection film",
    short: "Protect the original.",
    text: "Explore film options for your paint, glass and interior surfaces. Choose the coverage and finish with the studio after a vehicle assessment.",
    items: [
      "PPF",
      "Coloured PPF",
      "Window Films",
      "Windshield Protection Film",
      "Sunroof Films",
      "Interior Paint Protection Film",
    ],
    image: "IMG_20260809_180906.jpg.jpeg",
    alt: "Technician fitting clear film around a vehicle door handle",
  },
  {
    id: "coatings",
    title: "Surface coatings",
    short: "A finish worth keeping.",
    text: "Compare Ceramic, Graphene and Borophene coating options with your studio. Preparation, product selection and aftercare are part of the conversation.",
    items: ["Ceramic Coatings", "Graphene Coatings", "Borophene Coatings"],
    image: "IMG_20260809_182113.jpg.jpeg",
    alt: "Machine polishing a vehicle bonnet before surface protection",
  },
  {
    id: "detailing",
    title: "Detailing packages",
    short: "Bring back the feeling.",
    text: "Build a care plan around the condition of your vehicle, from surface refinement to a considered interior and exterior refresh.",
    items: [
      "Paint Correction",
      "Paint Enhancement",
      "Interior & Exterior Care",
      "Ultimate Protection",
      "Gloss Enrichment",
      "Ceramic Protection",
    ],
    image: "IMG_20260809_181856.jpg.jpeg",
    alt: "Detailer using a polishing machine on a vehicle surface",
  },
  {
    id: "mods",
    title: "Auto mods",
    short: "Make it your own.",
    text: "Discuss your vision, vehicle compatibility and the work involved before choosing your next modification.",
    items: [
      "Denting & Painting",
      "Car Tuning",
      "Customisation",
      "Accessories",
      "Body Kits",
    ],
    image: null,
    alt: "",
  },
  {
    id: "care",
    title: "Car care packages",
    short: "Every detail. Every day.",
    text: "Choose focused care for the surfaces that need attention, or ask the studio to recommend a complete refresh.",
    items: [
      "Head Light Treatment",
      "Leather Conditioning",
      "Underbody Treatment",
      "Top Wash",
      "Interior Enrichment",
      "Exterior Beautification",
      "Surface Refinement",
    ],
    image: "IMG_20260809_180252.jpg.jpeg",
    alt: "Mr. Detailer technician working on a black vehicle in the studio",
  },
] as const;

export const projects = [
  {
    image: "IMG_20260809_180739.jpg.jpeg",
    title: "Precision, edge to edge.",
    category: "Paint protection film",
    alt: "Clear protection film being fitted to a black vehicle in the studio",
  },
  {
    image: "IMG_20260809_182226.jpg.jpeg",
    title: "The art of refinement.",
    category: "Paint correction",
    alt: "Technician machine polishing a black SUV bonnet",
  },
  {
    image: "IMG_20260809_180823.jpg.jpeg",
    title: "It's in the application.",
    category: "Film installation · Detail study",
    alt: "Gloved hand using a green squeegee to fit wet protection film",
  },
  {
    image: "IMG_20260809_181154.jpg.jpeg",
    title: "Care in every curve.",
    category: "Inside the studio",
    alt: "Technician applying film around the upper side of a vehicle",
  },
] as const;

export const questions = [
  [
    "Which protection is right for my car?",
    "Start with how you use your vehicle, its current condition and the finish you want. The studio can discuss PPF, coatings and preparation before recommending a service.",
  ],
  [
    "Can I get a price before visiting?",
    "Share your vehicle model, the service you are interested in and clear photos on WhatsApp. Final scope and pricing should be confirmed with the studio after assessment.",
  ],
  [
    "What warranty will my treatment include?",
    "Coverage depends on the selected product and installation. Ask for the applicable written terms, exclusions and maintenance requirements before booking.",
  ],
  [
    "How should I care for my vehicle afterwards?",
    "Follow the product-specific handover instructions. Confirm curing times, washing methods and any inspection requirements with the studio that carried out your treatment.",
  ],
] as const;
