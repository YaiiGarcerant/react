<?php

namespace App\Http\Controllers;

use App\Models\Task;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TaskController extends Controller
{

    public function index()
    {
        return Inertia::render('tasks/index', [
            'takss' => Task::with('user:id,name')->latest()->get(),
        ]);
    }

    public function store(Request $request)
    {
        //validamos los datos
        $validated = $request->validate([
            'title' => 'required|string',
            'description' => 'required|string',
            'start_date' => 'required|string',
            'end_date' => 'required|string',
        ]);

        $request->user()->tasks()->create($validated);

        return redirect()->route('task.index')->with('success', 'Tarea Creada Exitosamente');

    }


    public function update(Request $request, Task $task)
    {
        // $this->authorize('update',$task);
    }


    public function destroy(Task $task)
    {
        $this->authorize('delete',$task);
        $task->delete();
        return redirect(route('task.index'));
    }
}
