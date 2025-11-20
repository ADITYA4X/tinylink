import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ children, ...props }: ButtonProps) {
  return (
    <button
      className="px-4 py-2  text-white rounded disabled:opacity-50"
      {...props}
    >
      {children}
    </button>
  );
}
