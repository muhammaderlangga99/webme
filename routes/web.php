<?php

use App\Http\Controllers\BookController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\SocialiteController;
use App\Http\Controllers\WebController;
use App\Models\Web;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Socialite\Facades\Socialite;

Route::get('/', function () {
    return Inertia::render('Home', [
        // show data from webs table
        'webs' => Web::all(),
    ]);
});

Route::get('/about', function () {
    return Inertia::render('About');
})->name('about');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::controller(WebController::class)->group(function () {
    Route::get('/webs/create', [WebController::class, 'create'])->name('webs.create');
    Route::post('/webs', [WebController::class, 'store'])->name('webs.store');
    Route::get('/webs/{web}/edit', [WebController::class, 'edit'])->name('webs.edit');
    Route::patch('/webs/{web}', [WebController::class, 'update'])->name('webs.update');
    Route::delete('/webs/{web}', [WebController::class, 'destroy'])->name('webs.destroy');
    Route::get('/webs/{web:slug}', [WebController::class, 'show'])->name('webs.detail');
})->middleware('auth');

Route::controller(OrderController::class)->group(function () {
    Route::get('/orders', [OrderController::class, 'index'])->name('orders.index');
    Route::get('/orders/create', [OrderController::class, 'create'])->name('orders.create');
    Route::post('/orders', [OrderController::class, 'store'])->name('orders.store');
    Route::get('/orders/{order}/edit', [OrderController::class, 'edit'])->name('orders.edit');
    Route::patch('/orders/{order}', [OrderController::class, 'update'])->name('orders.update');
    Route::delete('/orders/{order}', [OrderController::class, 'destroy'])->name('orders.destroy');
    Route::get('/orders/{order:slug}', [OrderController::class, 'show'])->name('orders.detail');
})->middleware('auth');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

// oauth 2 with google
Route::get('/auth/redirect', [SocialiteController::class, 'redirect']);
Route::get('/auth/google/callback', [SocialiteController::class, 'callback']);
require __DIR__ . '/auth.php';
