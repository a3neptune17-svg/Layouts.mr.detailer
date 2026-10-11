// Only confirmed client destinations belong here. Empty values keep navigation inactive.
export const clientConfig = {
  phone: "+91 76936 06006",
  telephone: "tel:+917693606006",
  email: "care@mrdetailer.co.in",
  namexUrl: "", // Inactive until client confirms official URL
  location: "",
  office: "",
  // Note: Client instructions noted conflict between 'X Frost' (handwritten reference) and 'X Cruise'.
  // We include 'X Frost' per reference image notes while reporting the ambiguity for final client confirmation.
  ppfProducts: ["X Phantom", "X Shadow", "X Frost"],
  detailerLogoLight: "/images/mrdetailer-logo-light.png",
  detailerLogoDark: "/images/mrdetailer-logo-dark.png",
  detailerLogo: "/images/mrdetailer-logo-dark.png",
  namexLogoLight: "/images/namex-logo-light.png",
  namexLogoDark: "/images/namex-logo-dark.png",
  namexLogo: "/images/namex-logo-dark.png",
  shopImage: "/images/client-shop.jpg",
};

export const ohioPage = (slug: string) => `/ohio-preview/explore/${slug}`;
