import * as React from 'react';
import { SVGProps } from 'react';
const BarChart09 = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7 5.5v12-12Zm4.5 3v9-9Zm4.5 3v6-6Zm4.5 3v3-3Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21 21H6.2c-1.1201 0-1.6802 0-2.108-.218a1.9997 1.9997 0 0 1-.874-.874C3 19.4802 3 18.9201 3 17.8V3m4 2.5v12m4.5-9v9m4.5-6v6m4.5-3v3"
    />
  </svg>
);
export default BarChart09;
