<?php
header('Content-Type: application/json');

// Get POST data
$name = $_POST['name'] ?? '';
$email = $_POST['email'] ?? '';
$phone = $_POST['phone'] ?? '';
$certification = $_POST['certification'] ?? '';
$message = $_POST['message'] ?? '';

// Basic validation
if ($name && $email && $phone && $message) {
    // For now, just return success without saving to database
    // You can add database integration later
    echo json_encode(['success' => true, 'msg' => 'Message sent successfully!']);
} else {
    echo json_encode(['success' => false, 'msg' => 'Please fill all required fields.']);
}
?>
