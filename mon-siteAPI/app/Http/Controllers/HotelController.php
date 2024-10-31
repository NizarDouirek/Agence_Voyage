<?php

namespace App\Http\Controllers;

use App\Models\Hotel;
use App\Models\HotelReservation;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class HotelController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        return response()->json(Hotel::all());
    }

    /**
     * Store a newly created reservation in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request)
    {
        // $request->validate([
        //     'firstName' => 'required|string|max:255',
        //     'lastName' => 'required|string|max:255',
        //     'phoneNumber' => 'required|string|max:20',
        //     'email' => 'required|string|email|max:255',
        //     'arrivalDate' => 'required|date',
        //     'arrivalTime' => 'required|string|max:10',
        //     'departureDate' => 'required|date',
        //     'departureTime' => 'required|string|max:10',
        //     'numberOfAdults' => 'required|integer|min:1',
        //     'numberOfKids' => 'nullable|integer|min:0',
        //     'numberOfNights' => 'required|integer|min:1',
        //     'paymentMethod' => 'required|string|in:Check,Paypal,CreditCard',
        //     'specialRequest' => 'nullable|string',
        // ]);

        $reservation = Hotel::create([
            'firstName' => $request->firstName,
            'lastName' => $request->lastName,
            'phoneNumber' => $request->phoneNumber,
            'email' => $request->email,
            'arrivalDate' => $request->arrivalDate,
            'arrivalTime' => $request->arrivalTime,
            'departureDate' => $request->departureDate,
            'departureTime' => $request->departureTime,
            'numberOfAdults' => $request->numberOfAdults,
            'numberOfKids' => $request->numberOfKids,
            'numberOfNights' => $request->numberOfNights,
            'paymentMethod' => $request->paymentMethod,
            'specialRequest' => $request->specialRequest,
        ]);

        if ($request->paymentMethod === "CreditCard") {
            DB::table("payment_credit_cards")->insert([
                'reservation_id' => $reservation->id,
                'creditBillingAddress2' => $request->creditBillingAddress2,
                'creditBillingCountry' => $request->creditBillingCountry,
                'creditBillingDepartment' => $request->creditBillingDepartment,
                'creditCardCVV' => $request->creditCardCVV,
                'creditCardExpMonth' => $request->creditCardExpMonth,
                'creditCardExpYear' => $request->creditCardExpYear,
                'creditCardNumber' => $request->creditCardNumber,
                'creditFirstName' => $request->creditFirstName,
                'creditLastName' => $request->creditLastName,
                'creditBillingPostalCode' => $request->creditBillingPostalCode,
            ]);
        }

        if ($request->paymentMethod === "Paypal") {
            DB::table("payment_paypal")->insert([
                'reservation_id' => $reservation->id,
                'paypalBuyerFirstName' => $request->paypalBuyerFirstName,
                'paypalBuyerLastName' => $request->paypalBuyerLastName,
                'paypalBuyerEmail' => $request->paypalBuyerEmail,
                'paypalBuyerAddress' => $request->paypalBuyerAddress,
            ]);
        }

        return response()->json($reservation, 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function show($id)
    {
        $reservation = Hotel::findOrFail($id);
        return response()->json($reservation);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(Request $request, $id)
    {
        $request->validate([
            'firstName' => 'string|max:255',
            'lastName' => 'string|max:255',
            'phoneNumber' => 'string|max:20',
            'email' => 'string|email|max:255',
            'arrivalDate' => 'date',
            'arrivalTime' => 'string|max:10',
            'departureDate' => 'date',
            'departureTime' => 'string|max:10',
            'numberOfAdults' => 'integer|min:1',
            'numberOfKids' => 'integer|min:0',
            'numberOfNights' => 'integer|min:1',
            'paymentMethod' => 'string|in:Check,Paypal,CreditCard',
            'specialRequest' => 'string',
        ]);

        $reservation = Hotel::findOrFail($id);
        $reservation->update($request->all());
        return response()->json($reservation, 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy($id)
    {
        Hotel::destroy($id);
        return response()->json(null, 204);
    }
}
