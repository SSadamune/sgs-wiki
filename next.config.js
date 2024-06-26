const isProductionEnv = process.env.NODE_ENV === "production";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: isProductionEnv ? "/sgs-wiki" : "",
  assetPrefix: isProductionEnv ? "/sgs-wiki/" : "",
  images: {
    unoptimized: true,
  },
};


module.exports = nextConfig;
