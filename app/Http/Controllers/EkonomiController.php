<?php

namespace App\Http\Controllers;
use App\Models\Help;
use Illuminate\Http\Request;

class EkonomiController extends Controller
{
    public function ekonomi_index()
    {
        $ekonomi = Help::with('user')->where('help_category_id', 2)->get();
        return view('pages.helps.ekonomi',['data_ekonomi' => $ekonomi]);
    }


    public function setPendingEkonomi(Request $request, $id){
        Help::where('id',$id)->update(['help_status_id' => 1]);
        session()->flash("success", "Data Telah Diupdate");
        return redirect()->back();
     }

     public function setAcceptedEkonomi(Request $request, $id){
        Help::where('id',$id)->update(['help_status_id' => 2]);
        session()->flash("success", "Data Telah Diupdate");
        return redirect()->back();
     }

     public function setRejectedEkonomi(Request $request, $id){
        Help::where('id',$id)->update(['help_status_id' => 3]);
        session()->flash("success", "Data Telah Diupdate");
        return redirect()->back();
     }

     public function detailEkonomi($id){
        $data_ekonomi = Help::findOrFail($id);
        $category = Help::with('category')->find($id);
        $status = Help::with('status')->find($id);

        return view('pages.helps.detail.ekonomi', ['data_ekonomi' => $data_ekonomi, 'category' => $category, 'status' => $status]);
    }
}
