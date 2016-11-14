<?php 
	if (isset($_GET["sql"]))
	{
		$conexao = mysqli_connect("localhost","root","12345","aulabd");
		$sql = $_GET["sql"];
		$result = mysqli_query($conexao, $sql);
			
		$registros = array();		
		while ($linha = mysqli_fetch_array($result))
		{
			$registros[] = $linha;
		}
		
		echo (json_encode($registros));	
	}
?>