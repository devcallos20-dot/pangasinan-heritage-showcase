export const BASE_PATH =
  process.env.NODE_ENV === "production" ? "/pangasinan-heritage-showcase" : "";

export function assetPath(path: string) {
  return `${BASE_PATH}${path}`;
}