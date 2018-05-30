<?php
include("conn.php");
$title = $_GET['title'];
$name = $_GET['name'];
$content = $_GET['content'];
$imageurl = $_GET['imageurl'];
$time = $_GET['time'];
$sql = "INSERT INTO `ask` (`title`,`content`,`time`,`name`,`imageurl`)VALUES ('{$title}','{$content}','{$time}','{$name}','{$imageurl}')";
if(mysql_query($sql)){
  echo "新增成功";
}else{
  echo "新增失败";
}
?>
