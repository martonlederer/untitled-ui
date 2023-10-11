import * as React from 'react';
import { SVGProps } from 'react';
const Box = (props: SVGProps<SVGSVGElement>) => (
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
      d="M19.56 3H4.44c-.504 0-.756 0-.9486.098a.9.9 0 0 0-.3933.3934C3 3.684 3 3.936 3 4.44v1.62c0 .504 0 .756.098.9486a.9.9 0 0 0 .3934.3933C3.684 7.5 3.936 7.5 4.44 7.5h15.12c.504 0 .7561 0 .9486-.098a.9003.9003 0 0 0 .3933-.3934C21 6.816 21 6.564 21 6.06V4.44c0-.504 0-.756-.0981-.9486a.9003.9003 0 0 0-.3933-.3933C20.3161 3 20.064 3 19.56 3Zm-5.4 7.65H9.84c-.504 0-.756 0-.9486.0981a.9003.9003 0 0 0-.3933.3933C8.4 11.3339 8.4 11.586 8.4 12.09v.72c0 .504 0 .7561.098.9486a.9003.9003 0 0 0 .3934.3933c.1925.0981.4445.0981.9486.0981h4.32c.504 0 .7561 0 .9486-.0981a.9006.9006 0 0 0 .3933-.3933c.0981-.1925.0981-.4446.0981-.9486v-.72c0-.504 0-.7561-.0981-.9486a.9006.9006 0 0 0-.3933-.3933c-.1925-.0981-.4446-.0981-.9486-.0981Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19.65 7.5v7.38c0 1.5121 0 2.2682-.2943 2.8458a2.6996 2.6996 0 0 1-1.1799 1.1799c-.5776.2943-1.3337.2943-2.8458.2943H8.67c-1.5121 0-2.2682 0-2.8458-.2943a2.6998 2.6998 0 0 1-1.18-1.1799C4.35 17.1482 4.35 16.3921 4.35 14.88V7.5M4.44 3h15.12c.504 0 .7561 0 .9486.098a.9003.9003 0 0 1 .3933.3934C21 3.684 21 3.936 21 4.44v1.62c0 .504 0 .756-.0981.9486a.9003.9003 0 0 1-.3933.3933C20.3161 7.5 20.064 7.5 19.56 7.5H4.44c-.504 0-.756 0-.9486-.098a.9.9 0 0 1-.3933-.3934C3 6.816 3 6.564 3 6.06V4.44c0-.504 0-.756.098-.9486a.9.9 0 0 1 .3934-.3933C3.684 3 3.936 3 4.44 3Zm5.4 7.65h4.32c.504 0 .7561 0 .9486.0981a.9006.9006 0 0 1 .3933.3933c.0981.1925.0981.4446.0981.9486v.72c0 .504 0 .7561-.0981.9486a.9006.9006 0 0 1-.3933.3933c-.1925.0981-.4446.0981-.9486.0981H9.84c-.504 0-.756 0-.9486-.0981a.9003.9003 0 0 1-.3933-.3933C8.4 13.5661 8.4 13.314 8.4 12.81v-.72c0-.504 0-.7561.098-.9486a.9003.9003 0 0 1 .3934-.3933c.1925-.0981.4445-.0981.9486-.0981Z"
    />
  </svg>
);
export default Box;
