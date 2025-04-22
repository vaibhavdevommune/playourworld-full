import React from 'react';

function CommonInput({ placeholder, inputClassName = '' }) {
    return (
        <input
            placeholder={placeholder}
            className={`border border-[#f1f1f4] text-sm text-gray-800 rounded py-2 px-2 ${inputClassName}`}
        />
    );
}

export default CommonInput;
