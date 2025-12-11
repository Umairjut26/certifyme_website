<?php
$stories_data = [];
$result = $conn->query("SELECT * FROM success_stories");
while($row = $result->fetch_assoc()) {
    // Map DB fields to JS naming convention if needed (JS uses 'before', 'after' but DB has 'before_role', 'after_role')
    // Actually the JS uses 'before' and 'after' in renderSuccessStories but the object uses 'before' and 'after'.
    // Setup_db used before_role, after_role.
    $row['before'] = $row['before_role'];
    $row['after'] = $row['after_role']; // Alias for JS compatibility
    $stories_data[] = $row;
}
?>
<section class="success-stories-section" id="success-stories">
    <div class="container">
        <div class="section-header">
            <h2 class="section-title">Success Stories</h2>
            <p class="section-subtitle">Real career transformations powered by certification</p>
        </div>
        <div class="success-stories-grid" id="successStoriesGrid">
            <?php foreach($stories_data as $index => $story): ?>
            <div class="success-story-card" onclick="showSuccessStoryModal(<?= $index ?>)">
                <img src="<?= htmlspecialchars($story['image']) ?>" alt="<?= htmlspecialchars($story['name']) ?>" class="success-story-image">
                <div class="success-story-content">
                    <h3 class="success-story-name"><?= htmlspecialchars($story['name']) ?></h3>
                    <p class="success-story-transition"><?= htmlspecialchars($story['before']) ?> → <?= htmlspecialchars($story['after']) ?></p>
                    <div class="success-story-highlight">
                        <strong><?= htmlspecialchars($story['salary_increase']) ?></strong>
                        <span>Salary Increase</span>
                    </div>
                    <span class="success-cert"><?= htmlspecialchars($story['certification']) ?></span>
                </div>
            </div>
            <?php endforeach; ?>
        </div>
    </div>
</section>

<script>
    const successStories = <?= json_encode($stories_data) ?>;
</script>