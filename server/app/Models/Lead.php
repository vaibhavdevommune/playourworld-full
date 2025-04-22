<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Lead extends Model
{
    protected $fillable = [
        'act', 'wrk', 'customer_contact', 'booking_id', 'course_name', 'purchase_date',
    'payment', 'bkg', 'etk', 'cnl'
    ];
}