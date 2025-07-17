import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/simple-calculator',
  trailingSlash: true,
};

export default nextConfig;
