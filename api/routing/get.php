<?php
    header('Access-Control-Allow-Origin: *');
    header('Content-Type: application/json; charset=UTF-8');

    $json = [
        'ss' => 0,
        'aa' => 'oo'
    ];

    
    echo json_encode($json);
?>