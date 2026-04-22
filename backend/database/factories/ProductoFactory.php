<?php

namespace Database\Factories;

use App\Models\Producto;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends Factory<Producto>
 */
class ProductoFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $name = fake()->words(3, true);
        return [
            'name'        => ucfirst($name),
            'slug'        => Str::slug($name) . '-' . fake()->unique()->randomNumber(4),
            'description' => fake()->paragraph(),
            'price'       => fake()->randomFloat(2, 5, 200),
            'stock'       => fake()->numberBetween(0, 100),
            'active'      => true,
            'category'    => fake()->randomElement(['Suplementos', 'Libros', 'Menús', 'Otros']),
        ];
    }
}
