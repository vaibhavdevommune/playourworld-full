import React from 'react'

function HasIconLeft({icon, placeholder}) {
    return (
        <div className="has-left relative">
            <span className="material-symbols-outlined text-gray-500 absolute top-[10px] left-[8px] text-20">
                {icon}
            </span>
            <input type="text" className='border border-[#f1f1f4] text-sm text-gray-800 p-2 outline outline-[#f1f1f9] rounded-md ps-8' placeholder={placeholder} />
        </div>
    );
}

export default HasIconLeft;