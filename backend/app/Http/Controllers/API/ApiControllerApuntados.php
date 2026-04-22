<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreApuntadosRequest;
use App\Http\Requests\UpdateApuntadosRequest;
use App\Models\Apuntados;

class ApiControllerApuntados extends Controller
{
    public function index()
    {
        return response()->json(Apuntados::with('workshop')->get());
    }

    public function show(Apuntados $apuntados)
    {
        return response()->json($apuntados->load('workshop'));
    }

    public function store(StoreApuntadosRequest $request)
    {
        $apuntados = Apuntados::create($request->validated());

        return response()->json($apuntados->load('workshop'), 201);
    }

    public function update(UpdateApuntadosRequest $request, Apuntados $apuntados)
    {
        $apuntados->update($request->validated());

        return response()->json($apuntados);
    }

    public function destroy(Apuntados $apuntados)
    {
        $apuntados->delete();

        return response()->json(null, 204);
    }
}
