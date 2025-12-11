<?php
require_once 'includes/db.php';
require_once 'includes/header.php';

// Handle Form Submission
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $name = $conn->real_escape_string($_POST['name']);
    $role = $conn->real_escape_string($_POST['role']);
    $certification = $conn->real_escape_string($_POST['certification']);
    $quote = $conn->real_escape_string($_POST['quote']);
    $rating = intval($_POST['rating']);
    $photo = $conn->real_escape_string($_POST['photo']);
    
    if (isset($_POST['id']) && !empty($_POST['id'])) {
        $id = intval($_POST['id']);
        $sql = "UPDATE testimonials SET name='$name', role='$role', certification='$certification', quote='$quote', rating=$rating, photo='$photo' WHERE id=$id";
    } else {
        $sql = "INSERT INTO testimonials (name, role, certification, quote, rating, photo) VALUES ('$name', '$role', '$certification', '$quote', $rating, '$photo')";
    }
    
    if ($conn->query($sql)) {
        echo "<script>window.location.href='testimonials.php';</script>";
    } else {
        echo "<div class='alert alert-danger'>Error: " . $conn->error . "</div>";
    }
}

// Handle Delete
if (isset($_GET['delete'])) {
    $id = intval($_GET['delete']);
    $conn->query("DELETE FROM testimonials WHERE id=$id");
    echo "<script>window.location.href='testimonials.php';</script>";
}

// Get Editing Data
$editData = null;
if (isset($_GET['edit'])) {
    $id = intval($_GET['edit']);
    $editData = $conn->query("SELECT * FROM testimonials WHERE id=$id")->fetch_assoc();
}
?>

<div class="card">
    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: 20px;">
        <h3>Manage Testimonials</h3>
        <button onclick="document.getElementById('form-section').scrollIntoView({behavior: 'smooth'})" class="btn btn-success">+ Add New</button>
    </div>
    
    <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Role</th>
                <th>Rating</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            <?php
            $result = $conn->query("SELECT * FROM testimonials");
            while($row = $result->fetch_assoc()): 
            ?>
            <tr>
                <td><?= htmlspecialchars($row['name']) ?></td>
                <td><?= htmlspecialchars($row['role']) ?></td>
                <td><?= htmlspecialchars($row['rating']) ?>/5</td>
                <td>
                    <a href="?edit=<?= $row['id'] ?>#form-section" class="btn btn-primary">Edit</a>
                    <a href="?delete=<?= $row['id'] ?>" class="btn btn-danger" onclick="return confirm('Delete this?')">Del</a>
                </td>
            </tr>
            <?php endwhile; ?>
        </tbody>
    </table>
</div>

<div class="card" style="margin-top: 30px;" id="form-section">
    <h3><?= $editData ? 'Edit Testimonial' : 'Add New Testimonial' ?></h3>
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
                <label>Role</label>
                <input type="text" name="role" class="form-control" value="<?= $editData['role'] ?? '' ?>">
            </div>
        </div>
        
        <div class="card-grid" style="box-shadow:none; padding:0;">
            <div class="form-group">
                <label>Certification</label>
                <input type="text" name="certification" class="form-control" value="<?= $editData['certification'] ?? '' ?>">
            </div>
            <div class="form-group">
                <label>Rating (1-5)</label>
                <input type="number" name="rating" class="form-control" min="1" max="5" value="<?= $editData['rating'] ?? '5' ?>">
            </div>
        </div>
        
        <div class="form-group">
            <label>Photo URL</label>
            <input type="text" name="photo" class="form-control" value="<?= $editData['photo'] ?? '' ?>">
        </div>
        
        <div class="form-group">
            <label>Quote</label>
            <textarea name="quote" class="form-control"><?= $editData['quote'] ?? '' ?></textarea>
        </div>

        <button type="submit" class="btn btn-success" style="width: 100%; margin-top: 10px;"><?= $editData ? 'Update Testimonial' : 'Add Testimonial' ?></button>
        <?php if($editData): ?>
            <a href="testimonials.php" class="btn btn-danger" style="display:block; text-align:center; margin-top:10px;">Cancel Edit</a>
        <?php endif; ?>
    </form>
</div>

<?php require_once 'includes/footer.php'; ?>
