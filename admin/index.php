<?php
require_once 'includes/db.php';
require_once 'includes/header.php';

// Fetch Counts
$counts = [];

$tables = ['certifications', 'blogs', 'testimonials', 'leads', 'success_stories', 'faqs'];
foreach ($tables as $table) {
    $result = $conn->query("SELECT COUNT(*) as count FROM $table");
    $counts[$table] = $result->fetch_assoc()['count'];
}
?>

<div class="card-grid">
    <div class="card">
        <h3>Total Certifications</h3>
        <div class="number"><?= $counts['certifications'] ?></div>
    </div>
    <div class="card">
        <h3>Active Blogs</h3>
        <div class="number"><?= $counts['blogs'] ?></div>
    </div>
    <div class="card">
        <h3>Total Leads</h3>
        <div class="number"><?= $counts['leads'] ?></div>
    </div>
    <div class="card">
        <h3>Testimonials</h3>
        <div class="number"><?= $counts['testimonials'] ?></div>
    </div>
</div>

<div class="card">
    <h3>Recent Leads</h3>
    <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Date</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            <?php
            $leads = $conn->query("SELECT * FROM leads ORDER BY created_at DESC LIMIT 5");
            if ($leads->num_rows > 0) {
                while($row = $leads->fetch_assoc()) {
                    echo "<tr>
                        <td>{$row['id']}</td>
                        <td>{$row['name']}</td>
                        <td>{$row['email']}</td>
                        <td>" . date('M d, Y', strtotime($row['created_at'])) . "</td>
                        <td><a href='leads.php?view={$row['id']}' class='btn btn-primary'>View</a></td>
                    </tr>";
                }
            } else {
                echo "<tr><td colspan='5'>No leads found</td></tr>";
            }
            ?>
        </tbody>
    </table>
</div>

<?php require_once 'includes/footer.php'; ?>
