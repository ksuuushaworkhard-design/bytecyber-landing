# ByteCyber Production Asset Package

This package contains production-ready assets based on the approved ByteCyber identity system.

The identity direction has not been redesigned. It preserves the current logo direction, dark technical palette, bidstream curve, sparse nodes, thin rails, and precise programmatic-native visual language.

## Folder Structure

```text
bytecyber-production-assets/
  logos/
  icons/
  tokens/
  graphic-elements/
  docs/
  previews/
```

## Logo Files

- `logos/bytecyber-logo-horizontal.svg`  
  Primary horizontal logo for the landing page header and hero section.

- `logos/bytecyber-mark.svg`  
  Compact mark / icon for small placements, loaders, interface moments, and social/avatar use.

- `logos/bytecyber-logo-dark.svg`  
  Logo version optimized for dark backgrounds.

- `logos/bytecyber-logo-light.svg`  
  Logo version optimized for light backgrounds.

- `icons/favicon.svg`  
  Favicon SVG.

- `icons/app-icon.svg`  
  Large app icon source SVG.

Raster app icon exports are in `icons/` after export:

- `favicon-32.png`
- `app-icon-180.png`
- `app-icon-512.png`

## Brand Tokens

Use `tokens/brand-tokens.css` as the source of color variables.

```css
--bc-ink-950: #050A11;
--bc-ink-900: #071018;
--bc-surface: #09111C;
--bc-line: #253143;
--bc-text: #F1F6FB;
--bc-signal: #50D8AF;
--bc-bid: #39BDEB;
--bc-decision: #6885FF;
```

Use the signal gradient sparingly:

```css
linear-gradient(90deg, #50D8AF 0%, #39BDEB 52%, #6885FF 100%)
```

## Typography

Use a neutral sans-serif for primary website typography:

```css
font-family: Inter, -apple-system, BlinkMacSystemFont, "Helvetica Neue", Arial, sans-serif;
```

Use mono-style typography only for small technical labels, interface metadata, and status chips:

```css
font-family: "SF Mono", "IBM Plex Mono", ui-monospace, Menlo, Consolas, monospace;
```

See `docs/typography-notes.md` for usage details.

## Graphic Elements

Reusable identity elements are in `graphic-elements/`:

- `signal-curve.svg`
- `signal-nodes.svg`
- `thin-rails-grid.svg`
- `technical-label.svg`
- `interface-card.svg`

Use these elements to build landing page sections, product visuals, and interface-like modules. They should feel like programmatic decision infrastructure, not cybersecurity decoration.

## Landing Page Handoff

Recommended usage:

- Header: use `logos/bytecyber-logo-dark.svg` on `#050A11` or `#071018`.
- Hero: use the horizontal logo plus the signal curve motif as a supporting visual element.
- Backgrounds: use dark surfaces, thin rails, sparse grids, and limited signal-gradient accents.
- Buttons: use the gradient only for one primary CTA; keep secondary actions dark with a thin line.
- Cards: use `#09111C` surfaces, `#253143` borders, 6-8px radius, restrained text hierarchy.
- Technical labels: use mono-style text, small sizing, and low-density status language.
- Product/interface moments: use metrics, bid logic, signals, RTB, and transparent reporting language.

Avoid:

- Cybersecurity shields
- Locks
- Hacker imagery
- Matrix-style code
- Generic AI visuals
- Neon overload
- Ad-network or traffic-source visual cliches

Keep the page dark, technical, precise, minimal, and programmatic-native.
