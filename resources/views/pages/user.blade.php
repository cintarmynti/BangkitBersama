@extends('layouts.default')

@section('title', 'User')

@section('content')
<section id="configuration">
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-header">
            <h4 class="card-title">Tabel User</h4>
            <a class="heading-elements-toggle"><i class="fa fa-ellipsis-v font-medium-3"></i></a>
          </div>
          <div class="card-content collapse show">
            <div class="card-body card-dashboard">
                <p class="card-text"></p>
                <table class="table table-striped table-bordered zero-configuration">
                  <thead>
                        <tr>
                            <th>Email</th>
                            <th>Nama</th>
                            <th>Alamat</th>
                            <th>Action</th>
                        </tr>
                  </thead>
                  <tbody>
                    @foreach ($users as $user)
                        <td>{{$user -> email}}</td>
                        <td>{{$user -> name}}</td>
                        <td>{{$user -> address}}</td>
                        <td>
                            <form method="POST" action="{{ url('posts', $user->id ) }}">
                                @csrf
                                @method('DELETE')
                            <button type="button" class="btn btn-sm btn-icon btn-danger"><i class="fa fa-trash"></i></button>
                            </form>
                        </td>
                    @endforeach

                  </tbody>

                    </table>
              </div>
           </div>
        </div>
      </div>
    </div>
  </section>
@endsection

@push('data-tables')

<script src="{{asset('app-assets/vendors/js/vendors.min.js')}}" type="text/javascript"></script>
<!-- BEGIN VENDOR JS-->
<!-- BEGIN PAGE VENDOR JS-->
<script src="{{asset('app-assets/vendors/js/tables/datatable/datatables.min.js')}}" type="text/javascript"></script>
<!-- END PAGE VENDOR JS-->
<!-- BEGIN STACK JS-->
<script src="{{asset('app-assets/js/core/app-menu.js')}}" type="text/javascript"></script>
<script src="{{asset('app-assets/js/core/app.js')}}" type="text/javascript"></script>
<script src="{{asset('app-assets/js/scripts/customizer.js')}}" type="text/javascript"></script>
<!-- END STACK JS-->
<!-- BEGIN PAGE LEVEL JS-->
<script src="{{asset('app-assets/js/scripts/tables/datatables/datatable-basic.js')}}"
type="text/javascript"></script>
@endpush

@push('style')
  <link rel="stylesheet" type="text/css" href="{{asset('app-assets/vendors/css/tables/datatable/datatables.min.css')}}">

@endpush

