import * as React from 'react';
import { SVGProps } from 'react';
const ArrowsDown = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path fill="#fff" fillOpacity={0.01} d="m13 11 4 4 4-4M3 16l4 4 4-4" />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17 4v11m0 0-4-4m4 4 4-4M7 4v16m0 0-4-4m4 4 4-4"
    />
  </svg>
);
export default ArrowsDown;
