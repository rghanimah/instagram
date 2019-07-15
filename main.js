// var image = document.createElement(image);
// image.setAttribute("type", "image");
// var image = $("input");
// var button = $(".addImage");
//
// button.on("click", appendInfo);
//
// function appendInfo(){
// var pictures = $(".photos");
// pictures.append (`
// <div class = "newPictures">
// <p>
//   `)}
var btn1 = $("#heart1");
var btn2 = $("#heart2");
var btn3 = $("#heart3");
var btn4 = $("#heart4");
var btn5 = $("#heart5");
var btn6 = $("#heart6");
var btn7 = $("#heart7");
var btn8 = $("#heart8");
var btn9 = $("#heart9");
var btn10 = $("#heart10");

var btnt1 = $(".button1");
var btnt2 = $(".button2");
var btnt3 = $(".button3");
var btnt4 = $(".button4");
var btnt5 = $(".button5");
var btnt6 = $(".button6");
var btnt7 = $(".button7");
var btnt8 = $(".button8");
var btnt9 = $(".button9");
var btnt10 = $(".button10");

var input1 = $("#comment1");
var input2 = $("#comment2");
var input3 = $("#comment3");
var input4 = $("#comment4");
var input5 = $("#comment5");
var input6 = $("#comment6");
var input7 = $("#comment7");
var input8 = $("#comment8");
var input9 = $("#comment9");
var input10 = $("#comment10");

btnt1.on ("click", appendInfo1);
function appendInfo1(){
  var commentspace = $(".commentbox1");
  commentspace.append(`<p>${input1.val()}</p>`);
}

function changeButtonColor1(){
  btn1.toggleClass("red")
}
btn1.on ("click", changeButtonColor1)

function changeButtonColor2(){
  btn2.toggleClass("red")
}
btn2.on ("click", changeButtonColor2)

function changeButtonColor3(){
  btn3.toggleClass("red")
}
btn3.on ("click", changeButtonColor3)

function changeButtonColor4(){
  btn4.toggleClass("red")
}
btn4.on ("click", changeButtonColor4)

function changeButtonColor5(){
  btn5.toggleClass("red")
}
btn5.on ("click", changeButtonColor5)

function changeButtonColor6(){
  btn6.toggleClass("red")
}
btn6.on ("click", changeButtonColor6)

function changeButtonColor7(){
  btn7.toggleClass("red")
}
btn7.on ("click", changeButtonColor7)

function changeButtonColor8(){
  btn8.toggleClass("red")
}
btn8.on ("click", changeButtonColor8)

function changeButtonColor9(){
  btn9.toggleClass("red")
}
btn9.on ("click", changeButtonColor9)

function changeButtonColor10(){
  btn10.toggleClass("red")
}
btn10.on ("click", changeButtonColor10)
