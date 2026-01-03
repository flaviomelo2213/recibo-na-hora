import * as React from "react";

export const ReceiptIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg 
    viewBox="0 0 64 64" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    {...props}
  >
    <path d="M14 8H50V56L46 52L42 56L38 52L34 56L30 52L26 56L22 52L18 56L14 52V8Z" fill="#0F172A"/>
    <rect x="22" y="18" width="20" height="3" rx="1.5" fill="#F8FAF0"/>
    <rect x="22" y="26" width="12" height="3" rx="1.5" fill="#F8FAF0"/>
    <circle cx="40" cy="40" r="8" fill="#4F46E5"/>
    <path d="M36 40L39 43L44 38" stroke="#F8FAF0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
);
