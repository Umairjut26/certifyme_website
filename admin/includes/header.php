<?php
if (!isset($_SESSION)) {
    session_start();
}
if (!isset($_SESSION['admin_logged_in'])) {
    header('Location: login.php');
    exit;
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin Dashboard - CertifyMe.pk</title>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet">
    <style>
        :root {
            --primary-color: #0066cc;
            --secondary-color: #0052a3;
            --accent-color: #00b366;
            --light-bg: #f4f7f6;
            --dark-text: #333;
            --white: #fff;
        }
        * { box-sizing: border-box; margin: 0; padding: 0; font-family: 'Poppins', sans-serif; }
        body { display: flex; min-height: 100vh; background: var(--light-bg); }
        
        .sidebar {
            width: 250px;
            background: var(--primary-color);
            color: var(--white);
            display: flex;
            flex-direction: column;
            padding: 20px;
            position: fixed;
            height: 100vh;
            overflow-y: auto;
        }
        .logo { 
            display: block; 
            margin-bottom: 30px; 
            text-align: center; 
        }
        .logo img {
            max-width: 100%;
            height: auto;
            background: white;
            padding: 10px;
            border-radius: 8px;
        }
        .nav-links { list-style: none; }
        .nav-links li { margin-bottom: 10px; }
        .nav-links a {
            display: flex;
            align-items: center;
            padding: 12px 15px;
            color: rgba(255,255,255,0.8);
            text-decoration: none;
            border-radius: 8px;
            transition: 0.3s;
        }
        .nav-links a:hover, .nav-links a.active {
            background: var(--secondary-color);
            color: var(--white);
        }
        .nav-links i { margin-right: 10px; width: 20px; text-align: center;}
        
        .main-content {
            margin-left: 250px;
            flex: 1;
            padding: 20px;
        }
        
        .top-bar {
            display: flex;
            justify-content: space-between;
            align-items: center;
            background: var(--white);
            padding: 15px 30px;
            border-radius: 10px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.05);
            margin-bottom: 30px;
        }
        
        .card-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 20px;
            margin-bottom: 30px;
        }
        .card {
            background: var(--white);
            padding: 25px;
            border-radius: 10px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.05);
        }
        .card h3 { color: var(--dark-text); font-size: 16px; margin-bottom: 10px; }
        .card .number { font-size: 32px; font-weight: bold; color: var(--primary-color); }
        
        .btn {
            padding: 8px 16px;
            border-radius: 5px;
            text-decoration: none;
            display: inline-block;
            cursor: pointer;
            border: none;
            font-size: 14px;
        }
        .btn-primary { background: var(--primary-color); color: var(--white); }
        .btn-danger { background: #dc3545; color: var(--white); }
        .btn-success { background: #28a745; color: var(--white); }
        
        table { width: 100%; border-collapse: collapse; background: var(--white); border-radius: 10px; overflow: hidden; box-shadow: 0 2px 10px rgba(0,0,0,0.05); }
        th, td { padding: 15px; text-align: left; border-bottom: 1px solid #eee; }
        th { background: #f8f9fa; font-weight: 600; }
        
        .form-group { margin-bottom: 20px; }
        .form-group label { display: block; margin-bottom: 8px; font-weight: 500; }
        .form-control { width: 100%; padding: 10px; border: 1px solid #ddd; border-radius: 5px; }
        textarea.form-control { resize: vertical; min-height: 100px; }
        
        .alert { padding: 15px; border-radius: 5px; margin-bottom: 20px; }
        .alert-success { background: #d4edda; color: #155724; }
        .alert-danger { background: #f8d7da; color: #721c24; }
    </style>
</head>
<body>

<div class="sidebar">
    <a href="index.php" class="logo">
        <img src="../certifyme_logo_horizontal.png" alt="CertifyMe Admin">
    </a>
    <ul class="nav-links">
        <li><a href="index.php" class="<?= basename($_SERVER['PHP_SELF']) == 'index.php' ? 'active' : '' ?>"><i class="fas fa-home"></i> Dashboard</a></li>
        <li><a href="leads.php" class="<?= basename($_SERVER['PHP_SELF']) == 'leads.php' ? 'active' : '' ?>"><i class="fas fa-envelope"></i> Leads</a></li>
        <li><a href="certifications.php" class="<?= basename($_SERVER['PHP_SELF']) == 'certifications.php' ? 'active' : '' ?>"><i class="fas fa-certificate"></i> Certifications</a></li>
        <li><a href="blogs.php" class="<?= basename($_SERVER['PHP_SELF']) == 'blogs.php' ? 'active' : '' ?>"><i class="fas fa-blog"></i> Blogs</a></li>
        <li><a href="testimonials.php" class="<?= basename($_SERVER['PHP_SELF']) == 'testimonials.php' ? 'active' : '' ?>"><i class="fas fa-comment-alt"></i> Testimonials</a></li>
        <li><a href="success_stories.php" class="<?= basename($_SERVER['PHP_SELF']) == 'success_stories.php' ? 'active' : '' ?>"><i class="fas fa-users"></i> Success Stories</a></li>
        <li><a href="faqs.php" class="<?= basename($_SERVER['PHP_SELF']) == 'faqs.php' ? 'active' : '' ?>"><i class="fas fa-question-circle"></i> FAQs</a></li>
        <li><a href="logout.php"><i class="fas fa-sign-out-alt"></i> Logout</a></li>
    </ul>
</div>

<div class="main-content">
    <div class="top-bar">
        <h2>Dashboard</h2>
        <div>Hello, Admin</div>
    </div>
