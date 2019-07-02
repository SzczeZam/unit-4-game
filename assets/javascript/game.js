

var winDom = $("#wins")
var lossesDom = $("losses")



var targetScore = 0
var userScore = 0






var gems = {
    
    randNum: function(fromNum,toNum) {
         number = Math.floor((Math.random() * (toNum - fromNum) + fromNum))
         return number
     },

    getNewGem: function (){
        for (i=1;i<6;i++){
            let newValue = this.randNum(1,12)
            $("#gem"+ i).attr("data-value", newValue)
        }
        
    },

    getNewTarget: function (){
        let newValue = this.randNum(19,120)
        targetScore = newValue
        $("targetScore").text(targetScore)
    },

    reset: function () {
        targetScore = 0
        userScore = 0
        this.getNewGem()
        this.getNewTarget()
    }


}

gems.reset()

// LISTENERS

$(document).ready(function() {
    $(".gemChoice").on("click", function() {
        var value = parseInt($(this).attr("data-value"))
        console.log("Your gem was worth " + value);
        userScore = userScore + value
        $("#userScore").text(userScore)

    });
});