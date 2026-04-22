<?php

namespace Database\Factories;

use App\Models\Articulo;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends Factory<Articulo>
 */
class ArticuloFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $title = fake()->sentence(5, false);

        return [
            'title'        => $title,
            'slug'         => Str::slug($title) . '-' . fake()->unique()->randomNumber(4),
            'excerpt'      => fake()->sentence(20),
            'body'         => fake()->paragraphs(6, true),
            'status'       => fake()->randomElement(['draft', 'published']),
            'published_at' => fake()->dateTimeBetween('-1 year', 'now'),
        ];
    }
    public function published(): static
    {
        return $this->state(['status' => 'published', 'published_at' => now()]);
    }

    public function draft(): static
    {
        return $this->state(['status' => 'draft', 'published_at' => null]);
    }
}
