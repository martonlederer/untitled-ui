import * as React from 'react';
import { SVGProps } from 'react';
const Coins01 = (props: SVGProps<SVGSVGElement>) => (
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
      d="M9.3 20c3.4794 0 6.3-2.8206 6.3-6.3 0-3.4794-2.8206-6.3-6.3-6.3-3.4794 0-6.3 2.8206-6.3 6.3C3 17.1794 5.8206 20 9.3 20Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15.544 14.544C18.6243 14.1316 21 11.4932 21 8.3 21 4.8206 18.1794 2 14.7 2c-3.1932 0-5.8316 2.3757-6.244 5.456M15.6 13.7c0 3.4794-2.8206 6.3-6.3 6.3C5.8206 20 3 17.1794 3 13.7c0-3.4794 2.8206-6.3 6.3-6.3 3.4794 0 6.3 2.8206 6.3 6.3Z"
    />
  </svg>
);
export default Coins01;
