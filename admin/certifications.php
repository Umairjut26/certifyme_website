<?php
require_once 'includes/db.php';
require_once 'includes/header.php';

// Handle Form Submission
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $name = $conn->real_escape_string($_POST['name']);
    $vendor = $conn->real_escape_string($_POST['vendor']);
    $price = $conn->real_escape_string($_POST['price']);
    $exam_fee = $conn->real_escape_string($_POST['exam_fee']);
    $duration = $conn->real_escape_string($_POST['duration']);
    $difficulty = $conn->real_escape_string($_POST['difficulty']);
    $icon = $conn->real_escape_string($_POST['icon']);
    $description = $conn->real_escape_string($_POST['description']);
    $prerequisites = $conn->real_escape_string($_POST['prerequisites']);
    $who_should_take = $conn->real_escape_string($_POST['who_should_take']);
    $career_outcomes = $conn->real_escape_string($_POST['career_outcomes']);
    
    // Arrays for topics and next_batches (simple comma separated input for now)
    $topics = json_encode(array_map('trim', explode(',', $_POST['topics'])));
    $next_batches = json_encode(array_map('trim', explode(',', $_POST['next_batches'])));

    if (isset($_POST['id']) && !empty($_POST['id'])) {
        // Update
        $id = intval($_POST['id']);
        $sql = "UPDATE certifications SET name='$name', vendor='$vendor', price='$price', exam_fee='$exam_fee', 
                duration='$duration', difficulty='$difficulty', icon='$icon', description='$description', 
                prerequisites='$prerequisites', topics='$topics', next_batches='$next_batches', 
                who_should_take='$who_should_take', career_outcomes='$career_outcomes' WHERE id=$id";
    } else {
        // Insert
        $sql = "INSERT INTO certifications (name, vendor, price, exam_fee, duration, difficulty, icon, description, prerequisites, topics, next_batches, who_should_take, career_outcomes) 
                VALUES ('$name', '$vendor', '$price', '$exam_fee', '$duration', '$difficulty', '$icon', '$description', '$prerequisites', '$topics', '$next_batches', '$who_should_take', '$career_outcomes')";
    }
    
    if ($conn->query($sql)) {
        echo "<script>window.location.href='certifications.php';</script>";
    } else {
        echo "<div class='alert alert-danger'>Error: " . $conn->error . "</div>";
    }
}

// Handle Delete
if (isset($_GET['delete'])) {
    $id = intval($_GET['delete']);
    $conn->query("DELETE FROM certifications WHERE id=$id");
    echo "<script>window.location.href='certifications.php';</script>";
}

// Get Editing Data
$editData = null;
if (isset($_GET['edit'])) {
    $id = intval($_GET['edit']);
    $editData = $conn->query("SELECT * FROM certifications WHERE id=$id")->fetch_assoc();
}
?>

<div class="card">
    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: 20px;">
        <h3>Manage Certifications</h3>
        <button onclick="document.getElementById('form-section').scrollIntoView({behavior: 'smooth'})" class="btn btn-success">+ Add New</button>
    </div>
    
    <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Vendor</th>
                <th>Price</th>
                <th>Duration</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            <?php
            $result = $conn->query("SELECT * FROM certifications");
            while($row = $result->fetch_assoc()): 
            ?>
            <tr>
                <td><?= htmlspecialchars($row['name']) ?></td>
                <td><?= htmlspecialchars($row['vendor']) ?></td>
                <td><?= htmlspecialchars($row['price']) ?></td>
                <td><?= htmlspecialchars($row['duration']) ?></td>
                <td>
                    <a href="?edit=<?= $row['id'] ?>#form-section" class="btn btn-primary">Edit</a>
                    <a href="?delete=<?= $row['id'] ?>" class="btn btn-danger" onclick="return confirm('Delete this certification?')">Del</a>
                </td>
            </tr>
            <?php endwhile; ?>
        </tbody>
    </table>
</div>

<div class="card" style="margin-top: 30px;" id="form-section">
    <h3><?= $editData ? 'Edit Certification' : 'Add New Certification' ?></h3>
    <form method="POST">
        <?php if($editData): ?>
            <input type="hidden" name="id" value="<?= $editData['id'] ?>">
        <?php endif; ?>
        
        <div class="card-grid" style="box-shadow:none; padding:0;">
            <div class="form-group">
                <label>Name</label>
                <input type="text" name="name" class="form-control" required value="<?= $editData['name'] ?? '' ?>">
            </div>
            <div class="form-group">
                <label>Vendor</label>
                <input type="text" name="vendor" class="form-control" required value="<?= $editData['vendor'] ?? '' ?>">
            </div>
        </div>
        
        <div class="card-grid" style="box-shadow:none; padding:0;">
            <div class="form-group">
                <label>Price</label>
                <input type="text" name="price" class="form-control" value="<?= $editData['price'] ?? '' ?>">
            </div>
            <div class="form-group">
                <label>Exam Fee</label>
                <input type="text" name="exam_fee" class="form-control" value="<?= $editData['exam_fee'] ?? '' ?>">
            </div>
             <div class="form-group">
                <label>Duration</label>
                <input type="text" name="duration" class="form-control" value="<?= $editData['duration'] ?? '' ?>">
            </div>
             <div class="form-group">
                <label>Difficulty</label>
                <input type="text" name="difficulty" class="form-control" value="<?= $editData['difficulty'] ?? '' ?>">
            </div>
        </div>
        
        <div class="form-group">
            <label>Icon URL</label>
            <input type="text" name="icon" class="form-control" value="<?= $editData['icon'] ?? '' ?>">
        </div>
        
        <div class="form-group">
            <label>Description</label>
            <textarea name="description" class="form-control"><?= $editData['description'] ?? '' ?></textarea>
        </div>
        
        <div class="card-grid" style="box-shadow:none; padding:0;">
             <div class="form-group">
                <label>Topics (Comma separated)</label>
                <textarea name="topics" class="form-control"><?= $editData ? implode(', ', json_decode($editData['topics'], true) ?? []) : '' ?></textarea>
            </div>
             <div class="form-group">
                <label>Next Batches (Comma separated)</label>
                <input type="text" name="next_batches" class="form-control" value="<?= $editData ? implode(', ', json_decode($editData['next_batches'], true) ?? []) : '' ?>">
            </div>
        </div>
        
        <div class="form-group">
            <label>Prerequisites</label>
            <input type="text" name="prerequisites" class="form-control" value="<?= $editData['prerequisites'] ?? '' ?>">
        </div>
        
        <div class="card-grid" style="box-shadow:none; padding:0;">
             <div class="form-group">
                <label>Who Should Take</label>
                <input type="text" name="who_should_take" class="form-control" value="<?= $editData['who_should_take'] ?? '' ?>">
            </div>
             <div class="form-group">
                <label>Career Outcomes</label>
                <input type="text" name="career_outcomes" class="form-control" value="<?= $editData['career_outcomes'] ?? '' ?>">
            </div>
        </div>

        <button type="submit" class="btn btn-success" style="width: 100%; margin-top: 10px;"><?= $editData ? 'Update Certification' : 'Add Certification' ?></button>
        <?php if($editData): ?>
            <a href="certifications.php" class="btn btn-danger" style="display:block; text-align:center; margin-top:10px;">Cancel Edit</a>
        <?php endif; ?>
    </form>
</div>

<?php require_once 'includes/footer.php'; ?>
