
<?php

/* 1、连接数据库 */
$db = mysqli_connect("localhost", "root", "root", "yihaodian");
$id=$_REQUEST["id"];
$username=$_REQUEST["username"];

/* 2、查询获取数据库中的所有商品 */
$sql ="DELETE FROM cat WHERE id='$id' && username ='$username'";

$result = mysqli_query($db,$sql);
?>
