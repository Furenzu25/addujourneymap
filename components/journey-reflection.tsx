'use client';

import { useState } from 'react';
import { reflections, lensConfig, type ReflectionEntry } from '@/lib/journey-data';

export default function JourneyReflection() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  // Group reflections by lens
  const groupedReflections = reflections.reduce((acc, entry) => {
    if (!acc[entry.lens]) {
      acc[entry.lens] = [];
    }
    acc[entry.lens].push(entry);
    return acc;
  }, {} as Record<string, ReflectionEntry[]>);

  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 rounded-2xl p-8 border border-primary/10">
        <h2 className="text-2xl font-bold text-foreground mb-3">My Journey Reflections</h2>
        <p className="text-muted-foreground">
          Insights through the five lenses of Ignatian reflection - revealing the patterns of growth and transformation during my years at AdDU.
        </p>
      </div>

      {/* Five Lenses Overview */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        {(Object.entries(lensConfig) as [keyof typeof lensConfig, typeof lensConfig[keyof typeof lensConfig]][]).map(([key, config]) => (
          <div
            key={key}
            className={`bg-gradient-to-br ${config.color} rounded-xl p-4 border ${config.borderColor} text-center`}
          >
            <span className="text-3xl block mb-2">{config.icon}</span>
            <h3 className="font-bold text-sm text-foreground">{config.title}</h3>
            <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{config.description}</p>
          </div>
        ))}
      </div>

      {/* Reflections Display */}
      {reflections.length === 0 ? (
        <div className="text-center py-16 text-muted-foreground bg-white/50 rounded-2xl border border-border">
          <p className="text-lg mb-4">No reflections yet</p>
          <p className="text-sm max-w-md mx-auto">
            Add your reflections to <code className="bg-muted px-2 py-1 rounded">lib/journey-data.ts</code> 
            to share your journey insights.
          </p>
        </div>
      ) : (
        <div className="space-y-6">
          {reflections.map((entry) => {
            const config = lensConfig[entry.lens];
            return (
              <div
                key={entry.id}
                className={`bg-gradient-to-br ${config.color} rounded-2xl p-6 border ${config.borderColor} transition-all hover:shadow-md`}
              >
                <div
                  onClick={() => setExpandedId(expandedId === entry.id ? null : entry.id)}
                  className="cursor-pointer"
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{config.icon}</span>
                      <div>
                        <p className="text-sm font-semibold text-muted-foreground">
                          {config.title}
                        </p>
                        <h4 className="text-lg font-bold text-foreground">
                          {entry.title}
                        </h4>
                      </div>
                    </div>
                    <span className="text-muted-foreground text-sm">
                      {expandedId === entry.id ? '▲ Collapse' : '▼ Expand'}
                    </span>
                  </div>
                </div>

                {expandedId === entry.id ? (
                  <div className="mt-4 pt-4 border-t border-foreground/10">
                    <p className="text-foreground whitespace-pre-wrap leading-relaxed">
                      {entry.content}
                    </p>
                  </div>
                ) : (
                  <p className="text-foreground/70 line-clamp-2 mt-2 text-sm">
                    {entry.content}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      )}

      {reflections.length > 0 && (
        <div className="bg-gradient-to-r from-secondary/10 to-primary/10 rounded-2xl p-8 border border-secondary/20 text-center">
          <h3 className="text-lg font-semibold text-foreground mb-2">
            {reflections.length} Reflection{reflections.length !== 1 ? 's' : ''} Shared
          </h3>
          <p className="text-muted-foreground">
            These reflections capture the essence of my journey. Be honest. Be personal. 
            Let them show where I've been and hint at where God might be calling me next.
          </p>
        </div>
      )}
    </div>
  );
}
