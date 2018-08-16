$(document).ready(function(){
  $(".button").click(function(event) {

    var game = $("#inputGame").val();
    var corporation = $("input:radio[name=corporation]:checked").val();
    var build = $("input:radio[name=build]:checked").val();
    var hero = $("input:radio[name=hero]:checked").val();
    var fingers = $("input:radio[name=fingers]:checked").val();

//Hide when remaining result options when result appears
    // $("li").hide();


// Result branching

    if (game === "1" && corporation === "1" && build === "1" && hero === "1" && fingers === "1") {
      $("#cSharp").show(); }
    // } else if (game === "2" && corporation === "4" && build === "7" && hero = "11" && fingers === "16") {
    //   $("#java").show();
    // } else if











  event.preventDefault();

  });
});
