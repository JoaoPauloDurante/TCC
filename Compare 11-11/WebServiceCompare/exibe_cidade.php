<?php

	ysqli_query($conexao, $sql);
		
	$registros = array();		
	while ($linha = mysqli_fetch_array($result))
	{
		$nome = $linha['nome'];
		$id = $linha['cod_cidades'];
		echo "<option value='$id'>$nome</option>";
	}


?>