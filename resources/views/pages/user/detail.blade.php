@extends('layouts.default')

@section('title', 'Detail User')

@push('style')
    <style>
        .font-size {
            font-size: 16px;
        }

    </style>
@endpush

@section('content')
<section id="description" class="card">
    <div class="card-header">
      <h4 class="card-title">Detail User</h4>
    </div>
    <div class="card-content">
      <div class="card-body">
        <div class="card-text">
            <table class="table table-column">
                <tr>
                    <td class="font-size">Name</td>
                    <td class="font-size"><p class="text-capitalize">{{ $user->name }}</p></td>
                </tr>
                <tr>
                    <td class="font-size">Nama Pengguna</td>
                    <td class="font-size"><p class="text-capitalize">{{ $user->username }}</p></td>
                </tr>
                <tr>
                    <td class="font-size">Profesi</td>
                    <td class="font-size"><p class="text-capitalize">{{ $user->profession }}</p></td>
                </tr>
                <tr>
                    <td class="font-size">Alamat</td>
                    <td class="font-size"> <p class="text-capitalize">{{ $user->address }}</p></td>
                </tr>
                <tr>
                    <td class="font-size">Email</td>
                    <td class="font-size">{{ $user->email }}</td>
                </tr>
                <tr>
                    <td class="font-size">Dokumen Verifikasi</td>
                    <td class="font-size">
                        <a class="btn btn-secondary" href="{{url($user->document)}}">
                            <i class="fa fa-file-o"></i>
                        </a>
                    </td>
                </tr>
                <tr>
                    <td class="font-size">User Photo</td>
                    <td class="font-size">
                        <a class="btn btn-primary" href="{{url($user->photo)}}">
                            <i class="fa fa-picture-o"></i>
                        </a>
                    </td>
                </tr>
            </table>
        </div>
      </div>
    </div>
  </section>
@endsection
