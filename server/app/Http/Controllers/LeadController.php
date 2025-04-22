<?php

namespace App\Http\Controllers;

use App\Models\Lead;
use Illuminate\Http\Request;

class LeadController extends Controller
{
    public function index()
    {
        return response()->json(Lead::all());
    }

    public function store(Request $request)
    {
        $lead = Lead::create([
            'act' => $request->act,
            'wrk' => $request->wrk,
            'customer_contact' => $request->customer_contact,
            'booking_id' => $request->booking_id,
            'course_name' => $request->course_name,
            'purchase_date' => $request->purchase_date,
            'payment' => $request->payment,
            'bkg' => $request->bkg,
            'etk' => $request->etk,
            'cnl' => $request->cnl,
        ]);

        return response()->json([
            'message' => 'Lead created successfully',
            'data' => $lead
        ], 201);
    }

    public function destroy($id)
    {
        $lead = Lead::find($id);

        if (!$lead) {
            return response()->json(['message' => 'Lead not found'], 404);
        }

        $lead->delete();

        return response()->json(['message' => 'Lead deleted successfully']);
    }
}
