import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      { source: "/packages-journey", destination: "/ohio-preview/explore/packages-journey" },
      { source: "/packages", destination: "/ohio-preview/explore/packages" },
      { source: "/automods", destination: "/ohio-preview/explore/automods" },
      { source: "/autotuning", destination: "/ohio-preview/explore/autotuning" },
      { source: "/coatings-gallery", destination: "/ohio-preview/explore/coatings-gallery" },
      { source: "/detailing-menu", destination: "/ohio-preview/explore/detailing-menu" },
      { source: "/shop-care-shelf", destination: "/ohio-preview/explore/shop-care-shelf" },
      { source: "/about-ohio", destination: "/ohio-preview/explore/about-ohio" },
      { source: "/car-care-planner", destination: "/ohio-preview/explore/car-care-planner" },
      { source: "/warranty-care-hub", destination: "/ohio-preview/explore/warranty-care-hub" },
      { source: "/own-a-studio", destination: "/ohio-preview/explore/own-a-studio" },
      { source: "/customisation-build", destination: "/ohio-preview/explore/customisation-build" },
      { source: "/detail-journal", destination: "/ohio-preview/explore/detail-journal" },
      { source: "/ohio-preview/:slug((?!second|explore).*)", destination: "/ohio-preview/explore/:slug" },
    ];
  },
};

export default nextConfig;
