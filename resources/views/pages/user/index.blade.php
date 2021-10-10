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
          @if(Session::has('message'))
            <div class="alert alert-success w-50  ml-2" role="alert">
            {{Session::get('message')}}
          </div>
          @endif
          
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
                    <tr>
                        <td>{{$user->email}}</td>
                        <td>{{$user->name}}</td>
                        <td>{{$user->address}}</td>
                        <td>
                          <a href="user/{{$user->id}}">
                          <button class="btn btn-primary" data-toggle="tooltip" data-placement="top" title="View Detail user">
                            <i class="fa fa-eye"></i> 
                          </button></a>
                         
                          @if ($user->user_status_id != 3)
                          <button  data-verified="{{$user->id}}"  class="verified-btn btn btn-success" data-toggle="modal" data-target="#verificationModal" data-toggle="tooltip" data-placement="top" title="Verification User">
                            <i class="fa fa-check"></i> 
                          </button>
                          @endif
                          @if ($user->user_status_id != 1)
                          <button  data-unverified="{{$user->id}}"  class="unverified-btn btn btn-danger" data-toggle="modal" data-target="#unVerificationModal" data-toggle="tooltip" data-placement="top" title="unVerification User">
                            <i class="fa fa-times"></i> 
                          </button>
                          @endif
                         
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

  <div class="modal fade" id="verificationModal" tabindex="-1" role="dialog" aria-labelledby="verificationModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="verificationModalLabel">Apakah anda yakin ingin verifikasi pengguna berikut?</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-danger" data-dismiss="modal">Tidak</button>
          <form action="{{route('user.verified')}}" method="post">
            @csrf
            @method('PUT')
              <input type="hidden" id="id-verified" name="id">
              <button type="submit" class="btn btn-primary">Ya</button>
          </form>
        </div>
      </div>
    </div>
  </div>

  <div class="modal fade" id="unVerificationModal" tabindex="-1" role="dialog" aria-labelledby="unVerificationModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="unVerificationModalLabel">Apakah anda yakin ingin menolak verifikasi pengguna berikut?</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-danger" data-dismiss="modal">Tidak</button>
          <form action="{{route('user.unverified')}}" method="post">
            @csrf
            @method('PUT')
              <input type="hidden" id="id-unverified" name="id">
              <button type="submit" class="btn btn-primary">Ya</button>
          </form>
        </div>
      </div>
    </div>
  </div>
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

@push('script')
<script>
   const verifiedBtn = Array.from(document.getElementsByClassName('verified-btn'))

   verifiedBtn.forEach(function(btn) {
      btn.addEventListener('click', function(){
        const id = this.getAttribute('data-verified');
        document.getElementById('id-verified').value = id;
      })
   })

   const unverifiedBtn = Array.from(document.getElementsByClassName('unverified-btn'))

    unverifiedBtn.forEach(function(btn) {
      btn.addEventListener('click', function(){
        const id = this.getAttribute('data-unverified');
        document.getElementById('id-unverified').value = id;
      })
    })
</script>
@endpush

