'use client';

import { useState } from 'react';
import { MapPin, Sparkles } from 'lucide-react';
import YearGallery from '@/components/year-gallery';
import JourneyReflection from '@/components/journey-reflection';
import { personalInfo } from '@/lib/journey-data';

export default function Home() {
  const [activeTab, setActiveTab] = useState('gallery');

  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-background to-background">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              AdDU Journey Map
            </h1>
            <p className="text-muted-foreground text-sm sm:text-base">
              {personalInfo.name} • {personalInfo.program} • {personalInfo.batch}
            </p>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <div className="sticky top-20 z-30 bg-white/60 backdrop-blur-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-4">
            <button
              onClick={() => setActiveTab('gallery')}
              className={`px-6 py-3 font-semibold text-sm transition-all duration-300 border-b-2 ${
                activeTab === 'gallery'
                  ? 'border-primary text-primary'
                  : 'border-transparent text-muted-foreground hover:text-foreground'
              }`}
            >
              📸 Photo Gallery
            </button>
            <button
              onClick={() => setActiveTab('reflection')}
              className={`px-6 py-3 font-semibold text-sm transition-all duration-300 border-b-2 ${
                activeTab === 'reflection'
                  ? 'border-primary text-primary'
                  : 'border-transparent text-muted-foreground hover:text-foreground'
              }`}
            >
              ✨ Reflections
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {activeTab === 'gallery' && <YearGallery />}
        {activeTab === 'reflection' && <JourneyReflection />}
      </div>

      {/* Footer with Guide */}
      <footer className="bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 border-t border-border mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-bold text-primary mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                Five Lenses of Reflection
              </h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-primary font-bold">→</span>
                  <span><strong>Places:</strong> Spaces that awakened deep emotions and meaningful thoughts</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-secondary font-bold">→</span>
                  <span><strong>Events & Activities:</strong> Breakthroughs, struggles, immersions, and turning points</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">→</span>
                  <span><strong>Ignatian Values:</strong> Magis, Cura Personalis, Discernment, AMDG, and more</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">→</span>
                  <span><strong>Moments of Becoming:</strong> When you felt yourself growing and transforming</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-secondary font-bold">→</span>
                  <span><strong>People of Gratitude:</strong> Mentors, friends, and communities who shaped you</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold text-primary mb-4 flex items-center gap-2">
                <Sparkles className="w-5 h-5" />
                About This Journey Map
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                This AdDU Journey Map is a personal and creative representation of how my 
                Ateneo years shaped who I am today. Through the five lenses of Ignatian 
                reflection, I have gathered the fruits of my journey.
              </p>
              <p className="text-sm text-muted-foreground italic">
                "Let your map be honest. Let it be personal. Let it show where you have been… 
                and hint at where God might be calling you next."
              </p>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>Ad Majorem Dei Gloriam • Ateneo de Davao University</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
