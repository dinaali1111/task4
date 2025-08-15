# Advanced Image Slider

A simple, modern, and responsive image slider with a polished UI and rich interactions.

## Features
- Professional button icons using Font Awesome (via CDN).
- Left/right navigation buttons with compact circular style.
- Auto-play toggle (Play/Pause) and a Stop button that resets to the first slide.
- Thumbnails bar for quick navigation with an active highlight.
- Dynamic caption displayed under the slider using each image `alt` text.
- Images fill the slider container using `object-fit: cover` for a consistent look.
- Smooth hover/transitions and a clean, modern theme.
- Responsive layout with resize handling for all screen sizes.

## Project Structure
```
.
├─ main.html       # Main gallery page
├─ main.css        # Styles (container, buttons, images, thumbnails, responsive)
├─ main.js         # Slider logic (navigation, autoplay, thumbnails, captions)
└─ images/         # Images (download.jpg, download2.jpg, download3.jpg)
```

## Getting Started
1. Open `main.html` directly in your browser.
2. Ensure you have an internet connection to load Font Awesome icons (CDN).

> No build or install steps required; this is a static project.

## Usage & Customization
- Add a new image:
  1) Place your image file under the `images/` folder.
  2) Add a new slide inside `.slides` in `main.html`:
     ```html
     <div class="slide-item">
       <img src="images/your-image.jpg" alt="Image description" class="slider-image">
     </div>
     ```
  3) Provide a meaningful `alt` text; it's used as the slide caption.
  4) No changes needed in `main.js`; thumbnails are created automatically for `.slider-image` items.

- Tweak colors and sizes (in `main.css`):
  - Slider height: `.slider { height: 520px; max-height: 70vh; }`
  - Make the image fill the container: `.slider img { height: 100%; object-fit: cover; }`
  - Navigation button size: `.nav-btn { width/height/font-size }`
  - Play/Stop button colors: `.control-btn.play/.stop`

- Change autoplay speed (in `main.js`):
  - Update the interval: `setInterval(nextSlide, 2000)` (milliseconds).

## Accessibility Tips
- Set clear `alt` text for every image; it's shown in the caption and helps screen readers.

## Troubleshooting
- Icons not showing: Check your internet connection (Font Awesome is loaded via CDN).
- Thumbnails missing: Ensure images inside `.slides` have the `slider-image` class and valid paths.
- Slide offset after resizing: There's a `resize` listener that recalculates positions; reload if needed.

## Technical Notes
- No build tools or external packages required (except Font Awesome via CDN).
- Code is kept simple and organized for easy customization.

Enjoy the gallery! Want fullscreen mode or keyboard navigation? Open an issue or add a feature request and we’ll extend it.
