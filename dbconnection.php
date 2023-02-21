<?php 

$db_host = "127.0.0.1";
$db_user = "username";
$db_password = "1234";
$db_name = "crudajaxjq";

$conn = new mysqli($db_host , $db_user , $db_password , $db_name);

if($conn->connect_error){
    die("Connection Failed");
}

?>