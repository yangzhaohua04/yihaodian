<?php
header("content-type:text/html;charset:utf-8");
 $db = mysqli_connect("localhost", "root", "root", "yihaodian");

$id = $_REQUEST["id"];
$username = $_REQUEST["username"];
 
$sql ="SELECT * FROM cat WHERE username='$username' && id='$id'";
$result = mysqli_query($db,$sql);

$num = mysqli_num_rows($result);
// $num = mysqli_num_rows($result);

if(mysqli_num_rows($result)==0){
    $sql="INSERT INTO cat (id,username,num) VALUES ('$id','$username',1)";
}elseif(mysqli_num_rows($result)==1){
    $sql ="UPDATE cat SET num=num+1 WHERE id='$id' && username ='$username'";
}
$retval=mysqli_query($db,$sql);
// echo $retval;
// if (!$retval) {
//        die('添加到购物车失败: ' . mysqli_error($conn));
//      };

echo "添加成功";


?>                                                                                                                                                                                                                                                                 