<?php

namespace App\Http\Controllers;

use App\Models\Calendar;
use Illuminate\Http\Request;
use Inertia\Inertia;
class CalendarController extends Controller
{

    public function index()
    {
        return Inertia::render('calendars/index',[

        ]);
    }


    public function store(Request $request)
    {

    }
    public function update(Request $request, Calendar $calendar)
    {

    }

    public function destroy(Calendar $calendar)
    {

    }
}
