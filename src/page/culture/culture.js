$(function() {
    $(".top-nav li").hover(function() {
        $(this).has("ul").children("ul").fadeIn();
    },
    function() {
        $(this).has("ul").children("ul").hide();
    });
})
    function Choose(url){
        /*switch(id){
            case huoyao:
                url="'../culture/huoyao.html'"

        }*/
        $.get(url,function(data){
            $(".contain").empty().append(data);
        });
    }
