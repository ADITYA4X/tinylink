import React, { ReactNode } from "react";

type ListProps<T> = {
  data: T[];
  renderItem: (item: T, index: number) => ReactNode;
  className?: string;
};

export function List<T>({ data, renderItem, className }: ListProps<T>) {
  return (
    <ul className={className}>
      {data.map((item, index) => (
        <li key={index} className="border-b py-2">
          {renderItem(item, index)}
        </li>
      ))}
    </ul>
  );
}
