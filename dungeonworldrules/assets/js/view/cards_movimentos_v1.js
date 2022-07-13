$(document).ready(function() {
console.log("Quantidade de movimentos: " + lista_movimento.length);
console.log(" ");


//CONFIGURAÇÕES
obo = "one-by-one";
same = "same";
colorType = same;
colorIndex = 0;
colorTotal = 3;

//tipo de titulo
//0 > titulo semelhante ao dos Movimentos de Dungeon World
//1 > titulo simplificado
titleType = 1;


for (var i = 0; i < lista_movimento.length; i++) 
{   

    //gerencia qual cor do CSS vai ser aplicada, se passar da quantidade total de cores do CSS, volta para o index 1
    colorIndex += 1;
    if(colorIndex > colorTotal && colorType == "one-by-one");
        colorIndex = 1;

    //Separa o array em uma varial com nome mais facil de compreender
    movimento = lista_movimento[i];

    ///HTML CONTENT

    titulo = movimento[0];
    tipo = movimento[1];
    descricao = movimento[2];
    atributo = movimento[3];

    html_content  = "<div class='col-md-4 my-5'>";
    html_content += "<div class='bg-light-2 rounded-5 p-3 position-relative h-100 shadow border'>";
    


    if(titleType == 0)
    {
        html_content += "<div class='row no-gutters p-3 align-items-center'>";

        html_content += "<div class='col-md-3'><img src='assets/flat-icons/";
            switch(tipo)
            {
                case basic:
                    html_content += "arrow.png";
                    break;
                    case special:
                        html_content += "arrow.png";
                        break;
                        case master:
                            html_content += "magic-book-circle.png";
                            break;
            }
        html_content += "' class='img-fluid' style='max-height: 90px;'></div>";
        
        html_content += "<div class='col-md-9 h4 p-0 text-light'>" + titulo + "</div>";
        html_content += "</div>";
    }


    //CARD CONTENT
    html_content += "<div class='bg-dark gradient-"+colorIndex+"-30 rounded-4 text-white p-5'>";

    
        //TITULO de tipo 1
        if(titleType == 1)
        {      
            html_content += "<div class='h4 text-primary-1'>" + titulo + "</div>";
        }


    if(descricao != "")
    {
        html_content += "<div class='row no-gutters mb-3 align-items-center'>";
            html_content += "<div class='col-md-9 border-end'>";
                html_content += "<div id='style-1' class='d-flex' style='min-height: 200px'>";
                html_content += "<p class='fw-bold fst-italic align-self-center'>" + '"' + descricao + "</p>";
                html_content += "</div>";
            html_content += "</div>";
            
            if(atributo != "")
                html_content += "<div class='col-md-3'><h2 class='text-secondary'> +" + atributo + "</h2></div>";
        html_content += "</div>";//fim row
    }

    html_content += "<hr>";

    html_content += "<div id='style-1' class='overflow-auto' style='max-height: 250px; min-height: 250px'>";

    ///DEBUG CONSOLE

    console.log("MOVIMENTO " + (i+1));
    console.log("Titulo: " + movimento[0]);
    console.log("Tipo: " + movimento[1]);

    if(movimento[2] == "")
        console.log("Descição: sem descrição");
    else
        console.log("Descrição: " + movimento[2]);

    console.log("Atributto: " + movimento[3]);
    
    tipo_cartao = movimento[4];
    console.log("Tipo de cartão: " + tipo_cartao);
    
    console.log("Condições de dados: ");

    //CARTÃO TIPO 1 - MOVIMENTOS: MATAR E PILHAR, DISPARAR
    if(tipo_cartao == 1 && movimento[5] != null)
    {
        lista = movimento[5];
        for (var j = 0; j < lista.length; j++) 
        {
            linha = lista[j];

            console.log(linha[0] + " : " + linha[1]);

            html_content += "<p><span class='badge text-bg-secondary'>" + linha[0] + "</span> " + linha[1] + "</p>";


            //Escolhas
            if(linha[2] != null)
            {
                escolhas = linha[2];
                for (var escolha = 0; escolha < escolhas.length; escolha++) 
                {
                    console.log((escolha+1) + ") " + escolhas[escolha]);
                    html_content += "<p class='small text-secondary'> <i class='fa-solid fa-caret-right'></i> " + escolhas[escolha] + "</p>";
                }
            }
        }
    }
    
    //CARTÃO TIPO 2 - MOVIMENTOS: DEFESA
    if(tipo_cartao == 2 && movimento[5] != null)
    {
        lista = movimento[5];

        html_content += "<p>";
        for (var j = 0; j < lista.length; j++) 
        {
            linha = lista[j];
            console.log(linha[0] + " : " + linha[1]);

            //dominios
            html_content += "<p><span class='badge text-bg-secondary'>" + linha[0] + "</span> " + linha[1] + "</p>";
        }
        html_content += "</p>";
        

        //Descrição da lista
        console.log("Desc: " + movimento[6][0]);
        html_content += "<p>" + movimento[6][0] + "</p>";

        
        //Escolhas
        escolhas = movimento[6][1];
        for (var escolha = 0; escolha < escolhas.length; escolha++) 
        {
            console.log((escolha+1) + ") " + escolhas[escolha]);
            html_content += "<p class='small text-secondary'> <i class='fa-solid fa-caret-right'></i> " + escolhas[escolha] + "</p>";
        }
    }

    console.log(" ");

    html_content += "</div>";//end #content - overflow - custom scrollbar
    html_content += "<hr>";
    html_content += "<div class='text-secondary pb-2 px-3 text-center'> Movimento " + tipo + "</div>";

    html_content += "</div>";//card content
    html_content += "</div>";//border
    html_content += "</div>";//col-md

    $("#movement-list").append(html_content);
}
});