import type React from "react"
import { Copy, Code, Sparkles, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { GlassEffect } from "@/data/glass-effects"

interface GlassEffectModalProps {
  effect: GlassEffect | null
  isOpen: boolean
  onClose: () => void
  onCopyCode: (code: string) => void
  onCopyPrompt: (prompt: string) => void
  copiedCode: boolean
  copiedPrompt: boolean
}

export default function GlassEffectModal({
  effect,
  isOpen,
  onClose,
  onCopyCode,
  onCopyPrompt,
  copiedCode,
  copiedPrompt,
}: GlassEffectModalProps) {
  if (!isOpen || !effect) return null

  // Close modal when clicking on overlay
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  // Prevent closing when clicking inside modal content
  const handleContentClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
  }

  return (
    <div 
      className="fixed inset-0 bg-black/20 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={handleOverlayClick}
    >
      <div 
        className="bg-white/95 backdrop-blur-xl rounded-2xl border border-gray-200/50 max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
        onClick={handleContentClick}
      >
        <div className="p-8">
          {/* Modal Header */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-2">{effect.name}</h2>
              <p className="text-gray-600 text-lg">{effect.description}</p>
            </div>
            <Button
              onClick={onClose}
              variant="ghost"
              size="icon"
              className="text-gray-500 hover:bg-gray-100"
            >
              <X className="h-6 w-6" />
            </Button>
          </div>

          {/* Preview */}
          <div className="mb-8">
            <h3 className="text-gray-800 font-semibold mb-4 text-xl">Preview</h3>
            <div className="p-8 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl border border-gray-200">
              {effect.preview}
            </div>
          </div>

          {/* Code Section */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-gray-800 font-semibold flex items-center gap-2 text-xl">
                <Code className="h-5 w-5" />
                React/HTML Code
              </h3>
              <Button
                onClick={() => onCopyCode(effect.code)}
                variant="outline"
                size="sm"
                className="bg-white/80 text-gray-600 border-gray-200 hover:bg-gray-50"
              >
                <Copy className="h-4 w-4 mr-2" />
                {copiedCode ? "Copied!" : "Copy Code"}
              </Button>
            </div>
            <pre className="bg-gray-900 rounded-xl p-6 text-green-400 text-sm overflow-x-auto border border-gray-200">
              <code>{effect.code}</code>
            </pre>
          </div>

          {/* Tailwind Classes */}
          <div className="mb-8">
            <h3 className="text-gray-800 font-semibold mb-4 text-xl">Tailwind Classes</h3>
            <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
              <code className="text-blue-700 text-sm font-mono">{effect.tailwindClasses}</code>
            </div>
          </div>

          {/* AI Prompt */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-gray-800 font-semibold flex items-center gap-2 text-xl">
                <Sparkles className="h-5 w-5" />
                AI Prompt
              </h3>
              <Button
                onClick={() => onCopyPrompt(effect.prompt)}
                variant="outline"
                size="sm"
                className="bg-white/80 text-gray-600 border-gray-200 hover:bg-gray-50"
              >
                <Copy className="h-4 w-4 mr-2" />
                {copiedPrompt ? "Copied!" : "Copy Prompt"}
              </Button>
            </div>
            <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-6 border border-purple-200">
              <p className="text-gray-700 italic">"{effect.prompt}"</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 