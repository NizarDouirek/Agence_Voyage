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
        Schema::create('payment_credit_cards', function (Blueprint $table) {
            $table->id();
            $table->string('creditFirstName');
            $table->string('creditLastName');
            $table->string('creditCardNumber');
            $table->string('creditCardCVV');
            $table->string('creditCardExpMonth');
            $table->string('creditCardExpYear');
            $table->string('creditBillingAddress2');
            $table->string('creditBillingDepartment');
            $table->string('creditBillingPostalCode');
            $table->string("creditBillingCountry");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('payment_credit_cards');
    }
};
