# AGENTS.md

## Rules

- Serve uploaded media (PDFs, videos, images the app displays) as real files under `public/`, not as Lovable Assets CDN pointers: the deployed custom domain returns 404 for `/__l5e/assets-v1/...` paths, so pointer-based assets break in production.
- Embed the demo video with both `<source>` MP4 (H.264 + faststart) and WebM plus a `poster`, because browsers block autoplay without a user gesture and some refuse embedded PDFs/frames outright.
