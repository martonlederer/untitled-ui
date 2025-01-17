import * as React from 'react';
import { SVGProps } from 'react';
const ArrowNarrowUpRight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path fill="#fff" fillOpacity={0.01} d="M10 6h8v8" />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M6 18 18 6m0 0h-8m8 0v8"
    />
  </svg>
);
export default ArrowNarrowUpRight;
