<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="CertifyMe.pk Blog - IT Certification insights and career advice">
    <title id="blogTitle">Blog - CertifyMe.pk</title>

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet">

    <link rel="stylesheet" href="./assets/css/style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">

    <style>
        .blog-page-container {
            max-width: 900px;
            margin: 0 auto;
            padding: 120px 20px 60px;
        }

        .blog-header {
            margin-bottom: 40px;
        }

        .blog-page-category {
            display: inline-block;
            padding: 8px 20px;
            background: linear-gradient(135deg, var(--primary-blue) 0%, var(--deep-purple) 100%);
            color: white;
            border-radius: 25px;
            font-size: 14px;
            font-weight: 600;
            margin-bottom: 20px;
        }

        .blog-page-title {
            font-size: 42px;
            font-weight: 700;
            color: var(--dark-charcoal);
            margin-bottom: 20px;
            line-height: 1.3;
        }

        .blog-page-meta {
            display: flex;
            gap: 30px;
            color: var(--text-gray);
            font-size: 16px;
            margin-bottom: 30px;
        }

        .blog-page-image {
            width: 100%;
            height: 500px;
            object-fit: cover;
            border-radius: 20px;
            margin-bottom: 40px;
        }

        .blog-page-content {
            font-size: 18px;
            line-height: 1.8;
            color: var(--dark-charcoal);
        }

        .blog-page-content h2 {
            font-size: 32px;
            font-weight: 700;
            color: var(--dark-charcoal);
            margin: 40px 0 20px;
        }

        .blog-page-content h3 {
            font-size: 24px;
            font-weight: 600;
            color: var(--dark-charcoal);
            margin: 30px 0 15px;
        }

        .blog-page-content p {
            margin-bottom: 20px;
        }

        .blog-page-content ul, .blog-page-content ol {
            margin: 20px 0;
            padding-left: 30px;
        }

        .blog-page-content li {
            margin-bottom: 10px;
        }

        .blog-page-content blockquote {
            border-left: 4px solid var(--primary-blue);
            padding-left: 25px;
            margin: 30px 0;
            font-style: italic;
            color: var(--text-gray);
        }

        .blog-back-btn {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            padding: 12px 25px;
            background: var(--primary-blue);
            color: white;
            text-decoration: none;
            border-radius: 10px;
            font-weight: 600;
            transition: all 0.3s ease;
            margin-bottom: 30px;
        }

        .blog-back-btn:hover {
            background: var(--deep-purple);
            transform: translateX(-5px);
        }

        .blog-cta-box {
            background: linear-gradient(135deg, var(--primary-blue) 0%, var(--deep-purple) 100%);
            color: white;
            padding: 40px;
            border-radius: 20px;
            text-align: center;
            margin: 50px 0;
        }

        .blog-cta-box h3 {
            font-size: 28px;
            margin-bottom: 15px;
        }

        .blog-cta-box p {
            font-size: 18px;
            margin-bottom: 25px;
            opacity: 0.9;
        }

        .blog-cta-btn {
            display: inline-block;
            padding: 15px 40px;
            background: #10B981;
            color: white;
            text-decoration: none;
            border-radius: 10px;
            font-weight: 700;
            transition: all 0.3s ease;
        }

        .blog-cta-btn:hover {
            background: #059669;
            transform: translateY(-3px);
            box-shadow: 0 10px 30px rgba(0,0,0,0.2);
        }

        @media (max-width: 768px) {
            .blog-page-title {
                font-size: 32px;
            }

            .blog-page-image {
                height: 300px;
            }

            .blog-page-content {
                font-size: 16px;
            }

            .blog-page-content h2 {
                font-size: 26px;
            }
        }
    </style>
</head>

<body>

<?php include 'includes/page-parts/header.php'; ?>

<div class="blog-page-container">
    <a href="blogs.php" class="blog-back-btn">
        <i class="fas fa-arrow-left"></i> Back to all Blogs
    </a>

    <article class="blog-article">
        <div class="blog-header">
            <span class="blog-page-category" id="blogCategory">Loading...</span>
            <h1 class="blog-page-title" id="blogPageTitle">Loading...</h1>
            <div class="blog-page-meta">
                <span id="blogDate">📅 Loading...</span>
                <span id="blogReadTime">⏱️ 5 min read</span>
            </div>
        </div>

        <img src="" alt="Blog Image" class="blog-page-image" id="blogImage">

        <div class="blog-page-content" id="blogContent">
            <!-- Blog content will be loaded by JavaScript -->
        </div>

        <div class="blog-cta-box">
            <h3>Ready to Start Your IT Certification Journey?</h3>
            <p>Get certified and unlock new career opportunities in Pakistan's growing IT industry</p>
            <a href="index.php#contact" class="blog-cta-btn">Enroll Now</a>
        </div>
    </article>
</div>

<?php include 'includes/page-parts/footer.php'; ?>

<script src="./assets/js/script.js"></script>
<script>
    // Get blog ID from URL parameter
    const urlParams = new URLSearchParams(window.location.search);
    const blogId = parseInt(urlParams.get('id')) || 0;

    // Load blog content
    if (blogId >= 0 && blogId < blogPosts.length) {
        const post = blogPosts[blogId];
        
        document.getElementById('blogTitle').textContent = post.title + ' - CertifyMe.pk';
        document.getElementById('blogCategory').textContent = post.category;
        document.getElementById('blogPageTitle').textContent = post.title;
        document.getElementById('blogDate').textContent = '📅 ' + post.date;
        document.getElementById('blogImage').src = post.image;
        document.getElementById('blogImage').alt = post.title;
        document.getElementById('blogContent').innerHTML = post.fullContent;
    } else {
        // Redirect to home if invalid blog ID
        window.location.href = 'index.php#blog';
    }
</script>

</body>
</html>
