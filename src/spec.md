# Specification

## Summary
**Goal:** Add a responsive “Service Areas” section for Ahmedabad that matches the provided layout/styling, with English headline/footnote and the specified area names.

**Planned changes:**
- Create a new React + TypeScript section component styled with Tailwind: light blue background, centered container, headline, grid of 8 area cards, and a footnote line.
- Implement a responsive grid layout (2 columns on small screens, 4 columns on md+) with consistent spacing and card styling (white, rounded, subtle shadow, left border accent).
- Populate exactly 8 cards with the provided area labels (including parenthetical Gujarati where shown), using consistent bold typography.
- Apply visual grouping: first four cards with an orange left border accent; last four cards with a blue left border accent; keep an overall coherent blue/orange theme.

**User-visible outcome:** Users see a neatly styled, responsive Ahmedabad Service Areas section listing eight localities with a discount note for Hanspura and Nana Chiloda.
