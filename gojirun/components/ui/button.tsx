import * as React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  asChild?: boolean;
}

const Button: React.FC<ButtonProps> = ({ children, className, asChild, ...props }) => {
  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
};

export  {Button};
