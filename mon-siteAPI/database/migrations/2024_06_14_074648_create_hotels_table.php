<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('hotels', function (Blueprint $table) {
            $table->id();
            $table->string('firstName');
            $table->string('lastName');
            $table->string('phoneNumber');
            $table->string('email');
            $table->string('arrivalDate');
            $table->string('arrivalTime');
            $table->string('departureDate');
            $table->string('departureTime');
            $table->string('numberOfAdults');
            $table->string('numberOfKids');
            $table->string('numberOfNights');
            $table->string('paymentMethod');
            $table->string('specialRequest');
     
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('hotels');
    }
};
