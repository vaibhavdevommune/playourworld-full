import React from 'react';

function TableRow({ row, columns }) {
  return (
    <tr className="border-t border-[#f1f1f4] hover:bg-blue-50">
      {columns.map((col, idx) => (
        <td key={idx} className="px-4 py-4 text-sm text-gray-600">
          {row[col.key]}
        </td>
      ))}
    </tr>
  );
}

export default TableRow;
