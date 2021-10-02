<?php
    header('Access-Control-Allow-Origin: *');
    header('Content-Type: application/json; charset=UTF-8');
    $url_folder = "./locales/";
    $array_folder = array_values(array_diff(scandir($url_folder), array('.','..')));
    $json = [];
    foreach ($array_folder as $key => $value) {
        $json[] = json_decode(file_get_contents($url_folder . $value), true);
    }

    echo json_encode(array_merge(...$json), JSON_PRETTY_PRINT);
?>