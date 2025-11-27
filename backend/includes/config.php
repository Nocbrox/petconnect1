<?php
class Conexion{
    private $server = "sql308.infinityfree.com";
    private $userdb= "if0_40444443";
    private $passdb = "Borrego132";
    private $namedb = "if0_40444443_petconnect";
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
