/*jshint browser:true */
/*global $ */(function()
{
 "use strict";

 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
	 
	 if(navigator.connection && navigator.connection.type=="none"){
            
            navigator.notification.alert("Não foi possível conectar ao servidor.", "Verifique sua conexão com a internet.","Alerta");
        
     }
     
     carregaEstados();
    
 
     /* listitem  LOADINDG */
    $(document).on("click", ".uib_w_2", function(evt)
    {
         /*global activate_page */
         activate_page("#anuncio"); 
         return false;
    });
    
        /* listitem  pagina 2 */
    $(document).on("click", ".uib_w_4", function(evt)
    {
         /*global activate_page */
         activate_page("#localizacao"); 
         return false;
    });
    
        /* listitem  LOCALIZAÇÃO */
    $(document).on("click", ".uib_w_6", function(evt)
    {
         /*global activate_page */
         activate_page("#escolha"); 
         return false;
    });
    
        /* listitem  CERVEJA */
    
    
        /* listitem  REFRIGERANTE */
    $(document).on("click", ".uib_w_10", function(evt)
    {
         /*global activate_page */
         activate_page("#refrigerante"); 
         return false;
    });
    
        /* button  #btnCER */
    $(document).on("click", "#btnCER", function(evt)
    {
         /*global activate_page */
         activate_page("#cerveja"); 
         return false;
    });
    
        /* button  .uib_w_14 */
    $(document).on("click", ".uib_w_14", function(evt)
    {
         /*global activate_page */
         activate_page("#refrigerante"); 
         return false;
    });
    
        /* button  #btnREf */
    $(document).on("click", "#btnREf", function(evt)
    {
         /*global activate_page */
         activate_page("#escolha"); 
         return false;
    });
    
        /* button  #btnCer */
    $(document).on("click", "#btnCer", function(evt)
    {
         /*global activate_page */
         activate_page("#escolha"); 
         return false;
    });
    
        /* button  #btnMenTam */
    $(document).on("click", "#btnMenTam", function(evt)
    {
         /*global activate_page */
         activate_page("#escolha"); 
         return false;
    });
    
        /* button  #btnVolTam */
    $(document).on("click", "#btnVolTam", function(evt)
    {
         /*global activate_page */
         activate_page("#cerveja"); 
         return false;
    });
    
        /* listitem  LOCALIZAÇÃO */
    $(document).on("click", ".uib_w_22", function(evt)
    {
         /*global activate_page */
         activate_page("#escolha"); 
         return false;
    });
    
        /* button  #btnMenCer */
    $(document).on("click", "#btnMenCer", function(evt)
    {
         /*global activate_page */
         activate_page("#escolha"); 
         return false;
    });
    
        /* listitem  MARCA */
    $(document).on("click", ".uib_w_26", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#refrigerante2"); 
         return false;
    });
    
        /* button  #menRF2 */
    $(document).on("click", "#menRF2", function(evt)
    {
         /*global activate_page */
         activate_page("#escolha"); 
         return false;
    });
    
        /* button  #volRF2 */
    $(document).on("click", "#volRF2", function(evt)
    {
         /*global activate_page */
         activate_page("#refrigerante"); 
         return false;
    });
    
        /* button  .uib_w_35 */
    $(document).on("click", ".uib_w_35", function(evt)
    {
         /*global activate_page */
         activate_page("#escolha"); 
         return false;
    });
    
        /* listitem  TAMANHO */
    $(document).on("click", ".uib_w_28", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#refrigerante3"); 
         return false;
    });
    
        /* button  .uib_w_38 */
    $(document).on("click", ".uib_w_38", function(evt)
    {
         /*global activate_page */
         activate_page("#escolha"); 
         return false;
    });
    
        /* listitem  TAMANHO */
    $(document).on("click", ".uib_w_42", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#cerveja3"); 
         return false;
    });
    
        /* listitem  MARCA */
    $(document).on("click", ".uib_w_20", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#cerveja2"); 
         return false;
    });
    
        /* listitem  CERVEJA */
    $(document).on("click", ".uib_w_9", function(evt)
    {
         /*global activate_page */
         activate_page("#cerveja"); 
         return false;
    });
    
        /* listitem  #listCerveja */
    
    
        /* listitem  #listCerveja */
    $(document).on("click", "#listCerveja", function(evt)
    {
         /*global activate_page */
         activate_page("#cerveja"); 
         return false;
    });
    
        /* listitem  #listRefrigerante */
    $(document).on("click", "#listRefrigerante", function(evt)
    {
         /*global activate_page */
         activate_page("#refrigerante"); 
         return false;
    });
    
        /* button  #btnVoltarCerveja */
    
    
        /* button  #btnBuscarCerveja */
    $(document).on("click", "#btnBuscarCerveja", function(evt)
    {
         /*global activate_page */
         activate_page("#TamanhoCerveja"); 
         return false;
    });
    
        /* button  #btnVoltar */
    $(document).on("click", "#btnVoltar", function(evt)
    {
         /*global activate_page */
         activate_page("#refrigerante"); 
         return false;
    });
    
        /* button  #btnVoltarRefrigerante */
    $(document).on("click", "#btnVoltarRefrigerante", function(evt)
    {
         /*global activate_page */
         activate_page("#refrigerante"); 
         return false;
    });
    
        /* button  #btnVoltarCerveja */
    $(document).on("click", "#btnVoltarCerveja", function(evt)
    {
         /*global activate_page */
         activate_page("#cerveja"); 
         return false;
    });
    
        /* button  #btnHomeRefrigerante */
    
    
        /* button  #btnCervejaContinuar */
    $(document).on("click", "#btnCervejaContinuar", function(evt)
    {
        
        
        
        var sqlCerveja="select mc.nome,rcp.tipo,tmh.tamanhoML,c.preco from marcacerveja mc, recipiente rcp,tamanho tmh, cerveja c where c.codMarcaCerveja=mc.codMarcaCerveja and c.codRecipiente=rcp.codRecipiente and c.codTamanho=tmh.codTamanho and  ";
        var BRAHMA;
        var SKOL;
        var ITAIPAVA;
        var KAISER;
        var ANTARCTICA;
        var NOVA_SCHIN;
        var BOHEMIA;
        var BAVARIA;
        var ANTARCTICA_SUB_ZERO;
        var BUDWEISER;
        var ANTARCTICA_ORIGINAL;
        var SKOL_BEATS_SENSES;
        var SKOL_BEATS_SPIRT;
        var HEINEKEN;
        var MILLER;
        
         if($("#cbBrahma").is(':checked'))
    {
        
         BRAHMA = "BRAHMA";
        sqlCerveja= sqlCerveja+" mc.nome like 'BRAHMA%' or";
        
    }
        
        if($("#cbSkol").is(':checked'))
    {
         SKOL = "SKOL";
        sqlCerveja= sqlCerveja+" mc.nome like 'SKOL%' or";
        
    }
        
        if($("#cbItaipava").is(':checked'))
    {
         ITAIPAVA = "ITAIPAVA";
        sqlCerveja= sqlCerveja+" mc.nome like 'ITAIPAVA%' or";
        
    } 
        
        if($("#cbAntarctica").is(':checked'))
    {
         ANTARCTICA = "ANTARCTICA";
        sqlCerveja= sqlCerveja+" mc.nome like 'ANTARCTICA%' or";
        
    }
        
        if($("#cbAntarcticaSubZero").is(':checked'))
    {
         ANTARCTICA_SUB_ZERO = "ANTARCTICA SUB ZERO";
        sqlCerveja= sqlCerveja+" mc.nome like 'ANTARCTCA SUB ZERO%' or";
        
    }
        
        if($("#cbKaiser").is(':checked'))
    {
         KAISER = "KAISER";
        sqlCerveja= sqlCerveja+" mc.nome like 'KAISER%' or";
        
    }
        
        if($("#cbHeineken").is(':checked'))
    {
         HEINEKEN = "HEINEKEN";
        sqlCerveja= sqlCerveja+" mc.nome like 'HEINEKEN%' or";
        
    }
        
        if($("#cbBudweiser").is(':checked'))
    {
         BUDWEISER = "BUDWEISER";
        sqlCerveja= sqlCerveja+" mc.nome like 'BUDWEISER%' or";
        
    }
        
        if($("#cbBohemia").is(':checked'))
    {
         BOHEMIA = "BOHEMIA";
        sqlCerveja= sqlCerveja+" mc.nome like 'BOHEMIA%' or";
        
    }
        
        if($("#cbOriginal").is(':checked'))
    {
         ANTARCTICA_ORIGINAL = "ANTARCTICA ORIGINAL";
        sqlCerveja= sqlCerveja+" mc.nome like 'ANTARCTICA ORIGINAL%' or";
        
    }
        
        if($("#cbSkolBeatsSenses").is(':checked'))
    {
         SKOL_BEATS_SENSES = "SKOL BEATES SENSES";
        sqlCerveja= sqlCerveja+" mc.nome like 'SKOL BEATES SENSES%' or";
        
    }
        
        if($("#cbSkolBeatsSpirt").is(':checked'))
    {
         SKOL_BEATS_SPIRT = "SKOL BEATES SPIRT";
        sqlCerveja= sqlCerveja+" mc.nome like 'SKOL BEATES SPIRT%' or";
        
    }
        
        if($("#cbSchin").is(':checked'))
    {
         NOVA_SCHIN = "NOVA SCHIN";
        sqlCerveja= sqlCerveja+" mc.nome like 'NOVA SCHIN%' or";
        
    }
        
        if($("#cbBavaria").is(':checked'))
    {
         BAVARIA = "BAVARIA";
        sqlCerveja= sqlCerveja+" mc.nome like 'BAVARIA%' or";
        
    }
        
        if($("#cbMiller").is(':checked'))
    {
         MILLER = "MILLER";
        sqlCerveja= sqlCerveja+" mc.nome like 'MILLER%' ";
        
    }
        
        
        
        
        
         activate_page("#TamanhoCerveja"); 
         
    });
    
        /* button  #btnContinuarRefrigerante */
    
    
        /* button  #btnLinkTamanhoRefrigerante */
    $(document).on("click", "#btnLinkTamanhoRefrigerante", function(evt)
    {
         /*global activate_page */
         activate_page("#cerveja"); 
         return false;
    });
    
        /* button  #btnMap */
    $(document).on("click", "#btnMap", function(evt)
    {
        
        var fnCapturar = function(position){
            
            var coords = position.coords;
            
            navigator.notification.alert(JSON.stringify(coords),"COORDENADAS");
            
            var map = new google.map(
                document.getElementById("map"),
                {
                    center : new google.maps.LatLng( coords.latitude, coords.longitude ),
                    zoom : 5,
                    mapTypeId : googleMaps.mapTypeId.ROADMAP
                    
                }
                                                                        
            );
            
            var marker = new google.maps.Marker({
                
                     title : "VocÊ está aqui: "+coords.latitude+", "+coords.longitude,
                     position : new google.maps.LatLng( coords.latitude, coords.longitude)
            });
            
            marker.setMap(map);
            
        };
        
        var fnFalhar = function(error){
            
            navigator.notification.alert("Erro ao capturar posição: "+error.message, "INFORMAÇÃO");
        };
        
        var opcoes = { maximumAge: 3000, timeout: 5000, enableHighAccuracy: true };
        
        navigator .geolocation.getCurrentPosition(fnCapturar, fnFalhar, opcoes);
        
        
    });
    
        /* listitem  #btnNetwork */
    $(document).on("click", "#btnNetwork", function(evt)
    {
        
        if(navigator.connection && navigator.connection.type!="none"){
            
            navigator.notification.alert("Tipo de conexão: "+navigator.connection.type, "Conectado a Internet !","OK");
        
        }else{
                                         
            navigator.notification.alert("Não foi possível conectar ao servidor. /n Verifique sua conexão com a internet.","Aviso","OK") ;                           
        }
        
    });
    
        /* button  #btnCarregarTestes */
    $(document).on("click", "#btnCarregarTestes", function(evt)
    {
        var caminho = "http://127.0.0.1/WebServiceCompare/cervejas.php";
        
        $.getJSON(caminho, function(resultado)
        {
            navigator.notification.alert("Registros: " + resultado.length);
            
            $("#listCervejas").empty();
            var linha = "";
            $.each(resultado, function(i, campo)
            {
                linha= '<a class="list-group-item allow-badge widget uib_w_172"' +
                        'data-uib="twitter%20bootstrap/list_item" data-ver="1">' +
                        '<h4 class="list-group-item-heading">' + campo.marca + '</h4>' +
                        '<p class="list-group-item-text">' + campo.recepiente + '</p>' + 
                        '<p class="list-group-item-text">' + campo.tamanho + '</p>' + 
                        '<p class="list-group-item-text">' + campo.preco + '</p>' + 
                        '</a>';
                $("#listCervejas").append(linha);
            });
        });
    });
        
    
        /* listitem  List item */
    $(document).on("click", ".uib_w_173", function(evt)
    {
         /*global activate_page */
         activate_page("#testes"); 
         return false;
    });
    
        /* button  voltar */
    $(document).on("click", ".uib_w_167", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#page_62_38"); 
         return false;
    });
    
        /* listitem  #ListaBuscarEndereco */
    $(document).on("click", "#ListaBuscarEndereco", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#BuscarEndereco"); 
         return false;
    });
    
        /* button  #btnBuscarEndereco */
    $(document).on("click", "#btnBuscarEndereco", function(evt)
    {
        
        
        
    });
    
        /* button  #btnBuscarResultadoRefrigerante */
    
    
        /* button  #btnBuscarResultadoCerveja */
    $(document).on("click", "#btnBuscarResultadoCerveja", function(evt)
    {
        var sqlCerveja;
        var tamanhoCerva250;
        var tamanhoCerva350;
        var tamanhoCerva550;
        var tamanhoCervaGarrafa250;
        var tamanhoCerva330;
        var tamanhoCerva343;
        var tamanhoCervaGarrafa350;
        var tamanhoCerva355;
        var tamanhoCerva500;
        var tamanhoCerva600;
        var tamanhoCerva1;
        
        
        
         if($("#cbTamanhoCervejaLata250").is(':checked'))
    {
         tamanhoCerva250 = "250ml";
         sqlCerveja= sqlCerveja+"and tmh.tamanhoML like '250ml Lata%' or";
        
    }
         if($("#cbTamanhoCervejaLata350").is(':checked'))
    {
         tamanhoCerva350 = "350ml";
        sqlCerveja= sqlCerveja+"tmh.tamanhoML like '350ml Lata%' or";
        
    }
        
        if($("#cbTamanhoCervejaLata550").is(':checked'))
    {
         tamanhoCerva550 = "550ml";
        sqlCerveja= sqlCerveja+"tmh.tamanhoML like '550ml Lata%' or";
        
    }
        
        if($("#cbTamanhoCervejaGarrafa250").is(':checked'))
    {
         tamanhoCervaGarrafa250 = "250ml";
        sqlCerveja= sqlCerveja+"tmh.tamanhoML like '250ml Garrafa%' or";
        
    }
        
        if($("#cbTamanhoCervejaGarrafa330").is(':checked'))
    {
         tamanhoCerva330 = "330ml";
        sqlCerveja= sqlCerveja+"tmh.tamanhoML like '330ml Garrafa%' or";
        
    }
        
        if($("#cbTamanhoCervejaGarrafa343").is(':checked'))
    {
         tamanhoCerva343 = "343ml";
        sqlCerveja= sqlCerveja+"tmh.tamanhoML like '343ml Garrafa%' or";
        
    }
        
        if($("#cbTamanhoCervejaGarrafa350").is(':checked'))
    {
         tamanhoCerva350 = "350ml";
        sqlCerveja= sqlCerveja+"tmh.tamanhoML like '350ml Garrafa%' or";
        
    }
        
        if($("#cbTamanhoCervejaGarrafa355").is(':checked'))
    {
         tamanhoCerva355 = "355ml";
        sqlCerveja= sqlCerveja+"tmh.tamanhoML like '355ml Garrafa%' or";
        
    }
        
        if($("#cbTamanhoCervejaGarrafa500").is(':checked'))
    {
         tamanhoCerva500 = "500ml";
        sqlCerveja= sqlCerveja+"tmh.tamanhoML like '500ml Garrafa%' or";
        
    }
        
        if($("#cbTamanhoCervejaGarrafa600").is(':checked'))
    {
         tamanhoCerva600 = "600ml";
        sqlCerveja= sqlCerveja+"tmh.tamanhoML like '600ml Garrafa%' or";
        
    }
        
        if($("#cbTamanhoCervejaGarrafa1L").is(':checked'))
    {
         tamanhoCerva1 = "1 L";
        sqlCerveja= sqlCerveja+"tmh.tamanhoML like '1 L Garrafa%' or";
        
    }
         activate_page("#testes"); 
         
    });
    
        /* button  #btnContinuar-Localizacao */
    
    
        /* button  #btnGoogleMaps */
    $(document).on("click", "#btnGoogleMaps", function(evt)
    {
         /*global activate_page */
         activate_page("#GoogleMaps"); 
         return false;
    });
    
        /* listitem  #ListEscolhaCerveja */
    $(document).on("click", "#ListEscolhaCerveja", function(evt)
    {
         /*global activate_page */
         activate_page("#cerveja"); 
         return false;
    });
    
        /* listitem  #ListEscolhaRefrigerante */
    $(document).on("click", "#ListEscolhaRefrigerante", function(evt)
    {
         /*global activate_page */
         activate_page("#refrigerante"); 
         return false;
    });
    
        /* button  #btnBuscarResultadoCerveja */
    $(document).on("click", "#btnBuscarResultadoCerveja", function(evt)
    {
         
         activate_page("#testes"); 
         return false;
    });
    
        /* button  #btnVoltarCerveja */
    $(document).on("click", "#btnVoltarCerveja", function(evt)
    {
         /*global activate_page */
         activate_page("#cerveja"); 
         return false;
    });
    
        /* button  #btnLinkTamanhoCerveja */
    
    
        /* button  #btnLinkTamanhoCerveja */
    $(document).on("click", "#btnLinkTamanhoCerveja", function(evt)
    {
         /*global activate_page */
         activate_page("#refrigerante"); 
         return false;
    });
    
        /* button  #btnVoltar-GoogleMaps */
    $(document).on("click", "#btnVoltar-GoogleMaps", function(evt)
    {
         /*global activate_page */
         activate_page("#testes"); 
         return false;
    });
     
     function carregaEstados()
     {
         
        $.ajax({
            type: "POST",
            url: "http://127.0.0.1/WebServiceCompare/exibe_estados.php",
            dataType: "text",
            success: function(res)
            {
                
                $("#estados").empty();
                $("#estados").append(res);
            }
	   });
     }
     
    $("#estados").change(function()
    {
        var id = $(this).val();
        $.ajax({
        type: "POST",
        url: "http://127.0.0.1/WebServiceCompare/exibe_cidade.php?id="+id,
        dataType: "text",
        success: function(res){
            $("#cidades").empty(); 
            $("#cidades").append(res);

        }
    });
	
});
    
        /* button  #btnVerificar */
    $(document).on("click", "#btnVerificar", function(evt)
    {
        var estado, cod_cidade, cidade;
        estado = $("#estados").val();
        cod_cidade = $("#cidades").val();
        cidade = $("#cidades option:selected").text(); 
        
        
        navigator.notification.alert("voce selecionou a cidade " + cidade + " do estado " + estado);
    });
    
        /* button  #btnContinuarRefrigerante */
    $(document).on("click", "#btnContinuarRefrigerante", function(evt)
    {
        var sqlRefrigerante="select mr.nome,rcp.tipo,tmh.tamanhoML,r.preco from marcarefrigerante mr, recipiente rcp,tamanho tmh, refrigerante r where r.codMarcaRefrigerante=mr.codMarcaRefrigerante and r.codRecipiente=rcp.codRecipiente and r.codTamanho=tmh.codTamanho and  ";
        var COCA_COLA;
        var FANTA;
        var COCA_COLA_ZERO;
        var FANTA_UVA;
        var GUARANA_ANTARCTICA;
        var KUAT;
        var PEPSI;
        var PEPSI_TWIST;
        var SCHWEPPES;
        var SPRITE;
        
        
        if($("#cbCoca").is(':checked'))
    {
         COCA_COLA = "COCA COLA";
        sqlRefrigerante= sqlRefrigerante+"mr.nome like 'COCA COLA%' or";
        
    }
        if($("#cbFanta").is(':checked'))
    {
         FANTA = "FANTA";
        sqlRefrigerante= sqlRefrigerante+"mr.nome like 'FANTA%' or";
    }
        if($("#cbFantaUva").is(':checked'))
    {
         FANTA_UVA = "FANTA UVA";
        sqlRefrigerante= sqlRefrigerante+"mr.nome like 'FANTA UVA%' or";
        
    }
        if($("#cbSprite").is(':checked'))
    {
         SPRITE ="SPRITE";
        sqlRefrigerante= sqlRefrigerante+"mr.nome like 'SPRITE%' or";
    }
        if($("#cbCocaZero").is(':checked'))
    {
         COCA_COLA_ZERO = "COCA COLA ZERO"; 
        sqlRefrigerante= sqlRefrigerante+"mr.nome like 'COCA COLA ZERO%' or";
    }
        if($("#cbGuarana").is(':checked'))
    {
         GUARANA_ANTARCTICA = "GUARANÁ ANTARCTICA";
        sqlRefrigerante= sqlRefrigerante+"mr.nome like 'GUARANA ANTARCTICA%' or";
    }
        if($("#cbKuat").is(':checked'))
    {
         KUAT = "KUAT";
        sqlRefrigerante= sqlRefrigerante+"mr.nome like 'KUAT%' or";
    }
        if($("#cbSchweppes").is(':checked'))
    {
         SCHWEPPES = "SCHWEPPES";
        sqlRefrigerante= sqlRefrigerante+"mr.nome like 'SCHWEPPES%' or";
    }
        if($("#cbPesi").is(':checked'))
    {
         PEPSI ="PEPSI"; 
        sqlRefrigerante= sqlRefrigerante+"mr.nome like 'PEPSI%' or";
    }
        activate_page("#TamanhoRefrigerante");
        
        
    });
    
        /* button  #btnContinuar-Localizacao */
    
    
        /* button  #btnBuscarResultadoRefrigerante */
    $(document).on("click", "#btnBuscarResultadoRefrigerante", function(evt)
    {
        var sqlRefrigerante;
        var tamanhoRefri250;
        var tamanhoRefri350;
        var tamanhoRefri237; 
        var tamanhoRefri290;
        var tamanhoRefri1;
        var tamanhoRefri125;
        var tamanhoRefriGarrafa250;
        var tamanhoRefri15;
        var tamanhoRefri2;
        var tamanhoRefri25;           
        var tamanhoRefri3;     
        var tamanhoRefriPet600;
    
        if($("#cbTamanhoRefrigeranteLata250").is(':checked'))
    {
         tamanhoRefri250 = "250ml";
        sqlRefrigerante= sqlRefrigerante+"tmh.tamanhoML like '250ml Lata%' or";
        
    }
     
     if($("#cbTamanhoRefrigeranteLata350").is(':checked'))
    {
         tamanhoRefri350 = "350ml";
        sqlRefrigerante= sqlRefrigerante+"tmh.tamanhoML like '350ml Lata%' or";
    }
     
     if($("#cbTamanhoRefrigeranteVidro237").is(':checked'))
    {
         tamanhoRefri237 = "237ml";
        sqlRefrigerante= sqlRefrigerante+"tmh.tamanhoML like '237ml Retornavel%' or";
    }
     
     if($("#cbTamanhoRefrigeranteVidro290").is(':checked'))
    {
         tamanhoRefri290 = "290ml";
        sqlRefrigerante= sqlRefrigerante+"tmh.tamanhoML like '290ml Retornavel%' or";
    } 
     
     if($("#cbTamanhoRefrigeranteRetornavel1L").is(':checked'))
    {
         tamanhoRefri1 = "1 L";
        sqlRefrigerante= sqlRefrigerante+"tmh.tamanhoML like '1 L Retornavel%' or";
    }
     
     if($("#cbTamanhoRefrigeranteRetornavel1.25L").is(':checked'))
    {
         tamanhoRefri290 = "1.25 L";
        sqlRefrigerante= sqlRefrigerante+"tmh.tamanhoML like '1.25 L Retornavel%' or";
    }
     
     if($("#cbTamanhoRefrigerantePet250").is(':checked'))
    {
         tamanhoRefri250 = "250ml";
        sqlRefrigerante= sqlRefrigerante+"tmh.tamanhoML like '250ml Pet%' or";
    }
     
     if($("#cbTamanhoRefrigerantePet600").is(':checked'))
    {
         tamanhoRefriPet600 = "600ml";
        sqlRefrigerante= sqlRefrigerante+"tmh.tamanhoML like '600ml Pet%' or";
    }
     
     if($("#cbTamanhoRefrigerantePet1.5").is(':checked'))
    {
         tamanhoRefri15 = "1.5 L";
        sqlRefrigerante= sqlRefrigerante+"tmh.tamanhoML like '1.5 L Pet%' or";
    }
     
     if($("#cbTamanhoRefrigerantePet2").is(':checked'))
    {
         tamanhoRefri2 = "2 L";
        sqlRefrigerante= sqlRefrigerante+"tmh.tamanhoML like '2 L Pet%' or";
    }
     
     if($("#cbTamanhoRefrigerantePet2.5").is(':checked'))
    {
         tamanhoRefri25 = "2.5 L";
        sqlRefrigerante= sqlRefrigerante+"tmh.tamanhoML like '2.5 L Pet%' or";
    }
     
     if($("#cbTamanhoRefrigerantePet3").is(':checked'))
    {
         tamanhoRefri3 = "3 L";
        sqlRefrigerante= sqlRefrigerante+"tmh.tamanhoML like '3 L Pet%' or";
    }
		
		activate_page("#testes");
     
     
    });
    
        /* button  #btnBuscarResultadoRefrigerante */
    $(document).on("click", "#btnBuscarResultadoRefrigerante", function(evt)
    {
        /* your code goes here */ 
         return false;
    });
    
        /* button  #btnVoltarRefrigerante */
    $(document).on("click", "#btnVoltarRefrigerante", function(evt)
    {
         /*global activate_page */
         activate_page("#refrigerante"); 
         return false;
    });
    
        /* button  #btnHomeRefrigerante */
    
    
        /* button  #btnHomeRefrigerante */
    $(document).on("click", "#btnHomeRefrigerante", function(evt)
    {
         /*global activate_page */
         activate_page("#Escolha"); 
         return false;
    });
    
        /* button  #linkNextRefrigerante */
    $(document).on("click", "#linkNextRefrigerante", function(evt)
    {
         /*global activate_page */
         activate_page("#cerveja"); 
         return false;
    });
    
        /* button  #btnContinuar-Localizacao */
    $(document).on("click", "#btnContinuar-Localizacao", function(evt)
    {
       var estado, cod_cidade, cidade;
        estado = $("#estados").val();
        cod_cidade = $("#cidades").val();
        cidade = $("#cidades option:selected").text(); 
        
        
        navigator.notification.alert("voce selecionou a cidade " + cidade + " do estado " + estado);
		
		activate_page("#Escolha");
    });
    
    }
    
    
 document.addEventListener("app.Ready", register_event_handlers, false);
})();



/*

    if($("#nome_componente").is(':checked'))
    {
    } 
    else 
    {
    }

*/
    