<?php

namespace Database\Seeders;

use App\Models\Apuntados;
use App\Models\Taller;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ApuntadosSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $workshops = Taller::all();
        $users     = User::where('role', 'customer')->get();

        foreach ($users->take(5) as $user) {
            $workshop = $workshops->random();
            Apuntados::factory()->forUser($user)->create([
                'workshop_id' => $workshop->id,
            ]);
        }

        Apuntados::factory(10)->create([
            'workshop_id' => $workshops->random()->id,
            'user_id'     => null,
        ]);
    }
}
