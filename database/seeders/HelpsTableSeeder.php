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
        //maulana ikhsan
        Help::create([
            'id' => 1,
            'help_category_id' => 1,
            'user_id' => 3,
            'photo' => 'assets/document/institution/ICxvy6r6IkPNxhGxjjvKKZmsp1LmhMfCaVZnKwBQ.jpg',
            'name' => 'bantu covid',
            'description' => 'ya gitu deh',
            'quota' => 3,
            'end_date' => Carbon::parse('2000-01-01'),
            'help_status_id' => 1
        ]);

        //apriia amanda
        Help::create([
            'id' => 2,
            'help_category_id' => 2,
            'user_id' => 4,
            'photo' => 'assets/document/institution/ICxvy6r6IkPNxhGxjjvKKZmsp1LmhMfCaVZnKwBQ.jpg',
            'name' => 'bantu ekonomi',
            'description' => 'ya gitu deh',
            'quota' => 2,
            'end_date' => Carbon::parse('2021-01-01'),
            'help_status_id' => 1
        ]);

        //eriko dewantoro
        Help::create([
            'id' => 3,
            'help_category_id' => 3,
            'user_id' => 5,
            'photo' => 'assets/document/institution/ICxvy6r6IkPNxhGxjjvKKZmsp1LmhMfCaVZnKwBQ.jpg',
            'name' => 'bantu pangan',
            'description' => 'ya gitu deh',
            'quota' => 4,
            'end_date' => Carbon::parse('2021-06-17'),
            'help_status_id' => 1
        ]);

        //khansa nabila
        Help::create([
            'id' => 4,
            'help_category_id' => 4,
            'user_id' => 6,
            'photo' => 'assets/document/institution/ICxvy6r6IkPNxhGxjjvKKZmsp1LmhMfCaVZnKwBQ.jpg',
            'name' => 'bant jasa',
            'description' => 'ya gitu deh',
            'quota' => 4,
            'end_date' => Carbon::parse('2021-08-13'),
            'help_status_id' => 1
        ]);

        //lanang prmudia
        Help::create([
            'id' => 5,
            'help_category_id' => 1, //covid
            'user_id' => 7,
            'photo' => 'assets/document/institution/ICxvy6r6IkPNxhGxjjvKKZmsp1LmhMfCaVZnKwBQ.jpg',
            'name' => 'bant covid',
            'description' => 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita magni ipsam vero odit officiis. Quam sint a quae voluptatum obcaecati libero amet deserunt voluptatem nam iure. Sunt tenetur culpa reiciendis!',
            'quota' => 4,
            'end_date' => Carbon::parse('2021-08-13'),
            'help_status_id' => 1 //pending
        ]);

        //Naufanda aditya
        Help::create([
            'id' => 6,
            'help_category_id' => 2, //ekonomi
            'user_id' => 8,
            'photo' => 'assets/document/institution/ICxvy6r6IkPNxhGxjjvKKZmsp1LmhMfCaVZnKwBQ.jpg',
            'name' => 'memberi bantuan ekonomi pd naufanda',
            'description' => 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita magni ipsam vero odit officiis. Quam sint a quae voluptatum obcaecati libero amet deserunt voluptatem nam iure. Sunt tenetur culpa reiciendis!',
            'quota' => 4,
            'end_date' => Carbon::parse('2021-08-13'),
            'help_status_id' => 1 //pending
        ]);

         //maulida amelia
         Help::create([
            'id' => 7,
            'help_category_id' => 3, //pangan
            'user_id' => 9,
            'photo' => 'assets/document/institution/ICxvy6r6IkPNxhGxjjvKKZmsp1LmhMfCaVZnKwBQ.jpg',
            'name' => 'memberi bantuan pangan pd maulida',
            'description' => 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita magni ipsam vero odit officiis. Quam sint a quae voluptatum obcaecati libero amet deserunt voluptatem nam iure. Sunt tenetur culpa reiciendis!',
            'quota' => 4,
            'end_date' => Carbon::parse('2021-08-13'),
            'help_status_id' => 1 //pending
        ]);

        //risti aprilia
        Help::create([
            'id' => 8,
            'help_category_id' => 4, //jasa
            'user_id' => 10, //risti
            'photo' => 'assets/document/institution/ICxvy6r6IkPNxhGxjjvKKZmsp1LmhMfCaVZnKwBQ.jpg',
            'name' => 'memberi bantuan jasa pada risti',
            'description' => 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita magni ipsam vero odit officiis. Quam sint a quae voluptatum obcaecati libero amet deserunt voluptatem nam iure. Sunt tenetur culpa reiciendis!',
            'quota' => 4,
            'end_date' => Carbon::parse('2021-08-13'),
            'help_status_id' => 1 //pending
        ]);

    }
}
