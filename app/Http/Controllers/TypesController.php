<?php

namespace App\Http\Controllers;

use App\Models\Types;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TypesController extends Controller
{

    public function index()
    {
        return Inertia::render('types/index',[

        ]);
    }

    public function store(Request $request)
    {

    }


    public function update(Request $request, Types $types)
    {

    }


    public function destroy(Types $types)
    {

    }
}
