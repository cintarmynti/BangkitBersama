<!DOCTYPE html>
<html class="loading" lang="en" data-textdirection="ltr">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0, minimal-ui">
  <meta name="description" content="Stack admin is super flexible, powerful, clean &amp; modern responsive bootstrap 4 admin template with unlimited possibilities.">
  <meta name="keywords" content="admin template, stack admin template, dashboard template, flat admin template, responsive admin template, web app">
  <meta name="author" content="PIXINVENT">
  <title>BangkitBersama - @yield('title')</title>
  <link rel="apple-touch-icon" href="{{asset('app-assets/images/logo/bangkit-bersama.png')}}">
  <link rel="shortcut icon" type="image/x-icon" href="{{asset('app-assets/images/logo/bangkit-bersama.png')}}">
  <link href="https://fonts.googleapis.com/css?family=Montserrat:300,300i,400,400i,500,500i%7COpen+Sans:300,300i,400,400i,600,600i,700,700i"
  rel="stylesheet">
  <!-- BEGIN VENDOR CSS-->
    @include('includes.style')
  <!-- END Custom CSS-->
</head>
<body class="vertical-layout vertical-menu 2-columns   menu-expanded fixed-navbar"
data-open="click" data-menu="vertical-menu" data-col="2-columns">
  <!-- fixed-top-->
    {{-- navbar --}}
    @include('includes.navbar')
    {{-- sidebar --}}
    @include('includes.sidebar')
  <div class="app-content content">
    <div class="content-wrapper">
        {{-- content --}}
        @yield('content')
    </div>
  </div>

  {{-- footer --}}
  @include('includes.footer')
  <!-- BEGIN VENDOR JS-->
  @include('includes.script')
  <!-- END PAGE LEVEL JS-->
</body>
</html>
