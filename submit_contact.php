<?php
// MySQL connection
$host     = "127.0.0.1";
$user = 'certifyme_pk_usr';
$pass = 'Umair1$234'; // Change to your actual password
$db = 'certifyme_pk'; // Change to your actual database name

$mysqli = new mysqli("127.0.0.1", "certifyme_pk_usr", "Umair1$234", "certifyme_pk");
if ($conn->connect_error) {
    echo json_encode(['success' => false, 'msg' => 'Database connection failed.']);
    exit;
}

// Get POST data
$name = $_POST['name'] ?? '';
$email = $_POST['email'] ?? '';
$phone = $_POST['phone'] ?? '';
$certification = $_POST['certification'] ?? '';
$message = $_POST['message'] ?? '';

// Basic validation
if ($name && $email && $phone && $message) {
    $stmt = $conn->prepare("INSERT INTO leads (name, email, phone, certification, message, created_at) VALUES (?, ?, ?, ?, ?, ?)");
    $created_at = date('Y-m-d H:i:s');
    $stmt->bind_param('ssssss', $name, $email, $phone, $certification, $message, $created_at);
    if ($stmt->execute()) {
        echo json_encode(['success' => true, 'msg' => 'Lead saved successfully.']);
    } else {
        echo json_encode(['success' => false, 'msg' => 'Failed to save lead.']);
    }
    $stmt->close();
} else {
    echo json_encode(['success' => false, 'msg' => 'Please fill all required fields.']);
}
$conn->close();
?>