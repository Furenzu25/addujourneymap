'use client';

import { journeyData } from '@/lib/journey-data';
import YearSection from './year-section';

export default function YearGallery() {
  return (
    <div className="space-y-12">
      <div className="bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 rounded-2xl p-8 border border-primary/10">
        <h2 className="text-2xl font-bold text-foreground mb-3">My Photo Journey</h2>
        <p className="text-muted-foreground">
          A visual chronicle of my four years at Ateneo de Davao University - 
          the places, events, values, moments of becoming, and people who shaped my journey.
        </p>
      </div>

      {journeyData.map((yearData) => (
        <YearSection key={yearData.year} year={yearData} />
      ))}

      <div className="bg-gradient-to-r from-secondary/10 to-primary/10 rounded-2xl p-8 border border-secondary/20 text-center">
        <h3 className="text-lg font-semibold text-foreground mb-2">My Journey Continues</h3>
        <p className="text-muted-foreground">
          This AdDU Journey Map captures the essence of my transformation. 
          It shows where I have been and hints at where God might be calling me next.
        </p>
      </div>
    </div>
  );
}
