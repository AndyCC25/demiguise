/**
 * Prepend the deployment base path to a public asset URL.
 * NEXT_PUBLIC_BASE_PATH is set to /demiguise in the GitHub Actions workflow.
 * In local development it is undefined — assets are served from the root.
 *
 * Use this ONLY for Ant Design <Image> and <video> src attributes.
 * next/image handles basePath automatically — do NOT call assetSrc() with next/image.
 */
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? ""

export function assetSrc(path: string): string {
  return `${BASE_PATH}${path}`
}
