# Guide: new multi-page thesis site (English)

## What's in the zip

```
_config.yml
_layouts/default.html   → shared header, nav, share/contact footer
_layouts/chapter.html   → wraps a chapter's narrative + sticky viz panel
assets/css/style.css    → full visual identity (unchanged colors/fonts, adapted for multi-page)
assets/js/engine.js     → the scroll engine, extracted so every chapter reuses it
index.html              → home page with the six chapter cards
turin.html               → chapter 02, fully built and working (real charts, real data)
```

This is a **new site**, not an edit of your existing `thesis-scrollytelling` repo. I'd suggest keeping the old repo as-is for now (it still works) and either creating a new repository for this version, or replacing everything in the existing one once you're happy with Turin as the template. Your call — tell me which and I'll adjust the upload guide.

## Upload steps (same pattern as your other two sites)

1. Create the repo (or clear the existing one) and enable GitHub Pages the usual way (Settings → Pages → `main` / root).
2. Upload the six files above preserving their folder paths (`_layouts/default.html`, `assets/css/style.css`, etc.) — use "Add file" → "Create new file" and paste inside the editor, never drag the file itself.
3. You'll also need to copy over `hero-desk.jpg`, `intro-skyline.jpg`, `favicon.svg`, and `og-card.png` from your existing `thesis-scrollytelling` repo (I didn't recreate these, they're unchanged).
4. Wait the usual minute or two, then check `/` and `/turin/`.

## Why only Turin is built so far

Each chapter has its own hand-built SVG charts (Turin: a heatmap, a funnel, a commitment-impact matrix). Porting and translating each one faithfully takes real work per chapter, not just a content copy-paste — I didn't want to rush Barcelona, Athens, the Framework, the Comparative chapter, or Practice and risk mistranslating a figure or breaking an animation.

**Turin is the working template.** Once you confirm it looks and behaves the way you want (charts animate on scroll, nav works, mobile view stacks correctly), I'll build the other five chapters the same way, one at a time:

1. `framework.html` (wash: misty, shared with Turin's opening color)
2. `barcelona.html` (wash: rosewood)
3. `athens.html` (wash: sage)
4. `comparative.html` (no wash — neutral)
5. `practice.html` (wash: blush) — plus the closing reflection and hanko stamp, which I moved to belong here as the natural final chapter

## A structural note

I turned the old floating side-tab navigation into your site's main header nav (same colors per chapter, now real links between pages instead of scroll-jumps within one page). The reading-progress bar and the "scroll to next section" arrow still work exactly as before, just scoped to whichever chapter page you're on.
