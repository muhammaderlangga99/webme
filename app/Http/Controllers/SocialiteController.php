<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Laravel\Socialite\Facades\Socialite;

class SocialiteController extends Controller
{
    public function callback()
    {
        $user = Socialite::driver('google')->user();
        $registeredUser = User::where('google_id', $user->id)->first();

        if (!$registeredUser) {
            $user = User::create([
                'google_id' => $user->id,
                'name' => $user->name,
                'email' => $user->email,
                'google_token' => $user->token,
                'google_refresh_token' => $user->refreshToken,
                'avatar' => $user->avatar,
            ]);

            Auth::login($user);
            return redirect('/');
        }

        Auth::login($registeredUser);
        return redirect('/');
    }


    public function redirect()
    {
        return Socialite::driver('google')->redirect();
    }
}
