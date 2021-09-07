<?php

namespace Database\Seeders;

use App\Models\HelpRequestStatus;
use Illuminate\Database\Seeder;

class HelpRequestStatusesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        HelpRequestStatus::create([
            'id' => 1,
            'name' => 'PENDING'
        ]);

        HelpRequestStatus::create([
            'id' => 2,
            'name' => 'ACCEPTED'
        ]);

        HelpRequestStatus::create([
            'id' => 3,
            'name' => 'REJECTED'
        ]);
    }
}
