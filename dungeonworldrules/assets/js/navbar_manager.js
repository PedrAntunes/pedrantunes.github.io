//Ao carregar o documento, 
$(document).ready(function() 
{
    //Carrega a navbar
    $("#navbar").load("assets/html/navbar.html");

    return;

    //Salva os IDs da navbar num
    $pages = ["#home", "#lista_movimentos"];

    //Mostra a home do site
    currentPageId = "home";
    $("#get-pag").load(currentPageId+".html");
});

//Remove a class "active" de todos os links da navbar
function ResetPages()
{
    $.each($pages, function(index, page)
    {
        $(page).removeClass("active");
    });
}

//Adiciona a class "active" num link da navbar passado por parametro
function ActivePage(page)
{
    $("#"+page).addClass("active");
}

//Gerencia a troca de paginas do site
function LoadPage(page)
{
    page_id = page.id;

    //retorna, se a pagina para ser carregada for a mesma
    if(page_id == currentPageId) return;

    //salva o id da nova pagina
    currentPageId = page_id;

    ResetPages();
    ActivePage(page_id);

    //carrega o html da pagina
    $("#get-pag").load(page_id+".html");
}