import React, { useEffect, useRef } from "react";
import flatpickr from "flatpickr";
import "flatpickr/dist/themes/material_blue.css";

function DatePicker() {
  const inputRef = useRef();

  useEffect(() => {
    flatpickr(inputRef.current, {
      enableTime: false,
      dateFormat: "d-m-Y",
    });
  }, []);

  return (
    <div>
      {/* <label className="block text-sm mb-1">Select Date</label> */}
      <input ref={inputRef} className="border text-sm border-[#f1f1f4] text-gray-800 p-2 outline outline-[#f1f1f9] rounded-md" placeholder="Select Date" />
    </div>
  );
}

export default DatePicker;
