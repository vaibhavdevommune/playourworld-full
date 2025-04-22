import React from "react";

function Button({ btnClass, text }) {
    return (
        <button className={`btn ${btnClass}`}>
            <span className="text-sm">
                {text}
            </span>
        </button>
    );
}

export default Button;
