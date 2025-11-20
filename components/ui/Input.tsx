import React from "react";

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export function Input(props: InputProps) {
  return (
    <input
      className="w-full px-3 py-2 border rounded outline-none
                 text-black
                 placeholder-gray-400
                 focus:ring-1 focus:ring-stone-600"
      {...props}
    />
  );
}
