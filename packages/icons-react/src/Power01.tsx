import * as React from 'react';
import { SVGProps } from 'react';
const Power01 = (props: SVGProps<SVGSVGElement>) => (
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
      d="M18.3601 6.64a8.9996 8.9996 0 0 1 1.9497 9.8078 9.0005 9.0005 0 0 1-8.3147 5.5551A9 9 0 0 1 5.6301 6.64"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12.0001 2v10m6.36-5.36a8.9996 8.9996 0 0 1 1.9497 9.8078 9.0005 9.0005 0 0 1-8.3147 5.5551A9 9 0 0 1 5.6301 6.64"
    />
  </svg>
);
export default Power01;
