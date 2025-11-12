import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  outputFileTracingRoot: path.join(__dirname),

  sassOptions: {
    additionalData: `@import "./scss/variables.scss";`,
  },
};

export default nextConfig;
