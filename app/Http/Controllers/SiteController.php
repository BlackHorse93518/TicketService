<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class SiteController extends Controller
{
    public function index(){
    	return view('website');
    }
    
    public function login(){
    	return view('login');
    }
}
