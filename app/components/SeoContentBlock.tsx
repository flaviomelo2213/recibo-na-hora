'use client';

import React from 'react';

interface SeoContentBlockProps {
  title: string;
  content: React.ReactNode;
}

export default function SeoContentBlock({ title, content }: SeoContentBlockProps) {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-stone-800 border-b border-stone-200 pb-3">{title}</h2>
      <div className="text-stone-700 leading-relaxed">
        {typeof content === 'string' ? <p>{content}</p> : content}
      </div>
    </div>
  );
}
