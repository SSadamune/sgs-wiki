const basePath = process.env.NODE_ENV === "production" ? "/sgs-wiki/" : "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: basePath,
  assetPrefix: basePath,
};

module.exports = nextConfig;
