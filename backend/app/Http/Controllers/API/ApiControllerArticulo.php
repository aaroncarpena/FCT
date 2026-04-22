<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreArticuloRequest;
use App\Http\Requests\UpdateArticuloRequest;
use App\Models\Articulo;

class ApiControllerArticulo extends Controller
{
    public function index()
    {
        return response()->json(Articulo::all());
    }

    public function show(Articulo $articulo)
    {
        return response()->json($articulo);
    }

    public function store(StoreArticuloRequest $request)
    {
        $articulo = Articulo::create($request->validated());

        return response()->json($articulo, 201);
    }

    public function update(UpdateArticuloRequest $request, Articulo $articulo)
    {
        $articulo->update($request->validated());

        return response()->json($articulo);
    }

    public function destroy(Articulo $articulo)
    {
        $articulo->delete();

        return response()->json(null, 204);
    }
}
