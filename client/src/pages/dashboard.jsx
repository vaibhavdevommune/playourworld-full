import React, { useEffect, useState } from 'react';
import CardDashboard from '../components/card-dashboard';
import DataTable from '../components/DataTable';
import axios from 'axios';

function Dashboard() {
  const [bookingData, setBookingData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const columns = [
    { label: 'Booking ID', key: 'booking_id' },
    { label: 'User', key: 'user' },
    { label: 'Email', key: 'email' },
    { label: 'Course Category', key: 'course_category' },
    { label: 'Course Name', key: 'course_name' },
    { label: 'Course Type', key: 'course_type' },
    { label: 'Amount Paid', key: 'amount_paid' },
    { label: 'Booking Date', key: 'booking_date' },
    { label: 'Status', key: 'status' },
  ];

  useEffect(() => {
    axios.get('http://server.test/api/bookings') 
      .then(res => {
        console.log(res);
        setBookingData(res.data);
        setLoading(false);
      })
      .catch(err => {
        setError('Error fetching data: ' + err.message);
        setLoading(false);
      });
  }, []);

  // Conditional rendering for loading, error, and the data
  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="dashboard">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <CardDashboard number="1,230" percentage="+12%" badgeClass="bg-green-100 text-green-600" leading="New Leads" />
        <CardDashboard number="530" percentage="-8%" badgeClass="bg-red-100 text-red-600" leading="Total Sales Page" />
        <CardDashboard number="7,500" percentage="+22%" badgeClass="bg-green-100 text-green-600" leading="Total Live Sessions" />
        <CardDashboard number="1,000" percentage="+5%" badgeClass="bg-green-100 text-green-600" leading="Total Buyers" />
        <CardDashboard number="7,500" percentage="+22%" badgeClass="bg-green-100 text-green-600" leading="Total Leads" />
        <CardDashboard number="1,000" percentage="+5%" badgeClass="bg-green-100 text-green-600" leading="Total Earnings" />
      </div>
      <div className="mt-6">
        {/* Pass fetched bookingData to the DataTable */}
        <DataTable columns={columns} data={bookingData} />
      </div>
    </div>
  );
}

export default Dashboard;
