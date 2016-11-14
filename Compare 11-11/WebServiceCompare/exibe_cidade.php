<?php

	$conexao = mysqli_connect("localhost","root","1234","comparev2");
	$id = $_GET['id'];
	$sql = "select * from cidades where estados_cod_estados = $id";
	$result = mysqli_query($conexao, $sql);
		
	$registros = array();		
	while ($linha = mysqli_fetch_array($result))
	{
		$nome = $linha['nome'];
		$id = $linha['cod_cidades'];
		echo "<option value='$id'>$nome</option>";
	}


?>