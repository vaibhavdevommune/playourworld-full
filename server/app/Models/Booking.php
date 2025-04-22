<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Booking extends Model
{
    use HasFactory;

    protected $fillable = [
        'booking_id',
        'user',
        'email',
        'course_category',
        'course_name',
        'course_type',
        'amount_paid',
        'booking_date',
        'status',
    ];
}
