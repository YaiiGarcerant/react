<?php

namespace App\Http\Controllers;

use App\Models\Project;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProjectController extends Controller
{

    public function index()
    {
        return Inertia::render('projects/index',[

        ]);
    }


    public function store(Request $request)
    {

    }

    public function update(Request $request, Project $project)
    {

    }


    public function destroy(Project $project)
    {

    }
}
