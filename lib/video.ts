// Phase 2: replace with signed-URL video host (Mux / Cloudflare Stream / Bunny).
// In Phase 1 all videos are free teaser clips served from public/media/.

export function getVideoUrl(filename: string): string {
  return `/media/${filename}`;
}
