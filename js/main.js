var numberOfClicks = 0;

//VanillaJS
// var elem = document.getElementById("cat");
// elem.addEventListener("click", function(){
//     numberOfClicks++;
//     document.getElementById("numberOfClicks").innerHTML = numberOfClicks;
// }, false);

//jQuery
$("#cat").click(function(e){
    numberOfClicks++;
    $("#numberOfClicks").html(numberOfClicks);
})