<?php

namespace App\Http\Controllers;

use App\Models\Booking;
use Illuminate\Http\Request;

class BookingController extends Controller
{
    public function index()
    {
        $bookings = Booking::all();
        return response()->json($bookings);
    }

    public function store(Request $request)
    {
        $request->validate([
            'booking_id' => 'required',
            'user' => 'required',
            'email' => 'required|email',
            'course_category' => 'required',
            'course_name' => 'required',
            'course_type' => 'required',
            'amount_paid' => 'required',
            'booking_date' => 'required|date',
            'status' => 'required',
        ]);

        $booking = Booking::create($request->all());

        return response()->json($booking, 201);
    }
}
