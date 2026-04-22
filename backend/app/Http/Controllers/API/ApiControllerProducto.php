<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreProductoRequest;
use App\Http\Requests\UpdateProductoRequest;
use App\Models\Producto;

class ApiControllerProducto extends Controller
{
    public function index()
    {
        return response()->json(Producto::all());
    }

    public function show(Producto $producto)
    {
        return response()->json($producto);
    }

    public function store(StoreProductoRequest $request)
    {
        $producto = Producto::create($request->validated());

        return response()->json($producto, 201);
    }

    public function update(UpdateProductoRequest $request, Producto $producto)
    {
        $producto->update($request->validated());

        return response()->json($producto);
    }

    public function destroy(Producto $producto)
    {
        $producto->delete();

        return response()->json(null, 204);
    }
}
