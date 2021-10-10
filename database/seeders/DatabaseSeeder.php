<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call(RolesTableSeeder::class);
        $this->call(UsersTableSeeder::class);
        $this->call(UserStatusesTableSeeder::class);
        $this->call(HelpCategoriesTableSeeder::class);
        $this->call(HelpRequestStatusesTableSeeder::class);
        $this->call(HelpStatusesTableSeeder::class);
        $this->call(HelpsTableSeeder::class);
    }
}
