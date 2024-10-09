import * as React from "react";

// Removed TypeScript interface
// interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
//   children: React.ReactNode;
//   asChild?: boolean;
// }

// Updated component to use props without TypeScript types
const Button = ({ children, className, asChild, ...props }) => {
  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
};

export { Button };
