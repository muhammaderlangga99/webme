<?php

namespace App\Http\Controllers;

use App\Models\Web;
use Illuminate\Http\Request;
use Inertia\Inertia;

class WebController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Webs/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // dd($request->all());
        if ($request->hasFile('image')) {
            $request->validate([
                'image' => 'required',
                'title' => 'required',
                'description' => 'required',
                'url' => 'required',
                'price' => 'required'
            ]);

            $imageName = time() . '.' . $request->image->extension();
            $request->image->move(public_path('images'), $imageName);

            Web::create([
                'image' => $imageName,
                'title' => $request->title,
                'description' => $request->description,
                'url' => $request->url,
                'price' => intval($request->price)
            ]);

            session()->flash('message', 'Template baru telah ditambahkan');
            return redirect()->route('dashboard');
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Web $web)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Web $web)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Web $web)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Web $web)
    {
        //
    }
}
