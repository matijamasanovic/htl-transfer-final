import { i18n } from "./next-i18next.config.js";

/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  i18n, // <- add i18n here
};

export default nextConfig;
