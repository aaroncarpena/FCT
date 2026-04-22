<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreTallerRequest;
use App\Http\Requests\UpdateTallerRequest;
use App\Models\Taller;

class ApiControllerTaller extends Controller
{
    public function index()
    {
        return response()->json(Taller::all());
    }

    public function show(Taller $taller)
    {
        return response()->json($taller);
    }

    public function store(StoreTallerRequest $request)
    {
        $taller = Taller::create($request->validated());

        return response()->json($taller, 201);
    }

    public function update(UpdateTallerRequest $request, Taller $taller)
    {
        $taller->update($request->validated());

        return response()->json($taller);
    }

    public function destroy(Taller $taller)
    {
        $taller->delete();

        return response()->json(null, 204);
    }
}
