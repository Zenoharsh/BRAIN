---
name: Aurora Light
colors:
  surface: '#f6faff'
  surface-dim: '#d2dbe4'
  surface-bright: '#f6faff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#ecf5fe'
  surface-container: '#e6eff8'
  surface-container-high: '#e0e9f2'
  surface-container-highest: '#dbe4ed'
  on-surface: '#141d23'
  on-surface-variant: '#414754'
  inverse-surface: '#293138'
  inverse-on-surface: '#e9f2fb'
  outline: '#717786'
  outline-variant: '#c1c6d7'
  surface-tint: '#005bc0'
  primary: '#0059bb'
  on-primary: '#ffffff'
  primary-container: '#0070ea'
  on-primary-container: '#fefcff'
  inverse-primary: '#adc7ff'
  secondary: '#006875'
  on-secondary: '#ffffff'
  secondary-container: '#00e3fd'
  on-secondary-container: '#00616d'
  tertiary: '#4f5c76'
  on-tertiary: '#ffffff'
  tertiary-container: '#67758f'
  on-tertiary-container: '#fefcff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d8e2ff'
  primary-fixed-dim: '#adc7ff'
  on-primary-fixed: '#001a41'
  on-primary-fixed-variant: '#004493'
  secondary-fixed: '#9cf0ff'
  secondary-fixed-dim: '#00daf3'
  on-secondary-fixed: '#001f24'
  on-secondary-fixed-variant: '#004f58'
  tertiary-fixed: '#d6e3ff'
  tertiary-fixed-dim: '#b9c7e4'
  on-tertiary-fixed: '#0d1c32'
  on-tertiary-fixed-variant: '#39475f'
  background: '#f6faff'
  on-background: '#141d23'
  surface-variant: '#dbe4ed'
typography:
  h1:
    fontFamily: Plus Jakarta Sans
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  h2:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.25'
    letterSpacing: -0.01em
  h3:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  label-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1'
    letterSpacing: 0.01em
  button:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '600'
    lineHeight: '1'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 48px
  gutter: 24px
  margin: 32px
---

## Brand & Style

This design system is built upon the "Aurora" ethos—a blend of atmospheric depth and high-utility precision. It targets professional environments that require long-term focus without fatigue, evoking a sense of calm, clarity, and technological sophistication.

The aesthetic direction is **Modern Minimalism with Glassmorphism**. It prioritizes a spacious, airy feel using a light-mode foundation, punctuated by vibrant, light-emitting accents that mimic the natural phenomenon of the aurora borealis. Transitions between layers are soft and organic, utilizing translucency to maintain spatial context.

## Colors

The palette is anchored by a sterile, off-white background to reduce glare while providing a canvas for high-chroma accents.

*   **Primary:** A vibrant blue that serves as the main interactive signal.
*   **Secondary (Aurora Cyan):** Used for highlights, success states, and decorative gradients to provide the "glow" effect characteristic of the style.
*   **Tertiary (Deep Navy):** Reserved for high-contrast text, navigation headers, and grounding elements to provide professional weight.
*   **Gradients:** Interactive elements should utilize a subtle linear gradient from Primary to Secondary at a 135-degree angle to simulate light movement.

## Typography

The typographic strategy balances the geometric friendliness of **Plus Jakarta Sans** for display sizes with the utilitarian precision of **Inter** for long-form reading. 

To achieve the "One UI" influence, headings use a slightly wider tracking and generous line heights to ensure the interface feels uncrowded. Body text is set with optical sizing in mind, prioritizing legibility and a neutral tone. Use **Inter** for all functional labels and data inputs to maintain a systematic, technical feel.

## Layout & Spacing

This design system utilizes a **Fluid Grid** model with a base-8 rhythm. All components and layouts should be divisible by 8px, with 4px used only for micro-adjustments in icons or tight labels.

The layout philosophy emphasizes "Generous Breathing Room." Containers should utilize large internal padding (minimum 24px) to emphasize the lightweight, airy nature of the Aurora style. Section margins should be substantial to prevent the "glass" containers from feeling cluttered or compressed.

## Elevation & Depth

Depth is established through a combination of **Ambient Shadows** and **Backdrop Blurring**.

1.  **Base Layer:** The #F8F9FA background.
2.  **Mid Layer (Glass):** Containers use a semi-transparent white (#FFFFFFBB) with a `backdrop-filter: blur(12px)`. This creates the frosted glass effect.
3.  **Top Layer (Floating):** Active modals or popovers use a more opaque background and a multi-layered shadow:
    *   *Shadow 1:* 0px 4px 6px rgba(0, 0, 0, 0.02)
    *   *Shadow 2:* 0px 10px 15px rgba(0, 123, 255, 0.05) (Primary color tint)

The use of a subtle primary-color tint in the shadows is crucial for the "Aurora" effect, making components appear as though they are emitting a faint blue light onto the surface below.

## Shapes

The shape language is consistently rounded to project an approachable and modern feel. A standard **8px (0.5rem)** radius is applied to all primary UI elements including buttons, input fields, and cards.

For larger layout containers (like a main dashboard area or sidebar), the radius can scale to **16px (1rem)** to soften the overall architecture. Avoid sharp corners entirely to maintain the fluid, organic aesthetic of the design system.

## Components

*   **Buttons:** Primary buttons use a subtle gradient (Deep Navy to Primary Blue). Ghost buttons use a 1px border with a soft blue tint. All buttons feature an 8px radius and high-contrast white text.
*   **Cards:** The defining component. Use white backgrounds at 80% opacity with a 12px background blur. Apply an 8px border radius and a soft, layered shadow with a 2% blue tint.
*   **Input Fields:** Use a solid white background to ensure text entry clarity. Borders should be a very light gray (#E9ECEF), turning Primary Blue on focus with a subtle outer glow.
*   **Chips/Badges:** Use highly desaturated versions of the accent colors (e.g., light cyan background with deep cyan text) with a fully pill-shaped radius to differentiate them from standard buttons.
*   **Lists:** Items are separated by whitespace rather than lines. Hover states involve a slight scale increase (1.02x) and a background color shift to a very faint blue (#F0F7FF).
*   **Progress Indicators:** Use the Aurora gradient (Primary to Secondary) to give the impression of energy and movement within the interface.