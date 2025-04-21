import React, { useState } from 'react';
import TableHeader from './TableHeader';
import TableRow from './TableRow';

function DataTable({ columns, data }) {
  const [perPage, setPerPage] = useState(10);
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const filteredData = data.filter((row) =>
    Object.values(row).some((val) =>
      String(val).toLowerCase().includes(search.toLowerCase())
    )
  );

  const totalItems = filteredData.length;
  const totalPages = Math.ceil(totalItems / perPage);
  const startIndex = (currentPage - 1) * perPage;
  const endIndex = Math.min(startIndex + perPage, totalItems);
  const paginatedData = filteredData.slice(startIndex, endIndex);

  const changePage = (page) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };

  return (
    <div className="rounded-xl border border-[#f1f1f4] bg-white p-4">
      <div className="flex flex-col md:flex-row justify-between items-center mb-4 gap-4">
        <div>
          <label className="text-sm text-gray-600 mr-2">Show:</label>
          <select
            value={perPage}
            onChange={(e) => {
              setPerPage(Number(e.target.value));
              setCurrentPage(1);
            }}
            className="border border-gray-300 text-sm px-2 py-2 rounded"
          >
            {[5, 10, 15, 20, 25, 50, 100].map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>
        </div>

        <div>
          <input
            type="text"
            placeholder="Search..."
            className="border border-gray-300 text-sm px-3 py-2 rounded w-48"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setCurrentPage(1);
            }}
          />
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full table-auto text-nowrap">
          <thead className="bg-gray-0 p-1">
            <TableHeader columns={columns} />
          </thead>
          <tbody>
            {paginatedData.map((row, index) => (
              <TableRow key={index} row={row} columns={columns} />
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center mt-4 gap-4">
        <div className="text-xs uppercase text-gray-500">
          {totalItems === 0
            ? 'No entries found'
            : `Showing ${startIndex + 1} to ${endIndex} of ${totalItems} entries`}
        </div>

        <div className="flex gap-1">
          <button
            onClick={() => changePage(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-2 py-1 border rounded text-xs disabled:opacity-50"
          >
            Prev
          </button>

          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => changePage(i + 1)}
              className={`px-3 py-1 border rounded text-xs ${
                currentPage === i + 1 ? 'bg-blue-100 hover:bg-blue-200 cursor-pointer text-gray-800' : ''
              }`}
            >
              {i + 1}
            </button>
          ))}

          <button
            onClick={() => changePage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-2 py-1 border rounded text-xs disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default DataTable;