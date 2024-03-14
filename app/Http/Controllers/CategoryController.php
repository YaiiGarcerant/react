<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;
use Inertia\Inertia;
class CategoryController extends Controller
{

    public function index()
    {
        return Inertia::render('categories/index',[
            
        ]);
    }
    public function store(Request $request)
    {

    }
    public function update(Request $request, Category $category)
    {

    }

    public function destroy(Category $category)
    {

    }
}
