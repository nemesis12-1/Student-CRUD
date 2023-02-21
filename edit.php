<?php
include('dbconnection.php');


$data = stripslashes(file_get_contents("php://input"));
// changing it to associative array
$mydata = json_decode($data, true);
$id = $mydata['sid'];

// retrive sepecific syudent information
$sql = "SELECT* FROM student WHERE id = {$id}";
$result = $conn->query($sql);
$row = $result->fetch_assoc();

// returning json format  data s response to ajax call
echo json_encode($row);

?>