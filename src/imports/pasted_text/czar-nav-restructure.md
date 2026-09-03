# CZAR NAVIGATION — CORRECTION / RESTRUCTURE ONLY

Do NOT rebuild the navbar.

Do NOT change the existing CZAR logo, typography, spacing system, colors, buttons, or overall visual identity.

Keep the existing navbar foundation and modify only the navigation information architecture and dropdown behavior.

## PRIMARY NAVIGATION

Replace the current primary navigation with:

- Product ▾
- Solutions ▾
- Developers ▾
- Calculators ▾
- Pricing

Right side:

- Sign In
- Get Started

Keep the existing CZAR logo on the left.

## DROPDOWN BEHAVIOR

Implement a premium mega-menu interaction inspired by the navigation behavior of Supabase.

When the user hovers over Product, show the Product mega-menu.

When the user hovers over Solutions, show the Solutions mega-menu.

When the user hovers over Developers, show the Developers mega-menu.

When the user hovers over Calculators, show the Calculators mega-menu.

Only one dropdown should be open at a time.

The dropdown should remain open while the cursor moves from the navigation item into the dropdown.

Use a subtle opacity + translateY entrance animation.

Keep the animation fast and restrained.

No flashy effects.

On mobile, replace hover behavior with the existing mobile menu interaction and make each category expandable/collapsible.

---

# PRODUCT MEGA-MENU

Title:
PRODUCT

Products:

1. CZAR Core
Description:
Your financial operating system for business.

2. CZAR Personal
Description:
Personal tax and financial compliance for individuals.

3. CZAR Execute
Description:
We prepare and handle your compliance filings.

4. CZAR Pro
Description:
A workspace for accountants and tax professionals.

5. CZAR Marketplace
Description:
Connect with verified tax and financial professionals.

Add a subtle bottom navigation row:

EXPLORE ALL PRODUCTS →

Do NOT add future quantitative finance products here.

---

# SOLUTIONS MEGA-MENU

Title:
SOLUTIONS

Create six solution items:

1. Understand Financial Events
Turn transactions and business activity into structured financial intelligence.

2. Automate Compliance
Know what applies to your business and when action is required.

3. Automate Accounting
Turn financial activity into structured accounting records and reports.

4. Simplify Tax
Calculate, understand and manage your tax obligations.

5. Execute Filings
Prepare and handle regulatory filings without unnecessary complexity.

6. Make Better Financial Decisions
Turn financial history into actionable intelligence and better business decisions.

Add:

EXPLORE HOW CZAR WORKS →

Do not introduce quant finance terminology into the navigation.

---

# DEVELOPERS MEGA-MENU

Title:
DEVELOPERS

Primary item:

CZAR API
Compliance and financial intelligence infrastructure for African platforms.

Additional items:

API Documentation
Explore endpoints, authentication and implementation examples.

Compliance API
Programmatic access to CZAR compliance intelligence.

Tax Calculation API
Programmatic access to Nigerian tax calculations.

Document Verification API
Extract and verify structured information from financial and regulatory documents.

Deadline & Alerts API
Integrate compliance deadlines and alerts into your own products.

Add bottom CTA:

BUILD WITH CZAR →

---

# CALCULATORS MEGA-MENU

Title:
CALCULATORS

Items:

PIT Calculator
Personal Income Tax

VAT Calculator
Value Added Tax

WHT Calculator
Withholding Tax

CIT Calculator
Company Income Tax

PAYE Calculator
Pay As You Earn

Stamp Duty Calculator
Stamp Duty

Bottom CTA:

VIEW ALL CALCULATORS →

---

# IMPORTANT PRODUCT POSITIONING

Do NOT add the following to the public navigation:

- Quant Finance
- Credit Risk
- Fraud Detection
- Cash Flow Prediction
- Loan Default Prediction
- Business Valuation
- Financial Forecasting

These are future intelligence capabilities and should remain part of the deeper CZAR product vision/documentation rather than the primary marketing navigation.

The current public navigation should communicate the products and problems CZAR can credibly own today while leaving the underlying architecture extensible for future financial intelligence.

---

# VISUAL BEHAVIOR

The mega-menu should feel premium fintech.

Reference the information density and interaction quality of:

- Supabase
- Linear
- Stripe
- Apple

But maintain CZAR's own visual identity.

Use the existing CZAR UI tokens.

Requirements:

- clean white/light surface
- subtle border
- soft shadow
- generous but controlled spacing
- rounded corners consistent with existing design system
- Lucide icons where appropriate
- strong typography hierarchy
- no excessive gradients
- no unnecessary illustrations
- smooth hover states
- keyboard accessible
- mobile responsive

Do not create a giant oversized dropdown.

The menu should feel sophisticated and intentional.

## MOBILE

On mobile:

- keep the hamburger navigation
- Product, Solutions, Developers and Calculators become expandable accordion sections
- Pricing remains a direct link
- Sign In and Get Started remain visible
- maintain comfortable touch targets
- preserve the existing mobile header

## SCOPE

This is a NAVIGATION RESTRUCTURE ONLY.

Do not modify hero sections.

Do not modify page content.

Do not create new pages unless required for the navigation links.

Do not rebuild existing components unnecessarily.

Preserve all existing functionality.