var wins = 0
var losses = 0

var targetScore = 0
var userScore = 0






var gems = {
    
    randNum: function(fromNum,toNum) {
         var number = Math.floor((Math.random() * (toNum - fromNum) + fromNum))
         return number
     },

    getNewGem: function (){
        for (var i=1; i<5; i++){
            var newValue = this.randNum(1,12)
            $("#gem"+ i).attr("data-value", newValue)
        }
        
    },

    getNewTarget: function (){
        let newValue = this.randNum(19,120)
        targetScore = newValue
        $("#targetScore").text(targetScore)
        console.log("The targert score is " + targetScore)
    },
    
    reset: function () {
        targetScore = 0
        userScore = 0
        gems.getNewGem()
        console.log("new game started")
        gems.getNewTarget()
        $("userScore").text(0)
    },


}

// initialization



gems.reset()


$(document).ready(function() {
    
    // LISTENERS
    $(".gemChoice").on("click", function() {
        let value = parseInt($(this).attr("data-value"))
        console.log("Your gem was worth " + value);
        userScore += value
        $("#userScore").text(userScore)

        // Logic
        if (userScore == targetScore){
            wins++
            console.log("You won!")
            $("#wins").text(wins)
            
            gems.reset()
    
        } else if (userScore > targetScore){
            losses++
            console.log("You lost...")
            $("#losses").text(losses)
            
            gems.reset()
        }

    });
    
    $("#targetScore")

});

