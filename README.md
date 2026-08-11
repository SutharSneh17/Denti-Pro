# 🦷 DentiPro - Dental Clinic Quality Healthcare Web Application

A modern, responsive, and feature-rich React application designed for dental clinics and healthcare providers. **DentiPro** provides patients with an intuitive interface to explore dental services, meet certified dentists, view pricing plans, and book appointments seamlessly.

---

## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Installation & Getting Started](#-installation--getting-started)
- [Available Scripts](#-available-scripts)
- [Pages & Components](#-pages--components)
- [Key Bug Fixes & Enhancements](#-key-bug-fixes--enhancements)

---

## ✨ Features

- 🏥 **Multi-Page Single Page Application (SPA)**: Smooth routing using React Router v6 (`Home`, `About`, `Services`, `Appointments`, `Contact`).
- 📅 **Interactive Appointment Booking Form**: Allows users to select dental services, preferred doctors, dates, and time slots.
- 🦷 **Comprehensive Services Showcase**: Highlights treatments like Cosmetic Dentistry, Dental Implants, Dental Bridges, and Teeth Whitening.
- 👨‍⚕️ **Certified Team Roster**: Displays dentist profiles, qualifications, specialties, and social links.
- 💰 **Transparent Pricing & Offers**: Displays checkup promotional discounts (e.g., 30% off first checkup) and structured pricing options.
- 💬 **Patient Testimonials**: Showcases real patient feedback and ratings.
- 📍 **Interactive Contact Page**: Features an embedded Google Maps location frame, contact cards, and inquiry message submission.
- 📱 **Fully Responsive Layout**: Built with Bootstrap 5 for flawless rendering across desktop, tablet, and mobile devices.

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **React 18** | Frontend UI Framework |
| **React Router DOM v6** | Client-Side Routing |
| **Bootstrap 5** | Responsive Layout & UI Utilities |
| **FontAwesome & Bootstrap Icons** | Visual Iconography |
| **HTML5 / CSS3** | Structural Semantic Layout & Styling |

---

## 📂 Project Structure

```
dentipro/
├── public/
│   ├── css/               # External stylesheet assets
│   ├── img/               # Service, hero, team, & testimonial images
│   ├── js/                # Vendor scripts & animations
│   ├── lib/               # WOW.js, OwlCarousel, TempusDominus libraries
│   ├── favicon.ico
│   └── index.html         # Main HTML document template
├── src/
│   ├── Componets/         # Reusable UI components
│   │   ├── About.js       # About section block
│   │   ├── Appointment.js # Appointment form block
│   │   ├── Footer.js      # Global footer navigation
│   │   ├── Navbar.js      # Global responsive header navigation
│   │   ├── Newsletter.js  # Newsletter subscription banner
│   │   ├── Offer.js       # Promotional offer banner
│   │   ├── Pricing.js     # Pricing plans summary
│   │   ├── Service.js     # Dental services grid
│   │   ├── Slider.js      # Hero carousel slider & opening hours banner
│   │   ├── Team.js        # Dentists & specialists team grid
│   │   └── Testimonial.js # Patient reviews carousel/card
│   ├── Page/              # Top-level Page Views
│   │   ├── AboutPage.js   # Full About Us Page
│   │   ├── AppointmentPage.js # Full Appointment Page
│   │   ├── ContactPage.js # Full Contact Us Page
│   │   ├── HomePage.js    # Main Landing Page
│   │   └── ServicePage.js # Full Services Page
│   ├── App.css            # Custom application styles
│   ├── App.js             # Root component with Route configuration
│   ├── index.css          # Base CSS styles
│   └── index.js           # React DOM root entry point
├── package.json           # Node dependencies & project scripts
└── README.md              # Project documentation
```

---

## ⚙️ Installation & Getting Started

### Prerequisites
- Node.js (v14.x or higher)
- npm (v6.x or higher)

### 1. Clone or Download the Repository
```bash
cd dentipro
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start the Development Server
```bash
npm start
```
The application will start locally at `http://localhost:3000`.

---

## 📜 Available Scripts

In the project directory, you can run:

- `npm start`: Runs the app in development mode at [http://localhost:3000](http://localhost:3000).
- `npm run build`: Builds the production-ready app to the `build` folder.
- `npm test`: Launches the test runner in interactive watch mode.

---

## 🧩 Pages & Components

| Route | Page | Components Included |
|-------|------|---------------------|
| `/` or `/Home` | `HomePage` | `Slider`, `About`, `Appointment`, `Service`, `Offer`, `Pricing`, `Testimonial`, `Team`, `Newsletter` |
| `/About` | `AboutPage` | Hero Banner, `About`, `Newsletter` |
| `/Service` | `ServicePage` | Hero Banner, `Service`, `Newsletter` |
| `/Appointment` | `AppointmentPage` | Hero Banner, `Appointment`, `Newsletter` |
| `/Contact` | `ContactPage` | Hero Banner, Contact Info Cards, Inquiry Form, Google Map, `Newsletter` |

---

## 🛠️ Key Bug Fixes & Enhancements

- **JSX Compliance**: Converted all raw HTML `class` attributes to React-compliant `className`.
- **Form Controls**: Replaced invalid HTML `<option selected>` attributes with React `defaultValue` props on `<select>` elements.
- **SPA Link Integration**: Replaced legacy static `.html` anchor tags with React Router `<Link>` components to maintain SPA state and prevent full page reloads.
- **Image Asset Paths**: Standardized image imports and public asset references across all components (`About.js`, `Testimonial.js`, etc.).
- **Strict Mode Clean Build**: Configured build tools to pass `npm run build` with zero warnings or syntax errors.

