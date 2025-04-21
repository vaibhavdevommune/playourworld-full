import React from 'react';
import user from '../assets/images/user.jpg'


function Navbar() {
    return (
        <div className="navbar">
            <div className="flex justify-end">
                <img src={user} alt="" className='w-[42px] h-[42px] aspect-square rounded-full' />
            </div>
        </div>
    );
}

export default Navbar;