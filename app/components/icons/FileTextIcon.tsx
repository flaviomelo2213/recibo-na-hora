import * as React from "react";

export const FileTextIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg 
    viewBox="0 0 64 64" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    {...props}
  >
    <rect x="10" y="8" width="44" height="48" rx="14" fill="#0F172A" />
    <rect x="22" y="22" width="20" height="3" rx="1.5" fill="#F8FAF0" />
    <rect x="22" y="30" width="16" height="3" rx="1.5" fill="#F8FAF0" />
    <rect x="22" y="38" width="18" height="3" rx="1.5" fill="#F8FAF0" />
    <circle cx="44" cy="44" r="6" fill="#4F46E5" />
  </svg>
);
