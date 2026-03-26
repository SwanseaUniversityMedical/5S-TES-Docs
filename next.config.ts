import type { NextConfig } from "next";
import nextra from "nextra";

const nextConfig: NextConfig = {
  /* regular Next.js config options here */
  turbopack: {
    resolveAlias: {
      // Path to your `mdx-components` file with extension
      "next-mdx-import-source-file": "./mdx-components.tsx",
    },
  },
};

// Set up Nextra with its configuration
const withNextra = nextra({
  // ... Add Nextra-specific options here
});

// Export the final Next.js config with Nextra included
export default withNextra(nextConfig);
