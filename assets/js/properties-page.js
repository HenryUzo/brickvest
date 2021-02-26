// function hideIt() {
//     var x = document.getElementById("dis-none");
//     if (x.style.display === "none") {
//       x.style.display = "block";
//     } else {
//       x.style.display = "none";
//     }
//   }


$(document).ready(function(){
    $(".toggle").click(function(){
      $(".sleep").toggle();
    });
  });