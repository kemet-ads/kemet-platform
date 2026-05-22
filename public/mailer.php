<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit;
}

$to = 'abdulrahman@kemetads.ae';
$subject = $_POST['subject'] ?? 'New Form Submission';
$message = $_POST['message'] ?? '';
$fromName = $_POST['from_name'] ?? 'Website Visitor';
$fromEmail = $_POST['from_email'] ?? 'noreply@kemetads.ae';

$headers = "From: $fromName <$fromEmail>\r\n";
$headers .= "Reply-To: $fromEmail\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

$fullMessage = "Form: $subject\n";
$fullMessage .= "Submitted by: $fromName\n";
$fullMessage .= "Email: $fromEmail\n";
$fullMessage .= "---\n\n";
$fullMessage .= $message;
$fullMessage .= "\n\n---\n";
$fullMessage .= "Sent via KEMET Website Contact Form\n";

$success = mail($to, $subject, $fullMessage, $headers);

if ($success) {
    echo json_encode(['success' => true, 'message' => 'Email sent successfully']);
} else {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Failed to send email']);
}