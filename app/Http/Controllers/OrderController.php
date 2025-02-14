<?php

namespace App\Http\Controllers;

use App\Models\Order;
use App\Models\User;
use App\Models\Web;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Inertia\Inertia;

class OrderController extends Controller
{
    use AuthorizesRequests;
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //get all orders and webs data from the database
        $orders = Order::with('user')->get();
        dd($orders);
        return Inertia::render('Orders/Index', [
            'orders' => $orders
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $order = $request->validate([
            'user_id' => 'required',
            'webs_id' => 'required',
            'domain_name' => 'required',
            'status' => 'required',
            'price' => 'required',
        ]);

        Order::create($order);

        session()->flash('message', 'Pesanan telah dibuat');
        return redirect()->route('dashboard');
    }

    /**
     * Display the specified resource.
     */
    public function show(Order $order)
    {
        $this->authorize('/Orders', $order);
        return Inertia::render('Orders/Show', [
            'orders' => Order::all(),
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Order $order)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Order $order)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Order $order)
    {
        //
    }
}
