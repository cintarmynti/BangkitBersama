<?php

namespace Database\Seeders;
use App\Models\Help;

use Illuminate\Database\Seeder;
use Carbon\Carbon;

class HelpsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Help::create([
            'id' => 1,
            'help_category_id' => 1,
            'user_id' => 3,
            'photo' => 'test',
            'name' => 'wulandari',
            'description' => 'ya gitu deh',
            'quota' => 3,
            'end_date' => Carbon::parse('2000-01-01'),
            'help_status_id' => 1
        ]);

        Help::create([
            'id' => 2,
            'help_category_id' => 2,
            'user_id' => 4,
            'photo' => 'test',
            'name' => 'safana',
            'description' => 'ya gitu deh',
            'quota' => 2,
            'end_date' => Carbon::parse('2021-01-01'),
            'help_status_id' => 1
        ]);

        Help::create([
            'id' => 3,
            'help_category_id' => 3,
            'user_id' => 5,
            'photo' => 'test',
            'name' => 'reno',
            'description' => 'ya gitu deh',
            'quota' => 4,
            'end_date' => Carbon::parse('2021-06-17'),
            'help_status_id' => 1
        ]);

        Help::create([
            'id' => 4,
            'help_category_id' => 4,
            'user_id' => 6,
            'photo' => 'test',
            'name' => 'upin',
            'description' => 'ya gitu deh',
            'quota' => 4,
            'end_date' => Carbon::parse('2021-08-13'),
            'help_status_id' => 1
        ]);
    }
}
