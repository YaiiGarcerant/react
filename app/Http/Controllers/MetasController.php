<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Metas;
class MetasController extends Controller
{

    public function index()
    {
        return Inertia::render('metas/index',[

        ]);
    }


    public function store(Request $request)
    {

    }
    public function update(Request $request, Metas $calendar)
    {

    }

    public function destroy(Metas $calendar)
    {

    }
}
