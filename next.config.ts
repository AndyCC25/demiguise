import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  output: "export",
  // NEXT_PUBLIC_BASE_PATH is set to /demiguise in the GitHub Actions workflow.
  // In local development it is left unset (empty string = serve from root).
  basePath: process.env.NEXT_PUBLIC_BASE_PATH ?? "",
  images: { unoptimized: true },
}

export default nextConfig
