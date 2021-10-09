@extends('layouts.default')

@section('title', 'Help Covid-19')

@section('content')
<section id="description" class="card">
    <div class="card-header">
      <h4 class="card-title">{{$data_covid->user->name}}</h4>
    </div>
    <div class="card-content">
      <div class="card-body">
          <div class="card-image">

          </div>
        <div class="card-text">
          <p>
                judul : <br>
                {{$data_covid ->name}}
          </p>
          <p>
                category : <br>
                {{$category->category->name}}
          </p>
          <p>
                status : <br>
                {{$status->status->name}}
          </p>
          <p>
                deskripsi : <br>
                {{$data_covid->description}}
          </p>
          <p>

          </p>
        </div>
      </div>
    </div>
  </section>
@endsection
