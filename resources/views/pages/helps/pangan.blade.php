@extends('layouts.default')

@section('title', 'Help Pangan')

@section('content')
<section id="configuration">
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-header">
            <h4 class="card-title">Tabel Pangan</h4>
            <a class="heading-elements-toggle"><i class="fa fa-ellipsis-v font-medium-3"></i></a>
          </div>
          <div class="card-content collapse show">
            <div class="card-body card-dashboard">

                <table class="table table-striped table-bordered zero-configuration">
                  <thead>
                    <tr>
                      <th>Judul</th>
                      <th>Inisiator</th>
                      <th>Kuota</th>
                      <th>Start date</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    @foreach ($data_pangan as $pangan)
                    <tr>
                      <td>{{$pangan -> name}}</td>
                      <td>{{$pangan -> user->name}}</td>
                      <td>{{$pangan -> quota}}</td>
                      <td>{{$pangan -> end_date}}</td>
                      <td>
                        <a href="{{route('pangan.status', $pangan->id)}}?help_status_id=1" class="btn btn-warning
                            @if ($pangan->help_status_id == 1)
                                disabled
                            @endif">
                            <i class="ft-clock"></i>
                        </a>
                        <a href="{{route('pangan.status', $pangan->id)}}?help_status_id=2" class="btn btn-success
                            @if ($pangan->help_status_id == 2)
                                disabled
                            @endif">
                            <i class="ft-check-square"></i>
                        </a>
                        <a href="{{route('pangan.status', $pangan->id)}}?help_status_id=3" class="btn btn-danger
                            @if ($pangan->help_status_id == 3)
                                disabled
                            @endif">
                            <i class="ft-x-square"></i>
                        </a>
                        <a href="{{route('pangan.detail', $pangan->id)}}" class="btn btn-info">
                            <i class="ft-eye"></i>
                        </a>
                      </td>
                    </tr>
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

