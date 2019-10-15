//create a var named randomNum
var randomNum;

//create a var named winCounter
var winCounter;

//create a var named lossCounter
var lossCounter;

//create a var named totalScore
var totalScore;

//create a var named crystal1
var crystal1;

//create a var named crystal2
var crystal2;

//create a var named crystal3
var crystal3;

//create a var named crystal4
var crystal4;

//START FUNCTION
    //set crystal1 to random number between 1-12
    crystal1 = Math.ceil(Math.random() * 12);
    //give ".crystal one" an attribute "crystal-value" equal to crystal1
    $(".three").attr("crystal-value", crystal1)
;
    //set crystal2 to random number between 1-12
    crystal2 = Math.ceil(Math.random() * 12);
    //give ".crystal one" an attribute "crystal-value" equal to crystal2
    $(".two").attr("crystal.value", crystal2);

    //set crystal3 to random number between 1-12
    crystal3 = Math.ceil(Math.random() * 12);
    //give ".crystal three" an attribute "crystal-value" equal to crystal3
    $(".three").attr("crystal-value", crystal3);

    //set crystal4 to random number between 1-12
    crystal4 = Math.ceil(Math.random() * 12);
    //give ".crystal four" an attribute "value" equal to crystal4
    $(".four").attr("crystal-value", crystal4);

    //set randomNum to random number between 19-120
    randomNum = Math.floor(Math.random() * 112) + 19;
    $("random-number").text(randomNum);

    //END START FUNCTION


  //ONCLICK FUNCTION

    //when a crystal is clicked, add to total score

    //compare totalScore to randomNum (if)

        //if totalScore is less than randomNum, do not execute
        //if totalScore is equal to randomNum, increment win counter
            //call START function
        //if totalScore is greater than randomNum, increment loss counter
            //call START FUNCTION

