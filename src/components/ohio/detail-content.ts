import { processSteps, serviceGroups, studioQuestions } from "./rebuild-data";

export type DetailContent = {
  title: string;
  eyebrow: string;
  intro: string;
  sections: { title: string; text: string; slug?: string }[];
  kind?:
    | "shop"
    | "gallery"
    | "booking"
    | "coatings"
    | "ppf"
    | "auto-mods"
    | "detailing"
    | "packages"
    | "planner"
    | "tuning"
    | "about"
    | "warranty"
    | "franchise"
    | "journal";
};

export const detailPages: Record<string, DetailContent> = {
  "about-us": {
    title: "About us.",
    eyebrow: "MR. DETAILER",
    intro: processSteps[0][1],
    sections: [
      {
        title: "WE LISTEN. WE ASSESS. WE CARE FOR THE DETAILS.",
        text: "Every vehicle arrives with a story, specific usage requirements, and unique finish conditions. Our studio combines precision surface measurement, optical defect analysis, and certified installation standards.",
        slug: "meet-the-team",
      },
      {
        title: "Craftsmanship & Studio Standards",
        text: "Clean-room environment, temperature-controlled application bays, high-CRI inspection illumination, and certified surface specialists dedicated to automotive excellence.",
        slug: "process",
      },
    ],
  },
  process: {
    title: "Protection science.",
    eyebrow: "OUR PROCESS",
    intro: "Your vehicle’s condition informs the scope of work. We measure, analyze, and prescribe treatments tailored to your paint and driving lifestyle.",
    sections: [
      {
        title: "01 / Surface Assessment & Paint Measurement",
        text: "Digital ultrasonic paint thickness gauges measure clear-coat depth across every body panel, detecting thin factory areas, previous resprays, or deep etched defects before any machine work begins.",
      },
      {
        title: "02 / Multi-Stage Decontamination",
        text: "pH-neutral snow foam bath, ferrous iron particle removal, chemical tar dissolution, and ultra-fine clay bar treatment to ensure 100% sterile surface bonding.",
      },
      {
        title: "03 / Multi-Stage Paint Correction",
        text: "Rotary and dual-action micro-polishing steps to eliminate swirl marks, holograms, wash marring, and oxidation while preserving maximal clear-coat thickness.",
      },
      {
        title: "04 / Certified Protection Application",
        text: "Application of NameX self-healing PPF or molecular covalent coatings inside temperature and humidity-controlled clean bays.",
        slug: "maintenance",
      },
    ],
  },
  gallery: {
    title: "Inside the studio.",
    eyebrow: "GALLERY",
    intro: "A closer look at the craft. Real moments from our studio floor showing preparation, paint correction, precision edge tucks, and final hand-over inspections.",
    sections: [],
    kind: "gallery",
  },
  services: {
    title: "Care for every surface.",
    eyebrow: "OUR SERVICES",
    intro: "Precision surface treatments, advanced molecular coatings, paint protection films, and bespoke auto mods. Discuss your vehicle’s condition and priorities with the studio team.",
    sections: [
      {
        title: "Paint Protection Film (PPF)",
        text: "Self-healing aliphatic TPU films offering invisible defense against stone chips, highway debris, and scratches.",
        slug: "ppf",
      },
      {
        title: "Surface Coatings",
        text: "Ceramic SiC, Graphene Matrix, and Borophene 2D coatings delivering extreme gloss, chemical defense, and hydrophobicity.",
        slug: "coatings",
      },
      {
        title: "Detailing Packages",
        text: "Multi-stage paint correction, gloss enrichment, interior deep sterilisation, and concours preparation.",
        slug: "detailing",
      },
      {
        title: "Auto Mods & Customisation",
        text: "Denting & painting, performance tuning, aerodynamic body kits, bespoke styling, and custom accessories.",
        slug: "auto-mods",
      },
      {
        title: "Car Care Packages",
        text: "Headlight restoration, leather feeding, underbody rust protection, and routine studio maintenance washes.",
        slug: "car-care",
      },
    ],
  },
  ppf: {
    title: "Paint Protection Film",
    eyebrow: "INVISIBLE PROTECTION, MAXIMUM CONFIDENCE",
    intro: "Engineered aliphatic polyurethane films offering optically clear, self-healing protection against stone chips, highway grit, environmental etching, and surface scratches. Every installation is edge-tucked for a seamless finish.",
    kind: "ppf",
    sections: [
      {
        title: "X Phantom · High-Gloss Optical Film",
        text: "Ultra-clarity gloss TPU film featuring an elastomeric self-healing topcoat. Swirl marks and light wash scratches disappear under ambient heat or sunlight while magnifying original paint depth.",
      },
      {
        title: "X Shadow · Stealth Satin Matte",
        text: "Transforms gloss factory paint into a smooth, factory-grade satin finish while shielding the underlying clear coat from gravel, road salt, and UV degradation.",
      },
      {
        title: "X Frost · Frozen Clear Defense",
        text: "Subtle iced-satin finish that accentuates metallic flakes and pearl pigments with zero orange-peel texture. Formulated for luxury and exotic vehicles.",
      },
      {
        title: "Coloured & Infused PPF",
        text: "Dynamic colour transformation films combining authentic paint-depth pigment with heavy-duty 8.5 mil impact defense.",
      },
      {
        title: "Optic Windshield & Sunroof Defense",
        text: "Impact-absorbing exterior windshield films guarding against rock chips and cracking, plus infrared heat-rejecting sunroof films.",
      },
      {
        title: "Precision Interior PPF",
        text: "Digital template cutting for high-wear interior surfaces: piano black center consoles, navigation touchscreens, carbon trims, and digital clusters.",
      },
    ],
  },
  coatings: {
    title: "Surface Coatings",
    eyebrow: "DEEP GLOSS, LONG-TERM PROTECTION",
    intro: "Molecular surface formulations delivering extreme water contact angles (>115°), deep optical reflections, and chemical resistance from pH 2 to pH 13. Engineered with genuine NameX matrix technology.",
    kind: "coatings",
    sections: [
      {
        title: "Ceramic SiC 9H Matrix",
        text: "High-density silicon carbide and silicon dioxide formula forming a rigid, semi-permanent quartz shell that intensifies paint depth and repels environmental fallout.",
      },
      {
        title: "Borophene Matrix Coating",
        text: "Next-generation 2D boron lattice technology offering unprecedented tensile durability, electrical discharge dissipation, and thermal stability up to 1000°C.",
      },
      {
        title: "Graphene Elastomer Matrix",
        text: "Reduced graphene oxide platelets that actively dissipate surface heat, drastically reducing water spotting, mineral etching, and insect stain adhesion on dark vehicle finishes.",
      },
      {
        title: "Alloy Wheel & Caliper Shield",
        text: "High-temperature ceramic matrix formulation engineered to withstand 800°C heat, repelling corrosive metallic brake dust and simplifying wheel maintenance.",
      },
      {
        title: "Hydrophobic Glass Coating",
        text: "Fluoropolymer glass barrier delivering intense water beading at speeds above 45 km/h, significantly improving foul-weather visibility.",
      },
    ],
  },
  "auto-mods": {
    title: "Auto Mods",
    eyebrow: "DESIGN. BUILD. PERFECTED.",
    intro: "Bespoke vehicle transformation blending mechanical craftsmanship with studio styling. From body kit fitting and climate-controlled paintwork to ECU tuning and custom interior upholstery.",
    kind: "auto-mods",
    sections: [
      {
        title: "Denting & Painting",
        text: "Computerized spectrophotometer colour matching, climate-controlled downdraft spray booth baking, and paintless dent repair (PDR) restoring factory panel lines.",
      },
      {
        title: "Car Tuning & Calibration",
        text: "Refined ECU/TCU remapping, throttle sensitivity optimization, high-flow air intake systems, and stainless exhaust fitment.",
      },
      {
        title: "Aero Styling & Body Kits",
        text: "Carbon fiber splitters, diffusers, ducktail spoilers, and custom body kit integration fitted with millimeter gap accuracy.",
      },
      {
        title: "Accessories & Styling Upgrades",
        text: "Alloy wheel upgrades, caliper colour customisation, smoked optical film tinting, and auxiliary lighting solutions.",
      },
    ],
  },
  detailing: {
    title: "Detailing Packages",
    eyebrow: "SIGNATURE CARE FOR EVERY JOURNEY",
    intro: "Comprehensive paint correction and multi-stage restoration procedures returning tired, swirled paintwork to better-than-factory showroom clarity.",
    kind: "detailing",
    sections: [
      {
        title: "Paint Correction Package",
        text: "Multi-stage compound and micro-finishing polish removing up to 90% of surface swirls, holograms, scratches, and sanding marks.",
      },
      {
        title: "Paint Enhancement Package",
        text: "Single-stage gloss enrichment polish eliminating light haze and maximizing optical reflectivity prior to sealants or wax.",
      },
      {
        title: "Interior & Exterior Care",
        text: "Full cabin steam extraction, leather deep conditioning, ozone air sanitisation, engine bay detailing, and exterior hand wash.",
      },
      {
        title: "Ultimate Protection Package",
        text: "Complete bumper-to-bumper detailing including wheels-off brake caliper coating, glass sealant, and trim enrichment.",
      },
    ],
  },
  "car-care": {
    title: "Car Care Packages",
    eyebrow: "ROUTINE STUDIO PRESERVATION",
    intro: "Specialized maintenance treatments designed to nourish treated surfaces, refresh protective coatings, and uphold pristine vehicle aesthetics.",
    sections: [
      {
        title: "Top Wash & Surface Refinement",
        text: "pH-neutral contact wash utilizing 2-bucket grit-guard technique, warm air touchless drying, and ceramic detailer top-up.",
      },
      {
        title: "Leather Conditioning & Interior Enrichment",
        text: "UV-blocking conditioners restoring natural suppleness to Napa leather, perforated seats, and Alcantara trims.",
      },
      {
        title: "Headlight Optical Treatment",
        text: "Wet-sanding yellowed polycarbonate lenses, compounding to crystal clarity, and sealing with UV-cured hard coat.",
      },
      {
        title: "Underbody Protective Treatment",
        text: "High-pressure chassis wash followed by anti-corrosive wax barrier application protecting against moisture, mud, and road chemicals.",
      },
    ],
  },
  shop: {
    title: "Curated for every car.",
    eyebrow: "BRING STUDIO QUALITY HOME",
    intro: "Explore professional-grade car care formulations crafted by detailers for detailers. Safe on ceramic coatings, PPF, and delicate automotive finishes.",
    kind: "shop",
    sections: [
      {
        title: "Pro Detail Kit (7-Piece Set)",
        text: "The definitive studio collection: Snow Foam, Ceramic Detailer, Iron Decon Wheel Cleaner, Cockpit Cleaner, Ultra-Plush Microfibers, and Scratch-Free Wash Mitt.",
        slug: "detailing-kits",
      },
      {
        title: "Exterior Care Essentials",
        text: "pH-neutral wash soaps, clay bars, bug & tar removers, and tire dressing gels formulated for long-lasting performance.",
        slug: "exterior-care",
      },
      {
        title: "Interior Care & Conditioners",
        text: "Matte-finish cockpit cleaners, leather balms, glass cleaners, and anti-bacterial fabric fresheners leaving zero greasy residue.",
        slug: "interior-care",
      },
      {
        title: "Microfiber & Studio Accessories",
        text: "600 GSM Korean edgeless drying towels, ultra-soft horsehair wheel brushes, and foam wash mitts designed to prevent wash scratches.",
        slug: "accessories",
      },
    ],
  },
  warranty: {
    title: "Check your warranty.",
    eyebrow: "WARRANTY HUB",
    intro: "Contact the studio with your service invoice, installation date, and product serial number. Warranty coverage, terms, and maintenance criteria are verified directly by MR. DETAILER.",
    sections: [
      {
        title: "Maintenance Schedule Verification",
        text: "Certified coatings and PPF installations require periodic studio maintenance washes to validate ongoing warranty coverage.",
        slug: "maintenance",
      },
      {
        title: "Annual Studio Inspection",
        text: "Schedule your complimentary annual inspection to evaluate coating hydrophobic performance or film edge integrity.",
        slug: "annual-inspection",
      },
      {
        title: "Claim & Service Records",
        text: "Submit your digital service invoice or physical warranty certificate to verify treatment authenticity.",
        slug: "booking",
      },
    ],
  },
  maintenance: {
    title: "Care beyond the studio.",
    eyebrow: "MAINTENANCE SCHEDULE",
    intro: "Proper aftercare ensures optimal coating longevity and film self-healing performance. Follow the installer’s guidelines for washing and maintenance.",
    sections: [
      {
        title: "Initial Curing Period (First 7 Days)",
        text: "Avoid high-pressure washing, aggressive detergents, and automated brush washes while ceramic coatings and PPF adhesives fully cure.",
      },
      {
        title: "Recommended Washing Protocol",
        text: "Always utilize a two-bucket wash system with grit guards and a dedicated pH-neutral shampoo. Wash out of direct sunlight.",
      },
      {
        title: "A Change in the Finish?",
        text: "If you notice water beading decline, light tree sap, or surface contamination, contact the studio immediately for safe decontamination.",
        slug: "connect",
      },
    ],
  },
  "annual-inspection": {
    title: "Arrange an inspection.",
    eyebrow: "WARRANTY HUB",
    intro: "Ensure your surface coating or paint protection film performs at its peak. Book your annual studio inspection with our master technicians.",
    sections: [
      {
        title: "What We Inspect",
        text: "Surface contact angle measurement, film edge adhesion, topcoat elasticity assessment, and micro-decontamination.",
        slug: "booking",
      },
    ],
  },
  "own-a-studio": {
    title: "Your next chapter.",
    eyebrow: "OWN A STUDIO",
    intro: "Join the MR. DETAILER studio network. We combine cutting-edge protection science, dedicated technical training, and an established luxury automotive brand.",
    sections: [
      {
        title: "Meet the Team",
        text: "Speak with our leadership and technical directors to discuss studio requirements, territory availability, and commercial framework.",
        slug: "meet-the-team",
      },
      {
        title: "Meet Us",
        text: "Arrange an in-person meeting or visit an existing flagship studio to experience the MR. DETAILER standard firsthand.",
        slug: "meet-us",
      },
    ],
  },
  "meet-the-team": {
    title: "WE LISTEN. WE ASSESS. WE CARE FOR THE DETAILS.",
    eyebrow: "MEET THE TEAM",
    intro: "Behind MR. DETAILER is a passionate team of IDA-certified detailers, master PPF installers, and automotive enthusiasts committed to the highest standards of automotive care.",
    sections: [
      {
        title: "Our Philosophy",
        text: "We believe perfection is achieved not when there is nothing more to add, but when there is nothing left to take away. Every vehicle receives undivided attention.",
        slug: "booking",
      },
      {
        title: "Join Our Studio Network",
        text: "Explore partnership and studio ownership opportunities across premier automotive territories.",
        slug: "own-a-studio",
      },
    ],
  },
  "meet-us": {
    title: "Let’s meet.",
    eyebrow: "OWN A STUDIO",
    intro: "Start a conversation about owning a studio, partnering with us, or arranging a studio consultation.",
    sections: [
      {
        title: "Tell Us Your Plans",
        text: "Share your location, industry background, and investment goals with our studio expansion team.",
        slug: "connect",
      },
    ],
  },
  journal: {
    title: "A little knowledge. A lot of care.",
    eyebrow: "JOURNAL",
    intro: "Expert detailing insights, technical product guides, and stories from the studio floor.",
    sections: [
      {
        title: "Detailing Tips",
        text: "Professional advice on routine washing, paint preservation, and avoiding common swirl marks.",
        slug: "detailing-tips",
      },
      {
        title: "Product Guide",
        text: "A comprehensive guide to selecting between ceramic coatings, graphene, and paint protection films.",
        slug: "product-guide",
      },
      {
        title: "Latest Updates",
        text: "Recent vehicle deliveries, exotic transformations, and studio announcements.",
        slug: "latest-updates",
      },
    ],
  },
  "detailing-tips": {
    title: "A better aftercare conversation.",
    eyebrow: "DETAILING TIPS",
    intro: "Essential aftercare advice from certified detailers. Proper technique preserves gloss and prevents premature wear on protected finishes.",
    sections: studioQuestions.slice(1).map((item) => ({ title: item.question, text: item.answer })),
  },
  "product-guide": {
    title: "Choose around the car.",
    eyebrow: "PRODUCT GUIDE",
    intro: "Understanding the difference between PPF, ceramic coatings, and paint correction to choose the right protection for your vehicle.",
    sections: [
      { title: studioQuestions[0].question, text: studioQuestions[0].answer },
      {
        title: "Comparing Film vs Coating",
        text: "Paint protection film provides a physical sacrificial urethane barrier against rock chips; ceramic coatings provide chemical bonding against oxidation, bird droppings, and UV fade. Many owners pair both: PPF on high-impact zones, ceramic coating overall.",
        slug: "services",
      },
    ],
  },
  "latest-updates": {
    title: "From the studio floor.",
    eyebrow: "LATEST UPDATES",
    intro: "Recent highlights, delivery walkthroughs, and studio announcements from MR. DETAILER.",
    sections: [
      {
        title: "Studio Portfolio",
        text: "Explore real photography and walk-around videos of completed vehicle transformations.",
        slug: "gallery",
      },
    ],
  },
  connect: {
    title: "DROP US A LINE",
    eyebrow: "CONNECT",
    intro: "We would love to hear from you. Reach out to schedule an in-person vehicle inspection or speak directly with our team.",
    sections: [
      {
        title: "BOOK A STUDIO INSPECTION",
        text: "Schedule an in-person assessment for paint depth measurement and custom package pricing.",
        slug: "booking",
      },
      {
        title: "Visiting Us",
        text: "Contact our team for our studio location and private appointment slots.",
        slug: "visiting",
      },
    ],
  },
  booking: {
    title: "BOOK A STUDIO INSPECTION",
    eyebrow: "BOOK AN APPOINTMENT",
    intro: "We would love to hear from you. An in-person inspection allows us to evaluate clear-coat condition, measured thickness, and confirm exact scope before booking.",
    sections: [],
    kind: "booking",
  },
  visiting: {
    title: "Visit the studio.",
    eyebrow: "VISITING US",
    intro: "Please contact our team prior to visiting so we can prepare a dedicated bay for your vehicle assessment.",
    sections: [
      {
        title: "Plan Your Visit",
        text: "Direct telephone and WhatsApp consultation available to arrange your private studio inspection.",
        slug: "booking",
      },
    ],
  },
  "working-hours": {
    title: "Plan your next visit.",
    eyebrow: "WORKING HOURS",
    intro: "Call the studio to confirm appointment availability and operating hours.",
    sections: [
      {
        title: "Arrange a Time",
        text: "Share your preferred date and vehicle details. A booking enquiry does not guarantee a slot until confirmed by studio staff.",
        slug: "booking",
      },
    ],
  },
};

// Shop subcategories
for (const [slug, title, text] of [
  ["exterior-care", "Exterior Care", "Ask about products suitable for your paint, film or coating."],
  ["interior-care", "Interior Care", "Choose care around your vehicle’s interior materials."],
  ["accessories", "Accessories", "Discuss tools and accessories for your care routine."],
  ["detailing-kits", "Detailing Kits", "Explore the supplied Pro Detail Kit with the studio. Confirm contents, suitability and availability before ordering."],
]) {
  detailPages[slug] = {
    title,
    eyebrow: "SHOP",
    intro: text,
    kind: "shop",
    sections: [
      {
        title: "Product guidance",
        text: "Confirm care instructions, microfiber compatibility, and recommended dilution ratios with the studio team.",
        slug: "product-guide",
      },
    ],
  };
}

// Policies
for (const [slug, title] of [
  ["privacy", "Privacy Policy"],
  ["cookies", "Cookie Policy"],
  ["terms", "Terms of Service"],
]) {
  detailPages[slug] = {
    title,
    eyebrow: "WEBSITE INFORMATION",
    intro: "The studio’s approved policy is not yet published here. Contact MR. DETAILER for the current information before sharing sensitive details or confirming a service.",
    sections: [
      {
        title: "Contact the studio",
        text: "Request the applicable policy or terms directly from the team.",
        slug: "connect",
      },
    ],
  };
}

// 13 Unique Client Reference Slug Aliases & Mappings
detailPages["packages-journey"] = {
  ...detailPages["detailing"],
  kind: "packages",
  title: "Packages Journey — Service Discovery",
  eyebrow: "PACKAGES JOURNEY",
  intro: "Explore our five comprehensive service categories, from thermal dry-steam decontamination to multi-stage concours paint correction. Inspect inclusions and prepare your vehicle enquiry."
};

detailPages["packages"] = {
  ...detailPages["detailing"],
  kind: "packages",
  title: "Detailing Packages & Polishing Scope",
  eyebrow: "PRECISION PACKAGES",
  intro: "Compare Paint Enhancement vs. Multi-Stage Correction, inspect studio inclusions, and review the technical difference between synthetic sealants and permanent ceramic SiC quartz."
};

detailPages["detailing"] = {
  ...detailPages["detailing"],
  kind: "packages"
};

detailPages["automods"] = {
  ...detailPages["auto-mods"],
  kind: "auto-mods",
  title: "Auto Mods & Customisation Build Sheet",
  eyebrow: "DESIGN. BUILD. PERFECTED."
};

detailPages["autotuning"] = {
  ...detailPages["auto-mods"],
  kind: "tuning",
  title: "Auto Tuning & Performance Engineering",
  eyebrow: "AUTO TUNING"
};

detailPages["customisation-build"] = {
  ...detailPages["auto-mods"],
  kind: "tuning",
  title: "Customisation Build Sheet & Moodboards",
  eyebrow: "CUSTOMISATION BUILD"
};

detailPages["coatings-gallery"] = {
  ...detailPages["coatings"],
  kind: "coatings",
  title: "Surface Coatings Gallery",
  eyebrow: "COATINGS GALLERY"
};

detailPages["detailing-menu"] = {
  ...detailPages["detailing"],
  kind: "planner",
  title: "Detailing Menu & Guided Selection",
  eyebrow: "DETAILING MENU"
};

detailPages["car-care-planner"] = {
  ...detailPages["car-care"],
  kind: "planner",
  title: "Car Care Planner",
  eyebrow: "CAR CARE PLANNER"
};

detailPages["car-care"] = {
  ...detailPages["car-care"],
  kind: "planner"
};

detailPages["shop-care-shelf"] = {
  ...detailPages["shop"],
  kind: "shop",
  title: "Shop Care Shelf",
  eyebrow: "CARE SHELF"
};

detailPages["about-ohio"] = {
  ...detailPages["about-us"],
  kind: "about",
  title: "About MR. DETAILER Studio",
  eyebrow: "ABOUT US"
};

detailPages["about-us"] = {
  ...detailPages["about-us"],
  kind: "about"
};

detailPages["warranty-care-hub"] = {
  ...detailPages["warranty"],
  kind: "warranty",
  title: "Warranty Care Hub",
  eyebrow: "WARRANTY HUB"
};

detailPages["detail-journal"] = {
  ...detailPages["journal"],
  kind: "journal",
  title: "Detail Journal & Technical Guides",
  eyebrow: "DETAIL JOURNAL"
};

detailPages["journal"] = {
  ...detailPages["journal"],
  kind: "journal"
};

detailPages["detailing-tips"] = {
  ...detailPages["detailing-tips"],
  kind: "journal"
};

detailPages["product-guide"] = {
  ...detailPages["product-guide"],
  kind: "journal"
};

detailPages["latest-updates"] = {
  ...detailPages["latest-updates"],
  kind: "journal"
};

detailPages["own-a-studio"] = {
  ...detailPages["own-a-studio"],
  kind: "franchise"
};

detailPages["meet-the-team"] = {
  ...detailPages["meet-the-team"],
  kind: "franchise"
};

detailPages["meet-us"] = {
  ...detailPages["meet-us"],
  kind: "franchise"
};

detailPages["paint-protection-film"] = detailPages["ppf"];
detailPages["franchise"] = detailPages["own-a-studio"];

