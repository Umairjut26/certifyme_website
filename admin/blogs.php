<?php
require_once 'includes/db.php';
require_once 'includes/header.php';

// Handle Form Submission
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $title = $conn->real_escape_string($_POST['title']);
    $excerpt = $conn->real_escape_string($_POST['excerpt']);
    $date = $conn->real_escape_string($_POST['date']);
    $category = $conn->real_escape_string($_POST['category']);
    $image = $conn->real_escape_string($_POST['image']);
    $full_content = $conn->real_escape_string($_POST['full_content']);
    
    if (isset($_POST['id']) && !empty($_POST['id'])) {
        $id = intval($_POST['id']);
        $sql = "UPDATE blogs SET title='$title', excerpt='$excerpt', date='$date', category='$category', image='$image', full_content='$full_content' WHERE id=$id";
    } else {
        $sql = "INSERT INTO blogs (title, excerpt, date, category, image, full_content) VALUES ('$title', '$excerpt', '$date', '$category', '$image', '$full_content')";
    }
    
    if ($conn->query($sql)) {
        echo "<script>window.location.href='blogs.php';</script>";
    } else {
        echo "<div class='alert alert-danger'>Error: " . $conn->error . "</div>";
    }
}

// Handle Delete
if (isset($_GET['delete'])) {
    $id = intval($_GET['delete']);
    $conn->query("DELETE FROM blogs WHERE id=$id");
    echo "<script>window.location.href='blogs.php';</script>";
}

// Get Editing Data
$editData = null;
if (isset($_GET['edit'])) {
    $id = intval($_GET['edit']);
    $editData = $conn->query("SELECT * FROM blogs WHERE id=$id")->fetch_assoc();
}
?>

<div class="card">
    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: 20px;">
        <h3>Manage Blogs</h3>
        <button onclick="document.getElementById('form-section').scrollIntoView({behavior: 'smooth'})" class="btn btn-success">+ Add New</button>
    </div>
    
    <table>
        <thead>
            <tr>
                <th>Title</th>
                <th>Category</th>
                <th>Date</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            <?php
            $result = $conn->query("SELECT * FROM blogs ORDER BY created_at DESC");
            while($row = $result->fetch_assoc()): 
            ?>
            <tr>
                <td><?= htmlspecialchars($row['title']) ?></td>
                <td><?= htmlspecialchars($row['category']) ?></td>
                <td><?= htmlspecialchars($row['date']) ?></td>
                <td>
                    <a href="?edit=<?= $row['id'] ?>#form-section" class="btn btn-primary">Edit</a>
                    <a href="?delete=<?= $row['id'] ?>" class="btn btn-danger" onclick="return confirm('Delete this blog?')">Del</a>
                </td>
            </tr>
            <?php endwhile; ?>
        </tbody>
    </table>
</div>

<div class="card" style="margin-top: 30px;" id="form-section">
    <h3><?= $editData ? 'Edit Blog' : 'Add New Blog' ?></h3>
    <form method="POST">
        <?php if($editData): ?>
            <input type="hidden" name="id" value="<?= $editData['id'] ?>">
        <?php endif; ?>
        
        <div class="form-group">
            <label>Title</label>
            <input type="text" name="title" class="form-control" required value="<?= $editData['title'] ?? '' ?>">
        </div>
        
        <div class="card-grid" style="box-shadow:none; padding:0;">
            <div class="form-group">
                <label>Category</label>
                <input type="text" name="category" class="form-control" required value="<?= $editData['category'] ?? '' ?>">
            </div>
            <div class="form-group">
                <label>Date (String format, e.g. "November 20, 2025")</label>
                <input type="text" name="date" class="form-control" value="<?= $editData['date'] ?? '' ?>">
            </div>
        </div>
        
        <div class="form-group">
            <label>Image URL</label>
            <input type="text" name="image" class="form-control" value="<?= $editData['image'] ?? '' ?>">
        </div>
        
        <div class="form-group">
            <label>Excerpt (Short summary)</label>
            <textarea name="excerpt" class="form-control" style="min-height: 60px;"><?= $editData['excerpt'] ?? '' ?></textarea>
        </div>
        
        <div class="form-group">
            <label>Full Content (HTML allowed)</label>
            <textarea name="full_content" class="form-control" style="min-height: 300px;"><?= htmlspecialchars($editData['full_content'] ?? '') ?></textarea>
        </div>

        <button type="submit" class="btn btn-success" style="width: 100%; margin-top: 10px;"><?= $editData ? 'Update Blog' : 'Add Blog' ?></button>
        <?php if($editData): ?>
            <a href="blogs.php" class="btn btn-danger" style="display:block; text-align:center; margin-top:10px;">Cancel Edit</a>
        <?php endif; ?>
    </form>
</div>

<?php require_once 'includes/footer.php'; ?>
