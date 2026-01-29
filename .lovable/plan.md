

## Add Screenshots to Flagship Tools

This plan adds eye-catching screenshots to each flagship tool card on the homepage, making them more visually compelling and giving visitors a preview of what each app looks like.

### What You'll Get

The current flagship tools section shows icon-based cards. After this change:
- Each card will display a polished screenshot preview of the actual app
- Screenshots will be cropped/styled to look clean and professional
- Hover effects will make the cards feel interactive
- The layout will remain balanced and mobile-friendly

### Screenshots Captured

I visited each of your three apps and captured these screenshots:

1. **Sentence Paths** - Shows the clean learning interface with mode buttons (Listen, Read, Audiobook, etc.) and language selection
2. **Accrue Language** - Shows the welcome modal with progress tracking example (150 of 600 hours)
3. **FluentHour** - Shows the session library with A1-level cards like "Saying I'm Sorry After a Mistake"

---

### Technical Implementation

**1. Save Screenshots to Public Folder**

Create three new image files in `public/`:
- `public/screenshots/sentence-paths-preview.png`
- `public/screenshots/accrue-language-preview.png`
- `public/screenshots/fluenthour-preview.png`

**2. Update the Flagship Tools Data Structure**

Add an `image` property to each tool in the `flagshipTools` array:

```text
const flagshipTools = [
  {
    title: 'Sentence Paths',
    description: '...',
    href: '...',
    icon: Route,
    image: '/screenshots/sentence-paths-preview.png',
    ...
  },
  // ... same for other tools
];
```

**3. Redesign the Flagship Card Layout**

Transform from icon-based cards to image-featured cards:

```text
+----------------------------------+
|  [Screenshot Preview Image]      |
|  aspect-ratio: 16/9, rounded     |
+----------------------------------+
|  [Badge: Featured/New]           |
|  Tool Title                      |
|  Description text...             |
+----------------------------------+
```

Key styling details:
- Image container with `aspect-ratio: 16/9` for consistency
- Subtle shadow and border on images
- Hover effect: slight scale and shadow increase
- Badge positioned on the image (top-right corner)
- Icon moved inline with the title for compact branding

**4. Responsive Behavior**

- Desktop: 3-column grid with landscape screenshots
- Tablet: 2-column grid
- Mobile: Single column, full-width cards

**5. File Changes Summary**

| File | Change |
|------|--------|
| `public/screenshots/` | New folder with 3 screenshot images |
| `src/pages/Index.tsx` | Updated card layout with image support |

### Visual Hierarchy After Change

```text
[Navigation]

[Hero Section]

[Flagship Tools - with Screenshots]
  +----------------+  +----------------+  +----------------+
  | [Screenshot]   |  | [Screenshot]   |  | [Screenshot]   |
  | Sentence Paths |  | Accrue Lang.   |  | FluentHour     |
  | Description... |  | Description... |  | Description... |
  +----------------+  +----------------+  +----------------+

[Resources Section]
  ...existing cards...

[Custom App Ad Banner]
```

### Notes

- The screenshots will be optimized for web (compressed PNG or WebP)
- Images will be lazy-loaded for performance
- Alt text will describe each app for accessibility
- If you prefer different screenshots (e.g., showing a specific feature), I can recapture them

