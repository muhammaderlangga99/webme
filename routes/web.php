<?php

use App\Http\Controllers\BookController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\SocialiteController;
use App\Http\Controllers\WebController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Socialite\Facades\Socialite;

Route::get('/', function () {
    return Inertia::render('Home', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/about', function () {
    return Inertia::render('About');
})->name('about');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::controller(WebController::class)->group(function () {
    // Route::get('/webs', [WebController::class, 'index'])->name('webs.index');
    Route::get('/webs/create', [WebController::class, 'create'])->name('webs.create');
    Route::post('/webs', [WebController::class, 'store'])->name('webs.store');
    Route::get('/webs/{web}/edit', [WebController::class, 'edit'])->name('webs.edit');
    Route::patch('/webs/{web}', [WebController::class, 'update'])->name('webs.update');
    Route::delete('/webs/{web}', [WebController::class, 'destroy'])->name('webs.destroy');
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

// oauth 2 with google
Route::get('/auth/redirect', [SocialiteController::class, 'redirect']);
Route::get('/auth/google/callback', [SocialiteController::class, 'callback']);
require __DIR__ . '/auth.php';
