<?php

namespace App\Http\Controllers;
use App\Models\Help;
use Illuminate\Http\Request;

class JasaController extends Controller
{
    public function jasa_index()
    {
        $jasa = Help::with('user')->where('help_category_id', 4)->get();
        return view('pages.helps.jasa',['data_jasa' => $jasa]);
    }

     public function detailJasa($id){
        $data_jasa = Help::findOrFail($id);
        $category = Help::with('category')->find($id);
        $status = Help::with('status')->find($id);

        return view('pages.helps.detail.jasa', ['data_jasa' => $data_jasa, 'category' => $category, 'status' => $status]);
    }

    public function setPendingjasa(Request $request, $id){
        Help::where('id',$id)->update(['help_status_id' => 1]);
        session()->flash("success", "Data Telah Diupdate");
        return redirect()->back();
     }

     public function setAcceptedjasa(Request $request, $id){
        Help::where('id',$id)->update(['help_status_id' => 2]);
        session()->flash("success", "Data Telah Diupdate");
        return redirect()->back();
     }

     public function setRejectedjasa(Request $request, $id){
        Help::where('id',$id)->update(['help_status_id' => 3]);
        session()->flash("success", "Data Telah Diupdate");
        return redirect()->back();
     }
}
