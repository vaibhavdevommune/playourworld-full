import React from 'react';

function TableHeader({ columns }) {
  return (
    <tr>
      {columns.map((col, idx) => (
        <th key={idx} className="text-left px-4 py-4 text-xs uppercase font-semibold text-gray-500">
          {col.label}
        </th>
      ))}
    </tr>
  );
}

export default TableHeader;
