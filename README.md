# RoadLine Trucking - Web Application

A modern, responsive, professional frontend website for **RoadLine Trucking**, a US-based freight logistics company.

This repository is designed as a clean React application that can be used for DevOps and CI/CD practice (e.g., GitHub Actions, Docker, SonarQube, Trivy, AWS ECR, Kubernetes).

---

## 🚀 Features

- **Header & Navigation**: Fixed header with top bar info, quick contact, logo, smooth navigation links, and desktop/mobile quote trigger.
- **Hero Section**: High-impact logistics banner with clear value proposition and call-to-action buttons.
- **Services Section**: Interactive cards highlighting Full Truckload (FTL), Less Than Truckload (LTL), Expedited Freight, and Dedicated Transportation.
- **About Us Section**: Operational overview and statistics counters (10+ Years Experience, 50+ Trucks, 48 States Covered, 99% On-Time Delivery).
- **Fleet Section**: Cards displaying Modern Trucks, GPS Tracking, Regular Maintenance, and Professional Drivers.
- **Why Choose Us**: Key logistics differentiators including 24/7 Dispatch and Real-Time Tracking.
- **Quote Form**: Interactive, frontend-validated freight quote request form.
- **Contact & Footer**: Corporate location (Chicago, IL), phone, email, operating hours, and quick links.

---

## 🛠️ Technology Stack

- **React 19**
- **Vite**
- **JavaScript (ES6+)**
- **CSS3 (Flexbox & CSS Grid)**
- **Lucide React** (Icons)
- **ESLint** (Linting & Code Quality)

---

## 💻 Getting Started

### Prerequisites

Ensure you have **Node.js** (v18+) and **npm** installed.

### 1. Installation

Install all project dependencies:

```bash
npm install
```

### 2. Local Development

Start the Vite development server:

```bash
npm run dev
```

Open your browser at `http://localhost:5173`.

### 3. Code Quality / Linting

Run ESLint to check for code quality and formatting issues:

```bash
npm run lint
```

### 4. Production Build

Build the optimized application for production deployment:

```bash
npm run build
```

The output build files will be created in the `dist/` directory.

---

## 📁 Project Structure

```
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── About.css
│   │   ├── About.jsx
│   │   ├── Contact.css
│   │   ├── Contact.jsx
│   │   ├── Fleet.css
│   │   ├── Fleet.jsx
│   │   ├── Footer.css
│   │   ├── Footer.jsx
│   │   ├── Header.css
│   │   ├── Header.jsx
│   │   ├── Hero.css
│   │   ├── Hero.jsx
│   │   ├── QuoteForm.css
│   │   ├── QuoteForm.jsx
│   │   ├── Services.css
│   │   ├── Services.jsx
│   │   ├── WhyChooseUs.css
│   │   └── WhyChooseUs.jsx
│   ├── styles/
│   │   └── global.css
│   ├── App.jsx
│   └── main.jsx
├── eslint.config.js
├── index.html
├── package.json
├── README.md
└── vite.config.js
```
