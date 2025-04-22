import React from 'react';
import { Link } from 'react-router-dom';

function ListGroup({ items = [], activeIndex = 0, disabledIndexes = [] }) {
  return (
    <div className="flex flex-col border rounded divide-y divide-gray-200">
      {items.map((item, index) => {
        const isActive = index === activeIndex;
        const isDisabled = disabledIndexes.includes(index);

        const baseClass = "px-4 py-2 transition";
        const activeClass = "bg-blue-500 text-white font-medium hover:bg-blue-600";
        const normalClass = "hover:bg-gray-100";
        const disabledClass = "text-gray-400 cursor-not-allowed bg-gray-50";

        const classes = `${baseClass} ${isDisabled ? disabledClass : isActive ? activeClass : normalClass}`;

        return isDisabled ? (
          <span key={index} className={classes} aria-disabled="true">
            {item.label}
          </span>
        ) : (
          <Link key={index} to={item.href || "#"} className={classes} aria-current={isActive ? "true" : undefined}>
            {item.label}
          </Link>
        );
      })}
    </div>
  );
}

export default ListGroup;
