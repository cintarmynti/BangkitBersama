@extends('layouts.default')

@section('title', 'Detail User')

@section('content')
<section id="configuration">
    <div class="row">
        <div class="col-12">
          <div class="card">
            <div class="card-header">
              <h4 class="card-title">Detail User</h4>
              <a class="heading-elements-toggle"><i class="fa fa-ellipsis-v font-medium-3"></i></a>
            </div>
            
            <div class="card-content collapse show">
              <div class="card-body card-dashboard">
                  <div class="mb-2">
                    <h3>Nama: </h3>
                    <p>{{$user->name}}</p>
                  </div>
                  <div class="mb-2">
                    <h3>Nama Pengguna: </h3>
                    <p>{{$user->username}}</p>
                  </div>
                  <div class="mb-2">
                    <h3>Profesi: </h3>
                    <p>{{$user->profession}}</p>
                  </div>
                  <div class="mb-2">
                    <h3>Alamat: </h3>
                    <p>{{$user->address}}</p>
                  </div>
                  <div class="mb-2">
                    <h3>Email: </h3>
                    <p>{{$user->email}}</p>
                  </div>
                  <div class="mb-2">
                    <h3>Dokumen Verifikasi: </h3>
                    <p>{{$user->name}}</p>
                  </div>
                </div>
             </div>
          </div>
        </div>
      </div>
</section>
@endsection



