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
    <section id="configuration">
        <div class="row match-height">
            <div class="col-xl-6 col-lg-12">
                <div class="card">
                    <div class="card-header border-0">
                        <h4 class="card-title">Detail User</h4>
                        <a class="heading-elements-toggle"><i class="fa fa-ellipsis-v font-medium-3"></i></a>
                    </div>
                    <div class="card-content">
                        <div class="card-body">
                            <div id="area-chart" class="height-280">
                                <div class="row">
                                    <div class="col-5">
                                        <p class="font-size">Name </p>
                                    </div>
                                    <div class="col-6">
                                        <p class="text-capitalize">: {{ $user->name }}</p>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-5">
                                        <p class="font-size">Nama Pengguna </p>
                                    </div>
                                    <div class="col-6">
                                        <p class="text-capitalize">: {{ $user->username }}</p>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-5">
                                        <p class="font-size">Profesi</p>
                                    </div>
                                    <div class="col-6">
                                        <p>: {{ $user->profession }}</p>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-5">
                                        <p class="font-size">Alamat</p>
                                    </div>
                                    <div class="col-6">
                                        <p>: {{ $user->address }}</p>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-5">
                                        <p class="font-size">Email</p>
                                    </div>
                                    <div class="col-6">
                                        <p>: {{ $user->email }}</p>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-5">
                                        <p class="font-size">Dokumen Verifikasi</p>
                                    </div>
                                    <div class="col-6">

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xl-6 col-lg-12">
                <div class="card">
                    <div class="card-header border-0">
                        {{$user->document}}
                        {{-- <img src="{{$user->document}}" alt="" height="30px" width="30px"> --}}
                        <img src="{{url($user->document)}}" alt="" height="30px" width="30px">
                        {{-- <img src="{{asset("storage/".$user->document)}}" alt="" height="30px" width="30px"> --}}

                    </div>
                </div>
            </div>
        </div>
    </section>
@endsection
