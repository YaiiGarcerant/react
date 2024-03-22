<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Metas;

class MetasController extends Controller
{

    public function index()
    {
        return Inertia::render('metas/index', [
            'metas' => Metas::with('user:id,name')->latest()->get(),

        ]);
    }


    public function store(Request $request)
    {
        //validamos los datos
        $validated = $request->validate([
            'title' => 'required|string',
            'start_date' => 'required|string',
            'end_date' => 'required|string',
        ]);

        $request->user()->metas()->create($validated);

        return redirect()->route('metas.index')->with('success', 'Meta Creada Exitosamente');
    }
    public function update(Request $request, Metas $calendar)
    {
    }

    public function destroy(Metas $calendar)
    {
    }
}
