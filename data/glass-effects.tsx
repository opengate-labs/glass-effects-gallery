import type React from "react";

export interface GlassEffect {
    id: string;
    name: string;
    description: string;
    category: "cards" | "overlays" | "navigation" | "backgrounds" | "animated";
    preview: React.ReactNode;
    code: string;
    prompt: string;
    tailwindClasses: string;
    type: "component" | "overlay" | "fixed";
}

export const glassEffects: GlassEffect[] = [
    {
        id: "nature-glass-card",
        name: "Nature Glass Card",
        description: "Glass morphism card with nature background",
        category: "cards",
        type: "component",
        preview: (
            <div className="w-full h-40 relative rounded-xl overflow-hidden">
                <img
                    src="/nature1.jpg"
                    alt="Nature background"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center">
                    <div className="text-center">
                        <div className="w-8 h-8 bg-white/30 rounded-full mx-auto mb-2"></div>
                        <span className="text-white font-medium drop-shadow-lg">
                            Nature Card
                        </span>
                    </div>
                </div>
            </div>
        ),
        code: `<div className="relative rounded-xl overflow-hidden">
  <img src="nature-image.jpg" alt="Background" className="w-full h-full object-cover" />
  <div className="absolute inset-0 bg-white/20 backdrop-blur-sm border border-white/30 p-6">
    <h3 className="text-white font-medium">Nature Glass Card</h3>
  </div>
</div>`,
        prompt: "Create a glass morphism card overlay on a nature background image with subtle transparency and backdrop blur",
        tailwindClasses: "bg-white/20 backdrop-blur-sm border border-white/30",
    },
    {
        id: "forest-frosted",
        name: "Forest Frosted Glass",
        description: "Heavy frosted glass effect over forest imagery",
        category: "cards",
        type: "component",
        preview: (
            <div className="w-full h-40 relative rounded-2xl overflow-hidden">
                <img
                    src="/nature2.jpg"
                    alt="Forest background"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center">
                    <div className="text-center">
                        <div className="w-6 h-6 bg-white/20 rounded mx-auto mb-2"></div>
                        <span className="text-white font-medium drop-shadow-lg">
                            Forest Glass
                        </span>
                    </div>
                </div>
            </div>
        ),
        code: `<div className="relative rounded-2xl overflow-hidden">
  <img src="forest-image.jpg" alt="Forest" className="w-full h-full object-cover" />
  <div className="absolute inset-0 bg-white/10 backdrop-blur-xl border border-white/20 p-6">
    <h3 className="text-white font-medium">Forest Frosted Glass</h3>
  </div>
</div>`,
        prompt: "Create a heavily frosted glass overlay on a forest background with strong blur effect",
        tailwindClasses: "bg-white/10 backdrop-blur-xl border border-white/20",
    },
    {
        id: "ocean-gradient",
        name: "Ocean Gradient Glass",
        description: "Gradient glass effect with ocean backdrop",
        category: "cards",
        type: "component",
        preview: (
            <div className="w-full h-40 relative rounded-xl overflow-hidden">
                <img
                    src="/nature3.jpg"
                    alt="Ocean background"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/30 to-teal-400/30 backdrop-blur-lg border border-white/20 flex items-center justify-center">
                    <div className="text-center">
                        <div className="w-8 h-2 bg-white/40 rounded-full mx-auto mb-2"></div>
                        <span className="text-white font-medium drop-shadow-lg">
                            Ocean Glass
                        </span>
                    </div>
                </div>
            </div>
        ),
        code: `<div className="relative rounded-xl overflow-hidden">
  <img src="ocean-image.jpg" alt="Ocean" className="w-full h-full object-cover" />
  <div className="absolute inset-0 bg-gradient-to-br from-blue-400/30 to-teal-400/30 backdrop-blur-lg border border-white/20 p-6">
    <h3 className="text-white font-medium">Ocean Gradient Glass</h3>
  </div>
</div>`,
        prompt: "Create a blue to teal gradient glass overlay on ocean background with backdrop blur",
        tailwindClasses:
            "bg-gradient-to-br from-blue-400/30 to-teal-400/30 backdrop-blur-lg border border-white/20",
    },
    {
        id: "bottom-gradient-overlay",
        name: "Bottom Gradient Overlay",
        description:
            "Fixed bottom gradient that fades from dark blur to transparent",
        category: "overlays",
        type: "fixed",
        preview: (
            <div className="w-full h-40 relative rounded-xl overflow-hidden">
                <img
                    src="/nature4.jpg"
                    alt="Landscape background"
                    className="w-full h-full object-cover"
                    style={{
                        objectFit: "cover",
                    }}
                />
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/60 via-black/20 to-transparent backdrop-blur-sm"></div>
                <div className="absolute bottom-4 left-4 text-white font-medium">
                    Content over gradient
                </div>
            </div>
        ),
        code: `<!-- Fixed to bottom of page -->
<div className="fixed bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/60 via-black/20 to-transparent backdrop-blur-sm z-10">
  <div className="absolute bottom-6 left-6 text-white">
    <h3>Your content here</h3>
  </div>
</div>`,
        prompt: "Create a fixed bottom gradient overlay that fades from dark blurred bottom to transparent top",
        tailwindClasses:
            "fixed bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent backdrop-blur-sm",
    },
    {
        id: "top-navigation-glass",
        name: "Glass Navigation Bar",
        description: "Fixed top navigation with glass morphism effect",
        category: "navigation",
        type: "fixed",
        preview: (
            <div className="w-full h-16 bg-white/80 backdrop-blur-md border-b border-gray-200/50 flex items-center justify-between px-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-purple-500/5"></div>
                <div className="relative z-10 flex items-center gap-2">
                    <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded"></div>
                    <span className="font-semibold text-gray-800">Logo</span>
                </div>
                <div className="relative z-10 flex gap-4">
                    <span className="text-gray-600 text-sm hover:text-blue-600 cursor-pointer transition-colors">
                        Home
                    </span>
                    <span className="text-blue-600 text-sm font-medium">
                        About
                    </span>
                    <span className="text-gray-600 text-sm hover:text-blue-600 cursor-pointer transition-colors">
                        Contact
                    </span>
                </div>
            </div>
        ),
        code: `<nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md border-b border-gray-200/50 z-50">
  <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
    <div className="font-semibold text-gray-800">Logo</div>
    <div className="flex gap-6">
      <a href="#" className="text-gray-600 hover:text-gray-800">Home</a>
      <a href="#" className="text-gray-600 hover:text-gray-800">About</a>
      <a href="#" className="text-gray-600 hover:text-gray-800">Contact</a>
    </div>
  </div>
</nav>`,
        prompt: "Create a fixed top navigation bar with white glass morphism effect and subtle border",
        tailwindClasses:
            "fixed top-0 bg-white/80 backdrop-blur-md border-b border-gray-200/50",
    },
    {
        id: "floating-sidebar",
        name: "Floating Glass Sidebar",
        description: "Semi-transparent floating sidebar with glass effect",
        category: "navigation",
        type: "fixed",
        preview: (
            <div className="w-full h-40 relative bg-gradient-to-br from-slate-100 to-slate-200 rounded-xl overflow-hidden">
                <div className="absolute left-4 top-4 bottom-4 w-16 bg-white/70 backdrop-blur-lg rounded-2xl border border-gray-200/50 flex flex-col items-center justify-center gap-3 shadow-lg">
                    <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded flex items-center justify-center">
                        <div className="w-3 h-3 bg-white rounded-sm"></div>
                    </div>
                    <div className="w-6 h-6 bg-gradient-to-br from-purple-500 to-purple-600 rounded flex items-center justify-center">
                        <div className="w-3 h-3 bg-white rounded-sm"></div>
                    </div>
                    <div className="w-6 h-6 bg-gradient-to-br from-green-500 to-green-600 rounded flex items-center justify-center">
                        <div className="w-3 h-3 bg-white rounded-sm"></div>
                    </div>
                </div>
            </div>
        ),
        code: `<aside className="fixed left-6 top-1/2 -translate-y-1/2 w-16 h-80 bg-white/70 backdrop-blur-lg rounded-2xl border border-gray-200/50 z-40">
  <div className="flex flex-col items-center justify-center h-full gap-4">
    <button className="w-8 h-8 bg-gray-400 rounded-lg hover:bg-gray-500 transition-colors"></button>
    <button className="w-8 h-8 bg-gray-400 rounded-lg hover:bg-gray-500 transition-colors"></button>
    <button className="w-8 h-8 bg-gray-400 rounded-lg hover:bg-gray-500 transition-colors"></button>
  </div>
</aside>`,
        prompt: "Create a floating glass sidebar with semi-transparent white background and backdrop blur",
        tailwindClasses:
            "fixed bg-white/70 backdrop-blur-lg rounded-2xl border border-gray-200/50",
    },
    {
        id: "hero-overlay",
        name: "Hero Section Overlay",
        description: "Large hero section with gradient glass overlay",
        category: "backgrounds",
        type: "component",
        preview: (
            <div className="w-full h-40 relative rounded-xl overflow-hidden">
                <img
                    src="/nature1.jpg"
                    alt="Hero background"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40 backdrop-blur-[1px]">
                    <div className="flex items-center justify-center h-full">
                        <div className="text-center text-white">
                            <h1 className="text-lg font-bold mb-1">
                                Hero Title
                            </h1>
                            <p className="text-sm opacity-90">Subtitle text</p>
                            <div className="mt-2 px-4 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs border border-white/30">
                                Call to Action
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ),
        code: `<section className="relative h-screen">
  <img src="hero-image.jpg" alt="Hero" className="w-full h-full object-cover" />
  <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40 backdrop-blur-[1px]">
    <div className="flex items-center justify-center h-full">
      <div className="text-center text-white max-w-4xl px-6">
        <h1 className="text-6xl font-bold mb-6">Your Hero Title</h1>
        <p className="text-xl opacity-90">Your compelling subtitle</p>
      </div>
    </div>
  </div>
</section>`,
        prompt: "Create a hero section with gradient overlay from dark sides to transparent center with subtle backdrop blur",
        tailwindClasses:
            "bg-gradient-to-r from-black/40 via-transparent to-black/40 backdrop-blur-[1px]",
    },
    {
        id: "modal-backdrop",
        name: "Modal Glass Backdrop",
        description: "Full-screen modal backdrop with glass effect",
        category: "overlays",
        type: "overlay",
        preview: (
            <div className="w-full h-40 relative rounded-xl overflow-hidden">
                <img
                    src="/nature2.jpg"
                    alt="Background"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30 backdrop-blur-md flex items-center justify-center">
                    <div className="bg-white/95 backdrop-blur-xl h-36 rounded-2xl border border-white/20 p-6  shadow-2xl max-w-48 w-full relative">
                        <div className="absolute top-2 right-2 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
                            <span className="text-white text-xs">×</span>
                        </div>
                        <div className="text-center">
                            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-2"></div>
                            <h3 className="text-gray-800 font-semibold text-sm mb-1">
                                Modal Title
                            </h3>
                            <p className="text-gray-600 text-xs">
                                Modal content here...
                            </p>
                            <div className="mt-2 flex justify-center gap-2">
                                <div className="px-3 py-1 bg-blue-500 text-white text-xs rounded">
                                    OK
                                </div>
                                <div className="px-3 py-1 bg-gray-200 text-gray-700 text-xs rounded">
                                    Cancel
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ),
        code: `<div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-50 flex items-center justify-center p-4">
  <div className="bg-white/90 backdrop-blur-md rounded-2xl border border-gray-200/50 p-8 shadow-xl max-w-md w-full">
    <h2 className="text-xl font-semibold text-gray-800 mb-4">Modal Title</h2>
    <p className="text-gray-600">Your modal content here...</p>
  </div>
</div>`,
        prompt: "Create a modal backdrop with subtle dark overlay and glass morphism modal window",
        tailwindClasses: "fixed inset-0 bg-black/20 backdrop-blur-sm",
    },
    {
        id: "morphing-nav-tabs",
        name: "Morphing Navigation Tabs",
        description: "Glass navigation tabs with smooth morphing indicator",
        category: "navigation",
        type: "component",
        preview: (
            <div className="w-full h-16 bg-white/60 backdrop-blur-lg rounded-2xl border border-white/30 p-2 flex items-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10"></div>
                <div className="relative z-10 flex w-full">
                    <div className="flex-1 px-3 py-2 text-center relative">
                        <div className="absolute inset-0 bg-white/80 backdrop-blur-sm rounded-xl border border-white/50 shadow-sm"></div>
                        <span className="relative text-gray-800 font-medium text-sm">
                            Home
                        </span>
                    </div>
                    <div className="flex-1 px-3 py-2 text-center relative">
                        <span className="text-gray-600 text-sm">About</span>
                    </div>
                    <div className="flex-1 px-3 py-2 text-center relative">
                        <span className="text-gray-600 text-sm">Services</span>
                    </div>
                    <div className="flex-1 px-3 py-2 text-center relative">
                        <span className="text-gray-600 text-sm">Contact</span>
                    </div>
                </div>
            </div>
        ),
        code: `<nav className="bg-white/60 backdrop-blur-lg rounded-2xl border border-white/30 p-2">
  <div className="flex relative">
    {/* Active tab indicator */}
    <div className="absolute inset-y-0 left-0 w-1/4 bg-white/80 backdrop-blur-sm rounded-xl border border-white/50 shadow-sm transition-transform duration-300 ease-out"></div>
    
    <button className="flex-1 px-4 py-2 text-center relative z-10 text-gray-800 font-medium">Home</button>
    <button className="flex-1 px-4 py-2 text-center relative z-10 text-gray-600">About</button>
    <button className="flex-1 px-4 py-2 text-center relative z-10 text-gray-600">Services</button>
    <button className="flex-1 px-4 py-2 text-center relative z-10 text-gray-600">Contact</button>
  </div>
</nav>`,
        prompt: "Create glass morphism navigation tabs with a sliding glass indicator that morphs between active states",
        tailwindClasses:
            "bg-white/60 backdrop-blur-lg rounded-2xl border border-white/30",
    },
    {
        id: "notification-glass",
        name: "Glass Notification Toast",
        description: "Elegant notification toast with glass morphism effect",
        category: "overlays",
        type: "component",
        preview: (
            <div className="w-full h-40 relative rounded-xl overflow-hidden">
                <img
                    src="/nature3.jpg"
                    alt="Background"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center">
                    <div className="bg-white/90 backdrop-blur-lg rounded-2xl border border-white/50 p-4 shadow-xl max-w-64 w-full relative">
                        <div className="flex items-start gap-3">
                            <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                                <span className="text-white text-sm">✓</span>
                            </div>
                            <div className="flex-1 min-w-0">
                                <h4 className="text-gray-800 font-semibold text-sm">
                                    Success!
                                </h4>
                                <p className="text-gray-600 text-xs mt-1">
                                    Your changes have been saved successfully.
                                </p>
                            </div>
                            <button className="text-gray-400 hover:text-gray-600 text-lg leading-none">
                                ×
                            </button>
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-400 to-green-600 rounded-b-2xl"></div>
                    </div>
                </div>
            </div>
        ),
        code: `<div className="fixed top-4 right-4 bg-white/80 backdrop-blur-lg rounded-2xl border border-white/50 p-4 shadow-xl max-w-sm w-full z-50">
  <div className="flex items-start gap-3">
    <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center flex-shrink-0">
      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
    </div>
    <div className="flex-1 min-w-0">
      <h4 className="text-gray-800 font-semibold">Success!</h4>
      <p className="text-gray-600 text-sm mt-1">Your changes have been saved successfully.</p>
    </div>
    <button className="text-gray-400 hover:text-gray-600">
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
  </div>
</div>`,
        prompt: "Create an elegant notification toast with glass morphism background and subtle animations",
        tailwindClasses:
            "bg-white/80 backdrop-blur-lg rounded-2xl border border-white/50 shadow-xl",
    },
];
