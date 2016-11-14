<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$conexao = mysqli_connect("localhost","root","");
mysqli_select_db($conexao, "comparev2");

$result = mysqli_query($conexao, "SELECT c.`preco`,
mc.nome,
r.tipo,
t.tamanhoML 
from cerveja c, 
MarcaCerveja mc , 
Recipiente r , 
Tamanhos t 
where c.`codMarcaCerveja`=mc.`codMarcaCerveja` and 
c.`codRecipiente`=r.`codRecipiente` and 
c.`codTamanho`=t.`codTamanho`");


$registros = array();		
while ($linha = mysqli_fetch_array($result))
{
    $registros[] = array(		
        "preco"     => $linha["preco"],
        "marca"     => $linha["nome"],
        "recepiente"=> $linha["tipo"],
        "tamanho"   => $linha["tamanhoML"],			
    );
}

echo (json_encode($registros));	






?>