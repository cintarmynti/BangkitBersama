<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            'role_id' => 1,
            'name' => 'Ampersand Team',
            'email' => 'ampersandtechsolution@gmail.com',
            'password' => bcrypt('password123')
        ]);
    }
}
