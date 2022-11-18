<?php 
class Test extends Dbh {

  public function getUsers() {
    echo 'Hello World!';
    $sql = "SELECT * FROM escotistas";
    $stmt = $this->connect()->query($sql);
    while($row = $stmt->fetch()) {
      echo $row['nome'].'ola';
    }
  }

}
?>