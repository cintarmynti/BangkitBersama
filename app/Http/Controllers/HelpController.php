<?php

namespace App\Http\Controllers;

use App\Models\Help;
use App\Models\HelpCategory;
use App\Models\HelpStatus;
use Illuminate\Http\Request;

class HelpController extends Controller
{

    public function covid_index()
    {

        $covid = Help::with('user')->where('help_category_id', 1)->get();
        // dd($covid);
        return view('pages.helps.covid', ['data_covid' => $covid]);
    }

    public function ekonomi_index()
    {
        $ekonomi = Help::with('user')->where('help_category_id', 2)->get();
        return view('pages.helps.ekonomi',['data_ekonomi' => $ekonomi]);
    }

    public function pangan_index()
    {
        $pangan = Help::with('user')->where('help_category_id', 3)->get();
        return view('pages.helps.pangan',['data_pangan' => $pangan]);
    }

    public function jasa_index()
    {
        $jasa = Help::with('user')->where('help_category_id', 4)->get();
        return view('pages.helps.jasa',['data_jasa' => $jasa]);
    }

    public function setStatusCovid(Request $request, $id){
       Help::where('id',$id)->update(['help_status_id' => $request->help_status_id]);
       return redirect()->back();
    }

    public function setStatusEkonomi(Request $request, $id){
        Help::where('id',$id)->update(['help_status_id' => $request->help_status_id]);
        return redirect()->back();
     }

     public function setStatusPangan(Request $request, $id){
        Help::where('id',$id)->update(['help_status_id' => $request->help_status_id]);
        return redirect()->back();
     }

     public function setStatusJasa(Request $request, $id){
        Help::where('id',$id)->update(['help_status_id' => $request->help_status_id]);
        return redirect()->back();
     }

     public function detailCovid($id){
        $data_covid = Help::with('user')->find($id);
        $category = Help::with('category')->find($id);
        $status = Help::with('status')->find($id);

        // dd($category);
        return view('pages.helps.detail.covid', ['data_covid'=>$data_covid, 'category' => $category, 'status' => $status]);
     }

     public function detailEkonomi($id){
        $data_ekonomi = Help::findOrFail($id);
        return view('pages.helps.detail.ekonomi', ['data_ekonomi' => $data_ekonomi]);
    }

    public function detailPangan($id){
        $data_pangan = Help::findOrFail($id);
        return view('pages.helps.detail.pangan', ['data_pangan' => $data_pangan]);
    }

    public function detailJasa($id){
        $data_jasa = Help::findOrFail($id);
        return view('pages.helps.detail.jasa', ['data_jasa' => $data_jasa]);
    }


}
