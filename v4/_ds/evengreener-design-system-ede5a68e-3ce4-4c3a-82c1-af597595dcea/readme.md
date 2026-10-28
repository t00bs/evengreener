# EvenGreener design system

The design system for the **evengreener.com redesign** ("Evolve" direction): a Shopify Online Store 2.0 storefront for composters, food waste solutions, water butts and sustainable garden and home products. The brand stays recognisable; execution gets more premium, more consistent and easier to shop.

**v0.2 (Oct 2026):** modernised (sentence-case buttons, bigger and tighter display type, leaf-50 tint surface, theme-aligned header) and mapped onto the base Shopify theme the build starts from. See `guidelines/shopify-theme-map.md`.

## Company context
- **EvenGreener** is a Yorkshire-based online retailer (Brookfield Court, Selby Road, Leeds LS25 1NB), selling online since 2001 (the About page says founded 2000: confirm with client).
- **Range:** garden composting (hot composters, large and wooden bins, tumblers, wormeries, bokashi), food waste (electric composters, digesters, kitchen caddies), water saving (water butts, wall tanks, accessories), plus gardening, home and gifts.
- **Brands:** HOTBIN, Green Johanna, Green Cone, Graf, Maze, Straight, Strata, Prestige, Reencle. Many bestsellers are UK-made from recycled plastic.
- **Promise:** practical, expert help to make sustainable living easy for everyone. Free UK delivery over £65, bulk buy options, a friendly Customer Care Team (customer.care@evengreener.com).
- **Audiences:** Starters (flats, caddies, reassurance it won't smell), Gardeners (capacity, size, speed), Upgraders (hot composters, specs), Gifters (price-banded edits), Bulk buyers (fast route to quotes).
- **Platform:** Shopify OS 2.0, Yotpo reviews, swatch app. Components map to sections/blocks a merchant can reorder; product facts come from metafields (capacity, dimensions, material, origin, badges, why-we-love points, highlight tags, upsell extras, FAQs).

## Sources
- `code/tokens.css`, `code/tokens.json`, `code/components.html` (attached local codebase, read-only): **source of truth** for tokens and component values. Class prefix `eg-`.
- `uploads/3-brand-and-redesign-brief.md`: business, audience, tone, audit and redesign direction.
- `uploads/4-component-inventory.md`: full component inventory, Shopify mapping and buy box order.
- `uploads/DOWNLOAD-LOGOS.md`: logo URLs on the live Shopify CDN (fetched into `assets/logos/`).
- Fonts: `uploads/Causten-ExtraBold.otf`, `uploads/Poppins_*.ttf`.
- Live site: https://evengreener.com (reference only; do not copy its inconsistencies).

---

## Content fundamentals
**Voice:** the friendly expert, "the person at the allotment who has tried every composter and will tell you honestly which one suits you". Helpful first, sales second.

- **Warm and inclusive:** "Whether you live in a flat or have acres of garden, there is a composter that fits how you live."
- **Practical:** sizes, timings, what fits where. "Want rich, nutrient-dense compost in 1 to 3 months? Hot composting is the way forward."
- **Expert but plain-spoken:** explain, don't lecture. Never technical for its own sake.
- **Community-minded and a little playful:** "Join our EvenGreener Gang!", "lead an EvenGreener lifestyle", "Service you can count on". Playful once per view, not on every line.
- **Never preachy or guilt-driven** about sustainability. No eco-buzzwords ("eco-conscious solutions"), no doom.

**Mechanics**
- British English (colour, organisation, litre). Numbers as numerals ("compost in 1 to 3 months", "300L"). Use "to" for ranges, not dashes.
- **Sentence case** for every heading, button, link and breadcrumb. CSS uppercases only nav items, eyebrows, tags and badges.
- Short sentences, active plain verbs: "Shop composters", "Find your water butt", "Add to bag", "Request a quote".
- **Avoid em dashes.** Use full stops or commas.
- Address the customer as **you**; the company is **we/our** ("Our Customer Care Team is here to help").
- **No emoji.** Exclamation marks only in the Gang sign-up.
- Errors say what to do: "Enter a full email address". Empty states are helpful: suggest broader words and point to the Customer Care Team.
- Prices as £124.99; sale copy as "Save £140".
- Images never contain baked-in text.

---

## Visual foundations
**Colour.** Greens carry the brand. `forest-900 #143324` for text and dark surfaces; `forest-700 #296647` is THE brand and action colour (primary buttons, footer, links); `leaf-500 #69B236` is from the logo and is decorative only (2.6:1 on white); `leaf-600 #58952D` for icons, stars and the focus ring; `leaf-700 #457524` when green text is needed on light; `lime-400 #ABD921` is a spark used **only on dark green** (eyebrows, hover on on-dark buttons, `.eg-highlight` words in dark-section headlines). Warm neutrals: `oat-100 #F1EFE7` alternates with white for section rhythm; `leaf-50 #F1F6EA` is a third, lighter ground for guides, the finder and eyebrow tags (`leaf-200` lines on it); `oat-300` for lines on oat; packshots sit on `mist-100 #F5F5F5` wells. `stone-600 #646665` is supporting text only (standfirsts, excerpts, meta, helper text); long-form body copy is forest-900. `red-700 #B42318` is reserved for sale prices, errors and low stock; amber-700 for warnings. Never put leaf-500 or lime text on white or oat.

**Type.** Causten ExtraBold 800 for headings, sentence case, `text-wrap: balance` on display/H1/H2. Tracking and leading tighten as size grows: display 1.05 / -0.025em, H1–H2 1.1 / -0.015em, H3–H5 1.2 / -0.01em. Poppins for everything else: 400 body (16/1.6), 500 labels and buttons, 600 prices and emphasis. Fluid scale from 360 to 1440px: display 44→88, H1 36→56, H2 28→40, H3 20→28, H4 18→20, H5 16→18; standfirsts 18px. Buttons and text CTAs are Poppins 500 15px sentence case, no tracking (14px small). Uppercase at 0.1em is kept for nav, eyebrows, tags and badges (12–14px). Causten Bold 700 is referenced in the source tokens but the file was not supplied. No other families, ever (fixes the system-font excerpts and Arial quantity input).

**The leaf corner** is the signature motif. Two opposite corners rounded (top-right + bottom-left), two square. On hover it flips to top-left + bottom-right over 330ms. `leaf-sm 12px` chips/badges/small buttons, `leaf-md 20px` buttons, `leaf-lg 40px` hero media, feature images and promo tiles. Category and post images *gain* leaf-lg corners on hover. Compound controls read as one leaf: email field (bottom-left) + button (top-right); quantity stepper (bottom-left) + add to bag. Everything else is square (inputs, tags, cards, sections). Pills only for colour swatches, status dots, counts and switches.

**Backgrounds.** Flat colour blocks do the work: white / oat / leaf-50 tint for section rhythm, a forest-900 newsletter block and forest-700 footer close every page. No gradients in production (the green gradient in `.eg-media--lifestyle` is a photo *placeholder* only; the one exception is the forest scrim `--eg-color-scrim-photo` behind text on overlay category cards), no textures, no patterns, no hand-drawn illustration. Lifestyle photography runs edge to edge inside its frame.

**Imagery.** Real gardens, kitchens and allotments in natural light; real people using the products; warm, natural colour, no heavy grading or grain. Mix lifestyle shots with clean packshots on mist. No text baked into images. No glossy stock clichés (hands cupping seedlings, globes, lightbulbs).

**Elevation and borders.** Flat. No drop shadows except `--eg-shadow-overlay` (0 12px 32px rgba(20,51,36,.16)) on drawers, mega menu, search panel and modals, with a forest-tinted scrim. Cards have no border and no shadow; on oat, review cards sit on white. Inputs and chips use 1px stone-300, darkening to forest-900 on focus/selection. Dividers are 1px stone-300 (oat-300 on oat). No transparency or blur effects beyond the scrim.

**Motion.** One easing curve `cubic-bezier(.2,.6,.2,1)`. 160ms for colour/fill changes, 330ms for the leaf flip and link-underline shrink, 600ms fade-up section reveal. No bounces, no parallax. All durations go to 0 under `prefers-reduced-motion`; the announcement bar stops rotating.

**Hover / press.** Primary buttons darken forest-700 → forest-900 and flip their leaf; secondary fills forest-900 with white text; on-dark buttons go white → lime. Text CTAs ("Shop now", sentence case) shrink their underline to 40%. Nav items get a 2px leaf-500 underline. Chips darken their border. Product titles underline. No shrink/scale on press; the browser default active state is fine.

**Focus.** Every interactive element: `--eg-focus-ring` = 3px white gap + 2px leaf-600 ring.

**Layout.** Container max 1320px (1040 for editorial, 720 for reading), gutters `clamp(16px, 2vw, 24px)`, grid gap `clamp(16px, 2.2vw, 32px)`, section padding `clamp(48px, …, 96px)`. 4px spacing base: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128. Product grids 4-up desktop (3-up beside facets), 2-up on phones. Header (theme two-row): 32px forest-900 announcement bar + 64px main row (logo, scoped search, account, "Bag (£x)") + 44px nav row (uppercase primary left, sentence-case utility links right) = 140px desktop. Sticky; the nav row tucks away on scroll down (60px) and returns on scroll up. 92px mobile. Mobile first: everything works at 360px with 44px minimum tap targets. WCAG 2.2 AA.

---

## Iconography
- **Brand leaf outline** (from `code/components.html` `#leaf` symbol): the bullet for benefit lists ("Why we love this product") and the USP marker. Component: `LeafIcon`. Forest-700 on light, lime-400 on dark.
- **UI icons:** thin 1.5px line icons. The source codebase only defines the leaf and a heart; the inventory specifies "thin 1.5px line icons", so the system uses **Lucide** (lucide-static 0.460.0, ISC) rendered at 1.5px stroke. SVGs copied to `assets/icons/lucide/`; path data embedded in the `Icon` component. ⚠️ *Substitution: the live site uses a mix of PNG and SVG icons that were not supplied; confirm Lucide is acceptable.*
- Icons inherit `currentColor`: forest-900 by default, leaf-600 for accents (ticks, stars). Never leaf-500 on light.
- **Stars** are the Unicode ★ glyph (as in the source), with a clipped overlay for partial ratings.
- **No emoji** anywhere. No icon font. Payment marks render as text chips until official marks are supplied. Socials are text links in the footer.

## Assets
- `assets/logos/evengreener-logo-full-colour.png` / `-white.png` (originals, 3685×1202, heavy padding) and `-trim.png` (cropped, 1200×281, used by the `--eg-logo-colour` / `--eg-logo-white` tokens).
- `assets/logos/evengreener-logo-stacked.png` (302×138), `evengreener-favicon.png`.
- ⚠️ PNG only, fetched from the live Shopify CDN. Vector masters (SVG/EPS) still needed. Never recolour or redraw the logo.
- `assets/fonts/causten/Causten-ExtraBold.otf` (commercial, Trustha: licence needed for web), `assets/fonts/poppins/*` (OFL).
- No photography was supplied; all imagery in cards and the UI kit is placeholder.

---

## Index
**Root**
- `styles.css`: entry point, `@import`s only. Link this one file.
- `tokens/`: `fonts.css`, `colors.css`, `typography.css`, `shape.css`, `spacing.css`, `effects.css`, `brand.css` (CSS custom properties, `--eg-` prefix).
- `styles/base.css` (reset, type helpers `.eg-h1`…, `.eg-highlight`, `.eg-container`, `.eg-section`, `--alt`, `--tint`), `styles/components.css` (all `eg-` component classes, from `code/components.html` plus new blocks), `styles/theme-blocks.css` (v0.2 blocks mapped from the base Shopify theme).
- `guidelines/`: foundation specimen cards (Colors, Type, Shape, Spacing, Effects, Brand) and `shopify-theme-map.md` (theme section/snippet → component mapping, theme settings, metafields).
- `components/`: React components (`.jsx` + `.d.ts` + `.prompt.md`), one card per directory.
- `cards/`: extra preview cards for global pieces and sections.
- `ui_kits/storefront/`: click-through storefront.
- `assets/`: logos, fonts, icons.
- `_dev/ds-dev-loader.js`: dev-only fallback that transpiles component sources when `_ds_bundle.js` isn't compiled yet.
- `SKILL.md`, `thumbnail.html`.

**Components** (namespace `window.EvenGreenerDesignSystem_ede5a6`; each renders `eg-` classes so hover/leaf states come from CSS)
- `components/core/`: Icon, LeafIcon, Logo, Button, LinkCta, IconButton, Badge, Tag (+ Tags), Rating, Price, Media
- `components/forms/`: Input, Select, InputGroup, CheckRow, QuantityStepper, CapacityChips, ColourSwatches, Switch, FacetGroup
- `components/content/`: Breadcrumb, Accordion, SpecTable, LeafList, StockNote, DeliveryProgress, SectionIntro, CollectionLinks
- `components/commerce/`: ProductCard (standard / detailed / list), CategoryCard (standard / overlay), PromoTile, PostCard, ReviewCard, CollectionToolbar
- `components/global/`: AnnouncementBar, Header, MegaMenu (columns / featured), MobileNav, PredictiveSearch, CartDrawer, Footer, Newsletter, BackToTop
- `components/sections/`: Hero, UspBar, CategoryGrid, ProductCarousel, ProductGrid, FeatureSplit, SubcategoryTiles, GuideFinder, ComparisonTable, Reviews, BlogTeaser, EditorialArticle, BulkEnquiry, ProductDetail

**Inventory mapping notes**
- Button covers primary, secondary, on-dark, on-dark outline, small, block, disabled. Text link CTA = `LinkCta`.
- "Progress bar" = `DeliveryProgress`. "Checkbox row" = `CheckRow`. "Leaf input group" = `InputGroup` (email) and the buy row (QuantityStepper + Button).
- "Promo tile" is in `commerce/`; the PDP buy box (inventory "Product page") = `ProductDetail`.
- Floating reviews tab: intentionally not built (inventory says remove).

**Intentional additions**
- `Icon`: wrapper for the Lucide glyph set (inventory specifies line icons but no set).
- `LeafIcon`, `Logo`, `Media`: thin wrappers so the leaf bullet, PNG logo and image wells stay consistent.
- `SectionIntro`: the `.eg-intro` heading block used by every section in the source.
- `IconButton`: the source's `.eg-icon-btn` (wishlist), plus a ghost variant for header/drawer controls.
- From the base theme (v0.2): `CollectionLinks`, `CollectionToolbar`, `FacetGroup`, `Switch`, `BackToTop`, the detailed/list `ProductCard`, overlay `CategoryCard`, featured `MegaMenu`, and the two-row `Header`.

**UI kits**
- `ui_kits/storefront/`: Home, Collection, Product, Guide, Bulk enquiry, with header/mega menu/search/mobile nav/cart drawer.
