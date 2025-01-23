<?php

namespace App\Http\Controllers;

use App\Models\Book;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class BookController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Books/Book');
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Books/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        if ($request->hasFile('cover')) {
            $request->validate([
                'cover' => 'required',
                'judul' => 'required',
                'penulis' => 'required',
                'penerbit' => 'required',
                'tahun_terbit' => 'required',
                'jumlah_halaman' => 'required',
                'genre' => 'required',
                'sinopsis' => 'required',
                'rating' => 'required',
            ]);

            $imageName = time() . '.' . $request->cover->extension();
            $request->cover->move(public_path('images'), $imageName);

            Book::create([
                'user_id' => Auth::id(),
                'cover' => $imageName,
                'judul' => $request->judul,
                'penulis' => $request->penulis,
                'penerbit' => $request->penerbit,
                'tahun_terbit' => $request->tahun_terbit,
                'jumlah_halaman' => $request->jumlah_halaman,
                'genre' => $request->genre,
                'sinopsis' => $request->sinopsis,
                'rating' => $request->rating,
            ]);

            // redirect to the books index page and display wit
            return redirect()->route('books.index')->with('success', 'Rekomendasi anda sangat berharga bagi kami. Terima kasih!');
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Book $book)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Book $book)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Book $book)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Book $book)
    {
        //
    }
}
