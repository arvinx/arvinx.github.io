$(document).ready(function(){
  $(".side-nav").click(function(e){
    var title = $(e.target).parent().attr("id");
    $(".section").hide();
    $("#" + title + "-body").show();
    $("html, body").animate({ scrollTop: 0 }, "fast");
    return false;
  });
  $("#read-more").click(function() {
  	$("#amazon-extra").slideToggle();
  });

});