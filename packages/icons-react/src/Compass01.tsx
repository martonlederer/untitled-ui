import * as React from 'react';
import { SVGProps } from 'react';
const Compass01 = (props: SVGProps<SVGSVGElement>) => (
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
    <path
      fill="#fff"
      fillOpacity={0.01}
      d="M10.65 9.65 8.4 11l2.25 1.35L12 14.6l1.35-2.25L15.6 11l-2.25-1.35L12 7.4l-1.35 2.25Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21 11c0 4.9706-4.0294 9-9 9m9-9c0-4.9706-4.0294-9-9-9m9 9h-1.8M12 20c-4.9706 0-9-4.0294-9-9m9 9v-1.8M3 11c0-4.9706 4.0294-9 9-9m-9 9h1.8M12 2v1.8m6.364 13.564-1.2728-1.2728M6.9088 5.9088 5.636 4.636m11.4552 1.2728L18.364 4.636M5.636 17.364l1.2728-1.2728M8.4 11l2.25-1.35L12 7.4l1.35 2.25L15.6 11l-2.25 1.35L12 14.6l-1.35-2.25L8.4 11Z"
    />
  </svg>
);
export default Compass01;
