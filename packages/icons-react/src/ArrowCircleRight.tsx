import * as React from 'react';
import { SVGProps } from 'react';
const ArrowCircleRight = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 20c4.9706 0 9-4.0294 9-9s-4.0294-9-9-9-9 4.0294-9 9 4.0294 9 9 9Z"
    />
    <path fill="#fff" fillOpacity={0.01} d="m12 14.6 3.6-3.6L12 7.4" />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m12 14.6 3.6-3.6m0 0L12 7.4m3.6 3.6H8.4M21 11c0 4.9706-4.0294 9-9 9s-9-4.0294-9-9 4.0294-9 9-9 9 4.0294 9 9Z"
    />
  </svg>
);
export default ArrowCircleRight;
