# 🖥️ Web Development Internship Task — She Can Foundation

A premium, modern, and highly interactive website created for the **She Can Foundation** as part of the Web Development Internship selection process.

Designed to be responsive, engaging, and clean, this website goes far beyond a simple baseline task to demonstrate advanced frontend development techniques, modern UI/UX design patterns, and creative features.

---

## 🌟 Implemented Features

### 1. Multi-Page Architecture
Rather than a single landing page, the project features a fully functional multi-page structure:
*   **🏠 Home (`index.html`)**: Features an interactive overlapping collage, modern hero section, quick overview, program cards, and founder's testimonial.
*   **👤 About Us (`about.html`)**: Introduces the NGO's global vision, mission statements, and core programs with a premium layout.
*   **🎓 Internships (`internships.html`)**: Details available positions (Frontend, Full Stack, Web Dev, Fundraising) along with requirements and perks.
*   **📸 Gallery (`gallery.html`)**: Visual archive showing moments of real-world impact (ration distribution, sanitary pads, animal welfare, Women's Day mentorship).
*   **📩 Contact (`contact.html`)**: Multi-column contact info and interactive submission form.
*   **❤️ Donate (`donate.html`)**: Secure payment details, support tiers, and UPI QR code layout.

### 2. Premium Design System & Typography
*   **Color Palette**: Curated primary purple (`#8A3FFC`), pink accent (`#FF85A1`), warm cream backgrounds (`#FAF6F0`), and dark charcoal contrasts (`#1E1B18`) to establish trust and empathy.
*   **Fonts**: Local premium geometric sans-serif **Nohemi** for bold headings, paired with **Poppins** for crisp, modern, highly readable body copy.
*   **Glassmorphism Navbar**: A fixed sticky navigation bar with a frosted glass background (`backdrop-filter: blur(20px)`), smooth padding transitions, and a clean separator line.

### 3. Advanced Interactions & Animations
*   **Custom Interactive Cursor**: A dual-element custom cursor tracking mouse movements with a smooth elastic lag follower and dynamic hover states.
*   **Card Tilt Effect**: A 3D perspective mouse-hover tilt effect on service/story cards.
*   **Scroll Animations**: Smooth slide-and-fade triggers using standard JavaScript `IntersectionObserver` API.
*   **Interactive Counter**: Count-up animation for statistical numbers when they scroll into view.
*   **Simulated Forms**: Built-in validation, loading animations (spinning SVGs), and success messages for newsletter and contact forms.

### 4. Fully Responsive Mobile Layout
*   **Dynamic Grid**: Uses flexible layouts and CSS Media Queries to transition from 3-column structures on desktop down to single columns on mobile.
*   **Image Protection**: Custom gallery aspect-ratios to ensure images scale dynamically and display **fully without clipping** on mobile screens.
*   **Mobile-Friendly Nav**: Fully functional slide-down mobile menu triggered by an animated hamburger button.

---

## 🛠️ Technology Stack

*   **Core**: HTML5, Vanilla JavaScript (ES6+), Vanilla CSS3 Custom Variables (CSS variables)
*   **Build Tool**: Vite (for lightning-fast bundling, hot-reloading dev server, and optimized asset delivery)
*   **TypeScript**: Configured compiler environment for dev tools verification.

---

## 🚀 Running the Project Locally

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your computer.

### Step-by-Step Guide

1.  **Clone the Repository**
    ```bash
    git clone https://github.com/gonevignesh/shecanfoundation.git
    cd shecanfoundation
    ```

2.  **Install Dependencies**
    ```bash
    npm install
    ```

3.  **Run Development Server**
    ```bash
    npm run dev
    ```
    *Open the provided local URL (typically `http://localhost:5173/`) in your browser to view the live site with hot-module reloading.*

4.  **Build for Production**
    ```bash
    npm run build
    ```
    *This generates an optimized, minified production build in the `/dist` directory.*

5.  **Preview Production Build**
    ```bash
    npm run preview
    ```

---

## 📂 Project Structure

```text
she-can-foundation/
├── public/                 # Static assets
│   ├── fonts/              # Nohemi custom fonts
│   ├── images/             # Real-world Instagram images & visual assets
│   ├── favicon.svg         # Tab icon
│   └── icons.svg           # Custom SVG icon sprite sheet
├── dist/                   # Production-ready compiled assets (git-ignored)
├── about.html              # About page
├── contact.html            # Contact page
├── donate.html             # Donation portal
├── gallery.html            # Image gallery page
├── index.html              # Main homepage entry
├── internships.html        # Careers & internships
├── main.js                 # Global interactions & interactive features
├── style.css               # Styling system (vars, grids, mobile overrides)
├── vite.config.ts          # Vite bundling parameters
├── tsconfig.json           # Compiler rules
└── README.md               # Documentation
```

---

## 🤝 Socials & NGO Details
*   **Official Instagram**: [@shecanfoundation.ngo](https://www.instagram.com/shecanfoundation.ngo)
*   **Official LinkedIn**: [She Can Foundation](https://www.linkedin.com/company/shecanfoundation)
*   **NGO Registration**: Registered under the **Indian Society Act, 1860**.
