import React from "react";

type TableProps = {
  headers: string[];
  children: React.ReactNode;
};

export function Table({ headers, children }: TableProps) {
  return (
    <table className="w-full  table-auto border-collapse text-sm text-stone-700">
      <thead>
        <tr className="border-b bg-gray-100">
          {headers.map((header) => (
            <th
              key={header}
              className="px-12 py-2 text-left font-medium whitespace-nowrap"
            >
              {header}
            </th>
          ))}
        </tr>
      </thead>

      <tbody>{children}</tbody>
    </table>
  );
}
