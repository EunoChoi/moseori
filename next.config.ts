import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compiler: {
    styledComponents: true, // (SWC)Styled-Components SSR 적용
  },
  swcMinify: true,  // (SWC)Styled-Components SSR 적용
};

export default nextConfig;
