import * as React from 'react';
import { SVGProps } from 'react';
const Mouse = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill="#fff"
      fillOpacity={0.01}
      d="M5 9.3C5 5.8206 7.8206 3 11.3 3c3.4794 0 6.3 2.8206 6.3 6.3v5.4c0 3.4794-2.8206 6.3-6.3 6.3C7.8206 21 5 18.1794 5 14.7V9.3Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M11.3 9.3V6.6m0 14.4C7.8206 21 5 18.1794 5 14.7V9.3C5 5.8206 7.8206 3 11.3 3c3.4794 0 6.3 2.8206 6.3 6.3v5.4c0 3.4794-2.8206 6.3-6.3 6.3Z"
    />
  </svg>
);
export default Mouse;
