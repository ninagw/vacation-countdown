# Vacation Countdown PWA

A simple and beautiful Progressive Web App (PWA) that helps you count down the days until your next trip.

The app displays:

* ⏳ Days, hours, minutes, and seconds until departure
* 📈 Preparation progress bar
* 🎒 Packing checklist
* 💬 Daily motivational travel quote
* 📱 Installable experience on mobile and desktop
* 🌐 Offline support through a Service Worker

---

## Features

### Countdown Timer

Shows the remaining:

* Days
* Hours
* Minutes
* Seconds

### Progress Bar

Displays how much time has passed since booking the trip.

### Packing Checklist

A static checklist in the starter version.

### Daily Quote

Shows a random motivational quote.

### Progressive Web App (PWA)

* Installable on iPhone, Android, Mac, and Windows
* Runs in standalone mode
* Works offline

---

## Tech Stack

* HTML5
* CSS3
* Vanilla JavaScript
* Web App Manifest
* Service Worker
* Local Storage (optional extension)

---

## Project Structure

```text
trip-countdown/
├── index.html
├── style.css
├── app.js
├── manifest.json
├── service-worker.js
└── icons/
    ├── icon-192.png
    └── icon-512.png
```

---

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/vacation-countdown-pwa.git
cd vacation-countdown-pwa
```

### 2. Start a Local Server

Using Python:

```bash
python3 -m http.server 8000
```

Open the app in your browser:

```text
http://localhost:8000
```

> Note: PWAs require a web server. Opening `index.html` directly with `file://` will not enable Service Workers.

---

## Install as a PWA

### iPhone / iPad (Safari)

1. Open the app in Safari.
2. Tap the Share button.
3. Select **Add to Home Screen**.
4. Tap **Add**.

### Android (Chrome)

1. Open the app in Chrome.
2. Tap **Install App** or use the menu.
3. Confirm installation.

### Desktop (Chrome, Edge, Safari)

1. Open the app.
2. Click the install icon in the address bar.
3. Confirm.

---

## Configuration

Edit the `trip` object in `app.js`:

```javascript
const trip = {
  destination: "Tokyo",
  departureDate: new Date("2026-10-14T10:00:00"),
  bookingDate: new Date("2026-01-01T00:00:00"),
  checklist: [
    { text: "Passport", done: true },
    { text: "Flight Tickets", done: true },
    { text: "Power Adapter", done: false },
    { text: "Camera", done: false }
  ]
};
```
---

## Deploy Online

You can host the app for free using:

* [https://pages.github.com/](https://pages.github.com/)
* [https://www.netlify.com/](https://www.netlify.com/)
* [https://vercel.com/](https://vercel.com/)

After deployment, open the URL on your phone and install the app.

---

## Testing PWA Features

In Chrome DevTools:

1. Open DevTools.
2. Go to the **Application** tab.
3. Check:

   * Manifest
   * Service Worker
   * Cache Storage

---

## Inspiration

Built as a small coding project to create a practical app that builds anticipation and helps prepare for upcoming travel.

---

## Author

Created by Nina Weber.

If you found this project useful, consider starring the repository on GitHub.