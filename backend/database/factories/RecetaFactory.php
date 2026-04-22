<?php

namespace Database\Factories;

use App\Models\Receta;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends Factory<Receta>
 */
class RecetaFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $title = fake()->sentence(4, false);

        return [
            'title'        => $title,
            'slug'         => Str::slug($title) . '-' . fake()->unique()->randomNumber(4),
            'excerpt'      => fake()->sentence(15),
            'body'         => fake()->paragraphs(5, true),
            'prep_time'    => fake()->randomElement(['10 min', '15 min', '20 min', '30 min']),
            'cook_time'    => fake()->randomElement(['20 min', '30 min', '45 min', '1 hora']),
            'servings'     => fake()->numberBetween(1, 8),
            'difficulty'   => fake()->randomElement(['easy', 'medium', 'hard']),
            'ingredients'  => [
                ['amount' => '200g', 'name' => 'pollo'],
                ['amount' => '1 ud', 'name' => 'cebolla'],
                ['amount' => '2 dientes', 'name' => 'ajo'],
            ],
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
