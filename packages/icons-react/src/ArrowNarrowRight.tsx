import * as React from 'react';
import { SVGProps } from 'react';
const ArrowNarrowRight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path fill="#fff" fillOpacity={0.01} d="m14 6 6 6-6 6" />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 12h16m0 0-6-6m6 6-6 6"
    />
  </svg>
);
export default ArrowNarrowRight;
