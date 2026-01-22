# UWAYO Ange Kevine - Portfolio

A high-end, professional, animated personal portfolio built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Modern Design**: Dark mode by default with futuristic, clean aesthetics
- **Rich Animations**: Smooth scroll animations and micro-interactions using Framer Motion
- **Animated Background**: Continuous floating programming symbols and tech icons
- **Responsive Design**: Fully responsive across mobile, tablet, and desktop
- **SEO Optimized**: Meta tags and semantic HTML for better search visibility
- **Accessible**: Good contrast ratios and screen reader friendly

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles and theme
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Main page component
├── components/
│   ├── AnimatedBackground.tsx  # Animated background with symbols
│   ├── Hero.tsx                 # Hero section
│   ├── About.tsx                # About section
│   ├── Timeline.tsx             # Timeline/Growth Journey
│   ├── Projects.tsx             # Projects showcase
│   ├── Skills.tsx               # Skills section
│   ├── CVDownload.tsx           # CV download section
│   ├── Contact.tsx              # Contact section
│   └── Footer.tsx               # Footer component
└── ...
```

## 🎨 Design Features

### Color Scheme
- **Background**: Dark (#0a0a0a)
- **Foreground**: Light (#ededed)
- **Accent**: Green (#00ff88)
- **Secondary**: Dark gray (#1e1e1e)

### Animations
- **Scroll Animations**: Sections animate on scroll
- **Timeline Drawing**: Animated timeline that draws itself
- **Code-like Reveal**: Project cards with developer-style animations
- **Background Animation**: Continuous floating symbols

## 📱 Sections

1. **Hero**: Name, animated tagline, intro, and CTA buttons
2. **About**: Story, motivation, and uniqueness
3. **Timeline**: Growth journey from 2023-2026
4. **Projects**: Featured projects with tech stack
5. **Skills**: Categorized skills display
6. **CV Download**: Download CV functionality
7. **Contact**: Contact form and social links
8. **Footer**: Quick links and navigation

## 🚀 Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run the development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser** and navigate to `http://localhost:3000`

## 📝 Build for Production

```bash
npm run build
npm start
```

## 🎯 Key Features

### Animated Background
- Programming symbols: `{ } < /> ;`
- Coding keywords: `const, async, function, return`
- Tech icons and emojis
- Smooth, non-distracting animation

### Timeline Animation
- SVG path animation that draws the timeline
- Staggered card animations
- Interactive hover effects

### Project Cards
- Code-like styling with window controls
- Tech stack badges
- Hover animations with 3D effects
- Featured project badges

## 🌟 Personal Brand

**Tagline**: Tech for sustainability. Innovation with impact.

**Mission**: Building practical technology solutions for agriculture and climate resilience.

**Key Project**: AgroHaven - Sustainable farming platform

## 📊 Performance

- Optimized images and assets
- Lazy loading for better performance
- Smooth 60fps animations
- Minimal bundle size

## 🔧 Customization

### Colors
Edit `tailwind.config.js` to customize the color scheme:

```javascript
theme: {
  extend: {
    colors: {
      background: '#0a0a0a',
      foreground: '#ededed',
      accent: '#00ff88',
      // ...
    }
  }
}
```

### Animations
Modify animations in `globals.css` or component files to adjust timing and effects.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](issues).

---

Built with ❤️ and ☕ by UWAYO Ange Kevine
