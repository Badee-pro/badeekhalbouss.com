# AGENTS.md

## Rules

- Serve uploaded media (PDFs, videos, images the app displays) as real files under `public/`, not as Lovable Assets CDN pointers: the deployed custom domain returns 404 for `/__l5e/assets-v1/...` paths, so pointer-based assets break in production.
- Embed the demo video with both `<source>` MP4 (H.264 + faststart) and WebM plus a `poster`, because browsers block autoplay without a user gesture and some refuse embedded PDFs/frames outright.
- Keep MP4 files under `public/media/` and reserve `/coop-tracker-demo.mp4` and `/recital-demo.mp4` as redirects to `/demo` and `/recital-demo`; legacy resume links must open the corresponding site popup rather than a raw video player.
- The custom domain is served by Vercel (via GitHub sync), so keep `vercel.json` rewrites sending extension-less paths and legacy demo MP4 links to `index.html`; without them deep links 404 there.
