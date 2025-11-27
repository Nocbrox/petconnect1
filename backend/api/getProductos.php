<?php
include("../includes/config.php");

$db = new Conexion();

$stmt = $db->pdo->query("SELECT * FROM productos");
$data = $stmt->fetchAll(PDO::FETCH_ASSOC);

echo json_encode($data);
?>
