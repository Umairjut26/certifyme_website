<?php
require_once 'includes/db.php';
require_once 'includes/header.php';

// Handle Form Submission
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $question = $conn->real_escape_string($_POST['question']);
    $answer = $conn->real_escape_string($_POST['answer']);
    
    if (isset($_POST['id']) && !empty($_POST['id'])) {
        $id = intval($_POST['id']);
        $sql = "UPDATE faqs SET question='$question', answer='$answer' WHERE id=$id";
    } else {
        $sql = "INSERT INTO faqs (question, answer) VALUES ('$question', '$answer')";
    }
    
    if ($conn->query($sql)) {
        echo "<script>window.location.href='faqs.php';</script>";
    } else {
        echo "<div class='alert alert-danger'>Error: " . $conn->error . "</div>";
    }
}

// Handle Delete
if (isset($_GET['delete'])) {
    $id = intval($_GET['delete']);
    $conn->query("DELETE FROM faqs WHERE id=$id");
    echo "<script>window.location.href='faqs.php';</script>";
}

// Get Editing Data
$editData = null;
if (isset($_GET['edit'])) {
    $id = intval($_GET['edit']);
    $editData = $conn->query("SELECT * FROM faqs WHERE id=$id")->fetch_assoc();
}
?>

<div class="card">
    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: 20px;">
        <h3>Manage FAQs</h3>
        <button onclick="document.getElementById('form-section').scrollIntoView({behavior: 'smooth'})" class="btn btn-success">+ Add New</button>
    </div>
    
    <table>
        <thead>
            <tr>
                <th>Question</th>
                <th>Answer (Truncated)</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            <?php
            $result = $conn->query("SELECT * FROM faqs");
            while($row = $result->fetch_assoc()): 
            ?>
            <tr>
                <td style="max-width:300px;"><?= htmlspecialchars($row['question']) ?></td>
                <td style="max-width:300px; overflow:hidden; white-space:nowrap; text-overflow:ellipsis;"><?= htmlspecialchars($row['answer']) ?></td>
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
    <h3><?= $editData ? 'Edit FAQ' : 'Add New FAQ' ?></h3>
    <form method="POST">
        <?php if($editData): ?>
            <input type="hidden" name="id" value="<?= $editData['id'] ?>">
        <?php endif; ?>
        
        <div class="form-group">
            <label>Question</label>
            <input type="text" name="question" class="form-control" required value="<?= $editData['question'] ?? '' ?>">
        </div>
        
        <div class="form-group">
            <label>Answer</label>
            <textarea name="answer" class="form-control" required style="min-height: 100px;"><?= $editData['answer'] ?? '' ?></textarea>
        </div>

        <button type="submit" class="btn btn-success" style="width: 100%; margin-top: 10px;"><?= $editData ? 'Update FAQ' : 'Add FAQ' ?></button>
        <?php if($editData): ?>
            <a href="faqs.php" class="btn btn-danger" style="display:block; text-align:center; margin-top:10px;">Cancel Edit</a>
        <?php endif; ?>
    </form>
</div>

<?php require_once 'includes/footer.php'; ?>
