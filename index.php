<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="CertifyMe.pk - Pakistan's premier IT certification and training platform. AWS, Azure, CompTIA, Cisco certifications with job placement support.">
    <title>CertifyMe.pk - Get Certified. Get Hired. | Pakistan's #1 IT Certification Center</title>

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet">

    <link rel="stylesheet" href="./assets/css/style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">

</head>

<body>

<?php 
    // DB Connection
    include 'includes/db_connect.php';

    // Header
    include 'includes/page-parts/header.php';

    // Hero Section
    include 'includes/page-parts/hero.php';

    // Popular Certifications Section
    include 'includes/page-parts/popularcertifications.php';

    // Why Choose Us Section
    include 'includes/page-parts/whychooseus.php';

    // Success Statistics
    include 'includes/page-parts/successstatistics.php';

    // Testimonials Section
    include 'includes/page-parts/testimonialsection.php';

    // CTA Section
    include 'includes/page-parts/ctasection.php';

    // FAQ Section
    include 'includes/page-parts/faq.php';

    // Training Courses Section
    include 'includes/page-parts/trainingcourses.php';

    // Testing Center Section
    include 'includes/page-parts/testingcenter.php';

    // Success Stories Section
    include 'includes/page-parts/successstories.php';

    // Blog Section
    include 'includes/page-parts/blogs/blog.php';

    // Contact Section
    include 'includes/page-parts/contact.php';

    // Footer
    include 'includes/page-parts/footer.php';
?>
 <script src="./assets/js/script.js"></script>
</body>
</html>
