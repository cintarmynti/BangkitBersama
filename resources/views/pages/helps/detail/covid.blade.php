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
                        <h4 class="card-title">{{ $data_covid->user->name }}</h4>
                        <a class="heading-elements-toggle"><i class="fa fa-ellipsis-v font-medium-3"></i></a>
                    </div>
                    <div class="card-content">
                        <div class="card-body">
                            <div id="area-chart" class="height-280">
                                <div class="row">
                                    <div class="col-3">
                                        <p class="font-size">Judul </p>
                                    </div>
                                    <div class="col-6">
                                        <p class="text-capitalize">: {{ $data_covid->name }}</p>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-3">
                                        <p class="font-size">Category </p>
                                    </div>
                                    <div class="col-6">
                                        <p class="text-capitalize">: {{ $category->category->name }}</p>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-3">
                                        <p class="font-size">status</p>
                                    </div>
                                    <div class="col-6">
                                        <p>: {{ $status->status->name }}</p>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-3">
                                        <p class="font-size">deskripsi</p>
                                    </div>
                                    <div class="col-8">
                                        <p>: {{ $data_covid->description }}</p>
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

                    </div>
                </div>
            </div>


        </div>
    </section>
@endsection
