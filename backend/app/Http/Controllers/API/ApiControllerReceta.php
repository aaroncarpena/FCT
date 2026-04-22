<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreRecetaRequest;
use App\Http\Requests\UpdateRecetaRequest;
use App\Models\Receta;

class ApiControllerReceta extends Controller
{
    public function index()
    {
        return response()->json(Receta::all());
    }

    public function show(Receta $receta)
    {
        return response()->json($receta);
    }

    public function store(StoreRecetaRequest $request)
    {
        $receta = Receta::create($request->validated());

        return response()->json($receta, 201);
    }

    public function update(UpdateRecetaRequest $request, Receta $receta)
    {
        $receta->update($request->validated());

        return response()->json($receta);
    }

    public function destroy(Receta $receta)
    {
        $receta->delete();

        return response()->json(null, 204);
    }
}
