import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ children, ...props }: ButtonProps) {
  return (
    <button className="rounded disabled:opacity-50 cursor-pointer" {...props}>
      {children}
    </button>
  );
}
