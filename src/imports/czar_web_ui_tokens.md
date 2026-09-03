# UI Tokens — czar-web

Design tokens for CZAR, sourced directly from the **Compliance Clarity** design system. Every value below is taken as-is from that file — colors, typography, radii, and spacing are not reinterpreted or adjusted. Use these exact values throughout the codebase — never hardcode colors or use raw Tailwind color classes in components.

---

## How to Use

This project uses **Tailwind CSS v4**. All design tokens are defined using the `@theme` directive in `app/globals.css`. No `tailwind.config.ts` needed for colors or tokens.

Tailwind v4 automatically generates utility classes from `@theme` variables:

- `--color-primary` → `bg-primary`, `text-primary`, `border-primary`
- `--color-surface` → `bg-surface`, `text-surface`, `border-surface`

```tsx
// Correct — uses generated utility classes
className="bg-surface text-on-surface border-outline-variant"

// Also correct — references CSS variable directly
style={{ color: 'var(--color-on-surface)' }}

// Never — hardcoded hex values
className="bg-[#f9f9f9] text-[#1a1c1c]"

// Never — raw Tailwind color classes
className="bg-emerald-500 text-slate-800"
```

---

## globals.css — Complete Token Definition

```css
@import "tailwindcss";

@theme {
  /* Font */
  --font-sans: "Hanken Grotesk", sans-serif;

  /* Surface system */
  --color-surface: #f9f9f9;
  --color-surface-dim: #dadada;
  --color-surface-bright: #f9f9f9;
  --color-surface-container-lowest: #ffffff;
  --color-surface-container-low: #f3f3f4;
  --color-surface-container: #eeeeee;
  --color-surface-container-high: #e8e8e8;
  --color-surface-container-highest: #e2e2e2;
  --color-surface-variant: #e2e2e2;

  /* On-surface text */
  --color-on-surface: #1a1c1c;
  --color-on-surface-variant: #3b4a3f;
  --color-inverse-surface: #2f3131;
  --color-inverse-on-surface: #f0f1f1;

  /* Outline */
  --color-outline: #6b7b6f;
  --color-outline-variant: #bacbbc;

  /* Primary — Emerald Green */
  --color-surface-tint: #006d40;
  --color-primary: #006d40;
  --color-on-primary: #ffffff;
  --color-primary-container: #09e48d;
  --color-on-primary-container: #006038;
  --color-inverse-primary: #02e38c;

  /* Primary fixed variants */
  --color-primary-fixed: #55ffa8;
  --color-primary-fixed-dim: #02e38c;
  --color-on-primary-fixed: #002110;
  --color-on-primary-fixed-variant: #00522f;

  /* Secondary — Mint / muted green */
  --color-secondary: #53615d;
  --color-on-secondary: #ffffff;
  --color-secondary-container: #d7e6e0;
  --color-on-secondary-container: #596763;
  --color-secondary-fixed: #d7e6e0;
  --color-secondary-fixed-dim: #bbcac4;
  --color-on-secondary-fixed: #111e1b;
  --color-on-secondary-fixed-variant: #3c4a45;

  /* Tertiary — Muted violet (used sparingly) */
  --color-tertiary: #5d5b7f;
  --color-on-tertiary: #ffffff;
  --color-tertiary-container: #c7c3ed;
  --color-on-tertiary-container: #514f73;
  --color-tertiary-fixed: #e3dfff;
  --color-tertiary-fixed-dim: #c6c2ec;
  --color-on-tertiary-fixed: #191738;
  --color-on-tertiary-fixed-variant: #454366;

  /* Error */
  --color-error: #ba1a1a;
  --color-on-error: #ffffff;
  --color-error-container: #ffdad6;
  --color-on-error-container: #93000a;

  /* Background */
  --color-background: #f9f9f9;
  --color-on-background: #1a1c1c;

  /* Border radius — Squircle system */
  --radius-sm: 0.25rem;   /* 4px */
  --radius-DEFAULT: 0.5rem;  /* 8px */
  --radius-md: 0.75rem;   /* 12px — buttons, inputs, chips */
  --radius-lg: 1rem;      /* 16px */
  --radius-xl: 1.5rem;    /* 24px */
  --radius-2xl: 1.75rem;  /* 28px — cards, modals, large containers */
  --radius-full: 9999px;
}
```

Tailwind v4 generates utility classes automatically from every `--color-*` token above:

- `bg-primary`, `text-primary`, `border-primary`
- `bg-surface-container-low`, `text-on-surface-variant`
- `bg-secondary-container`, `text-on-secondary-container`
- etc.

---

## Color Usage Guide

### Page Layout

| Element | Token |
| --- | --- |
| Page background | `bg-background` (#f9f9f9) |
| Primary interactive card | `bg-surface-container-lowest` (#ffffff) |
| Secondary surface fill | `bg-surface-container-low` (#f3f3f4) |
| Large section background (marketing) | `bg-secondary-container` (#d7e6e0 — Mint Cream) |
| Default border (low-contrast, per Shapes rule) | `border-on-surface` at 5% opacity |
| Outline / dividers | `border-outline-variant` |

### Typography

| Element | Token |
| --- | --- |
| Headlines, primary text | `text-on-surface` (#1a1c1c) |
| Secondary text, body copy | `text-on-surface-variant` (#3b4a3f) |
| Text on dark/inverse surfaces (footer, dark headers) | `text-inverse-on-surface` (#f0f1f1) |
| Text on Prussian Blue dark background | `text-on-surface` inverted — see Dark Sections below |

### Primary (Emerald Green)

Used for: primary buttons, CTAs, success states, progress charts, compliance health indicators, active nav states.

| Element | Token |
| --- | --- |
| Button background | `bg-primary` (#006d40) |
| Button text | `text-on-primary` (#ffffff) |
| Light container background | `bg-primary-container` (#09e48d) |
| Text on primary container | `text-on-primary-container` (#006038) |
| Fixed light backgrounds (badges, subtle highlights) | `bg-primary-fixed` / `bg-primary-fixed-dim` |

### Secondary (Mint Cream)

Used for: large section backgrounds on the marketing site, subtle surface fills, secondary badges.

| Element | Token |
| --- | --- |
| Section background | `bg-secondary-container` (#d7e6e0) |
| Text on secondary container | `text-on-secondary-container` (#596763) |
| Secondary button / chip background | `bg-secondary` (#53615d) — used sparingly, mostly text/icon tone |

### Tertiary (Muted Violet)

Used sparingly — reserved for a specific accent moment (e.g. a "Pro" or premium badge on the Accountants landing page), never as a primary or secondary color.

| Element | Token |
| --- | --- |
| Accent container | `bg-tertiary-container` (#c7c3ed) |
| Text on tertiary container | `text-on-tertiary-container` (#514f73) |

### Status / Error

| Element | Token |
| --- | --- |
| Error background | `bg-error-container` (#ffdad6) |
| Error text | `text-on-error-container` (#93000a) |
| Error button (destructive action) | `bg-error` / `text-on-error` |

### Compliance Health Gauge

Circular gauge with a **gradient stroke from Emerald Green to Mint**: `linear-gradient(#006d40, #09e48d)`. Never a flat single color — always the gradient, per the Compliance Clarity component spec.

---

## Typography

Font family: **Hanken Grotesk** — this is CZAR's typeface for both marketing and app surfaces per Compliance Clarity. Import via `next/font/google` (Hanken Grotesk is available there) or self-host if Google Fonts doesn't carry the exact weights needed.

| Style | Size | Weight | Line height | Letter spacing | Usage |
| --- | --- | --- | --- | --- | --- |
| `display-lg` | 64px | 900 | 1.1 | -0.04em | Marketing hero headlines only |
| `headline-lg` | 48px | 700 | 1.2 | -0.02em | Major section headlines |
| `headline-md` | 32px | 700 | 1.3 | — | Sub-section headlines |
| `headline-sm` | 24px | 600 | 1.4 | — | Card titles, dashboard section titles |
| `headline-lg-mobile` | 36px | 700 | 1.2 | — | Mobile replacement for `display-lg` / `headline-lg` |
| `body-lg` | 18px | 400 | 1.6 | — | Lead paragraphs, intro copy |
| `body-md` | 16px | 400 | 1.5 | — | Standard body text |
| `label-md` | 14px | 500 | 1.2 | 0.05em | Data labels, small UI elements, badges |

**Hierarchy rule:** Display style is reserved for marketing hero moments only — never used inside the dashboard or app UI. Headline styles handle everything else, scaling down by context (page title → section title → card title).

---

## Spacing

Base unit: **4px**. All spacing values are multiples of this unit.

| Token | Value | Usage |
| --- | --- | --- |
| `container-padding` | 32px (2rem) | Horizontal page padding on desktop |
| `gutter` | 24px (1.5rem) | Grid column gutters |
| `margin-mobile` | 16px (1rem) | Horizontal page padding on mobile |
| `stack-sm` | 8px (0.5rem) | Tight internal gaps (e.g. label to input) |
| `stack-md` | 24px (1.5rem) | Spacing between internal card components |
| `stack-lg` | 64px (4rem) | Spacing between major landing page sections |

### Grid

- Desktop (1440px+): **12-column fluid grid**, 24px gutters, 80px outer margins
- Mobile: single-column flow, 16px outer margins

---

## Component Tokens

### Cards

```
background: bg-surface-container-lowest (#ffffff)
border-radius: 28px (rounded-2xl / --radius-2xl)
box-shadow: 0 6px 32px rgba(4, 2, 34, 0.08)
padding: 32px
```

Card header pattern: 14px `label-md` category label above a 24px `headline-sm` title.

### Buttons

**Primary:**

```
background: bg-primary (#006d40)
text: text-on-primary (#ffffff) — or on-primary-container for high-contrast dark text variant
border-radius: 12px (rounded-md / --radius-md)
padding: 12px 24px
font: label-md weight
hover: subtly darken background
active/press: scale to 98%
```

**Secondary:**

```
background: transparent
border: 1px solid on-surface at 20% opacity
text: text-on-surface
border-radius: 12px (rounded-md)
padding: 12px 24px
```

### Input Fields

```
background: bg-surface-container-lowest (#ffffff)
border: 1px solid on-surface at 10% opacity
border-radius: 12px (rounded-md)
padding: 12px 16px
text: text-on-surface
placeholder: text-on-surface-variant at reduced opacity
focus: border becomes bg-primary, soft glow — 3px spread, 10% opacity, primary color
```

### Chips / Badges

```
border-radius: 12px (rounded-md — NOT pill, per Compliance Clarity spec)
background: status color at 10% opacity
text: 12px, bold (weight 700), full status color
```

Compliance status badge colors:

| Status | Background | Text |
| --- | --- | --- |
| Compliant / Good Standing | `bg-primary` at 10% opacity | `text-primary` |
| Needs Attention | `bg-tertiary` at 10% opacity | `text-tertiary` |
| At Risk / Overdue | `bg-error` at 10% opacity | `text-error` |

### Compliance Health Gauge

```
shape: circular gauge
stroke: gradient from primary (#006d40) to primary-container (#09e48d)
track background: surface-container-high (#e8e8e8)
```

### Lists / Data Rows

```
padding: 16px vertical
border-bottom: 1px solid secondary-container (#d7e6e0), used as the divider tone
icon container: 32px circle, background secondary-container (Mint Cream), icon centered
```

### Blurs & Elevation

```
Navigation bars, modal overlays: backdrop-filter: blur(20px)
Primary containers: box-shadow: 0 6px 32px rgba(4, 2, 34, 0.08)
```

No heavy or dark drop shadows anywhere — elevation is always the single diffused "floating" shadow above, never a harsh multi-layer shadow stack.

### Decorative Background Blobs (Marketing Only)

```
shape: soft radial gradient
gradient: #09E48D at 10-20% opacity, transitioning to transparent
usage: large, soft, positioned behind hero sections and section breaks — never inside cards or app UI
```

### Logo

Not specified in Compliance Clarity source — follow existing CZAR brand asset checklist for exact logo lockup and clearspace. Logo container background, if a badge/icon treatment is needed, uses `bg-primary`.

---

## Invariants

- Never use hex values directly in components — always use CSS variables via Tailwind tokens
- Font is Hanken Grotesk — always import via `next/font/google`, never fall back to a system font
- Never use raw Tailwind color classes like `bg-emerald-500` or `text-slate-800` — use project tokens only
- `--color-primary` (#006d40) is the only primary green — never substitute Tailwind's built-in green/emerald scale
- All container shapes are **squircles**, never perfect circles — 12px radius for small elements (buttons, inputs, chips), 28px radius for large containers (cards, modals, sections)
- Chips and badges use **12px radius, not pill shape** — this design system does not use `rounded-full` for status badges (only the compliance gauge and icon circles are true circles)
- Borders, where used, are always low-contrast: 1px solid `on-surface` (or Prussian Blue equivalent) at 5–10% opacity — never a solid, high-contrast border color
- Shadows are always the single diffused "floating" shadow (`0 6px 32px rgba(4, 2, 34, 0.08)`) — never a heavy, dark, multi-layer shadow
- The Compliance Health Gauge always uses the primary-to-primary-container gradient stroke — never a flat single color
- Decorative background blobs are marketing-site only — never appear inside dashboard or app UI surfaces
- Backdrop blur (20px) is reserved for navigation bars and modal overlays only — not applied to regular cards
