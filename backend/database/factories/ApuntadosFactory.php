<?php

namespace Database\Factories;

use App\Models\Apuntados;
use App\Models\Taller;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<Apuntados>
 */
class ApuntadosFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'workshop_id' => Taller::factory(),
            'user_id'     => null,
            'name'        => fake()->name(),
            'email'       => fake()->safeEmail(),
            'phone'       => fake()->phoneNumber(),
        ];
    }
    public function forUser(User $user): static
    {
        return $this->state([
            'user_id' => $user->id,
            'name'    => $user->name,
            'email'   => $user->email,
            'phone'   => $user->phone,
        ]);
    }
}
