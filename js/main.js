var numberOfClicksCat1 = 0;
var numberOfClicksCat2 = 0;

//VanillaJS
// var elem = document.getElementById("cat");
// elem.addEventListener("click", function(){
//     numberOfClicks++;
//     document.getElementById("numberOfClicks").innerHTML = numberOfClicks;
// }, false);

//jQuery
$("#cat1").click(function(e){
    numberOfClicksCat1++;
    $("#numberOfClicksCat1").html(numberOfClicksCat1);
})

$("#cat2").click(function(e){
    numberOfClicksCat2++;
    $("#numberOfClicksCat2").html(numberOfClicksCat2);
})