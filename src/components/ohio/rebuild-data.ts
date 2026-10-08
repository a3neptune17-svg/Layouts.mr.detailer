export const whatsapp = "https://wa.me/919779397773";
export const imagePath = (name: string) => `/images/${name}`;
// Set only when the client supplies the Voyage Solare clip (local /videos/... path).
export const voyageVideo: string | null = "/videos/productvideo.mp4";
export const namexVideo = "/videos/gemini_generated_video_8cab5f87.mp4";
export type OhioProject = { title: string; category: string; image: string; alt: string; video?: string };
export const projects: OhioProject[] = [
  { title: "About NameX", category: "Paint protection film", image: "Picsart_26-09-02_15-33-19-009.jpg.jpeg", video: namexVideo, alt: "NameX paint protection film video" },
  { title: "DETAILING PACKAGES", category: "Signature Packages · Complete care for every journey", image: "IMG_20260809_182226.jpg.jpeg", alt: "Technician machine-polishing the bonnet of a black vehicle" },
  { title: "SHOP", category: "Curated for every car · Bring studio quality home", image: "Namex white background only.png", alt: "NameX automotive protection product packaging" },
  { title: "Studio essentials", category: "Product film · Care for every journey", image: "IMG_20260809_181254.jpg.jpeg", video: voyageVideo ?? undefined, alt: "MR. DETAILER product video" },
];
export const serviceGroups = [
  { id: "ppf", title: "PPF", items: ["Paint Protection Film", "Coloured PPF", "Window Films", "Windshield Protection Film", "Sunroof Films", "Interior Paint Protection Film"] },
  { id: "coatings", title: "Surface Coatings", items: ["Ceramic Coatings", "Graphene Coatings", "Borophene Coatings"] },
  { id: "detailing", title: "Detailing Packages", items: ["Paint Correction", "Paint Enhancement", "Interior & Exterior Care", "Ultimate Protection", "Gloss Enrichment", "Ceramic Protection"] },
  { id: "auto-mods", title: "Auto Mods", items: ["Denting & Painting", "Car Tuning", "Customisation", "Accessories", "Body Kits"] },
  { id: "car-care", title: "Car Care Packages", items: ["Head Light Treatment", "Leather Conditioning", "Underbody Treatment", "Top Wash", "Interior Enrichment", "Exterior Beautification", "Surface Refinement"] },
];
export const processSteps = [
  ["About Us", "MR. DETAILER — The Boss of Detailers. Our Ludhiana studio brings together paint protection, surface coatings, detailing and vehicle customisation.", "Visit the team at SCF 1, I-Block Market, Sarabha Nagar to discuss your vehicle and the care it needs."],
  ["Inspect the surface", "The starting point matters. A studio inspection helps identify visible marks, contamination and areas needing attention.", "The condition of the finish informs the next steps and the suitability of a particular treatment."],
  ["Warranty", "Check Your Warranty · Maintenance Schedule · Annual Inspection.", "Contact the Warranty Hub with your service invoice and product details. Coverage and terms depend on the product and service selected."],
  ["Own a Studio", "Explore the MR. DETAILER studio network. Share your location, experience and plans with the team.", "Start a conversation about owning a studio or partnering with us. Availability and commercial terms are confirmed directly with MR. DETAILER."],
  ["Customization", "Denting & Painting · Car Tuning · Customisation · Accessories · Body Kits.", "Discuss your intended changes, suitability and scope with the studio before booking."],
  ["Blogs", "Detailing Tips · Product Guide · Latest Updates.", "Explore the rotating questions below, or contact the studio for guidance specific to your vehicle."],
  ["Care beyond the studio", "Ask for the maintenance guidance relevant to your selected treatment.", "The Warranty Hub connects you with the team for warranty checks, maintenance schedules and annual inspection enquiries."],
];
export const studioQuestions = [
  { question: "What is the difference between PPF and ceramic coating?", answer: "PPF is a film applied over selected surfaces; a coating is a surface treatment. Discuss your protection priorities, coverage and maintenance with the studio before choosing." },
  { question: "How often should my car be professionally detailed?", answer: "It depends on use, storage and surface condition. A studio inspection can help you choose a suitable care schedule." },
  { question: "What does ceramic coating actually protect?", answer: "Ask about the exact product, treated surfaces and care requirements. Performance and warranty terms vary; confirm them with the installer." },
  { question: "How does PPF protect against stone chips?", answer: "Film adds a layer over covered paintwork. Results depend on the film, installation and impact; confirm product-specific limits with the studio." },
  { question: "How should I maintain my coating?", answer: "Follow the installer’s instructions for washing and maintenance. Use suitable products and contact the studio if the finish changes." },
];
export const videoSlots = [
  { title: "Detailing Tips", image: "IMG_20260809_182226.jpg.jpeg", alt: "MR. DETAILER technician polishing a vehicle" },
  { title: "Product Guide", image: "IMG_20260809_180739.jpg.jpeg", alt: "MR. DETAILER technician applying protection film" },
  { title: "Latest Updates", image: "IMG_20260809_181154.jpg.jpeg", alt: "Inside the MR. DETAILER studio" },
];
export const principles = [
  { label: "Voyage Soler", text: "Protection work in motion, from first inspection to the finished surface.", foot: "MR. DETAILER · Studio in motion" },
  { label: "Vision & mission", text: "Protection, refinement and everyday care. A considered approach to every surface.", foot: "MR. DETAILER · Our approach" },
  { label: "Our promise of attention", text: "Welcome back to perfection. Discover the craft behind the finish at our Ludhiana studio.", foot: "MR. DETAILER · Visit the studio" },
];
