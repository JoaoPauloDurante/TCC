<?php
	$conexao = mysqli_connect("localhost","root","1234","comparev2");
	$sql = "select * from estados";
	$result = mysqli_query($conexao, $sql);
		
	$registros = array();		
	while ($linha = mysqli_fetch_array($result))
	{
		$nome = $linha['nome'];
		$id = $linha['cod_estados'];
		echo "<option value='$id'>$nome</option>";
	}

?>