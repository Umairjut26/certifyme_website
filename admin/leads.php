<?php
require_once 'includes/db.php';
require_once 'includes/header.php';

// Handle Delete
if (isset($_GET['delete'])) {
    $id = intval($_GET['delete']);
    $conn->query("DELETE FROM leads WHERE id=$id");
    echo "<script>window.location.href='leads.php';</script>";
}

// List Leads
$page = isset($_GET['page']) ? intval($_GET['page']) : 1;
$perPage = 10;
$offset = ($page - 1) * $perPage;

$result = $conn->query("SELECT * FROM leads ORDER BY created_at DESC LIMIT $perPage OFFSET $offset");
$total = $conn->query("SELECT COUNT(*) as count FROM leads")->fetch_assoc()['count'];
$totalPages = ceil($total / $perPage);
?>

<div class="card">
    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: 20px;">
        <h3>Leads / Contact Messages</h3>
    </div>
    
    <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Certification</th>
                <th>Date</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            <?php while($row = $result->fetch_assoc()): ?>
            <tr>
                <td><?= $row['id'] ?></td>
                <td><?= htmlspecialchars($row['name']) ?></td>
                <td><a href="mailto:<?= htmlspecialchars($row['email']) ?>"><?= htmlspecialchars($row['email']) ?></a></td>
                <td><?= htmlspecialchars($row['phone']) ?></td>
                <td><?= htmlspecialchars($row['certification']) ?></td>
                <td><?= date('M d, Y', strtotime($row['created_at'])) ?></td>
                <td>
                    <a href="leads.php?view=<?= $row['id'] ?>" class="btn btn-primary">View</a>
                    <a href="leads.php?delete=<?= $row['id'] ?>" class="btn btn-danger" onclick="return confirm('Are you sure?')">Del</a>
                </td>
            </tr>
            <?php endwhile; ?>
        </tbody>
    </table>

    <!-- Pagination -->
    <div style="margin-top: 20px;">
        <?php for($i=1; $i<=$totalPages; $i++): ?>
            <a href="?page=<?= $i ?>" class="btn <?= $i==$page ? 'btn-primary' : '' ?>" style="border: 1px solid #ddd;"><?= $i ?></a>
        <?php endfor; ?>
    </div>
</div>

<!-- View Modal or Section -->
<?php if(isset($_GET['view'])): 
    $viewId = intval($_GET['view']);
    $lead = $conn->query("SELECT * FROM leads WHERE id=$viewId")->fetch_assoc();
?>
<div style="position: fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.5); display:flex; justify-content:center; align-items:center;">
    <div style="background:white; padding:30px; border-radius:10px; width:500px; max-width:90%;">
        <h3>Message Details</h3>
        <p><strong>Name:</strong> <?= htmlspecialchars($lead['name']) ?></p>
        <p><strong>Email:</strong> <?= htmlspecialchars($lead['email']) ?></p>
        <p><strong>Phone:</strong> <?= htmlspecialchars($lead['phone']) ?></p>
        <p><strong>Interest:</strong> <?= htmlspecialchars($lead['certification']) ?></p>
        <p><strong>Date:</strong> <?= date('F j, Y g:i A', strtotime($lead['created_at'])) ?></p>
        <hr style="margin: 15px 0;">
        <p><strong>Message:</strong></p>
        <p style="background:#f9f9f9; padding:10px; border-radius:5px;"><?= nl2br(htmlspecialchars($lead['message'])) ?></p>
        <div style="margin-top:20px; text-align:right;">
            <a href="leads.php" class="btn btn-primary">Close</a>
        </div>
    </div>
</div>
<?php endif; ?>

<?php require_once 'includes/footer.php'; ?>
