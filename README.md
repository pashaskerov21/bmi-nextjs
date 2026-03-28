# Biznes İdarəetmə İnstitutu — Corporate Website 🏛️

A multilingual corporate website built for the Business Management Institute (BMI) — an Azerbaijani educational and professional development institution. The project focuses on clean UI, SSR performance, and seamless multilingual experience.

🔗 **Live Demo:** [bmi-nextjs-app.vercel.app/az](https://bmi-nextjs-app.vercel.app/az)

---

## ✨ Features

- 🏢 **Corporate UI** — Professional layout for an educational institution
- 🌐 **Multilingual support** — Custom i18n routing with locale-based middleware (`/az`, `/en`, `/ru`)
- ⚡ **Server-Side Rendering (SSR)** — Fast initial load and SEO-optimized pages
- 📱 **Fully responsive** — Consistent experience across all devices and screen sizes
- 💅 **CSS-in-JS styling** — Component-scoped styles with Styled Components
- 🔗 **REST API integration** — Dynamic content fetched via Axios
- 📦 **Global state management** — Redux Toolkit for application-wide state
- 🎠 **Interactive sliders** — Swiper.js powered content carousels
- ✅ **Form handling** — Formik + Yup for contact and application forms

---

## 🛠️ Tech Stack

![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=nextdotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black)
![Styled Components](https://img.shields.io/badge/Styled_Components-DB7093?style=flat-square&logo=styledcomponents&logoColor=white)
![Redux Toolkit](https://img.shields.io/badge/Redux_Toolkit-764ABC?style=flat-square&logo=redux&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-5A29E4?style=flat-square&logo=axios&logoColor=white)
![Swiper](https://img.shields.io/badge/Swiper-6332F6?style=flat-square&logo=swiper&logoColor=white)
![Formik](https://img.shields.io/badge/Formik-172B4D?style=flat-square&logoColor=white)
![i18n](https://img.shields.io/badge/i18n-Custom_Routing-38B2AC?style=flat-square)

---

## 📁 Project Structure

```
bmi-nextjs/
├── app/                  # Next.js App Router
│   └── [lang]/           # Locale-based dynamic routing
├── src/
│   ├── components/       # Reusable UI components
│   ├── redux/            # Redux Toolkit store & slices
│   └── types/            # TypeScript interfaces & types
├── lang/                 # i18n translation files (az, en, ru)
├── public/               # Static assets & images
├── middleware.ts          # Locale detection & redirect logic
└── i18n-config.ts        # Supported locales configuration
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/pashaskerov21/bmi-nextjs.git
cd bmi-nextjs

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Add your API base URL to .env

# Start development server
npm run dev
```

Open [http://localhost:3000/az](http://localhost:3000/az) in your browser.

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
```

---

## 🌍 Multilingual Routing

The app supports 3 locales with automatic detection and redirect via custom Next.js middleware:

| Locale | URL |
|--------|-----|
| Azerbaijani | `/az/...` |
| English | `/en/...` |
| Russian | `/ru/...` |

All translation strings are managed in the `lang/` directory — no third-party i18n library required.

---

## 👤 Author

**Alipasha Askerov** — Frontend Developer

[![Portfolio](https://img.shields.io/badge/Portfolio-000000?style=flat-square&logo=vercel&logoColor=white)](https://alipashaskerov.vercel.app)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=flat-square&logo=linkedin&logoColor=white)](https://linkedin.com/in/alipasha-askerov-868213246)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/pashaskerov21)
