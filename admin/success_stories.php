<?php
require_once 'includes/db.php';
require_once 'includes/header.php';

// Handle Form Submission
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $name = $conn->real_escape_string($_POST['name']);
    $before_role = $conn->real_escape_string($_POST['before_role']);
    $after_role = $conn->real_escape_string($_POST['after_role']);
    $certification = $conn->real_escape_string($_POST['certification']);
    $salary_increase = $conn->real_escape_string($_POST['salary_increase']);
    $story = $conn->real_escape_string($_POST['story']);
    $image = $conn->real_escape_string($_POST['image']);
    
    if (isset($_POST['id']) && !empty($_POST['id'])) {
        $id = intval($_POST['id']);
        $sql = "UPDATE success_stories SET name='$name', before_role='$before_role', after_role='$after_role', certification='$certification', salary_increase='$salary_increase', story='$story', image='$image' WHERE id=$id";
    } else {
        $sql = "INSERT INTO success_stories (name, before_role, after_role, certification, salary_increase, story, image) VALUES ('$name', '$before_role', '$after_role', '$certification', '$salary_increase', '$story', '$image')";
    }
    
    if ($conn->query($sql)) {
        echo "<script>window.location.href='success_stories.php';</script>";
    } else {
        echo "<div class='alert alert-danger'>Error: " . $conn->error . "</div>";
    }
}

// Handle Delete
if (isset($_GET['delete'])) {
    $id = intval($_GET['delete']);
    $conn->query("DELETE FROM success_stories WHERE id=$id");
    echo "<script>window.location.href='success_stories.php';</script>";
}

// Get Editing Data
$editData = null;
if (isset($_GET['edit'])) {
    $id = intval($_GET['edit']);
    $editData = $conn->query("SELECT * FROM success_stories WHERE id=$id")->fetch_assoc();
}
?>

<div class="card">
    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: 20px;">
        <h3>Manage Success Stories</h3>
        <button onclick="document.getElementById('form-section').scrollIntoView({behavior: 'smooth'})" class="btn btn-success">+ Add New</button>
    </div>
    
    <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Certification</th>
                <th>Salary Increase</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            <?php
            $result = $conn->query("SELECT * FROM success_stories");
            while($row = $result->fetch_assoc()): 
            ?>
            <tr>
                <td><?= htmlspecialchars($row['name']) ?></td>
                <td><?= htmlspecialchars($row['certification']) ?></td>
                <td><?= htmlspecialchars($row['salary_increase']) ?></td>
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
    <h3><?= $editData ? 'Edit Story' : 'Add New Story' ?></h3>
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
                <label>Certification</label>
                <input type="text" name="certification" class="form-control" value="<?= $editData['certification'] ?? '' ?>">
            </div>
        </div>
        
        <div class="card-grid" style="box-shadow:none; padding:0;">
            <div class="form-group">
                <label>Before Role</label>
                <input type="text" name="before_role" class="form-control" value="<?= $editData['before_role'] ?? '' ?>">
            </div>
            <div class="form-group">
                <label>After Role</label>
                <input type="text" name="after_role" class="form-control" value="<?= $editData['after_role'] ?? '' ?>">
            </div>
        </div>
        
        <div class="card-grid" style="box-shadow:none; padding:0;">
             <div class="form-group">
                <label>Salary Increase (e.g., "85%")</label>
                <input type="text" name="salary_increase" class="form-control" value="<?= $editData['salary_increase'] ?? '' ?>">
            </div>
             <div class="form-group">
                <label>Image URL</label>
                <input type="text" name="image" class="form-control" value="<?= $editData['image'] ?? '' ?>">
            </div>
        </div>
        
        <div class="form-group">
            <label>Story (Short description)</label>
            <textarea name="story" class="form-control"><?= $editData['story'] ?? '' ?></textarea>
        </div>

        <button type="submit" class="btn btn-success" style="width: 100%; margin-top: 10px;"><?= $editData ? 'Update Story' : 'Add Story' ?></button>
        <?php if($editData): ?>
            <a href="success_stories.php" class="btn btn-danger" style="display:block; text-align:center; margin-top:10px;">Cancel Edit</a>
        <?php endif; ?>
    </form>
</div>

<?php require_once 'includes/footer.php'; ?>
