<?php
/**
 * Created by PhpStorm.
 * User: nick
 * Date: 07/11/18
 * Time: 1:30 PM
 */

DEFINE ('DB_USER', 'root');
DEFINE ('DB_PASSWORD', '');
DEFINE ('DB_HOST', 'localhost:3307');
$conn = mysqli_connect(DB_HOST, DB_USER, DB_PASSWORD);

if(!$conn){
    die("Connection failed: " . $conn -> mysqli_connect_error());
}

if ($conn){
    echo "cool";
}
?>