<?php
// MySQL connection
$host = 'localhost';
$user = 'root';
$pass = '';
$db = 'certifyme'; // Change to your actual database name

$conn = new mysqli($host, $user, $pass, $db);
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