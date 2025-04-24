import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    dangerouslyAllowSVG: true, // ⚠️ attention à la source
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;", // optionnel mais conseillé
    remotePatterns: [
      
      {
        protocol: 'https',
        hostname: 'placehold.co',
       
      },
    ],
  },
};

export default nextConfig;
