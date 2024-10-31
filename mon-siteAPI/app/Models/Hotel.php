<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Hotel extends Model
{
    use HasFactory;

    protected $fillable = [
        'firstName',
        'lastName',
        'phoneNumber',
        'email',
        'arrivalDate',
        'arrivalTime',
        'departureDate',
        'departureTime',
        'numberOfAdults',
        'numberOfKids',
        'numberOfNights',
        'paymentMethod',
        'specialRequest',
    ];
}
