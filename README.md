# Infotech Wizard Landing Page

A pixel-perfect, responsive static landing page built for research analysts to simplify compliance operations. Developed with semantic HTML5, modern CSS3, and vanilla JavaScript following original Figma specifications.

## Project Overview

- **Project:** Infotech Wizard Landing Page
- **Role:** Frontend Developer Internship Assignment
- **Tech Stack:** HTML5, CSS3, Vanilla JavaScript (ES6+), Google Fonts (Roboto)
- **Frameworks:** None (Zero dependencies, pure native web standards)

---

## File Structure

```text
infotech-wizard-landing-page/
├── assets/
│   ├── analytics-illustration.svg     # Compliance analytics dashboard illustration
│   ├── hero-illustration-right.svg    # Main hero illustration with rating & trust badges
│   └── logo.svg                       # Infotech Wizard brand logo
├── index.html                         # Semantic HTML5 document
├── style.css                          # Modular, responsive CSS3 stylesheet
├── script.js                          # Accessible mobile navigation & UI interactions
└── README.md                          # Project documentation
```

---

## Key Features & Architecture

### 1. Typography & Design System (Figma Specifications)
- **Font Family:** `Roboto` (Weights: 400 Regular, 500 Medium, 600 SemiBold, 700 Bold).
- **Desktop Scale (1440px):**
  - **H1:** 64px, Bold, Line-height 85px.
  - **H2:** 48px, SemiBold, Line-height 70px.
  - **Large Title:** 24px, SemiBold, Line-height 32px.
  - **Title:** 20px, Medium.
  - **Body Text:** 18px, Regular, Line-height 32px.
- **Tablet Scale (768px):**
  - **H1:** 54px, Bold, Line-height 75px.
  - **H2:** 46px, SemiBold, Line-height 60px.
- **Mobile Scale (375px - 320px):**
  - **H1:** 38px, Bold, Line-height 48px.
  - **H2:** 34px, SemiBold, Line-height 48px.
  - **Large Title:** 22px, SemiBold, Line-height 32px.
  - **Title:** 19px, Medium.

### 2. Semantic Hero Section
- Dynamic reproduction of the **"Compliance"** heading highlight in royal blue (`#4356D6`) paired with an exact vector reproduction of the original hand-drawn decorative underline.
- Accessible checklist items with custom SVG circular checkmark badges.
- Dual interactive CTA buttons: *"Get Started"* and *"Book A Consultation"* with responsive hover states.
- Correct integration of `hero-illustration-right.svg` as the standalone hero visual, preserving the 4.8-star client rating badge and the *"Trusted By 250+ Professionals"* badge.

### 3. "Why Compliance Matters For Research Analysts" Section
- Upper two-column header displaying the H2 section title alongside the narrative description.
- Lower layout featuring `analytics-illustration.svg` on the left and three stacked compliance cards on the right:
  1. **Regulatory Clarity:** *"We Decode Complex Compliance Rules Into Simple, Actionable Steps."*
  2. **Hassle-Free Filings Clarity:** *"From Registration To Ongoing Reporting—We Manage It End-To-End."*
  3. **Risk Protection:** *"Stay Ahead Of Audits, Inspections, And Compliance Gaps With Proactive Support."*
- Card hover states with subtle elevation (`translateY(-4px)`), smooth drop-shadow expansion, and brand border highlights.

### 4. Fully Responsive Navigation & Mobile Drawer
- **Desktop (1440px):** Clean horizontal navigation bar with brand logo, nav links, and *"Contact Us"* CTA button.
- **Tablet (768px):** Logo on the left, *"Contact Us"* button and hamburger menu toggle on the right.
- **Mobile (375px - 320px):** Logo on left, hamburger menu toggle on right; full-width stacked CTA buttons.
- **Mobile Drawer:** Accessible slide-out navigation with smooth backdrop scrim, keyboard `Escape` closing, and body scroll locking.

---

## Getting Started

To view the landing page locally:

1. Clone or open the repository folder:
   ```bash
   cd "infotech-wizard-landing-page"
   ```
2. Open `index.html` directly in any modern web browser:
   - On Windows: double-click `index.html` or open via command line:
     ```powershell
     Start-Process "index.html"
     ```
   - Or run a local HTTP server:
     ```bash
     npx serve .
     # or python -m http.server 8000
     ```

---

## Browser Support & Performance

- Supports all modern evergreen browsers (Chrome, Edge, Firefox, Safari).
- Zero external JavaScript dependencies for instant load times and optimal Core Web Vitals.

