
$(document).ready(function () {
    var userTotal = 0;
    var wins = 0;
    var losses = 0;
    var numberRandomTarget = Math.floor(Math.random() * 50) + 60;
    var rock1 = "10";
    var rock2 = "2";
    var rock3 = "14";
    var rock4 = "7";





    var numberRandomTarget = Math.floor((Math.random() * 50) + 60)
    console.log("random: " + numberRandomTarget);
    $("numberRandomTarget").text(numberRandomTarget);
    var rock1 = Math.floor(Math.random() * 11 + 1)
    var rock2 = Math.floor(Math.random() * 11 + 1)
    var rock3 = Math.floor(Math.random() * 11 + 1)
    var rock4 = Math.floor(Math.random() * 11 + 1)
    //randome num for each roc
    $("#totalScore").text(usedTotal);

    $("numberWins").text(wins);
    $("numberLosses").text(losses);
})

function reset() {
    numberRandom = Math.floor(Math.random() * 50 + 60);
    console.log(numberRandom);
    $("#numberToGuess").text(numberRandom);
    rock1 = Math.floor(Math.random() * 11 + 1);
    rock2 = Math.floor(Math.random() * 11 + 1);
    rock3 = Math.floor(Math.random() * 11 + 1);
    rock4 = Math.floor(Math.random() * 11 + 1);
    userTotal = 0;
    $("totalScore").text(userTotal);
}
// add alert if has won
function nice() {
    alert("You Won!!!");
    wins++;
    $("#numWins").text(wins);
    reset();
}
// alert loser 
function loser() {
    alert("you lost! Try again!");
    losses++;
    $("#numLosses").text(losses);
    reset();
}

//Clicking objects "Crystels"
$("#rock1").on("click", function () {
    userTotal = userTotal + rock1;
    console.log("new number userTotal:" + userTotal);
    $("totaScore").text(userTotal);
    if (userTotal === numberRandomTarget) {
        nice();
    } else if (userTotal > numberRandomTarget) {
        loser();

    }
});

$("#rock2").on("click", function () {
    userTotal = userTotal + rock2;
    console.log("new number userTotal:" + userTotal);
    $("totaScore").text(userTotal);
    if (userTotal === numberRandomTarget) {
        nice();
    } else if (userTotal > numberRandomTarget) {
        loser();

    }
});

$("#rock3").on("click", function () {
    userTotal = userTotal + rock3;
    console.log("new number userTotal:" + userTotal);
    $("totaScore").text(userTotal);
    if (userTotal === numberRandomTarget) {
        nice();
    } else if (userTotal > numberRandomTarget) {
        loser();

    }
});


$("#rock4").on("click", function () {
    userTotal = userTotal + rock4;
    console.log("new number userTotal:" + userTotal);
    $("totaScore").text(userTotal);
    if (userTotal === numberRandomTarget) {
        nice();
    } else if (userTotal > numberRandomTarget) {
        loser();

    }
});










// newFunction();



// function newFunction() {
//     var numberOptions = [
//         {
//             val: 10,
//             img: "/unit-4-game/assets/images/rock1.jpg",

//         }




//     ];
//     var counter = 0;
//     var choiseArray = [5, 10, 16, 11];
//     for (var i = 0; i < numberOptions.length; i++) {
//         var rockImage = $("<img>");
//     }
//     rock.addClass("rock");
//     ];
//     var counter = 0;
//     $("number-of-guess").on("click", targetNumber);

//     var counter = 0;

//     var numberOptions = [15, 4, 8, 10,];

//     for (var i = 0; i < numberOptions.length; i++) {

//         var imageRocks = $("<img>");

//         imageRocks.addclass("rock-image");

//         imageRocks.attr("src", numberOptions[i].img);

//         imageRocks.attr("data-rockvalue", numberOptions[i].val);
//         $("#rock").append(imageRocks);



//     }

//     var increment = numberOptions(Math.floor(Math.random))


//     $(".rock-image").on("click", function () {

//         var rockValue = ($(this).attr("data-rockvalue"));
//         rockValue = parseInt(rockValue);


//         counter += rockValue;

//         if (counter === targetNumber) {
//             alert("You Win!");

//         } else if (counter >= targetNumber) {
//             alert("you lose!!");

//     });
// });
