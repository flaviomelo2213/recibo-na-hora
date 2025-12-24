import React from 'react';

interface SeoBlockProps {
  title: string;
  content: string | React.ReactNode;
}

export default function SeoContentBlock({ title, content }: SeoBlockProps) {
  return (
    <div className="mb-8">
      <h3 className="text-xl font-bold text-gray-800 mb-3 border-l-4 border-blue-500 pl-3">
        {title}
      </h3>
      <div className="text-gray-600 leading-relaxed text-justify">
        {content}
      </div>
    </div>
  );
}
