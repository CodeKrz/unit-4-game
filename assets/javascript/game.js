var wins = 0
var loses = 0 
var flag1 = Math.floor(Math.random() * 10 + 2);
var flag2 = Math.floor(Math.random() * 10 + 2);
var flag3 = Math.floor(Math.random() * 10 + 2);
var flag4 = Math.floor(Math.random() * 10 + 2);

var target = Math.floor(Math.random() * 90 + 10);
var score = 0 
$('#randomNumber').text(target)
$('#flag1').click(function(){
    score+=flag1
    $('#finalTotal').text(score)
    check()
})
$('#flag2').click(function(){
    score+=flag2
    $('#finalTotal').text(score)
    check()
})  
$('#flag3').click(function(){
    score+=flag3
    $('#finalTotal').text(score)
    check()
})
$('#flag4').click(function(){
    score+=flag4
    $('#finalTotal').text(score)
    check()
})

function check(){
    if(score===target){
wins+=1

$('#numberWins').text(wins)
 flag1 = Math.floor(Math.random() * 10 + 2);
 flag2 = Math.floor(Math.random() * 10 + 2);
 flag3 = Math.floor(Math.random() * 10 + 2);
 flag4 = Math.floor(Math.random() * 10 + 2);

 target = Math.floor(Math.random() * 90 + 10);
 $('#randomNumber').text(target)
 score = 0 
 
    

    }
    if(score>target){
        loses+=1
        $('#numberLosses').text(loses)
        flag1 = Math.floor(Math.random() * 10 + 2);
 flag2 = Math.floor(Math.random() * 10 + 2);
 flag3 = Math.floor(Math.random() * 10 + 2);
 flag4 = Math.floor(Math.random() * 10 + 2);

 target = Math.floor(Math.random() * 90 + 10);
 $('#randomNumber').text(target)
 score = 0 
    }
}