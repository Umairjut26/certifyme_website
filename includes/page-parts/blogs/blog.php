<?php
$blogs_data = [];
$result = $conn->query("SELECT * FROM blogs ORDER BY created_at DESC");
while($row = $result->fetch_assoc()) {
    // Map fullContent to JS fullContent if used
    $row['fullContent'] = $row['full_content']; // Alias
    $blogs_data[] = $row;
}
?>
<section class="blog-section" id="blog">
    <div class="container">
        <div class="section-header">
            <div class="header-text">
                <h2 class="section-title">Latest from Our Blog</h2>
                <p class="section-subtitle">Expert tips, industry insights, and career advice</p>
            </div>
        </div>

        <div class="blog-grid" id="blogGrid">
            <?php foreach(array_slice($blogs_data, 0, 3) as $index => $post): ?>
            <div class="blog-card" onclick="window.location.href='blog-page.php?id=<?= $index ?>'" style="cursor: pointer;">
                <img src="<?= htmlspecialchars($post['image']) ?>" alt="<?= htmlspecialchars($post['title']) ?>" class="blog-image">
                <div class="blog-content">
                    <span class="blog-category"><?= htmlspecialchars($post['category']) ?></span>
                    <h3 class="blog-title"><?= htmlspecialchars($post['title']) ?></h3>
                    <p class="blog-excerpt"><?= htmlspecialchars($post['excerpt']) ?></p>
                    <div class="blog-meta">
                        <span>📅 <?= htmlspecialchars($post['date']) ?></span>
                    </div>
                </div>
            </div>
            <?php endforeach; ?>
        </div>
    </div>
</section>

<script>
    const blogPosts = <?= json_encode($blogs_data) ?>;
</script>
