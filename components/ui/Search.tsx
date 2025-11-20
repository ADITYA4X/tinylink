import React from "react";

type SearchProps = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
};

export function Search({ value, onChange, placeholder }: SearchProps) {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder || "Search..."}
      className="w-full px-3 text-stone-500  py-2 border rounded outline focus:ring-2 focus:ring-stone-500"
    />
  );
}
