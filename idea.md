# 🚀 PROMPT: Premium Dark Mode Landing Page for Aava Growth (Asset-Driven)

## 📋 INSTRUCTIONS FOR THE AI

You are an expert UX/UI designer and Full-Stack Developer. I am providing you with pre-sliced design assets, copy inspiration, and logos organized into specific folders. 

Do NOT generate placeholder images. You must build the webpage using the exact assets provided in the `Assets2` directory. Read the text from the images inside the section folders to write the HTML copy.

### 📁 ASSET DIRECTORY MAP
You have access to the following files. Use these exact relative paths in your HTML:

* **Main Hero Background:** `Assets2/Lumea-glass-effect.png`
* **Company Logo:** `Assets2/aava pink white background.png`
* **Section 1 Copy & Inspiration:** `Assets2/1 - Hero Section (The Hook)/`
* **Section 2 Copy & Inspiration:** `Assets2/2 - The Problem (The Growth Gap)/`
* **Section 3 Copy & Inspiration:** `Assets2/3 - The Solution (Core Services)/`
* **Section 4 Copy & Inspiration:** `Assets2/4 - The Aava Difference (Why Us?)/`
* **Section 5 Copy & Inspiration:** `Assets2/5 - Process & Footer/`

---

## 🎨 DESIGN SYSTEM (DARK LUXURY WEB3)

**BACKGROUNDS:**
```css
--bg-primary: #05050A; /* Deep dark navy/black */
--bg-secondary: #0F0F1A; /* Slightly lighter for sections */
--bg-tertiary: #1A1A2E; /* Dark grey/blue for cards */

PRIMARY ACCENTS (Extracted from the Aava logo and Lumea image):

--primary-400: #F472B6; /* Hover states */
--primary-500: #EC4899; /* Main base - Neon Magenta */
--primary-600: #DB2777; /* Active buttons */
--secondary-accent: #EAB308; /* Golden yellow for specific highlights */

TYPOGRAPHY:

Display/Headings: "Space Grotesk" or "Plus Jakarta Sans" (Google Fonts), weight 700-800.

Body/Text: "Inter" (Google Fonts), weight 400-500.

🖼️ SECTION STRUCTURE & BEHAVIOR
1. NAVBAR & HERO SECTION (100vh)
Navbar: Sticky header using <img src="Assets2/aava pink white background.png" alt="Aava Growth Logo">. Glassmorphism effect on scroll.

Hero Text: Extract the main hook from the images in Assets2/1 - Hero Section (The Hook)/.

Primary CTA: "Book a Growth Briefing" (Glowing magenta button).

🌟 CUSTOM HERO ANIMATION (CRITICAL): 
- Set Assets2/Lumea-glass-effect.png as the background image of the Hero section.

The Effect: The user wants the vertical light streaks in the image to look like they are traveling from bottom to top and gaining 3D volume (moving in to out).

How to build it: Do not just stretch the image. Apply a ::before overlay with an animated CSS gradient mask or dynamic vertical light streaks (using box-shadow or linear-gradient) that travel along the Y-axis (bottom to top) and scale slightly (transform: scale(1) to scale(1.05)) to simulate the lights pushing forward and upward smoothly and cinematically.

2. THE PROBLEM (The "Growth Gap")
Analyze the images in Assets2/2 - The Problem (The "Growth Gap")/.

Extract the key statistics (e.g., 17%, 95%, 83%) and the pain points.

Build a stark, high-contrast grid or stats counter section to highlight these numbers.

3. CORE SERVICES (Audit, Strategy, Execution)
Analyze the images in Assets2/3 - The Solution / Core Services/.

Build a 3-column interactive layout (or 3 distinct rows).

Use premium Glassmorphism cards (backdrop-filter: blur(24px)).

Include the specific sub-bullets for each service exactly as written in the screenshots.

4. THE AAVA DIFFERENCE (Operators, Not Observers)
Analyze the images in Assets2/4 - The Aava Difference (Why Us?)/.

Extract the differentiators (e.g., Operator Mindset, Native Expertise) and the metric scores (200+ years, 4.8/5, 89 NPS).

Layout: Split screen or a dynamic grid. Use animated counters for the numbers.

5. PROCESS & FOOTER
Analyze the images in Assets2/5 - Process & Footer/.

Build a horizontal timeline or step-by-step layout for the "Reach Out -> Discovery Call -> Tailored Proposal -> Scale Together" pipeline.

Large bottom CTA to turn vision into revenue.

⚡ FINAL EXECUTION INSTRUCTIONS
READ FIRST: Scan all images in the Assets2 folders to extract the exact text. Do not use placeholder text (Lorem Ipsum).

GENERATE CODE: Write the complete HTML, CSS, and JS.

NO PLACEHOLDER ASSETS: Only use the image paths provided in the Asset Directory Map. If you need icons, use inline SVG icons (like Lucide or Heroicons).

QUALITY: Ensure the Glassmorphism is high-end, the hero animation is smooth (60fps), and the site is fully responsive from mobile to desktop.


