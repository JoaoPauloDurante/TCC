<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Untitled Document</title>
<script type="application/javascript" src="jquery-3.1.1.js"></script>

<script type="application/javascript">

	$(document).ready(function(e) 
	{
     	$("#btnConsultar").click(function(e) {
			
			var sql = "select * from clientes";
			$("#resultado1").empty();
			$.getJSON("consulta.php?sql="+sql, function(data){
				
				$.each(data, function(i, value){
					$("#resultado1").append("<br>" + i + ":" + value.nome);
				});
					
			});
        });   
		
		$("#btnExecutar").click(function(e) {
			var sql = $("#sql").val();
			$.ajax(
			{
				type: "GET",
				url: "execucao.php",
				async: true,
				data: {"sql" : sql},
				success: function(resposta)
				{	
					if ( resposta == "ok" ) 
					{
						$("#resultado1").html("ok");			
					} 
					else 
					{
						$("#resultado1").html("Erro ao executar a operação: <p>" + resposta);
					}
				},
				error: function (request, status, error) 
				{
					$("#resultado1").html("Erro ao executar a operação: <p>" + status);	
				}		
			});	//fim do ajax
			return false;
        });
    });

</script>
<style type="text/css">
#resultado1 {
	color: #000;
}
</style>
</head>

<body>
<h1>Pagina de Testes de WebService</h1>
<fieldset>
  <legend>Execução de Instrução SQL</legend>
  <form id="form1" name="form1" method="post" action="">
    <p>Digite a linha SQL que deseja executar no banco de dados<br />
      <label for="sql"></label>
      <input name="sql" type="text" id="sql" value="" size="100" required="required" />
    </p>
    <p>
      <input type="submit" name="btnExecutar" id="btnExecutar" value="Executar SQL no WebService em PHP" />
      <input type="button" name="btnConsultar" id="btnConsultar" value="Consultar" />
    </p>
  </form>
  <div id="resultado1"></div>
</fieldset>
</body>
</html>