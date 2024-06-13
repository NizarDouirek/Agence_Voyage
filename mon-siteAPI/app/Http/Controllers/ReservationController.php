<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Reservation;
use Illuminate\Support\Facades\DB;

class ReservationController extends Controller
{
    public function index()
    {
        return response()->json(Reservation::all());
    }

    public function store(Request $request)
    {
        $reservation = Reservation::create([
            "name" => $request->name,
            "email" => $request->email,
            "message" => $request->message,
            "phone" => $request->phone,
            "kids" => $request->kids,
            "date" => $request->date,
            "adults" => $request->adults,
        ]);

        if ($request->paymentMethod === "creditCard") {
            // return response()->json($request);
            DB::table("payment_credit_cards")->insert([
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
        if ($request->paymentMethod === "paypal") {
            // return response()->json($request);
            DB::table("payment_paypal")->insert([
                'paypalBuyerFirstName' => $request->paypalBuyerFirstName,
                'paypalBuyerLastName' => $request->paypalBuyerLastName,
                'paypalBuyerEmail' => $request->paypalBuyerEmail,
                'paypalBuyerAddress' => $request->paypalBuyerAddress,
            ]);
        }

        return response()->json($reservation, 201);
    }

    public function show($id)
    {
        return response()->json(Reservation::find($id));
    }

    public function update(Request $request, $id)
    {
        $reservation = Reservation::findOrFail($id);
        $reservation->update($request->all());
        return response()->json($reservation, 200);
    }

    public function destroy($id)
    {
        Reservation::destroy($id);
        return response()->json(null, 204);
    }
}
