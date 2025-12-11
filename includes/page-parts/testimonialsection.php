<?php
$testimonials_data = [];
$result = $conn->query("SELECT * FROM testimonials");
while($row = $result->fetch_assoc()) {
    $testimonials_data[] = $row;
}
?>
<section class="testimonials" id="testimonials">
    <div class="container">
        <div class="section-header">
            <h2 class="section-title">What Our Students Say</h2>
            <p class="section-subtitle">Real success stories from certified professionals</p>
        </div>
        <div class="testimonials-carousel">
            <button class="carousel-btn prev" onclick="moveCarousel(-1)">‹</button>
            <div class="testimonials-wrapper" id="testimonialsWrapper">
                <?php foreach($testimonials_data as $index => $t): ?>
                <div class="testimonial-card <?= $index === 0 ? 'active' : '' ?>">
                    <img src="<?= htmlspecialchars($t['photo']) ?>" alt="<?= htmlspecialchars($t['name']) ?>" class="testimonial-photo">
                    <h3 class="testimonial-name"><?= htmlspecialchars($t['name']) ?></h3>
                    <p class="testimonial-role"><?= htmlspecialchars($t['role']) ?></p>
                    <p class="testimonial-quote">"<?= htmlspecialchars($t['quote']) ?>"</p>
                    <div class="testimonial-rating"><?= str_repeat('⭐', $t['rating']) ?></div>
                </div>
                <?php endforeach; ?>
            </div>
            <button class="carousel-btn next" onclick="moveCarousel(1)">›</button>
        </div>
        <div class="carousel-dots" id="carouselDots">
             <?php foreach($testimonials_data as $index => $t): ?>
                <div class="carousel-dot <?= $index === 0 ? 'active' : '' ?>" onclick="goToTestimonial(<?= $index ?>)"></div>
             <?php endforeach; ?>
        </div>
    </div>
</section>

<script>
    const testimonials = <?= json_encode($testimonials_data) ?>;
</script>