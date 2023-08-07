<?php


/* Handling Cors*/
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: *");
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method,Access-Control-Request-Headers, Authorization");
header('Content-Type: application/json');

$method = $_SERVER['REQUEST_METHOD'];
if ($method == "OPTIONS") {
    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method,Access-Control-Request-Headers, Authorization");
    header("HTTP/1.1 200 OK");
    die();
}

/* Starting Session */
session_start();

/* Connecting to firebase database */
include('dbconn.php');

if($_SERVER['REQUEST_METHOD'] === 'POST'){

    $name=$_POST['name'];
    $email=$_POST['email'];
    $message=$_POST['message'];

    $postData = [
        'name'=>$name,
        'email'=>$email,
        'message'=>$message

    ];
    $ref_table = "contacts";
    $postRef_result= $database->getReference($ref_table)->push($postData);

    if($postRef_result){
        $_SESSION['status'] = "Contact Added Successfully";
        echo("Added Success Fully");
    }
    
    else{
        $_SESSION['status'] = "Contact Not Added";
        echo("Not Added");
    }

}
?>