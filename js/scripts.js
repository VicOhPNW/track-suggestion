$(document).ready(function(){
  $("button").click(function(event) {

    var game = $("#gameInput").val();
    var corporation = $("input:radio[name=corporation]:checked").val();
    var build = $("input:radio[name=build]:checked").val();
    var hero = $("input:radio[name=hero]:checked").val();
    var fingers = $("input:radio[name=fingers]:checked").val();

//Hide when remaining result options when result appears
    // $("li").hide();

// This alert works unsure what's going on below.-
    alert("work");

// //Reult branching
//     if (game === "1" && corporation === "3" && build === "6" && hero === "10" && fingers === "15") {
//       $("#design").show();
//     } else if (game === "2" && corporation === "4" && build === "7" && hero = "11" && fingers === "16") {
//       $("#java").show();
//     } else if











    event.preventDefault();

  });
});
