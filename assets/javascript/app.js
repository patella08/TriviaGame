$(document).ready(function(){
  $("#start-button").click(function(){

 // hide the start button and instructions
    var number = 50;
    $("#start-button").on("click", start);  // starts the games 
    $("#submit").on("click", finish);  // submits answers

// functions
    function start(){
        counter = setInterval(timer, 1000);
        showMe(".question");
        showMe(".answers");
        showMe("#submit");
        hideMe("#start-button");
        hideMe(".instructions");
        hideMe("#restart");
        hideMe("#results");
    }
    function timer(){
      number-- 
      $("#show-number").html("<h2>" + number + "</h2>" );
      if (number === 0){
        alert("Finish!")
        stop(); 
      }
    }
    // stops the timer
    function stop(){
        clearInterval(counter); 
        $("#results").show();
        $("#restart").show();
        $(".question").hide();
        $(".answers").hide();
        $("#submit").hide();
    }
    function finish(){
        number = 1; 
        clearInterval(counter); 
        timer();
    }

    function restart(){
        number = 50;
        start();
    }

    function hideMe(e) {
        $(e).hide();
    }
    function showMe(e) {
        $(e).show();
    }

// Questions
// Start
    start(); 
  });
$("#results").click(function() {                

if (!$("input[@name=q1]:checked").val() ||            
!$("input[@name=q2]:checked").val() ||            
!$("input[@name=q3]:checked").val() ||            
!$("input[@name=q4]:checked").val() ||            
!$("input[@name=q5]:checked").val() ||            
!$("input[@name=q6]:checked").val() ||            
!$("input[@name=q7]:checked").val() ||            
!$("input[@name=q8]:checked").val() ||            
!$("input[@name=q9]:checked").val() ||            
!$("input[@name=q10]:checked").val()            
) {            
alert("Don't forget to finish!!");        
}

else {            
var Question1 = "1";            
var Question2 = "2";            
var Question3 = "3";            
var Question4 = "4";            
var Question5 = "5";            
var Question6 = "6";            
var Question7 = "7";            
var Question8 = "8";            
var Question9 = "9";            
var Question10 = "10";            
var Question11 = "None";           

        }
    });
});

// To be honest I have no idea why this works, and can you please explain what all of that does:
// else {            
// var Question1 = "1";            
// var Question2 = "2";            
// var Question3 = "3";            
// var Question4 = "4";            
// var Question5 = "5";            
// var Question6 = "6";            
// var Question7 = "7";            
// var Question8 = "8";            
// var Question9 = "9";            
// var Question10 = "10";            
// var Question11 = "None"; 

// Also I could not figure out how to display the answers to the questions, the page just says 0

// Thanks!
