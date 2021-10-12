<?php

namespace Database\Seeders;

use App\Models\HelpStatus;
use Illuminate\Database\Seeder;

class HelpStatusesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        HelpStatus::create([
            'id' => 1,
            'name' => 'PENDING'
        ]);

        HelpStatus::create([
            'id' => 2,
            'name' => 'ACCEPTED'
        ]);

        HelpStatus::create([
            'id' => 3,
            'name' => 'REJECTED'
        ]);

        HelpStatus::create([
            'id' => 4,
            'name' => 'ENDED'
        ]);
    }
}
