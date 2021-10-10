<?php

namespace App\Http\Controllers;
use App\Models\Help;
use Illuminate\Http\Request;

class PanganController extends Controller
{
    public function pangan_index()
    {
        $pangan = Help::with('user')->where('help_category_id', 3)->get();
        return view('pages.helps.pangan',['data_pangan' => $pangan]);
    }

     public function detailPangan($id){
        $data_pangan = Help::findOrFail($id);
        $category = Help::with('category')->find($id);
        $status = Help::with('status')->find($id);

        return view('pages.helps.detail.pangan', ['data_pangan' => $data_pangan, 'category' => $category, 'status' => $status]);
    }

    public function setPendingPangan(Request $request, $id){
        Help::where('id',$id)->update(['help_status_id' => 1]);
        session()->flash("success", "Data Telah Diupdate");
        return redirect()->back();
     }

     public function setAcceptedPangan(Request $request, $id){
        Help::where('id',$id)->update(['help_status_id' => 2]);
        session()->flash("success", "Data Telah Diupdate");
        return redirect()->back();
     }

     public function setRejectedPangan(Request $request, $id){
        Help::where('id',$id)->update(['help_status_id' => 3]);
        session()->flash("success", "Data Telah Diupdate");
        return redirect()->back();
     }
}
