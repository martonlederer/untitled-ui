import * as React from 'react';
import { SVGProps } from 'react';
const Subscript = (props: SVGProps<SVGSVGElement>) => (
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
      d="m3 5 10 10L3 5Zm10 0L3 15 13 5Zm8 14.0001h-4c0-1.5.44-2 1.5-2.5s2.5-1.17 2.5-2.5c0-.47-.17-.93-.48-1.29a2.1098 2.1098 0 0 0-2.62-.44c-.42.24-.74.62-.9 1.07"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m3 5 10 10m0-10L3 15m18 4.0001h-4c0-1.5.44-2 1.5-2.5s2.5-1.17 2.5-2.5c0-.47-.17-.93-.48-1.29a2.1098 2.1098 0 0 0-2.62-.44c-.42.24-.74.62-.9 1.07"
    />
  </svg>
);
export default Subscript;
