$(function(){ // Init Jquery
    // when clicking the button, it brings the result,
    $(".btn").on("click", function(){
        // ajax property
        $.ajax({
            url: "load.php", // File where we are making the request
            success: function(result){
                $(".result").html(result);
            },
            error: function(){
                $(".result").html("<h3>Error</h3>");
            }
        })
    })
});