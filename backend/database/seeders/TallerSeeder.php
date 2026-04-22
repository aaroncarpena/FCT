<?php

namespace Database\Seeders;

use App\Models\Taller;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class TallerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Taller::factory(6)->create();
        Taller::factory(2)->full()->create();
        Taller::factory(2)->draft()->create();
    }
}
