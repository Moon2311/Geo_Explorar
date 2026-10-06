# GOo ExploRer

The website for **GOo ExploRer**, a native tours and travel company in Pakistan: *Beauty, Charm and Adventure — Your Travel Partner.*

It runs weekly tours from Lahore and Islamabad to Hunza, Skardu, Swat, Naran Kaghan, Neelum Valley and other places.

It's a static site, so there's no build step, no framework and no dependencies. It's plain HTML, CSS and JavaScript.

## Features

- **Full-screen hero** with a mountain photo, two call-to-action buttons (tours and WhatsApp) and a search card for picking a destination and dates.
- **Search to WhatsApp:** pressing Search opens WhatsApp with the chosen location and dates already in the message.
- **Top destinations** shown as a photo grid with a larger tile for the main destination.
- **Weekly tours row:** swipe on phones, use the arrow buttons on desktop.
- **3-step booking guide**, **tour types** with line icons, and **testimonials**.
- **Gallery** of real group photos. Clicking a photo opens it full-screen (press Esc to close).
- **About & contact** cards for WhatsApp, email and Instagram, plus a "Plan My Tour" banner.
- **Header** that turns solid once you scroll and underlines the current section.
- **Mobile menu**, **floating WhatsApp button**, and sections that fade in as you scroll.
- **Responsive** from phone to desktop. Animations are turned off for visitors whose system is set to reduce motion.

## Project structure

```
Geo_Explorar/
├── index.html      # Page markup and inline SVG icon sprite
├── style.css       # All styles (theme colours and fonts are set at the top in :root)
├── script.js       # Header, mobile menu, tours slider, search, scroll reveal, lightbox
└── assets/         # Gallery photos (group1–group4)
```

## Running locally

Any static file server works. With Python:

```bash
python3 -m http.server 8000
```

Then open <http://localhost:8000>.

You can also open `index.html` directly in a browser.

## Customising

- **Colours and fonts:** edit the variables in the `:root` block at the top of `style.css`. `--primary` and `--forest-*` are the greens and `--accent` is the gold. The fonts are Fraunces for headings and Plus Jakarta Sans for body text, loaded from Google Fonts.
- **Tours and destinations:** edit the `.tour-card` and `.dest-card` blocks in `index.html`. Each card's photo comes from its inline `background-image`.
- **Gallery:** put images in `assets/` and update the `.gallery-item` entries.
- **WhatsApp number:** it appears as `wa.me/923065500888` in `index.html` and `script.js`.

## Image credits

Destination and tour photos are from [Unsplash](https://unsplash.com) and are loaded from `images.unsplash.com`. The gallery photos are GOo ExploRer's own.

## Contact

- **Adviser:** Shajjad Ali Shigri
- **WhatsApp / Call:** [0306 5500888](https://wa.me/923065500888)
- **Email:** [info@gooexplorer.com](mailto:info@gooexplorer.com)
- **Instagram:** [GOo ExploRer](https://www.instagram.com/go_o_explorer) · [Its Our GB](https://www.instagram.com/its_our_gb)

© GOo ExploRer 2025
