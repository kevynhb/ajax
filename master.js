$(function(){ // Inicia Jquery
    // Quando clicar no botão traz o resultado
    $(".btn").on("click", function(){
        // Propriedade do ajax
        $.ajax({
            url: "load.php", // arquivo onde estamos fazendo a requisição
            success: function(result){
                $(".result").html(result);
            },
            error: function(){
                $(".result").html("<h3>Error</h3>");
            }
        })
    })
});