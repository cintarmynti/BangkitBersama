<div class="main-menu menu-fixed menu-dark menu-accordion menu-shadow" data-scroll-to-active="true">
    <div class="main-menu-content">
        <ul class="navigation navigation-main" id="main-menu-navigation" data-menu="menu-navigation">
            <li class=" navigation-header">
                <span>General</span>
                <i class=" ft-minus" data-toggle="tooltip"></i>
            </li>

            <li class="nav-item {{ (request()->is('dashboard')) ? 'active' : '' }}"><a href="/dashboard"><i class="ft-home"></i>
                <span class="menu-title">Dashboard</a>
            </li>
            <li class=" nav-item {{(request()->is('user')) ? 'active' : '' }}"><a href="{{ route('user.index') }}"><i class="ft-user"></i>
                <span class="menu-title">User</span></a>
            </li>
            <li class="nav-item"><a href=""><i class="ft-edit"></i>
                <span class="menu-title">Help</span></a>
                <ul class="menu-content" style="">
                    <li class="is-shown {{(request()->is('covid')) ? 'active' : '' }}"><a class="menu-item" href="{{ route('help.covid') }}">Covid</a>
                    </li>
                    <li class="is-shown {{(request()->is('ekonomi')) ? 'active' : '' }}"><a class="menu-item" href="{{ route('help.ekonomi') }}">Ekonomi</a>
                    </li>
                    <li class="is-shown {{(request()->is('pangan')) ? 'active' : '' }}"><a class="menu-item" href="{{ route('help.pangan')}}">Pangan</a>
                    </li>
                    <li class="is-shown {{(request()->is('jasa')) ? 'active' : '' }}"><a class="menu-item" href="{{ route('help.jasa') }}">Jasa</a>
                    </li>
                </ul>
            </li>

            {{-- batas --}}

    </div>
</div>
