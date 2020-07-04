<?php

 /* 1、连接数据库 */
 $db = mysqli_connect("localhost", "root", "root", "yihaodian");


//  /* 2、查询获取数据库中的所有商品 */
//  $sql = "SELECT * FROM cat";

//  $result = mysqli_query($db,$sql);
//  $data = mysqli_fetch_all($result,MYSQLI_ASSOC);

//  /* 3、把数据转换为JSON数据返回 */
//  echo json_encode($data,true);


 $username = $_REQUEST["username"];
//  echo $username;
 /* 多表查询 */


 $sql = "SELECT cat.*,list.* FROM cat , list WHERE cat.id = list.id AND username='$username'";
 
 $result = mysqli_query($db,$sql);

 $data = mysqli_fetch_all($result,MYSQLI_ASSOC);

  /* 3、把数据转换为JSON数据返回 */
  echo json_encode($data,true);
?>


