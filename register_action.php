<?php
	$user = $_GET['username'];
	$password = $_GET['password'];
	$email = $_GET['email'];

	$server = 'localhost';
	$username = 'root';
	$pwd = 'root';
	$dbname = 'arshiya';

	$conn=mysqli_connect($server,$username,$pwd,$dbname);

	$query = 'insert into user(username,password,email)values("'.$user.'","'$password.'","'$email')';
	$result=mysql_query($conn,$query);

>