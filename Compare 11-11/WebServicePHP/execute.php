<?php 
	if (isset($_GET["sql"]))
	{
		$conexao = mysqli_connect("localhost","root","12345","aulabd");
		$sql = $_GET["sql"];
		$result = mysqli_query($conexao, $sql) or die(mysqli_error($conexao));

		if ($result)
		{
			echo "ok";
		}
		else
		{
			echo "ocorreu o erro: $result";
		}
			
	}
?>