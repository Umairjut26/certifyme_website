<?php
header('Content-Type: application/json');
error_reporting(0);

try {
    // Database connection
    $host = 'localhost';
    $user = 'certifyme_pk_usr';
    $pass = 'R1HDk,=>)y|)}a:<';
    $db = 'certifyme_pk';
    
    $conn = new mysqli("localhost", "certifyme_pk_usr", "R1HDk,=>)y|)}a:<", "certifyme_pk");
    
    if ($conn->connect_error) {
        throw new Exception('Unable to connect to database. Please try again later.');
    }
    
    $conn->set_charset("utf8mb4");
    
    // Get POST data
    $name = trim($_POST['name'] ?? '');
    $email = trim($_POST['email'] ?? '');
    $phone = trim($_POST['phone'] ?? '');
    $certification = trim($_POST['certification'] ?? '');
    $message = trim($_POST['message'] ?? '');
    
    // Validation
    if (empty($name) || strlen($name) < 3) {
        throw new Exception('Name must be at least 3 characters.');
    }
    
    if (empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        throw new Exception('Please enter a valid email address.');
    }
    
    if (empty($phone) || strlen($phone) < 10) {
        throw new Exception('Please enter a valid phone number.');
    }
    
    if (empty($message) || strlen($message) < 10) {
        throw new Exception('Message must be at least 10 characters.');
    }
    
    // Check if table exists, create if not
    $checkTable = $conn->query("SHOW TABLES LIKE 'leads'");
    if ($checkTable->num_rows == 0) {
        $createTable = "CREATE TABLE leads (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL,
            phone VARCHAR(50) NOT NULL,
            certification VARCHAR(255),
            message TEXT NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )";
        $conn->query($createTable);
    }
    
    // Insert into database
    $stmt = $conn->prepare("INSERT INTO leads (name, email, phone, certification, message) VALUES (?, ?, ?, ?, ?)");
    
    if (!$stmt) {
        throw new Exception('Unable to process your request. Please try again.');
    }
    
    $stmt->bind_param('sssss', $name, $email, $phone, $certification, $message);
    
    if ($stmt->execute()) {
        echo json_encode(['success' => true, 'msg' => 'Thank you! We will contact you soon.']);
    } else {
        throw new Exception('Unable to submit form. Please try again.');
    }
    
    $stmt->close();
    $conn->close();
    
} catch (Exception $e) {
    echo json_encode(['success' => false, 'msg' => $e->getMessage()]);
}
?>
