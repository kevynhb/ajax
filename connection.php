<?php 

try{
    $pdo = new PDO("mysql:dbname=teste;host=127.0.0.1", "root", "");
}catch(PDOException $e) {
    echo "Error: ".$e->getMessage();
}