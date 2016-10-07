
	
	<!DOCTYPE html>
	<html>
	<head>
		<title>Testing</title>
	</head>
	<body>
		<?php
		$maths=["sem1"=>50,"sem2"=>60,"sem3"=>50];
		$oopm=["sem1"=>50,"sem2"=>60,"sem3"=>50];
		$spa=["sem1"=>50,"sem2"=>60,"sem3"=>50];
		$a1=["sem1","sem2","sem3"];
			$table="<table border=1px>
		<th></th>
		<th>maths</th>
		<th>oopm</th>
		<th>spa</th>";

		$j=1;
		for($i=0 ; $i<=2 ; $i++)
		{
			$var=$a1[$i];
			$table=$table.'<tr><th>Sem$j</th>
							<td>'.$maths[$var].'</td>
							<td>'.$oopm[$var].'</td>
							<td>'.$spa[$var].'</td>
							</tr>';
								$j++;


		}
		$table= $table. "</table>";
		echo $table;
	/*$string="";
	$assoc=["dept"=>'CO',"class"=>"BE"];
	$array=["dept","class"];

	for($i=0 ; $i<=1 ; $i++)
	{
		$var=$array[$i];
		echo"<br>$assoc[$var]";
	}
	
	$array=["be",6];
	$assoc=["dept"=>"CO","class"=>'BE'];
	$myst='';
	$i=0;

	for($i=0 ; $i<2 ; $i++)
	{
		$var=$array[$i];
		echo $assoc[$var];
	}

$var2='madam';
$rev=strrev($var2);
if($var2==$rev);
echo "is palindrome";
else 
	echo"not palindrome";

	}
		//echo $assoc['arshiya'];
	echo $array[2].$array[1];*/
	?>
	</body>
	</html>