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
            'profession' => 'dokter',
            'photo' => 'assets/photo/profile/tx3RirIqG0GECaYUzCGmV28Uckag0hCgl2laPoEn.png',
            'name' => 'Ampersand Team',
            'username' => 'Ampersand',
            'address' => 'Surabaya, Jawa Timur',
            'email' => 'ampersandtechsolution@gmail.com',
            'password' => bcrypt('password123'),
            'document' => 'assets/document/institution/ICxvy6r6IkPNxhGxjjvKKZmsp1LmhMfCaVZnKwBQ.jpg',
            'user_status_id' => 3
        ]);

        User::create([
            'role_id' => 2,
            'profession' => 'dokter',
            'photo' => 'assets/photo/profile/tx3RirIqG0GECaYUzCGmV28Uckag0hCgl2laPoEn.png',
            'name' => 'Nadia Wulandari',
            'username' => 'wulan',
            'address' => 'Lamongan, Jawa Timur',
            'email' => 'wulandari@gmail.com',
            'password' => bcrypt('password123'),
            'document' => 'assets/document/institution/ICxvy6r6IkPNxhGxjjvKKZmsp1LmhMfCaVZnKwBQ.jpg',
            'user_status_id' => 2
        ]);

        User::create([
            'role_id' => 2,
            'profession' => 'dokter',
            'photo' => 'assets/photo/profile/tx3RirIqG0GECaYUzCGmV28Uckag0hCgl2laPoEn.png',
            'name' => 'maulana ikhsan',
            'username' => 'lana',
            'address' => 'Jombang, Jawa Timur',
            'email' => 'jomban@gmail.com',
            'password' => bcrypt('password123'),
            'document' => 'assets/document/institution/ICxvy6r6IkPNxhGxjjvKKZmsp1LmhMfCaVZnKwBQ.jpg',
            'user_status_id' => 2
        ]);

        User::create([
            'role_id' => 2,
            'profession' => 'dokter',
            'photo' => 'assets/photo/profile/tx3RirIqG0GECaYUzCGmV28Uckag0hCgl2laPoEn.png',
            'name' => 'aprilia amanda',
            'username' => 'april',
            'address' => 'telungagung, Jawa Timur',
            'email' => 'manda@gmail.com',
            'password' => bcrypt('password123'),
            'document' => 'assets/document/institution/ICxvy6r6IkPNxhGxjjvKKZmsp1LmhMfCaVZnKwBQ.jpg',
            'user_status_id' => 2
        ]);

        User::create([
            'role_id' => 2,
            'profession' => 'dokter',
            'photo' => 'assets/photo/profile/tx3RirIqG0GECaYUzCGmV28Uckag0hCgl2laPoEn.png',
            'name' => 'eriko dewantoro',
            'username' => 'riko',
            'address' => 'Mojokerto, Jawa Timur',
            'email' => 'eriko@gmail.com',
            'password' => bcrypt('password123'),
            'document' => 'assets/document/institution/ICxvy6r6IkPNxhGxjjvKKZmsp1LmhMfCaVZnKwBQ.jpg',
            'user_status_id' => 2
        ]);

        User::create([
            'role_id' => 2,
            'profession' => 'dokter',
            'photo' => 'assets/photo/profile/tx3RirIqG0GECaYUzCGmV28Uckag0hCgl2laPoEn.png',
            'name' => 'khansa nabila',
            'username' => 'sasa',
            'address' => 'Malang, Jawa Timur',
            'email' => 'sasa@gmail.com',
            'password' => bcrypt('password123'),
            'document' => 'assets/document/institution/ICxvy6r6IkPNxhGxjjvKKZmsp1LmhMfCaVZnKwBQ.jpg',
            'user_status_id' => 2
        ]);


        User::create([
            'role_id' => 2,
            'profession' => 'dokter',
            'photo' => 'assets/photo/profile/tx3RirIqG0GECaYUzCGmV28Uckag0hCgl2laPoEn.png',
            'name' => 'lanang pramudia',
            'username' => 'tian',
            'address' => 'Magetan, Jawa Timur',
            'email' => 'tian@gmail.com',
            'password' => bcrypt('password123'),
            'document' => 'assets/document/institution/ICxvy6r6IkPNxhGxjjvKKZmsp1LmhMfCaVZnKwBQ.jpg',
            'user_status_id' => 2
        ]);

        User::create([
            'role_id' => 2,
            'profession' => 'dokter',
            'photo' => 'assets/photo/profile/tx3RirIqG0GECaYUzCGmV28Uckag0hCgl2laPoEn.png',
            'name' => 'Naufanda Aditiya zulfa',
            'username' => 'naufan',
            'address' => 'Magetan, Jawa Timur',
            'email' => 'Naufan@gmail.com',
            'password' => bcrypt('password123'),
            'document' => 'assets/document/institution/ICxvy6r6IkPNxhGxjjvKKZmsp1LmhMfCaVZnKwBQ.jpg',
            'user_status_id' => 2
        ]);

        User::create([
            'role_id' => 2,
            'profession' => 'dokter',
            'photo' => 'assets/photo/profile/tx3RirIqG0GECaYUzCGmV28Uckag0hCgl2laPoEn.png',
            'name' => 'Maulida Amelia Ayu Hapsari',
            'username' => 'maulida',
            'address' => 'Kediri, Jawa Timur',
            'email' => 'Maulida@gmail.com',
            'password' => bcrypt('password123'),
            'document' => 'assets/document/institution/ICxvy6r6IkPNxhGxjjvKKZmsp1LmhMfCaVZnKwBQ.jpg',
            'user_status_id' => 2
        ]);

        User::create([
            'role_id' => 2,
            'profession' => 'dokter',
            'photo' => 'assets/photo/profile/tx3RirIqG0GECaYUzCGmV28Uckag0hCgl2laPoEn.png',
            'name' => 'Risti Aprialia yasmin',
            'username' => 'Risti',
            'address' => 'Jombang, Jawa Timur',
            'email' => 'liaa@gmail.com',
            'password' => bcrypt('password123'),
            'document' => 'assets/document/institution/ICxvy6r6IkPNxhGxjjvKKZmsp1LmhMfCaVZnKwBQ.jpg',
            'user_status_id' => 2
        ]);

        User::create([
            'role_id' => 2,
            'profession' => 'dokter',
            'photo' => 'assets/photo/profile/tx3RirIqG0GECaYUzCGmV28Uckag0hCgl2laPoEn.png',
            'name' => 'Cinta Ramayanti',
            'username' => 'cinta',
            'address' => 'Trenggalek, Jawa Timur',
            'email' => 'cinta@gmail.com',
            'password' => bcrypt('password123'),
            'document' => 'assets/document/institution/ICxvy6r6IkPNxhGxjjvKKZmsp1LmhMfCaVZnKwBQ.jpg',
            'user_status_id' => 2
        ]);

        User::create([
            'role_id' => 2,
            'profession' => 'dokter',
            'photo' => 'assets/photo/profile/tx3RirIqG0GECaYUzCGmV28Uckag0hCgl2laPoEn.png',
            'name' => 'Dimas Adi Prayoga',
            'username' => 'dimdim',
            'address' => 'Surga, Akhirat',
            'email' => 'dimas@gmail.com',
            'password' => bcrypt('password123'),
            'document' => 'assets/document/institution/ICxvy6r6IkPNxhGxjjvKKZmsp1LmhMfCaVZnKwBQ.jpg',
            'user_status_id' => 2
        ]);
    }
}
