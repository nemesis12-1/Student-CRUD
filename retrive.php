<?php 
include('dbconnection.php');

// retrive information 
$sql = "SELECT * FROM student ";
$result = $conn-> query($sql);
if ($result->num_rows > 0 ) {
    $data = array();
    while($row = $result -> fetch_assoc()){
        $data[ ] = $row;
    }
}


// return jSON format  Data  as response  to ajax call
echo json_encode($data)
?>