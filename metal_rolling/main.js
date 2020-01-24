$(document).ready(function() 
    { 
        $("#myTable").tablesorter(); 
    } 
); 
$(document).ready(function() 
    { 
        $("#myTable1").tablesorter(); 
    } 
); 
$(document).ready(function() 
    { 
        $("#myTable2").tablesorter(); 
    } 
); 

$("#list_gk").click(function(){
    $("table").addClass("none");
    $(".list_gk").removeClass("none");
    $(".list-group-item").removeClass("active1");
    $("#list_gk").addClass("active1");
});

$("#truba_gk").click(function(){
    $("table").addClass("none");
    $(".truba_gk").removeClass("none");
    $(".list-group-item").removeClass("active1");
    $("#truba_gk").addClass("active1");
});

$("#rulon_hk").click(function(){
    $("table").addClass("none");
    $(".rulon_hk").removeClass("none");
    $(".list-group-item").removeClass("active1");
    $("#rulon_hk").addClass("active1");
});
   