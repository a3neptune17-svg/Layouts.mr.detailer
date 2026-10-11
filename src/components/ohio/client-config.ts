// Only confirmed client destinations belong here. Empty values keep navigation inactive.
export const clientConfig = {
  phone: "+91 76936 06006",
  telephone: "tel:+917693606006",
  email: "care@mrdetailer.co.in",
  namexUrl: "",
  location: "",
  office: "",
  ppfProducts: ["X Phantom", "X Shadow"], // Third product awaits client confirmation.
  detailerLogo: "/images/client-detailer-logo.png",
  namexLogo: "/images/client-namex-logo.png",
  shopImage: "/images/client-shop.jpg",
};

export const ohioPage = (slug: string) => `/ohio-preview/explore/${slug}`;
