<?php
$faqs_data = [];
$result = $conn->query("SELECT * FROM faqs");
while($row = $result->fetch_assoc()) {
    $faqs_data[] = $row;
}
?>
<section class="faq-section" id="faq">
    <div class="container">
        <div class="section-header">
            <h2 class="section-title">Frequently Asked Questions</h2>
            <p class="section-subtitle">Everything you need to know about our certifications and training</p>
        </div>
        <div class="faq-accordion" id="faqAccordion">
            <?php foreach($faqs_data as $index => $faq): ?>
            <div class="faq-item">
                <div class="faq-question" onclick="toggleFAQ(<?= $index ?>)">
                    <span><?= htmlspecialchars($faq['question']) ?></span>
                    <span class="faq-icon">▼</span>
                </div>
                <div class="faq-answer">
                    <div class="faq-answer-content"><?= htmlspecialchars($faq['answer']) ?></div>
                </div>
            </div>
            <?php endforeach; ?>
        </div>
    </div>
</section>

<script>
    const faqs = <?= json_encode($faqs_data) ?>;
</script>