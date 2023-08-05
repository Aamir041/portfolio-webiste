<?php
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

$conn = new mysqli("localhost", "pma",'', "projectdb");
if (mysqli_connect_error()) {
    echo mysqli_connect_error();
    exit();
} else {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    // sql query
    $sql = "INSERT INTO reactusers(name, email, message) VALUES ('$name', '$email', '$message');";

    // ye query chalaega sql main aur boolean return karega
    $res = mysqli_query($conn, $sql);

    if ($res) {
        echo "Success";
    } else {
        echo "Failed";
    }
    $conn->close();
}
?>