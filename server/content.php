<?php
  include("conn.php");
  $id = $_GET["id"];
  $sql = "SELECT * FROM ask WHERE id = '{$id}' ";
  $query = mysql_query($sql);
  $rs = mysql_fetch_array($query);
  $output = array('title'=>$rs['title'],'content'=>$rs['content'],'name'=>$rs['name'],'time'=>$rs['time'],'pic'=>$rs['imageurl'],);
  print_r(json_encode($output,JSON_UNESCAPED_UNICODE));
 ?>
