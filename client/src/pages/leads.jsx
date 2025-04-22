import React, { useEffect, useState } from 'react';
import Breadbrum from '../components/breadbrum';
import HasIconLeft from '../components/hasIconLeft';
import Button from '../components/button';
import DatePicker from '../components/DatePicker';
import DataTable from '../components/DataTable';
import axios from 'axios';

function Leads() {
  const [bookingData, setBookingData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const columns = [
    { label: 'S. No', key: 'sno' },
    { label: 'ACT', key: 'act' },
    { label: 'work', key: 'wrk' },
    { label: 'Customer Contact', key: 'customer_contact' },
    { label: 'Booking ID', key: 'booking_id' },
    { label: 'Course Name', key: 'course_Name' },
    { label: 'Purchase Date', key: 'purchase_date' },
    { label: 'Payment', key: 'payment' },
    { label: 'bkg', key: 'bkg' },
    { label: 'etk', key: 'etk' },
    { label: 'cnl', key: 'cnl' },
  ];

  const transformData = (data) => {
    return data.map((item, index) => ({
      sno: index + 1,
      act: (
        <span className='bg-red-100 hover:bg-red-200 w-[32px] h-[32px] flex justify-center items-center rounded'>
          <span className="material-symbols-outlined text-20 text-red-500 cursor-pointer">delete</span>
        </span>
      ),
      wrk: (
        <span className='bg-gray-100 hover:bg-gray-200 w-[32px] h-[32px] flex justify-center items-center rounded'>
          <span className="material-symbols-outlined text-20 text-gray-500 cursor-pointer">lock</span>
        </span>
      ),
      customer_contact: (
        <div className="flex gap-4 items-center">
          <p className="mb-0">{item.name} <span className="text-green-500 font-medium">₹ {item.amount || 0}</span></p>
          <div className="relative group cursor-pointer">
            <span className="material-symbols-outlined text-18 text-blue-500">info</span>
            <div className="absolute bottom-full mb-1 left-1/2 -translate-x-1/2 hidden group-hover:block bg-blue-200 text-gray-800 text-xs px-3 py-2 rounded shadow-md z-10 whitespace-nowrap">
              <div className="flex flex-col gap-1">
                <div className="flex gap-2"><span className='font-semibold'>Email:</span><span>{item.email}</span></div>
                <div className="flex gap-2"><span className='font-semibold'>Phone:</span><span>{item.phone}</span></div>
              </div>
            </div>
          </div>
        </div>
      ),
      booking_id: (
        <div className="flex items-center gap-2">
          <span className="text-purple-500 font-medium">{item.booking_id}</span>
          <p className="text-xs">Transaction Enquiry</p>
        </div>
      ),
      course_Name: item.course_name,
      purchase_date: item.purchase_date,
      payment: (
        <span className="bg-yellow-100 text-yellow-800 p-1 px-2 font-medium rounded text-xs cursor-pointer">
          {item.payment || 'N/A'} 
        </span>
      ),
      bkg: (
        <span className="bg-green-100 text-green-800 p-1 px-2 font-medium rounded text-xs cursor-pointer">
          {item.bkg || 'N/A'}
        </span>
      ),
      etk: (
        <span className="material-symbols-outlined text-18 text-green-500">check_circle</span>
      ),
      cnl: (
        <span className="material-symbols-outlined text-18 text-red-500">cancel</span>
      ),
    }));
  };

  useEffect(() => {
    axios.get('http://server.test/api/leads')
      .then(res => {
        const transformed = transformData(res.data);
        setBookingData(transformed);
        setLoading(false);
      })
      .catch(err => {
        setError('Error fetching data: ' + err.message);
        setLoading(false);
      });
  }, []);

  return (
    <div className="leads">
      <div className="flex justify-between items-center">
        <Breadbrum pageName="Leads" />
        <div className="flex gap-4">
          <HasIconLeft icon="search" placeholder="Enter Course Name" />
          <DatePicker />
          <Button text="Export" btnClass="bg-blue-200 text-gray-800 font-medium rounded px-3 hover:bg-blue-500 hover:text-white cursor-pointer" />
        </div>
      </div>

      <div className="mt-8 flex items-center justify-between">
        <div className="flex rounded-md overflow-hidden">
          <div className="btn hover:bg-blue-500 hover:text-white p-2 cursor-pointer uppercase text-sm">All Pending</div>
          <div className="btn hover:bg-blue-500 hover:text-white p-2 cursor-pointer uppercase text-sm">Hold</div>
        </div>
        <div className="flex rounded-md overflow-hidden">
          <div className="btn hover:bg-blue-500 hover:text-white p-2 cursor-pointer uppercase text-sm">Auth</div>
          <div className="btn hover:bg-blue-500 hover:text-white p-2 cursor-pointer uppercase text-sm">Ref</div>
        </div>
        <div className="flex rounded-md overflow-hidden">
          <div className="btn hover:bg-blue-500 hover:text-white p-2 cursor-pointer uppercase text-sm">All leads</div>
          <div className="btn hover:bg-blue-500 hover:text-white p-2 cursor-pointer uppercase text-sm">bkg</div>
          <div className="btn hover:bg-blue-500 hover:text-white p-2 cursor-pointer uppercase text-sm">abd</div>
        </div>
        <div className="flex rounded-md overflow-hidden">
          <div className="btn hover:bg-yellow-500 hover:text-white p-2 cursor-pointer uppercase text-sm">CNG REV</div>
        </div>
        <div className="flex rounded-md overflow-hidden">
          <div className="btn hover:bg-blue-500 hover:text-white p-2 cursor-pointer uppercase text-sm">CHRG</div>
          <div className="btn hover:bg-blue-500 hover:text-white p-2 cursor-pointer uppercase text-sm">CBc</div>
          <div className="btn hover:bg-blue-500 hover:text-white p-2 cursor-pointer uppercase text-sm">cbv</div>
        </div>
      </div>

      <div className="mt-8 pt-8 border-t border-[#f1f1f4]">
        {loading ? (
          <div>Loading...</div>
        ) : error ? (
          <div className="text-red-500">{error}</div>
        ) : (
          <DataTable columns={columns} data={bookingData} />
        )}
      </div>
    </div>
  );
}

export default Leads;
