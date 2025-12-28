'use client';

import React from 'react';

interface ToolTwoColumnProps {
  left: React.ReactNode;
  right: React.ReactNode;
}

export default function ToolTwoColumn({ left, right }: ToolTwoColumnProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
      <div className="w-full">
        {left}
      </div>
      <div className="w-full lg:sticky top-28 self-start">
        {right}
      </div>
    </div>
  );
}
