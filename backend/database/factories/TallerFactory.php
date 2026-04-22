<?php

namespace Database\Factories;

use App\Models\Taller;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends Factory<Taller>
 */
class TallerFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $title    = fake()->sentence(4, false);
        $startsAt = fake()->dateTimeBetween('now', '+6 months');

        return [
            'title'       => $title,
            'slug'        => Str::slug($title) . '-' . fake()->unique()->randomNumber(4),
            'description' => fake()->paragraph(),
            'price'       => fake()->randomFloat(2, 20, 150),
            'starts_at'   => $startsAt,
            'ends_at'     => fake()->dateTimeBetween($startsAt, '+7 months'),
            'seats_total' => fake()->numberBetween(5, 30),
            'seats_taken' => 0,
            'location'    => fake()->randomElement([null, fake()->city(), 'Online']),
            'status'      => 'published',
        ];
    }
    public function full(): static
    {
        return $this->state(fn (array $attributes) => [
            'seats_taken' => $attributes['seats_total'],
            'status'      => 'full',
        ]);
    }

    public function draft(): static
    {
        return $this->state(['status' => 'draft']);
    }
}
