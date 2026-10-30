# GUN Productions · Luxury Video Agency Redesign Demo

> High-end, conversion-focused redesign demo for **GUN Productions** (Eindhoven, NL · Mika van der Gun) — combining cinematic visual storytelling with high-ROAS direct response performance video systems.

---

## 🌟 Key Features

### 1. Ultra-Smooth 60fps Momentum Scrolling
- Built with **Lenis Smooth Scroll** synchronized with **GSAP ScrollTrigger** via `requestAnimationFrame`.
- Obsidian luxury theme featuring subtle warm cream and pearl radial ambient light gradients.

### 2. High-Converting Symmetrical Bento Video Showcase
- **Curated Multi-Format Bento Grid**: Seamlessly balances vertical 9:16 reels/ads (spanning 3 columns) and centered 16:9 widescreen 4K cinema films (spanning 6 columns).
- **Zero Collision Architecture**: Strict CSS Grid row-track sizing (`grid-template-columns: repeat(12, minmax(0, 1fr))`) preventing layout shifts or card overlap.
- **Editorial Typography Bands**: Clean, minimal kicker and headline styling under cinema cards with no boxed clutter.
- **Instant Autoplay**: Hardware-accelerated direct `<video>` streams with viewport `IntersectionObserver` pause/resume.

### 3. Smart Auto-Hiding Navigation
- Glassmorphic floating navigation pill that smoothly glides out of view on scroll-down (`translateY(-125%)`) and reappears instantly on scroll-up or at the top of the page.
- Fully responsive mobile drawer navigation with bilingual support (**NL / EN**).

### 4. Interactive 5-Step Video-to-CRM Pipeline
- Step-by-step interactive workflow breakdown:
  1. *Strategie & Scripting*
  2. *1 Dag Op Locatie Filmen (Sony Cinema Line)*
  3. *High-Retention Montage & Sound Design*
  4. *Multi-Channel Distributie (5 Kanalen)*
  5. *Meta Ads & Directe CRM Leadflow*

### 5. Native Top-Layer Cinema Lightbox
- Modern HTML5 `<dialog closedby="any">` modal player supporting full sound, keyboard navigation (`Escape`, `ArrowLeft`, `ArrowRight`), and responsive cinema viewing.

### 6. Studio Chat & AI Voice Calling Desk
- Floating widget with dual modes:
  - **Live Chat Mode**: Instant simulated consultation with Mika / AI Studio Desk.
  - **AI Voice Call Mode**: Interactive phone call mockup with live audio wave visualizer, ready for real AI voice agent integration.

---

## 🚀 Getting Started

No build step or complex dependencies required. Simply serve the directory with any static HTTP server:

```bash
# Using Python
python -m http.server 8090

# Or using Node.js / npx serve
npx serve .
```

Open `http://localhost:8090/` in your browser.

---

## 📁 Project Structure

```
gun-productions-redesign/
├── index.html       # Semantic HTML5 markup, glassmorphic header, bento video vault, dialog lightbox, chat widget
├── styles.css       # Obsidian & warm cream luxury design system, Lenis momentum rules, responsive CSS grid
├── app.js           # Video vault dataset (26 clips), Lenis scroll, GSAP triggers, smart header, Studio Chat/Call
├── .gitignore       # Standard git ignore definitions
└── README.md        # Project documentation
```

---

## 📄 License

Created for demonstration and portfolio purposes.
