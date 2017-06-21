$(document).ready(function() {

var first_question = function(){



}



var second_question = function(number){




}


var third_question = function(){




}

































console.log("this is the ques test ", third_question())
var answer = {
  first_answer: [],
  first_correct: false,
  second_answer: 0,
  second_correct: false,
  third_answer: [],
  third_correct: false
}

answer.first_answer = first_question();
answer.second_answer = second_question(10);
answer.third_answer = third_question();
console.log('question answer', answer.third_answer);










$('.align-btn').click(function(event) {
  event.preventDefault();

//https://young-cove-23281.herokuapp.com
$.ajax({
  url: 'https://young-cove-23281.herokuapp.com/answers',
  type: 'POST',
  data: answer,
})
.done(function(data) {
  console.log("success", data.data.third);
  answer.first_correct = data.data.first;
  answer.second_correct = data.data.second;
  answer.third_correct = data.data.third;
if(answer.first_correct === true){
  console.log('question 1 is correct');
      $('#first-question').css('display', 'none');
      $('#second-question').css('display', 'block');
      $('#third-question').css('display', 'none');
      $('#forth-question').css('display', 'none');
      $('#gifsy').attr('src', './IMG_3516.gif');
      $('.CONSOLE').text('')
      $('.CONSOLE').append('<p style="font-size: 120%; color: white; font-family: Gloria Hallelujah">The First question is CORRECT, good thing you did not gave up!!!</p>');
}
else{
  console.log('question 1 did not produce the expected answer');
  $('.CONSOLE').append('<p style="font-size: 120%; color: white; font-family: Gloria Hallelujah">The First question is INCORRECT, give up!!!</p>');
  $('#gifsy').attr('src', './IMG_3517.gif');
}

if(answer.third_correct === true && answer.second_correct === true && answer.first_correct === true){
  console.log('question 3 is correct');
  $('#first-question').css('display', 'none');
      $('#second-question').css('display', 'none');
      $('#third-question').css('display', 'none');
      $('#forth-question').css('display', 'block');
      $('#gifsy').attr('src', './source.gif');
         $('.CONSOLE').text('')
      $('.CONSOLE').append('<p style="font-size: 120%; color: white; font-family: Gloria Hallelujah">The First question is CORRECT, good thing you did not gave up!!!</p>');
      $('.CONSOLE').append('<p style="font-size: 120%; color: white; font-family: Gloria Hallelujah">The second question is CORRECT, mmm, you still trying. Lets see how you do next</p>');

  $('.CONSOLE').append('<p style="font-size: 120%; color: white; font-family: Gloria Hallelujah">The third question is CORRECT, you have exceeded my expectations</p>');
}

else if(answer.second_correct === true && answer.first_correct === true){
  console.log('question 2 is correct');
      $('#first-question').css('display', 'none');
      $('#second-question').css('display', 'none');
      $('#third-question').css('display', 'block');
      $('#forth-question').css('display', 'none');
      $('#gifsy').attr('src', './keepgoing.gif');
       $('.CONSOLE').text('')
      $('.CONSOLE').append('<p style="font-size: 120%; color: white; font-family: Gloria Hallelujah">The First question is CORRECT, good thing you did not gave up!!!</p>');
      $('.CONSOLE').append('<p style="font-size: 120%; color: white; font-family: Gloria Hallelujah">The second question is CORRECT, mmm, you still trying. Lets see how you do next</p>');
}
else if(answer.second_correct === false && answer.first_correct === true){
  $('.CONSOLE').append('<p style="font-size: 120%; color: white; font-family: Gloria Hallelujah">The second question is INCORRECT, give up!!!</p>');
  console.log('question 2 did not produce the expected answer');
  $('#gifsy').attr('src', './IMG_3518.gif');
}
else if(answer.third_correct === false && answer.second_correct === true && answer.first_correct === true){
  console.log('question 3 did not produce the expected answer');
  $('.CONSOLE').append('<p style="font-size: 120%; color: white; font-family: Gloria Hallelujah">The third question is INCORRECT, give up!!!</p>');
  $('#gifsy').attr('src', './IMG_3514.gif');
}
})
.fail(function() {
  console.log("error");
})
.always(function() {
  console.log("complete");
});

});


var timeDrink = false, which = true, time = 100000;
var isITtime = setInterval(goForIt, time);

function goForIt(){
  if(timeDrink == true){
    $('#drunkLife').css({
      'display': 'block',
    });
    if(which == true){
      $('#drunkLife img').attr('src', 'giphy_y.gif');
      which = false;
      console.log("hommer");
    }
    else if(which == false){
      $('#drunkLife img').attr('src', './giphy_x.gif');
      which = true;
      console.log("real");
    }
    time = 5000;
    timeDrink = false;
  }
  else if(timeDrink == false){
    $('#drunkLife').css({
      'display': 'none',
    });
    time = 10000;
    timeDrink = true;
  }
}




});
