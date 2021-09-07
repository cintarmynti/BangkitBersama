<?php

namespace App\Http\Controllers\API;

class ResponseFormatter
{
    private static $response = [
        "meta" => [
            "status" => null,
            "code" => null,
            "message" => null
        ],
        "data" => []
    ];

    public static function success($message, $data)
    {
        self::$response['meta']['status'] = 'success!';
        self::$response['meta']['code'] = 200;
        self::$response['meta']['message'] = $message;
        self::$response['data'] = $data;

        return response()->json(self::$response);
    }

    public static function failed($message)
    {
        self::$response['meta']['status'] = 'failed!';
        self::$response['meta']['code'] = 500;
        self::$response['meta']['message'] = $message;

        return response()->json(self::$response);
    }
}
