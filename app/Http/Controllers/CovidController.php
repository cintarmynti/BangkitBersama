<?php

namespace App\Http\Controllers;
use App\Models\Help;
use Illuminate\Http\Request;

class CovidController extends Controller
{
    public function covid_index()
    {

        $covid = Help::with('user')->where('help_category_id', 1)->get();
        return view('pages.helps.covid', ['data_covid' => $covid]);
    }

    public function detailCovid($id){
        $data_covid = Help::with('user')->find($id);
        $category = Help::with('category')->find($id);
        $status = Help::with('status')->find($id);

        // dd($category);
        return view('pages.helps.detail.covid', ['data_covid'=>$data_covid, 'category' => $category, 'status' => $status]);
     }

     public function setPendingCovid(Request $request, $id){
        Help::where('id',$id)->update(['help_status_id' => 1]);
        session()->flash("success", "Data Telah Diupdate");
        return redirect()->back();
     }

     public function setAcceptedCovid(Request $request, $id){
        Help::where('id',$id)->update(['help_status_id' => 2]);
        session()->flash("success", "Data Telah Diupdate");
        return redirect()->back();
     }

     public function setRejectedCovid(Request $request, $id){
        Help::where('id',$id)->update(['help_status_id' => 3]);
        session()->flash("success", "Data Telah Diupdate");
        return redirect()->back();
     }
}
