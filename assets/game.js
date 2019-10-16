$(document).ready(function() {

    
    //create a var named randomNum
    var randomNum;
    
    //create a var named winCounter
    var winCounter = 0;
    
    //create a var named lossCounter
    var lossCounter = 0;
    
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

    //set #win-counter to 0 on html
    $("#win-counter").text(winCounter);

    //set #loss-counter to 0 on html
    $("#loss-counter").text(lossCounter);
    
    
    //START FUNCTION
    function startGame() {
        //set totalScore to 0
        totalScore = 0;
        $("#total-score").text(totalScore);
        
        //set #win-counter back to 0 on html
        $("#win-counter").text(winCounter);

        //set #loss-counter back to 0 on html
        $("#loss-counter").text(lossCounter);
        
        //set crystal1 to random number between 1-12
        crystal1 = Math.ceil(Math.random() * 12);
        
        //give ".crystal one" an attribute "crystal-value" equal to crystal1
        $(".one").attr("crystal-value", crystal1);
        
        //set crystal2 to random number between 1-12
        crystal2 = Math.ceil(Math.random() * 12);
        
        //give ".crystal one" an attribute "crystal-value" equal to crystal2
        $(".two").attr("crystal-value", crystal2);
        
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
        
        //update random-number on html
        $("#random-number").text(randomNum);
        
    //END START FUNCTION
    }


    //ONCLICK FUNCTION
    $(".crystal").on("click", function() {
        //clear the message on html
        $("#message").text("");

        
        //when a crystal is clicked, add to total score
        totalScore += parseInt($(this).attr("crystal-value"));

        //update total-score on html
        $("#total-score").text(totalScore);
        
        
        //Compare totalScore to randomNum (use if/else if statements)
        //if totalScore is equal to randomNum
        if (totalScore == randomNum) {
            //increment winCounter
            winCounter++;
            console.log("Wins: " + winCounter);
            
            //update win-counter on html
            $("#win-counter").text(winCounter);

            //print winning message
            $("#message").text("You Win!!!");
            
            //call START function
            startGame();
        }
        //if totalScore is greater than randomNum
        else if (totalScore > randomNum) {
            //increment lossCounter
            lossCounter++;
            
            //update loss-counter on html
            $("#loss-counter").text(lossCounter);

            //print losing message
            $("#message").text("You Lose!!! Try Again.");
            
            //call START FUNCTION
            startGame();
        }
            
    //END ONCLICK FUNCTION
    });

    startGame();
});