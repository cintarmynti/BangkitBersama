@extends('layouts.default')

@section('title', 'Help Covid-19')

@section('content')
    <section id="description" class="card">
        <div class="card-header">
            <h3 class="card-title">{{ $data_ekonomi->user->name }}</h3>
        </div>
        <div class="card-content">
            <div class="card-body">
                <div class="card-image">

                </div>
                <div class="card-text">
                    <div>
                        <h5  class="text-capitalize">
                            judul :
                        </h5>
                        <p>
                            {{ $data_ekonomi->name }}
                        </p>
                    </div>

                    <div>
                        <h5  class="text-capitalize">
                            category :
                        </h5>
                        <p>
                            {{ $category->category->name }}
                        </p>
                    </div>

                    <div>
                        <h5  class="text-capitalize">
                            status :
                        </h5>
                        <p>
                            {{ $status->status->name }}
                        </p>
                    </div>

                    <div>
                        <h5  class="text-capitalize">
                            deskripsi :
                        </h5>
                        <p>
                            {{ $data_ekonomi->description }}
                        </p>
                    </div>



                </div>
            </div>
        </div>
    </section>
@endsection
