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
            'username' => 'Ampersand',
            'address' => 'Surabaya, Jawa Timur',
            'email' => 'ampersandtechsolution@gmail.com',
            'password' => bcrypt('password123'),
            'user_status_id' => 3
        ]);

        User::create([
            'role_id' => 2,
            'name' => 'Nadia Wulandari',
            'username' => 'wulan',
            'address' => 'Lamongan, Jawa Timur',
            'email' => 'wulandari@gmail.com',
            'password' => bcrypt('password123'),
            'user_status_id' => 2
        ]);

        User::create([
            'role_id' => 2,
            'name' => 'maulana ikhsan',
            'username' => 'lana',
            'address' => 'Jombang, Jawa Timur',
            'email' => 'jomban@gmail.com',
            'password' => bcrypt('password123'),
            'user_status_id' => 2
        ]);

        User::create([
            'role_id' => 2,
            'name' => 'aprilia amanda',
            'username' => 'april',
            'address' => 'telungagung, Jawa Timur',
            'email' => 'manda@gmail.com',
            'password' => bcrypt('password123'),
            'user_status_id' => 2
        ]);

        User::create([
            'role_id' => 2,
            'name' => 'eriko dewantoro',
            'username' => 'riko',
            'address' => 'Mojokerto, Jawa Timur',
            'email' => 'eriko@gmail.com',
            'password' => bcrypt('password123'),
            'user_status_id' => 2
        ]);
    }
}
