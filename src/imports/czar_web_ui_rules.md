# UI Rules — czar-web

Concise rules for building CZAR's marketing site UI. The **Compliance Clarity** design system is the source of truth for every visual decision — these rules translate it into concrete, buildable patterns so the UI stays consistent without over-specifying every detail.

---

## Font

Always import Hanken Grotesk via `next/font/google` in the root layout.

```typescript
import { Hanken_Grotesk } from "next/font/google";
const hankenGrotesk = Hanken_Grotesk({ subsets: ["latin"], variable: "--font-sans" });
```

The `--font-sans` variable is already declared in `@theme` in globals.css. Apply the font variable class to the `<html>` tag in root layout. Never use system fonts as the primary font.

---

## Layout

- Page max-width: 1440px, centered
- Desktop grid: 12-column fluid, 24px gutters, 80px outer margins
- Mobile: single-column flow, 16px outer margins (`margin-mobile`)
- Container padding: 32px on all sides for primary content containers (dashboard-density feel — generous, never cramped)
- Gap between major landing page sections: 64px (`stack-lg`)
- Gap between internal card components: 24px (`stack-md`)
- Header height: 72px, full width, backdrop-blur(20px) — never a flat opaque background
- All pages use top navbar only — no sidebar, no drawer

---

## Navbar

Six items + two CTAs: Business, Personal, Accountants, Calculators, Pricing, plus Sign In and Get Started.

- Active item: `text-primary`, weight 500, 14px
- Inactive item: `text-on-surface-variant`, weight 500, 14px
- No underline — active state is color change only
- Navbar background: `bg-surface/80` with `backdrop-filter: blur(20px)` — sophisticated layered effect, per Elevation & Depth spec
- Navbar sits above decorative background blobs, never behind them

---

## Cards

Every content section on a landing page or calculator result lives in a card.

```
background: bg-surface-container-lowest (#ffffff)
border-radius: 28px (rounded-2xl)
padding: 32px
box-shadow: 0 6px 32px rgba(4, 2, 34, 0.08)
```

Card header pattern: a 14px `label-md` category label (uppercase-feeling weight, 0.05em tracking) sits above a 24px `headline-sm` title.

Never use colored card backgrounds on the marketing site — always white (`surface-container-lowest`). Color goes inside cards via badges, icons, gradient text accents, and the compliance gauge — never on the card surface itself. The one exception: large marketing section backgrounds (not cards) may use `secondary-container` (Mint Cream) as a full-bleed section background, per the Colors spec.

---

## Typography Hierarchy

Four levels used consistently, following Compliance Clarity's type scale:

**Marketing hero headline** — homepage hero, landing page heroes only

```
font-size: 64px (desktop) / 36px (mobile — headline-lg-mobile)
font-weight: 900
letter-spacing: -0.04em
line-height: 1.1
color: text-on-surface
```

**Section headings** — major page sections, not hero

```
font-size: 48px (headline-lg) or 32px (headline-md) depending on hierarchy depth
font-weight: 700
color: text-on-surface
```

**Card / component titles**

```
font-size: 24px (headline-sm)
font-weight: 600
color: text-on-surface
```

**Body / primary content text**

```
font-size: 16px (body-md) or 18px (body-lg) for lead paragraphs
font-weight: 400
color: text-on-surface-variant
line-height: 1.5 to 1.6
```

**Labels / data / small UI elements**

```
font-size: 14px
font-weight: 500
letter-spacing: 0.05em
color: text-on-surface-variant
```

Display style (`display-lg`, 64px/900) is reserved exclusively for marketing hero moments. Never use it for a section heading, card title, or any in-app-feeling surface — it is too heavy for repeated use.

---

## Badges / Chips

All badges and chips use **12px radius (`rounded-md`), not pill shape.** This is a deliberate departure from typical SaaS pill badges — Compliance Clarity's squircle language applies to chips too.

```
padding: 4px 12px
font-size: 12px
font-weight: 700 (bold — status badges specifically call for bold weight)
background: status color at 10% opacity
text: full status color
```

Compliance status badges:

| Status | Background | Text |
| --- | --- | --- |
| Compliant / Good Standing | `bg-primary` @ 10% | `text-primary` |
| Needs Attention | `bg-tertiary` @ 10% | `text-tertiary` |
| At Risk / Overdue | `bg-error` @ 10% | `text-error` |

The only true circles in this system are the **Compliance Health Gauge** and **icon containers in data rows** (32px circle, Mint Cream background). Every other shape — buttons, inputs, chips, cards — is a squircle.

---

## Buttons

**Primary button:**

```
background: bg-primary (#006d40)
color: text-on-primary (#ffffff)
border-radius: 12px (rounded-md)
padding: 12px 24px
font-size: 14px
font-weight: 500
hover: subtly darken background
active/press: scale to 98%
```

**Secondary button:**

```
background: transparent
border: 1px solid on-surface at 20% opacity
color: text-on-surface
border-radius: 12px (rounded-md)
padding: 12px 24px
```

Never fill a secondary button's background — it stays transparent per the Compliance Clarity component spec.

---

## Form Inputs

```
background: bg-surface-container-lowest (#ffffff)
border: 1px solid on-surface at 10% opacity
border-radius: 12px (rounded-md)
padding: 12px 16px
font-size: 14px
color: text-on-surface
placeholder color: text-on-surface-variant, reduced opacity
focus: border becomes bg-primary color, with a soft glow — 3px spread, 10% opacity
```

Used on: Contact form, Waitlist form, Calculator input panels.

---

## Calculator Result Panel

Specific to czar-web's core interactive feature — the 6 tax calculators.

- Result panel is a Card (28px radius, floating shadow)
- The calculated amount is displayed at `headline-md` (32px/700) size, `text-primary` color
- Breakdown rows below use the **Lists / Data Rows** pattern (16px vertical padding, 1px bottom border in `secondary-container` tone)
- `RateSourceBadge` (the legislation citation) renders as a `label-md` chip beneath the result — background `surface-container-low`, text `on-surface-variant`, never the primary color (it's informational, not a status)
- Never show a raw number with no context — every result must show its breakdown and its source citation in the same view

---

## Lists / Data Rows

Used for: calculator result breakdowns, blog post excerpts on the index, FAQ accordions.

```
padding: 16px vertical
border-bottom: 1px solid secondary-container (#d7e6e0)
icon container (if present): 32px circle, background secondary-container, icon centered inside
```

---

## Decorative Background Blobs

Marketing-site-only visual device — never used inside app-feeling surfaces (calculator input forms, contact form, etc. stay clean).

```
shape: large, soft radial gradient
gradient: #09E48D at 10-20% opacity → transparent
placement: behind hero sections and section breaks, positioned to add depth without clutter
```

Used to differentiate CZAR from the "heavy, dark interfaces typical of the financial sector" — this is a deliberate brand differentiator, not decoration for its own sake. Use it purposefully at section transitions, not on every single component.

---

## Empty States

Every section that can be empty (blog with no posts yet, calculator before first input, contact form success state) must have a defined empty or initial state. Keep it minimal:

- Short descriptive text in `text-on-surface-variant`
- Optional icon above text, encased in a 32px Mint Cream circle (matches the data row icon pattern)
- CTA button if there's a logical next action

---

## Tailwind v4 Note

This project uses Tailwind v4. Tokens are defined with `@theme` in globals.css — no `tailwind.config.ts` needed. Never define colors in a config file. Always use `@theme` for new tokens.

---

## Do Nots

- Never use Tailwind's built-in color classes (`bg-emerald-500`, `text-slate-600`) — use project tokens only
- Never define colors in `tailwind.config.ts` — use `@theme` in globals.css
- Never use pill-shaped (`rounded-full`) badges or chips — this system uses 12px squircle radius for chips, reserving true circles for the compliance gauge and icon containers only
- Never use a high-contrast, solid-color border — all borders are low-contrast (5–10% opacity of `on-surface`)
- Never stack a heavy, multi-layer, dark drop shadow — elevation is always the single diffused floating shadow
- Never use `display-lg` (64px/900) outside of a marketing hero — it is too heavy for repeated section or card use
- Never place a decorative background blob inside a card, form, or app-feeling surface — blobs are for marketing section backgrounds only
- Never show a calculator result without its `RateSourceBadge` legislation citation in the same view
- Never use more than one font weight in a single UI element
- Never show raw error messages to users — always show human-readable text
- Never use `position: fixed` for UI elements — use normal flow layout, with the exception of the navbar's blur/sticky behavior
