---
name: AlgoDark Precision
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#393939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#20201f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353535'
  on-surface: '#e5e2e1'
  on-surface-variant: '#d9c3ad'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#a18d7a'
  outline-variant: '#544434'
  surface-tint: '#ffb867'
  primary: '#ffc78b'
  on-primary: '#482900'
  primary-container: '#ffa116'
  on-primary-container: '#683e00'
  inverse-primary: '#875200'
  secondary: '#59e07d'
  on-secondary: '#003915'
  secondary-container: '#00a74c'
  on-secondary-container: '#003112'
  tertiary: '#ffc3be'
  on-tertiary: '#680008'
  tertiary-container: '#ff9b92'
  on-tertiary-container: '#940010'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffddba'
  primary-fixed-dim: '#ffb867'
  on-primary-fixed: '#2b1700'
  on-primary-fixed-variant: '#673d00'
  secondary-fixed: '#77fd96'
  secondary-fixed-dim: '#59e07d'
  on-secondary-fixed: '#00210a'
  on-secondary-fixed-variant: '#005322'
  tertiary-fixed: '#ffdad6'
  tertiary-fixed-dim: '#ffb3ac'
  on-tertiary-fixed: '#410003'
  on-tertiary-fixed-variant: '#930010'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353535'
typography:
  headline-xl:
    fontFamily: Inter
    fontSize: 2.25rem
    fontWeight: '700'
    lineHeight: 2.75rem
    letterSpacing: -0.025em
  headline-xl-mobile:
    fontFamily: Inter
    fontSize: 1.75rem
    fontWeight: '700'
    lineHeight: 2.125rem
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 1.5rem
    fontWeight: '600'
    lineHeight: 2rem
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 1.125rem
    fontWeight: '600'
    lineHeight: 1.5rem
    letterSpacing: -0.015em
  body-lg:
    fontFamily: Inter
    fontSize: 1rem
    fontWeight: '400'
    lineHeight: 1.5rem
  body-md:
    fontFamily: Inter
    fontSize: 0.875rem
    fontWeight: '400'
    lineHeight: 1.375rem
  body-sm:
    fontFamily: Inter
    fontSize: 0.75rem
    fontWeight: '400'
    lineHeight: 1.125rem
  code-lg:
    fontFamily: JetBrains Mono
    fontSize: 0.9375rem
    fontWeight: '400'
    lineHeight: 1.5rem
  code-md:
    fontFamily: JetBrains Mono
    fontSize: 0.8125rem
    fontWeight: '400'
    lineHeight: 1.25rem
  code-sm:
    fontFamily: JetBrains Mono
    fontSize: 0.6875rem
    fontWeight: '500'
    lineHeight: 1rem
  label-md:
    fontFamily: Inter
    fontSize: 0.8125rem
    fontWeight: '500'
    lineHeight: 1rem
    letterSpacing: 0.01em
  label-mono:
    fontFamily: JetBrains Mono
    fontSize: 0.75rem
    fontWeight: '600'
    lineHeight: 1rem
    letterSpacing: 0.04em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 0.75rem
  gutter-desktop: 1rem
  margin: 1rem
  margin-desktop: 1.5rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 0.75rem
  space-lg: 1rem
  space-xl: 1.5rem
---

## Brand & Style

The design system is engineered for competitive programmers, software engineers, and computer science students who demand high-density information architecture and rapid cognitive processing. The aesthetic is utilitarian, analytical, and uncompromisingly developer-first. It deliberately discards decorative marketing artifacts—such as glossy drop shadows, floating blurred spheres, and generic SaaS purple gradients—in favor of a high-efficiency dark cockpit environment reminiscent of modern IDEs, debugger interfaces, and LeetCode.

Visually, the style merges disciplined dark-mode minimalism with technical precision. It leverages muted charcoal foundation surfaces punctuated by an unmistakable amber/orange accent that communicates execution, focus, and state progression. The UI must feel low-latency, razor-sharp, and authoritative, elevating structural code execution, dynamic call stacks, memory graphs, and algorithm complexity profiles to primary visual actors.

## Colors

The palette operates under a hierarchical dark gray surface model calibrated to eliminate eye strain during prolonged algorithmic analysis while retaining sharp delineation through contrast-managed borders.

### Surface Tiers
- **Canvas Base (`#1A1A1A`)**: Underlying background for the entire application canvas and browser extension shells.
- **Secondary Surface (`#202020`)**: Recessed areas, sidebars, execution log gutters, and code editor backdrops.
- **Primary Panel (`#242424`)**: Standard container background for active panels, DSA graph stages, and problem statement modules.
- **Elevated Surface (`#2A2A2A`)**: Popovers, modals, dropdown menus, and hovered panel states.
- **Structural Border (`#3A3A3A`)**: Crisp 1px boundary layer separating toolbars, panels, and viewports.

### Brand & Interactive Colors
- **Brand Primary (`#FFA116`)**: Reserved for core calls-to-action ("Run Code", "Submit", "Visualize Step"), current pointer heads, and active execution states.
- **Brand Primary Hover (`#FFB84D`)**: Hover interaction for primary amber elements.
- **Brand Accent Surface (`#382B17`)**: Low-luminance tinted backing for active pill indicators, warning tags, and focused state rings.

### Functional & Semantic Colors
- **Success (`#2CBB5D`)**: Accepted solutions, test cases passed, tree balance verified.
- **Warning (`#E3B341`)**: Complexity bottlenecks, suboptimal time limit warnings, memory cautions.
- **Error (`#EF4743`)**: Compilation errors, runtime exceptions, failing assertion indicators.

### Syntax & Visualizer Data Tokens
- **Keywords / Flow (`#FF7B72`)**: Control structures, branch decisions.
- **Strings / Constants (`#A5D6FF`)**: Literals, node string labels.
- **Functions / Methods (`#D2A8FF`)**: Recursive calls, heap manipulations, stack frames.
- **Numbers / Metrics (`#79C0FF`)**: Memory offsets, array indices, Big-O metrics, time elapsed.

## Typography

Typography strictly balances structural readability with mechanical code presentation. Two typefaces drive the system:
1. **Inter**: Handles all navigation, headers, status summaries, and problem descriptions. It provides neutral, legible rendering at compact scale without drawing undue attention away from technical data.
2. **JetBrains Mono**: Powers code editor viewports, visualization nodes, runtime/memory counters, call stacks, and inline technical metadata. Ligatures should be enabled for programming constructs, and numbers must render tabularly (`font-variant-numeric: tabular-nums`) to prevent layout shifting during real-time step simulations.

Line heights are kept deliberately tight (1.25–1.5) to maximize vertical real estate in split-pane developer workspaces.

## Layout & Spacing

The layout model is driven by a high-density, split-pane tiling paradigm suited for IDE environments, dashboard overlays, and extension flyouts.

### Layout Mechanics
- **Tiling & Docking**: Desktop layouts rely on continuous CSS Grid or Flexbox panels separated by 1px dividers rather than large negative-space voids. Viewports are partitioned into flexible zones: Navigation Header, Algorithm Canvas / Visualizer Stage, Code Editor, and Execution Inspector.
- **Grid Structure**: On non-tiled promotional pages, content adheres to a 12-column responsive grid with a compact `1rem` desktop gutter and a maximum container width of `1280px`.
- **Breakpoints**:
  - `Mobile / Extension Popup (<640px)`: Single column vertical stack. Visualizer tabulates above code panels; controls condense into an icon-first bottom bar.
  - `Tablet / Split Screen (640px - 1023px)`: 2-row layout with collapsible debugger drawer.
  - `Desktop (>=1024px)`: Multi-pane side-by-side workspace with resizable panels. Outer gutters stay tight at `1.5rem`.

Spacing increments honor a compact 4px base scale (`0.25rem`, `0.5rem`, `0.75rem`, `1rem`, `1.5rem`). Negative space inside developer tools is treated as a finite resource: internal margins must remain lean to preserve maximum visibility for DSA structures.

## Elevation & Depth

Visual hierarchy does not use diffuse blurs or dramatic drop shadows. Instead, it relies on **Tonal Stratification** paired with **Low-Contrast Structural Borders**.

### Layer Architecture
1. **Level 0 (Base Canvas - `#1A1A1A`)**: Foundation for background grid lines and stage canvas boundaries.
2. **Level 1 (Panels & Editor Surfaces - `#242424`)**: Workspaces, code input blocks, visualizer panels. Enclosed uniformly by a `1px solid #3A3A3A` border.
3. **Level 2 (Active / Raised Panels - `#2A2A2A`)**: Hovered list items, active tab headers, floating playhead controls, and visualizer nodes.
4. **Level 3 (Overlays & Dropdowns - `#2E2E2E`)**: Context menus, language switchers, tooltips. Uses a razor-thin border (`1px solid #4A4A4A`) accompanied by an ambient, zero-spread shadow: `0 4px 16px rgba(0, 0, 0, 0.45)`.

No multi-colored or colored neon shadows are permitted. The depth hierarchy must look grounded, technical, and structural.

## Shapes

The design system employs a soft, restrained corner radius (`0.25rem` / `4px` default, `0.5rem` / `8px` maximum).

- **Standard Buttons, Inputs, Chips, Nodes**: `4px` (`0.25rem`). This establishes a crisp, tool-like appearance typical of desktop operating systems and high-end code editors.
- **Cards, Panels, Modal Containers**: `8px` (`0.5rem`). Applied only to macro-level windows and popovers.
- **Graph Nodes & Visualizer Elements**: Circular elements (such as tree nodes) use a strict 50% border radius; array cells and matrix elements strictly use `4px` to maintain a grid-aligned, dense layout.
- **Pill-shaped elements**: Disallowed across the board, with the sole exception of mini status chips measuring under 20px in total height.

## Components

### Buttons
- **Primary Action (Run / Execute)**: Solid `#FFA116` background, `#1A1A1A` bold text, `4px` radius. Hover state shifts to `#FFB84D`. Active state compresses slightly without scaling transforms (`filter: brightness(0.95)`).
- **Secondary Action (Step, Reset, Tabulate)**: `#2A2A2A` surface with `1px solid #3A3A3A` border, `#E6E6E6` text. Hover transitions background to `#333333`.
- **Ghost / Tool Bar Icon Buttons**: Transparent background, `#9E9E9E` text/icon color. Hover applies `#242424` background and `#FFFFFF` text.

### Inputs & Code Fields
- **Search & Filters**: `#202020` background, `1px solid #3A3A3A` border, `Inter` `0.875rem`. Focus ring triggers a `1px solid #FFA116` with zero fuzzy offset.
- **Code Editor Wrapper**: `#202020` base, JetBrains Mono typography, zero outer border radius when docked. Active line highlight utilizes `rgba(255, 161, 22, 0.08)` background tint with a 2px amber accent bar on the left edge.

### Chips & Badges
- **Complexity & Difficulty Badges**: `JetBrains Mono` label font, `0.6875rem` uppercase.
  - *Easy / Optimal*: `#2CBB5D` text on `rgba(44, 187, 93, 0.12)` background.
  - *Medium / Warning*: `#FFA116` text on `#382B17` background.
  - *Hard / High Complexity*: `#EF4743` text on `rgba(239, 71, 67, 0.12)` background.
- Border radius is fixed at `4px`.

### Cards & Panels
- **Structure**: `#242424` surface surrounded by `1px solid #3A3A3A`.
- **Panel Header**: Anchored with a `2rem` to `2.5rem` fixed height bar in `#202020`, featuring `Inter` 12px uppercase semibold section titles, tab selectors, and docked action icons.

### Visualizer Canvas & Call Stacks
- **Array Cells**: Square blocks with `#2A2A2A` background and `#3A3A3A` outline. Active read pointers flash `#FFA116` outline; write modifications highlight `#2CBB5D`.
- **Binary Tree Nodes**: 32px or 40px circular nodes with `#242424` fill and `2px solid #3A3A3A`. Node values render in `JetBrains Mono`. Visited nodes glow with an inner `#382B17` surface and `#FFA116` perimeter border.
- **Call Stack Items**: Vertically stacked rows on `#202020` background. Currently executing frame displays an active left indicator border in `#FFA116`.

### Checkboxes & Toggles
- Custom square box (`16px x 16px`) with `2px` radius and `#3A3A3A` border. Checked state fills `#FFA116` with a dark charcoal check icon.