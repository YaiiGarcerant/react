<?php

namespace App\Http\Controllers;

use App\Models\Project;
use App\Models\Category;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProjectController extends Controller
{

    public function index()
    {

        $categories = Category::get();

        return Inertia::render('projects/index', [
            'categories' => $categories,
            'projects' => Project::with(['categories' => function ($query) {
                $query->select('id', 'name as categoria');
            }])->latest()->get(),
        ]);
    }


    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string',
            'descripcion' => 'required|string',
            'url' => 'required',
            'image' => 'required|string',
            'start_date' => 'required|string',
            'end_date' => 'required|string',
            'categories_id' => 'required',
        ]);


        $cronograma = Project::create([
            'name' => $request->name,
            'descripcion' =>  $request->descripcion,
            'url' =>  $request->url,
            'image' => $request->image,
            'start_date' => $request->start_date,
            'end_date' => $request->end_date,
            'categories_id' => $request->categories_id,
        ]);

        return redirect()->route('projects.index')->with('success', 'Proyecto Creado Exitosamente');



    }

    public function update(Request $request, Project $project)
    {
        // $this->authorize('update',$project);
        $validated = $request->validate([
            'name' => 'required|string',
            'descripcion' => 'required|string',
            'url' => 'required',
            'image' => 'required|string',
            'start_date' => 'required|string',
            'end_date' => 'required|string',

        ]);
        // return response()->json($validated);
        $project->update($validated);
        return redirect(route('projects.index'));

    }


    public function destroy(Project $project)
    {

    }
}
