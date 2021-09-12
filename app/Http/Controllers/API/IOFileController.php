<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Exception;

class IOFileController extends Controller
{
    private function formatFile($file, $path)
    {
        $file = explode('/', $file);
        $format = 'assets/' . $path . end($file);
        return $format;
    }

    public function uploadPhotoProfile()
    {
        request()->validate([
            'file' => 'mimes:png,jpg,jpeg'
        ]);
        if (request()->file('file')) {
            try {
                $data['file'] = request()->file('file')->store('assets/photo/profile', 'public');
                $data['file'] = $this->formatFile($data['file'], 'photo/profile/');
                return ResponseFormatter::success('Upload File Photo Profile Successfull!', $data);
            } catch (Exception $e) {
                return ResponseFormatter::failed('Upload File Photo Profile Failed!', 409, $e);
            }
        } else {
            return ResponseFormatter::success('No File Uploaded!', []);
        }
    }

    public function uploadDocument()
    {
        request()->validate([
            'file' => 'mimes:pdf,png,jpg,jpeg'
        ]);
        if (request()->file('file')) {
            try {
                $data['file'] = request()->file('file')->store('assets/document/institution', 'public');
                $data['file'] = $this->formatFile($data['file'], 'document/institution/');
                return ResponseFormatter::success('Upload File Document Institution Successfull!', $data);
            } catch (Exception $e) {
                return ResponseFormatter::failed('Upload File Document Institution Failed!', 409, $e);
            }
        } else {
            return ResponseFormatter::success('No File Uploaded!');
        }
    }
}
