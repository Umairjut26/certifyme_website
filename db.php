<?php
// Database connection for CertifyMe.pk backend
$host = 'localhost';
$user = 'root';
$pass = '';
$db = 'certifyme';
$conn = new mysqli($host, $user, $pass, $db);
if ($conn->connect_error) {
    die('Database connection failed: ' . $conn->connect_error);
}
else{
    echo "faizan";
}
?>