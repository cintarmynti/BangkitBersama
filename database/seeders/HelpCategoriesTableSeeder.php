<?php

namespace Database\Seeders;

use App\Models\HelpCategory;
use Illuminate\Database\Seeder;

class HelpCategoriesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        HelpCategory::create([
            'id' => 1,
            'name' => 'Covid-19'
        ]);

        HelpCategory::create([
            'id' => 2,
            'name' => 'Ekonomi'
        ]);

        HelpCategory::create([
            'id' => 3,
            'name' => 'Pangan'
        ]);

        HelpCategory::create([
            'id' => 4,
            'name' => 'Jasa'
        ]);
    }
}
