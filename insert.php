<?php
include('dbconnection.php');
// stripslashes function can  be used to clean up data
// retrieved from a database or from an HTMl form .

/* 
php://input - this is  aread-only stram that allow us to
read raw data from the request body. It return all the raw data 
after the HTTP - headers of the request , regardless of he contenttype

json_decode - it takes JSON Sring and convert it into a PHP 
object or array , if true the associative array
*/

$data = stripslashes(file_get_contents("php://input"));
$mydata = json_decode($data, true);

$id = $mydata['id'];
$name = $mydata['name'];
$email = $mydata['email'];
$password = $mydata['password'];

// Insert data only
// if (!empty($name) && !empty($email) && !empty($password)) {
//     $sql = "INSERT INTO student(name, email,password) VALUES
//     ('$name' , '$email' , '$password')";

//     if ($conn->query($sql) == TRUE) {
//         echo "Student Saved Successfully";
//     } else {
//         echo "Unable to save Student";
//     }
// }
// else{
//     echo "Fill all the Fileds";
// }

// for insert and update both
if (!empty($name) && !empty($email) && !empty($password)) {
    $sql = "INSERT INTO student(id , name, email,password) VALUES
    ('$id', '$name' , '$email' , '$password') ON DUPLICATE KEY UPDATE name = '$name' , email= '$email' , password = '$password'";

    if ($conn->query($sql) == TRUE) {
        echo "Student Saved Successfully";
    } else {
        echo "Unable to save Student";
    }
}
else{
    echo "Fill all the Fileds";
}

?>
