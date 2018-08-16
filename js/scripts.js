$(document).ready(function() {
  $(".button").click(function(event) {

    var game = $("#inputGame").val();
    var corporation = $("input:radio[name=corporation]:checked").val();
    var build = $("input:radio[name=build]:checked").val();
    var hero = $("input:radio[name=hero]:checked").val();
    var fingers = $("input:radio[name=fingers]:checked").val();

    // Result branching
    if (game === "1" && corporation === "1" && build === "1" && hero === "1" && fingers === "1") {
      $("#cSharp").show();
      $(".notResults").hide();
    } else if (game === "2" && corporation === "2" && build === "2" && hero === "2" && fingers === "2") {
      $("#java").show();
      $(".notResults").hide();
    } else if (game === "1" && corporation === "3" && build === "3" && hero === "3" && fingers === "3") {
      $("#php").show();
      $(".notResults").hide();
    } else if (game === "2" && corporation === "1" && build === "1" && hero === "1" && fingers === "3") {
      $("#php").show();
      $(".notResults").hide();
    } else if (game === "2" && corporation === "3" && build === "3" && hero === "2" && fingers === "1") {
      $("#ruby").show();
      $(".notResults").hide();
    } else if (game === "2" && corporation === "1" && build === "3" && hero === "4" && fingers === "2") $("#css").show();
    $(".notResults").hide();

    event.preventDefault();
    
  });
});
