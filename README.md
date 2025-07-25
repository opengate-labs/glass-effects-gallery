# 🌟 Glass Effects Gallery

A curated **open-source collection** of glass morphism effects for developers and designers. Browse, copy, and contribute beautiful glass effects with Tailwind CSS, React components, and AI prompts.

## 🛠️ Built With

- **Next.js 14** - React framework with App Router
- **Tailwind CSS** - Utility-first CSS framework
- **TypeScript** - Type-safe development
- **Lucide Icons** - Beautiful icon library
- **Vercel** - Deployment and hosting

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm/pnpm/yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/opengate-labs/glass-effects-gallery.git
   cd glass-effects-gallery
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   pnpm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   pnpm dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🤝 Contributing

We love contributions! Here's how you can help:

### Adding New Glass Effects

1. **Fork the repository**
2. **Create a new branch** for your effect
3. **Add your effect** to `data/glass-effects.tsx`:

```typescript
{
  id: "your-effect-id",
  name: "Your Effect Name",
  description: "Brief description of your effect",
  category: "cards", // cards | overlays | navigation | backgrounds | animated
  type: "component", // component | overlay | fixed
  preview: (
    // Your React component preview
  ),
  code: `Your HTML/React code here`,
  prompt: "AI prompt to generate similar effect",
  tailwindClasses: "tailwind classes used",
}
```

4. **Test your effect** locally
5. **Submit a Pull Request** with:
   - Clear description of the effect
   - Screenshots if applicable
   - Ensure it follows the existing pattern

### Other Ways to Contribute

- 🐛 **Report bugs** via [GitHub Issues](https://github.com/opengate-labs/glass-effects-gallery/issues)
- 💡 **Suggest features** or improvements
- 📖 **Improve documentation**
- 🎨 **Design improvements**

## 📁 Project Structure

```
glass-effects-gallery/
├── app/                 # Next.js App Router
│   ├── layout.tsx      # Root layout with SEO
│   ├── page.tsx        # Main gallery page
│   └── globals.css     # Global styles
├── components/         # UI components
│   └── ui/            # Shadcn/ui components
├── data/              # Data layer
│   └── glass-effects.tsx # All glass effects data
├── public/            # Static assets
│   ├── favicon.ico    # Favicon
│   ├── robots.txt     # SEO robots file
│   └── sitemap.xml    # SEO sitemap
└── README.md
```

## 🎯 Effect Categories

- **Cards** - Glass morphism cards and containers
- **Overlays** - Modal backdrops and overlays
- **Navigation** - Glass navigation bars and sidebars
- **Backgrounds** - Hero sections and background effects
- **Animated** - Effects with animations and transitions


## 📄 License

This project is open source and available under the [MIT License](LICENSE).

