<?php
$certifications_data = [];
$result = $conn->query("SELECT * FROM certifications");
while($row = $result->fetch_assoc()) {
    // Decode JSON fields
    $row['topics'] = json_decode($row['topics']);
    $row['next_batches'] = json_decode($row['next_batches']);
    $certifications_data[] = $row;
}
?>
<section class="certifications-section" id="certifications">
    <div class="container">
        <div class="section-header">
            <h2 class="section-title">Popular Certifications</h2>
            <p class="section-subtitle">Industry-recognized credentials that employers are looking for</p>
        </div>
        <div class="certifications-grid" id="certificationsGrid">
            <?php foreach(array_slice($certifications_data, 0, 6) as $index => $cert): ?>
            <div class="certification-card" onclick="showCertificationModal(<?= $index ?>)" style="cursor: pointer;">
                <img src="<?= htmlspecialchars($cert['icon']) ?>" alt="<?= htmlspecialchars($cert['name']) ?>" class="cert-icon">
                <div class="cert-vendor"><?= htmlspecialchars($cert['vendor']) ?></div>
                <h3 class="cert-name"><?= htmlspecialchars($cert['name']) ?></h3>
                <div class="cert-meta">
                    <div class="cert-meta-item">
                        <span>💰</span>
                        <span><?= htmlspecialchars($cert['price']) ?></span>
                    </div>
                    <div class="cert-meta-item">
                        <span>⏱️</span>
                        <span><?= htmlspecialchars($cert['duration']) ?></span>
                    </div>
                </div>
                <span class="difficulty-badge difficulty-<?= strtolower($cert['difficulty']) ?>"><?= htmlspecialchars($cert['difficulty']) ?></span>
            </div>
            <?php endforeach; ?>
        </div>
        <div class="section-cta">
            <a href="#certifications-page" class="btn btn-secondary" onclick="showAllCertifications(event)">View All Certifications</a>
        </div>
    </div>
</section>

<script>
    // Inject DB data into JS
    const certifications = <?= json_encode($certifications_data) ?>;
</script>