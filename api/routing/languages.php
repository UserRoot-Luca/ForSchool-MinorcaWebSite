<?php
    header('Access-Control-Allow-Origin: *');
    header('Content-Type: application/json; charset=UTF-8');

    $json = [
        'eng' => [
            'home' => 'aaaaaa',
        ],
        'ita' => [
            'home' => 'bbbbbb',
        ]
    ];

    
    echo json_encode($json);
?>