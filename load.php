<?php 
require 'connection.php';

$sql = $pdo->query('SELECT * FROM pessoa');

if($sql->rowCount() > 0) {
    foreach ($sql->fetchAll() as $value) {
        echo "<h3>ID: ".$value['id_pessoa']."</h3>";
        echo "<h3>Nome: ".$value['nome']."</h3>";
        echo "<h3>Email: ".$value['email']."</h3><hr>";
    }
}else{
    echo "<h3>No results!</h3>";
}