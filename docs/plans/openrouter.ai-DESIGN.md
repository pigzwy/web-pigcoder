# Design System Inspired by OpenRouter

## 1. Visual Theme & Atmosphere

OpenRouter's design system embodies a modern, tech-forward aesthetic built for developers and AI practitioners. The interface prioritizes clarity and accessibility through a clean, minimalist approach with strategic use of a vibrant purple accent palette. The design communicates efficiency, reliability, and trustworthiness—essential qualities for a unified LLM aggregation platform. The visual language combines generous whitespace, precise typography, and subtle depth to create an intuitive navigation experience that doesn't distract from content. Dark text on light backgrounds ensures legibility, while the carefully selected purple accent (`#6467F2`) adds energy and draws attention to critical interactions without overwhelming the interface.

**Key Characteristics**

- Minimalist, tech-forward aesthetic with clean lines and ample whitespace
- Purple-dominant accent system (`#6467F2`, `#818DF8`) for CTAs and interactive elements
- High contrast typography for accessibility and readability
- Subtle shadow layering for depth without visual noise
- Rounded corners (`6px` to `12px`) for approachability and modernity
- Focus on information architecture and intentional visual hierarchy
- Neutral color foundation with strategic accent highlights
- Developer-friendly, data-centric presentation style

## 2. Color Palette & Roles

### Primary

- **Brand Purple** (`#6467F2`): Primary action buttons, CTA elements, active states, and brand identity
- **Light Purple Accent** (`#818DF8`): Secondary hover states, accent highlights, and supporting interactive elements

### Accent Colors

- **Bright Blue** (`#0090FF`): Alternative accent for specific call-to-actions and deep links
- **Success Green** (`#30A46C`): Positive feedback, success indicators, and completion states
- **Warning Orange** (`#F76B15`): Alert states and cautionary messaging

### Interactive

- **Interactive Dark** (`#3E63DD`): Focus states and precision interactive elements
- **Warning Yellow** (`#FFE629`): Primary warning state indicator
- **Warning Amber** (`#FFC53D`): Secondary warning and attention-grabbing highlights

### Neutral Scale

- **Text Primary** (`#09090B`): Main heading and body text, highest contrast
- **Text Secondary** (`#71717A`): Secondary text, labels, and supporting information
- **Text Tertiary** (`#60646C`): Placeholder text and disabled states
- **Background Light** (`#FAFAFA`): Light background surfaces and subtle sections
- **Background Lighter** (`#FCFCFD`): Lightest background for nested sections
- **Background Default** (`#F0F0F3`): Default neutral background fill

### Surface & Borders

- **Surface White** (`#FFFFFF`): Card backgrounds, modals, and primary surfaces
- **Border Divider** (`#E4E4E7`): Border lines, dividers, and subtle separators
- **Border Subtle** (`#D9D9D9`): Light borders for secondary divisions

### Semantic / Status

- **Error Red** (`#E5484D`): Error messages, destructive actions, and validation failures
- **Success Green** (`#30A46C`): Successful actions, confirmations, and positive states

## 3. Typography Rules

### Font Family

**Primary:** Inter (sans-serif)
**Fallback:** -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", sans-serif

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|----------------|-------|
| Display / H1 | Inter | 60px | 700 | 60px | 0px | Page hero titles and major headings |
| Heading H2 | Inter | 24px | 600 | 32px | 0px | Section headers and subsection titles |
| Heading H3 | Inter | 20px | 600 | 28px | 0px | Card titles and component headings |
| Body Large | Inter | 20px | 400 | 28px | 0px | Primary body text and descriptions |
| Body Regular | Inter | 16px | 500 | 24px | 0px | Button text, labels, and standard body content |
| Body Small | Inter | 14px | 400 | 20px | 0px | Input text, captions, and fine print |
| Link | Inter | 16px | 400 | 24px | 0px | Hyperlinks and inline navigation |
| Code | Inter | 14px | 400 | 20px | 0px | Monospace code, API keys, and technical identifiers |

### Principles

- **Hierarchy through weight:** Bold headings establish visual priority; regular weight body text ensures readability
- **Generous line height:** 1.2–1.5x font size provides breathing room and accessibility
- **Scale consistency:** Typography progresses through defined size increments (`14px`, `16px`, `20px`, `24px`, `60px`)
- **Developer focus:** Clear distinction between UI labels and body text for scanning efficiency
- **Accessibility:** High contrast text (`#09090B` on `#FFFFFF`) meets WCAG AA standards

## 4. Component Stylings

### Buttons

#### Primary Button
- **Background:** `#6467F2`
- **Text Color:** `#FFFFFF`
- **Font Size:** `16px`
- **Font Weight:** `500`
- **Font Family:** Inter
- **Padding:** `12px 20px`
- **Height:** `44px`
- **Border Radius:** `6px`
- **Border:** `0px solid transparent`
- **Box Shadow:** `none`
- **Hover State:** Background `#818DF8`, text `#FFFFFF`
- **Active State:** Background `#4C4FD5`, text `#FFFFFF`
- **Disabled State:** Background `#E4E4E7`, text `#71717A`

#### Secondary Button
- **Background:** `#FFFFFF`
- **Text Color:** `#09090B`
- **Font Size:** `16px`
- **Font Weight:** `500`
- **Font Family:** Inter
- **Padding:** `12px 20px`
- **Height:** `44px`
- **Border Radius:** `6px`
- **Border:** `1px solid #E4E4E7`
- **Box Shadow:** `none`
- **Hover State:** Background `#FAFAFA`, border `#D9D9D9`, text `#09090B`
- **Active State:** Background `#F0F0F3`, text `#09090B`
- **Disabled State:** Background `#FCFCFD`, border `#E4E4E7`, text `#71717A`

#### Ghost Button
- **Background:** `transparent`
- **Text Color:** `#71717A`
- **Font Size:** `16px`
- **Font Weight:** `400`
- **Font Family:** Inter
- **Padding:** `8px 16px`
- **Height:** `36px`
- **Border Radius:** `6px`
- **Border:** `0px solid transparent`
- **Box Shadow:** `none`
- **Hover State:** Background `#FAFAFA`, text `#09090B`
- **Active State:** Background `#F0F0F3`, text `#09090B`
- **Disabled State:** Text `#D9D9D9`

### Cards & Containers

#### Standard Card
- **Background:** `#FFFFFF`
- **Text Color:** `#09090B`
- **Font Size:** `16px`
- **Font Weight:** `400`
- **Font Family:** Inter
- **Padding:** `24px`
- **Border Radius:** `12px`
- **Border:** `1px solid #E4E4E7`
- **Box Shadow:** `rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.1) 0px 1px 2px -1px`
- **Hover State:** Border `#D9D9D9`, box shadow `rgba(0, 0, 0, 0.1) 0px 4px 6px -1px`

#### Featured Card (Model/Agent Showcase)
- **Background:** `#FFFFFF`
- **Text Color:** `#09090B`
- **Font Size:** `16px`
- **Font Weight:** `500`
- **Font Family:** Inter
- **Padding:** `20px`
- **Border Radius:** `12px`
- **Border:** `1px solid #E4E4E7`
- **Box Shadow:** `rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.1) 0px 2px 4px -2px`
- **Min Height:** `280px`

#### Dark Container (Featured Agent Background)
- **Background:** `#09090B`
- **Text Color:** `#FFFFFF`
- **Border Radius:** `12px 12px 0px 0px`
- **Min Height:** `180px`
- **Padding:** `32px`

### Inputs & Forms

#### Text Input
- **Background:** `#FFFFFF`
- **Text Color:** `#60646C`
- **Font Size:** `14px`
- **Font Weight:** `400`
- **Font Family:** Inter
- **Padding:** `12px 16px`
- **Height:** `44px`
- **Border Radius:** `6px`
- **Border:** `1px solid #E4E4E7`
- **Box Shadow:** `none`
- **Focus State:** Border `#6467F2`, box shadow `0px 0px 0px 3px rgba(100, 103, 242, 0.1)`
- **Placeholder Color:** `#71717A`
- **Disabled State:** Background `#FAFAFA`, border `#E4E4E7`, color `#D9D9D9`

#### Search Input
- **Background:** `#F0F0F3`
- **Text Color:** `#71717A`
- **Font Size:** `14px`
- **Font Weight:** `400`
- **Font Family:** Inter
- **Padding:** `12px 16px`
- **Height:** `40px`
- **Border Radius:** `6px`
- **Border:** `0px solid transparent`
- **Box Shadow:** `none`
- **Focus State:** Background `#FFFFFF`, border `1px solid #E4E4E7`

### Navigation

#### Header Navigation
- **Background:** `#FFFFFF`
- **Text Color:** `#09090B`
- **Font Size:** `16px`
- **Font Weight:** `400`
- **Font Family:** Inter
- **Padding:** `0px 32px`
- **Height:** `56px`
- **Border Radius:** `0px`
- **Border Bottom:** `1px solid #E4E4E7`
- **Box Shadow:** `rgba(228, 228, 231, 0.4) 0px -1px 0px 0px inset`
- **Align Items:** center
- **Display:** flex

#### Navigation Link
- **Text Color:** `#71717A`
- **Font Size:** `16px`
- **Font Weight:** `400`
- **Padding:** `0px 16px`
- **Hover State:** Color `#09090B`
- **Active State:** Color `#6467F2`, font weight `600`

#### Sign Up Button (Header)
- **Background:** `#6467F2`
- **Text Color:** `#FFFFFF`
- **Font Size:** `16px`
- **Font Weight:** `500`
- **Padding:** `10px 20px`
- **Height:** `40px`
- **Border Radius:** `20px`
- **Border:** `0px`

### Badges & Status Indicators

#### Badge - Default
- **Background:** `#F0F0F3`
- **Text Color:** `#60646C`
- **Font Size:** `12px`
- **Font Weight:** `600`
- **Padding:** `4px 8px`
- **Border Radius:** `4px`

#### Badge - Success
- **Background:** `#30A46C`
- **Text Color:** `#FFFFFF`
- **Font Size:** `12px`
- **Font Weight:** `600`
- **Padding:** `4px 8px`
- **Border Radius:** `4px`

#### Badge - Warning
- **Background:** `#FFC53D`
- **Text Color:** `#09090B`
- **Font Size:** `12px`
- **Font Weight:** `600`
- **Padding:** `4px 8px`
- **Border Radius:** `4px`

#### Badge - Error
- **Background:** `#E5484D`
- **Text Color:** `#FFFFFF`
- **Font Size:** `12px`
- **Font Weight:** `600`
- **Padding:** `4px 8px`
- **Border Radius:** `4px`

## 5. Layout Principles

### Spacing System

**Base Unit:** `4px`

**Spacing Scale:**
- `4px`: Micro spacing, tight button/icon spacing
- `8px`: Compact padding, small component internal spacing
- `12px`: Standard padding, input field vertical spacing
- `16px`: Standard margin, medium component spacing
- `20px`: Generous padding, card internal spacing
- `24px`: Section padding, prominent component spacing
- `32px`: Large margin, major section separation
- `48px`: Extra-large gap, section grouping
- `64px`: Hero section margin, major layout divisions
- `80px`: Feature section gap, large content blocks
- `108px`: Page-level margin, maximum content separation

**Usage Context:**
- `4px–8px`: Buttons, icons, tight groupings
- `12px–16px`: Input fields, compact cards, lists
- `20px–24px`: Card and container internals
- `32px–48px`: Section separation, feature spacing
- `64px+`: Hero sections, page-level margins

### Grid & Container

- **Max Width:** `1440px` for primary content containers
- **Column Strategy:** 12-column flexible grid for responsive layouts
- **Gutter Width:** `16px` between columns
- **Container Padding:** `32px` on desktop, `20px` on tablet, `16px` on mobile
- **Section Pattern:** Full-width background sections with centered content containers
- **Center Alignment:** Flex center for hero content, cards, and call-to-action sections

### Whitespace Philosophy

OpenRouter embraces generous whitespace to reduce cognitive load and emphasize key information. Every card, section, and component has breathing room. The design avoids clustering elements; instead, purposeful spacing creates visual rhythm and guides users through content hierarchically. Large margins between major sections (`64px–108px`) signal importance and delineate distinct content areas. This approach prioritizes clarity over density, reflecting the platform's commitment to transparent, straightforward access to AI models.

### Border Radius Scale

- `0px`: Navigation bar, full-width sections, structured layouts
- `4px`: Small badges, compact indicators, minimal roundness
- `6px`: Buttons, inputs, smaller interactive elements—friendlier than sharp but still structured
- `12px`: Cards, containers, modal backgrounds—primary component roundness
- `12px 12px 0px 0px`: Card headers with flat bottom edge, visual hierarchy
- `20px`: Fully rounded buttons (CTA sign-up), pill-shaped elements
- `3.35544e+07px`: Extreme radius for perfectly round elements (circular avatars, icons)

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (0) | `none` | Navigation, text links, ghost buttons |
| Subtle (1) | `rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.1) 0px 1px 2px -1px` | Standard cards, lightweight containers |
| Medium (2) | `rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.1) 0px 2px 4px -2px` | Hovered cards, featured content, dropdowns |
| None (Inset) | `rgba(228, 228, 231, 0.4) 0px -1px 0px 0px inset` | Navigation bottom border, subtle depth |

**Shadow Philosophy:**

OpenRouter's shadow system is minimal and subtle, avoiding heavy drop shadows that feel dated or cluttered. Shadows serve a functional purpose: distinguishing cards from the background and creating visual separation without distraction. Most components rely on borders (`#E4E4E7`) for definition; shadows are reserved for hover states and elevated content. This restraint maintains the modern, clean aesthetic while preserving a sense of layering and depth. The subtle `rgba(0, 0, 0, 0.1)` shadow values reinforce the light, airy feel of the interface.

## 7. Do's and Don'ts

### Do

- **Use purple accents consistently:** `#6467F2` for all primary CTAs, ensuring brand recognition and visual unity
- **Prioritize high contrast:** Place dark text (`#09090B`) on light backgrounds (`#FFFFFF`) for accessibility
- **Apply generous padding:** Use `20px–24px` inside cards and `32px–48px` between sections to create breathing room
- **Implement subtle shadows:** Add shadows only on hover or for featured content; keep them light and refined
- **Maintain precise typography:** Follow the scale exactly—60px for H1, 24px for H2, 16px for body—no deviation
- **Use border colors for definition:** Rely on `#E4E4E7` borders instead of shadows for card and container edges
- **Design for touch:** Ensure buttons and interactive elements are at least `44px` in height and `20px` wide for mobile
- **Group related information:** Use consistent `24px` padding and `12px` border-radius on cards to create cohesion
- **Test accessibility:** Validate all color combinations against WCAG AA contrast ratios (minimum 4.5:1 for text)
- **Respect the grid:** Align content to the 12-column grid with `16px` gutters for responsive coherence

### Don't

- **Overuse color:** Limit accent colors to CTAs and status states; keep neutrals dominant
- **Mix font sizes arbitrarily:** Always reference the defined typography hierarchy; never add ad-hoc sizes
- **Nest cards too deeply:** Avoid shadows stacking or three+ layers of elevation; keep hierarchy simple
- **Ignore whitespace:** Don't cram content; inadequate spacing reduces readability and feels chaotic
- **Use heavy shadows:** Avoid shadows exceeding `rgba(0, 0, 0, 0.1)`; they overwhelm the minimalist aesthetic
- **Create weak contrast:** Never place medium-gray text on light backgrounds without testing contrast first
- **Forget touch targets:** Don't make buttons smaller than `44px` height or `20px` width on mobile devices
- **Mix rounded corners inconsistently:** Stick to `6px` for buttons/inputs and `12px` for cards; avoid arbitrary radii
- **Use more than two accent colors at once:** Purple (`#6467F2`) is primary; use `#818DF8` or `#0090FF` sparingly for secondary accents
- **Disable placeholder text during input:** Always keep placeholder instructions visible until replacement, supporting user comprehension

## 8. Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | 320px–639px | Single column, 16px padding, 40px button height, stacked navigation |
| Tablet | 640px–1023px | 2-column grid, 20px padding, 44px buttons, collapsible navigation |
| Desktop | 1024px+ | Full 12-column grid, 32px padding, full navigation bar visible |
| Large Desktop | 1440px+ | Max container width `1440px`, centered content |

### Touch Targets

- **Minimum button height:** `44px` (mobile) / `40px` (desktop minimum)
- **Minimum button width:** `20px` (comfortable tap target)
- **Minimum link/clickable area:** `44px × 44px` (mobile)
- **Icon button size:** `36px–44px` (easily tappable)
- **Padding around interactive elements:** `8px` minimum (prevents accidental activation)

### Collapsing Strategy

- **Hero section:** Full-width on desktop with centered text; stack content vertically on mobile
- **Navigation:** Full horizontal menu on desktop; collapse to hamburger icon on tablet (640px)
- **Card grid:** 3-column on desktop, 2-column on tablet, 1-column on mobile
- **Featured cards:** 3-column carousel on desktop; 2-column on tablet; full-width scrollable on mobile
- **Padding and margins:** Decrease by 25–50% on mobile; halve `64px` section gaps to `32px` on tablet
- **Typography scale:** Reduce by 2–4px on mobile (H1: 48px instead of 60px; body: 14px instead of 16px)
- **Search bar:** Full width on mobile; fixed width (`210px+`) on desktop
- **CTA buttons:** Full width on mobile (`100%`); fixed width on desktop (`auto`)

## 9. Agent Prompt Guide

### Quick Color Reference

- **Primary CTA:** Brand Purple (`#6467F2`)
- **Secondary CTA / Hover:** Light Purple Accent (`#818DF8`)
- **Backgrounds:** White (`#FFFFFF`), Light Gray (`#FAFAFA`), Off-White (`#FCFCFD`)
- **Text / Headings:** Near Black (`#09090B`)
- **Text Secondary:** Gray (`#71717A`)
- **Borders / Dividers:** Light Gray (`#E4E4E7`)
- **Success / Positive:** Green (`#30A46C`)
- **Error / Danger:** Red (`#E5484D`)
- **Warning / Alert:** Orange (`#F76B15`), Amber (`#FFC53D`), Yellow (`#FFE629`)

### Iteration Guide

1. **Typography First:** All text must use Inter font; follow exact sizes and weights from hierarchy table (H1: 60px/700, H2: 24px/600, body: 16px/400, buttons: 16px/500)

2. **Color Discipline:** Use `#6467F2` for ALL primary buttons and CTAs; use `#09090B` for text on `#FFFFFF` backgrounds; ensure minimum 4.5:1 contrast ratio for accessibility

3. **Spacing Consistency:** Apply `24px` padding inside cards, `32px–48px` gaps between sections, `12px` inside inputs, `20px` around grouped elements—never arbitrary spacing

4. **Button Rules:** Primary buttons are `44px` tall with `12px 20px` padding, `6px` radius, purple background; secondary buttons have `#E4E4E7` border on white; ghost buttons are transparent with no border

5. **Card Defaults:** All cards use `#FFFFFF` background, `12px` border-radius, `1px solid #E4E4E7` border, subtle shadow (`rgba(0, 0, 0, 0.1) 0px 1px 3px 0px`), and `24px` padding

6. **Elevation Minimalism:** Use shadows sparingly—only on card hover and featured content; prefer `#E4E4E7` borders for definition; avoid stacking multiple shadow layers

7. **Responsive Scaling:** Desktop container max `1440px`; tablet 2-column grids; mobile full-width with 1 column; reduce padding by 25–50% on mobile; button height stays `44px` minimum

8. **Input Focus:** All input fields show `#6467F2` border and `0px 0px 0px 3px rgba(100, 103, 242, 0.1)` box-shadow on focus; height is `44px`; padding is `12px 16px`

9. **Navigation Fixed:** Header always `56px` tall, white background, `#E4E4E7` bottom border inset, flex center alignment; sign-up button is purple pill (`20px` radius) at `40px` height

10. **Status Colors:** Green (`#30A46C`) for success, Red (`#E5484D`) for errors, Orange (`#F76B15`) for warnings, Yellow (`#FFE629`) for alerts; use in badges, text, and indicators consistently