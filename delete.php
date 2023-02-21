<?php
include('dbconnection.php');


$data = stripslashes(file_get_contents("php://input"));
$mydata = json_decode($data, true);
$id = $mydata['sid'];

// Deleting student
if (!empty($id)) {
    $sql = "DELETE FROM Student WHERE id = {$id}";
    if ($conn->query($sql)== TRUE) {
        // echo "Student Deleted Successfully";
        echo 1;
    }else{
        // echo " Unable to Delete";
        echo 0;
    }
}
?>