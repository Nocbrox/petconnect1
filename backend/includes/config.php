<?php
class Conexion{
    private $server = "localhost";
    private $userdb= "root";
    private $passdb = "";
    private $namedb = "petconnect";
    private $charset = "utf8mb4";

    public $pdo;

    public function __construct(){
        try {
            $dsn = "mysql:host=" . $this->server . ";dbname=" . $this->namedb . ";charset=" . $this->charset;
            $this->pdo = new PDO($dsn, $this->userdb, $this->passdb);
            $this->pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        } catch (PDOException $e) {
            echo "error de conexion " . $e->getMessage();
        }
    }
}
?>
