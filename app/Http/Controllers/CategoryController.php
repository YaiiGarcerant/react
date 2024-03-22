<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CategoryController extends Controller
{
    public function index()
    {
        return Inertia::render('categories/index', [
            'categories' => Category::with('user:id,name')->latest()->get(),
        ]);
    }
    public function store(Request $request)
    {
        //validamos los datos
        $validated = $request->validate([
            'name' => 'required|string',
            'descripcion' => 'required|string',
        ]);

        $request->user()->categories()->create($validated);

        return redirect()->route('categories.index')->with('success', 'Categoria Creada Exitosamente');
    }
    public function update(Request $request, Category $category)
    {
        $this->authorize('update',$category);
        $validated = $request->validate([
            'name' => 'required|string',
            'descripcion' => 'required|string',
        ]);
        $category->update($validated);
        return redirect(route('categories.index'));

        }

    public function destroy(Category $category)
    {
        $this->authorize('delete',$category);
        $category->delete();
        return redirect(route('categories.index'));
    }
}
