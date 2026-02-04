# Specification

## Summary
**Goal:** Add a new “Our Work” gallery section to the landing page to showcase example AC cleaning work.

**Planned changes:**
- Create a new landing-page section component for an “Our Work” image-card gallery under `frontend/src/components/landing/...`.
- Insert the new gallery section into `LandingPage` so it renders after `ServicesSection` and before `CoverageSection`.
- Implement a responsive image-card grid (1 column mobile, 2 on small screens, 3 on large screens) with consistent image cropping, meaningful alt text, and hover effects (image zoom + increased card shadow).
- Seed the gallery with at least 3 static items, including one using the provided Unsplash image URL, with English heading/subtitle and English card titles/descriptions.

**User-visible outcome:** Visitors to the landing page see an “Our Work” section between Services and Coverage, featuring a responsive grid of example work cards with images and subtle hover animations.
