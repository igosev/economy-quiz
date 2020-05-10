$('.owl-carousel').owlCarousel({
    nav:true,
    items: 1,
    autoWidth:true,
    mouseDrag:false,
    dots:false,
    smartSpeed: 800
});

$(document).ready(function(){
    var user_ans = [],
        ans = ["a", "c", "b", "a", "a", "c", "b", "b", "d", "a"],
        colors = ["#1B285D", "#23316B", "#2A3678", "#374291", "#7A76CC", "#CEA5E0", "#7A76CC", "#374291", "#2A3678", "#23316B", "#1B285D"];
    $.each(ans, function (i, v) {
        $("#ans").append((i+1)+": "+v.toUpperCase()+"<br>");
    });

    $("#ans").hide();

    $(".show-ans").click(function () {
        $("#ans").slideToggle();
    });

    $(".option").click(function(){
        $(this).parent().find(".option").removeClass("active");
        $(this).addClass("active");

        var index = $(this).closest(".item").data("id"),
            val = $(this).data("value");
        user_ans[index] = val;

        console.log(user_ans);
    });


    $(".check").click(function(){
        var correct = 0;
        $.each(ans, function (i, v) {
            if(user_ans[i] === v){
                correct++;
            }
        });
        if(ans.length === correct && ans.length === user_ans.length){
            $("#rez").text("Atsakymai teisingi!");
        }else if(ans.length === user_ans.length){
            $("#rez").text("Kažkur klaida");
        }
        else{
            $("#rez").text("Užbaikyte testą");
        }
    });

    $('.owl-carousel').on('translate.owl.carousel', function(event) {
        console.log(event.item.index);
        var i = event.item.index;
        $(".container-fluid").css({"background-color":colors[i]});
    })
});