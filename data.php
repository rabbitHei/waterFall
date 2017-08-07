<?php

	header('Content-Type:application/json; charset=utf-8');

	//获取文件
	$data=file_get_contents('data.json');
	//解码
	$data=json_decode($data);
	//获取page
	$page=$_POST['page'];

	$offset=($page-1)*10;
	//截取
	$result=array_slice($data, $offset,10);

	$page++;

	$info = array (
		"page"=>$page,
		"items"=>$result
		);

	$info = json_encode($info);

	echo $info;

	sleep(1);
?>