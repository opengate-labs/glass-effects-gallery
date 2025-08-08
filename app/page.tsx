"use client";
import Spline from '@splinetool/react-spline/next';

import type React from "react";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Plus, ExternalLink, Github, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { glassEffects, type GlassEffect } from "@/data/glass-effects";
import GlassEffectModal from "@/components/GlassEffectModal";

// Animation variants
const fadeUpVariants = {
    hidden: {
        opacity: 0,
        y: 30,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
        },
    },
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
        },
    },
};

const slideInVariants = {
    hidden: {
        opacity: 0,
        x: -20,
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.5,
        },
    },
};

export default function GlassGallery() {
    const [mounted, setMounted] = useState(false);
    const [selectedEffect, setSelectedEffect] = useState<GlassEffect | null>(
        null
    );
    const [filter, setFilter] = useState<string>("all");
    const [copiedCode, setCopiedCode] = useState(false);
    const [copiedPrompt, setCopiedPrompt] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const filteredEffects =
        filter === "all"
            ? glassEffects
            : glassEffects.filter((effect) => effect.category === filter);

    const copyToClipboard = async (text: string, type: "code" | "prompt") => {
        if (typeof window !== 'undefined' && navigator.clipboard) {
            try {
                await navigator.clipboard.writeText(text);
                if (type === "code") {
                    setCopiedCode(true);
                    setTimeout(() => setCopiedCode(false), 2000);
                } else {
                    setCopiedPrompt(true);
                    setTimeout(() => setCopiedPrompt(false), 2000);
                }
            } catch (err) {
                console.error('Failed to copy text: ', err);
            }
        }
    };

    const handleCopyCode = (code: string) => {
        copyToClipboard(code, "code");
    };

    const handleCopyPrompt = (prompt: string) => {
        copyToClipboard(prompt, "prompt");
    };

    const closeModal = () => {
        setSelectedEffect(null);
        setCopiedCode(false);
        setCopiedPrompt(false);
    };

    if (!mounted) {
        return null;
    }

    return (
        <>
            {/* Structured Data for Gallery */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "CreativeWork",
                        name: "Glass Effects Gallery",
                        description:
                            "A curated collection of glass morphism effects for developers and designers",
                        author: {
                            "@type": "Organization",
                            name: "Opengate Labs",
                            url: "https://github.com/opengate-labs",
                        },
                        mainEntity: {
                            "@type": "ItemList",
                            name: "Glass Morphism Effects",
                            numberOfItems: glassEffects.length,
                            itemListElement: glassEffects.map(
                                (effect, index) => ({
                                    "@type": "CreativeWork",
                                    position: index + 1,
                                    name: effect.name,
                                    description: effect.description,
                                    category: effect.category,
                                    programmingLanguage: "CSS",
                                    codeRepository:
                                        "https://github.com/opengate-labs/glass-effects-gallery",
                                })
                            ),
                        },
                        keywords:
                            "glass morphism, glassmorphism, CSS effects, Tailwind CSS, React components",
                        license: "Open Source",
                        isAccessibleForFree: true,
                    }),
                }}
            />

            <div className="min-h-screen bg-white relative pb-32">
                {/* Header */}
                <header className="relative z-10 p-6 md:p-8">
                    <div className="max-w-7xl mx-auto">
                        <motion.div
                            className="bg-white/80 backdrop-blur-md rounded-2xl  p-2 md:p-8 mb-8 shadow-sm"
                            initial="hidden"
                            animate="visible"
                            variants={fadeUpVariants}
                        >
                            <motion.h1
                                className="text-4xl md:text-6xl font-bold text-gray-800 mb-4 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text"
                                variants={fadeUpVariants}
                                initial="hidden"
                                animate="visible"
                                transition={{ delay: 0.2 }}
                            >
                                Glass Effects Gallery
                            </motion.h1>
                            
                            <motion.p
                                className="text-gray-600 text-lg md:text-xl max-w-2xl"
                                variants={fadeUpVariants}
                                initial="hidden"
                                animate="visible"
                                transition={{ delay: 0.4 }}
                            >
                                A curated collection of glass morphism effects
                                for developers and designers. From cards to
                                overlays, navigation to backgrounds - click any
                                effect to view code and copy AI prompts.
                            </motion.p>
                        </motion.div>

                        {/* Filter buttons */}
                        <motion.div
                            className="flex flex-wrap gap-3 mb-4 md:mb-8 "
                            variants={staggerContainer}
                            initial="hidden"
                            animate="visible"
                        >
                            {[
                                "all",
                                "cards",
                                "overlays",
                                "navigation",
                                "backgrounds",
                                "animated",
                            ].map((category, index) => (
                                <motion.div
                                    key={category}
                                    variants={slideInVariants}
                                >
                                    <Button
                                        onClick={() => setFilter(category)}
                                        variant={
                                            filter === category
                                                ? "default"
                                                : "outline"
                                        }
                                        className={`${
                                            filter === category
                                                ? "bg-gray-800 text-white"
                                                : "bg-white/80 text-gray-600 border-gray-200 hover:bg-gray-50 backdrop-blur-sm"
                                        } capitalize`}
                                    >
                                        {category}
                                    </Button>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </header>

                {/* Gallery Grid - 3 columns */}
                <main className="relative z-10 p-6 md:p-8">
                    <div className="max-w-7xl mx-auto">
                        <motion.div
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                            variants={staggerContainer}
                            initial="hidden"
                            animate="visible"
                        >
                            {filteredEffects.map((effect, index) => (
                                <motion.div
                                    key={effect.id}
                                    variants={fadeUpVariants}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => setSelectedEffect(effect)}
                                    className="flex flex-col justify-between bg-white/80 backdrop-blur-md rounded-2xl border border-gray-200/50 p-6 cursor-pointer hover:bg-white/90 transition-all duration-300 hover:shadow-xl shadow-lg"
                                >
                                    <div className="rounded-xl overflow-hidden">
                                        {effect.preview}
                                    </div>
                                    <div className="space-y-3 mt-4">
                                        <div className="flex items-start  md:items-center justify-between flex-col md:flex-row gap-2">
                                            <motion.h3
                                                className="text-gray-800 font-semibold text-lg"
                                                variants={fadeUpVariants}
                                            >
                                                {effect.name}
                                            </motion.h3>
                                            <div className="flex gap-2">
                                                <Badge
                                                    variant="secondary"
                                                    className="bg-gray-100 text-gray-600 border-gray-200"
                                                >
                                                    {effect.category}
                                                </Badge>
                                                <Badge
                                                    variant="outline"
                                                    className="text-xs border-gray-300 text-gray-500"
                                                >
                                                    {effect.type}
                                                </Badge>
                                            </div>
                                        </div>
                                        <motion.p
                                            className="text-gray-600 text-sm leading-relaxed"
                                            variants={fadeUpVariants}
                                        >
                                            {effect.description}
                                        </motion.p>
                                    </div>
                                </motion.div>
                            ))}

                            {/* Add Your Own Card - Always visible */}
                            <motion.div
                                variants={fadeUpVariants}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => {
                                    if (typeof window !== 'undefined') {
                                        window.open(
                                            "https://github.com/opengate-labs/glass-effects-gallery",
                                            "_blank"
                                        );
                                    }
                                }}
                                className="bg-gradient-to-br from-blue-50 to-purple-50 backdrop-blur-md rounded-2xl border-2 border-dashed border-blue-300 p-6 cursor-pointer hover:from-blue-100 hover:to-purple-100 transition-all duration-300 hover:shadow-xl shadow-lg group"
                            >
                                <div className="mb-4 rounded-xl overflow-hidden h-40 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                                    <div className="text-center">
                                        <motion.div
                                            whileHover={{
                                                scale: 1.1,
                                                rotate: 90,
                                            }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <Plus className="h-12 w-12 text-blue-500 mx-auto mb-2" />
                                        </motion.div>
                                        <span className="text-blue-600 font-medium">
                                            Add Your Effect
                                        </span>
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <div className="flex items-center justify-between">
                                        <motion.h3
                                            className="text-gray-800 font-semibold text-lg flex items-center gap-2"
                                            variants={fadeUpVariants}
                                        >
                                            Contribute Your Own
                                            <ExternalLink className="h-4 w-4 text-blue-500" />
                                        </motion.h3>
                                        <Badge
                                            variant="secondary"
                                            className="bg-blue-100 text-blue-600 border-blue-200"
                                        >
                                            open source
                                        </Badge>
                                    </div>
                                    <motion.p
                                        className="text-gray-600 text-sm leading-relaxed"
                                        variants={fadeUpVariants}
                                    >
                                        Created a cool glass effect? Add it to
                                        the collection! Fork the repo and submit
                                        a PR to share your design with the
                                        community.
                                    </motion.p>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </main>

                {/* Glass Effect Modal */}
                <GlassEffectModal
                    effect={selectedEffect}
                    isOpen={!!selectedEffect}
                    onClose={closeModal}
                    onCopyCode={handleCopyCode}
                    onCopyPrompt={handleCopyPrompt}
                    copiedCode={copiedCode}
                    copiedPrompt={copiedPrompt}
                />

                {/* Bottom Gradient Overlay - Applied to our website */}
                <motion.div
                    className="fixed bottom-0 left-0 right-0 h-36 bg-gradient-to-t from-gray-900/30  via-gray-900/10 via-gray-900/5 to-transparent backdrop-blur-sm z-20 pointer-events-none"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.8 }}
                >
                    <motion.div
                        className="absolute bottom-6 left-0 right-0 mx-auto text-white text-center pointer-events-auto"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.2, duration: 0.6 }}
                    >
                        <p className="text-sm opacity-90 mb-2 text-gray-400">
                            Built with glass morphism effects
                        </p>
                        <div className="flex justify-center gap-4">
                            <motion.a
                                href="https://github.com/opengate-labs/glass-effects-gallery"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="text-white hover:bg-white/20 backdrop-blur-sm"
                                >
                                    <Github className="h-5 w-5" />
                                </Button>
                            </motion.a>
                            <motion.a
                                href="https://x.com/opengate_labs"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="text-white hover:bg-white/20 backdrop-blur-sm"
                                >
                                    <Twitter className="h-5 w-5" />
                                </Button>
                            </motion.a>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </>
    );
}
