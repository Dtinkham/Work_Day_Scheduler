

//Creates Var for each save button

var saveButton0 = document.getElementById("btn-0")
var saveButton1 = document.getElementById("btn-1")
var saveButton2 = document.getElementById("btn-2")
var saveButton3 = document.getElementById("btn-3")
var saveButton4 = document.getElementById("btn-4")
var saveButton5 = document.getElementById("btn-5")
var saveButton6 = document.getElementById("btn-6")
var saveButton7 = document.getElementById("btn-7")
var saveButton8 = document.getElementById("btn-8")

//Declares var

var timeBlock = []
var idsOfSchedule = [0,1,2,3,4,5,6,7,8]
var hoursOfSchedule = [9,10,11,12,13,14,15,16,17]

//If a textarea is null, gives it a string value
for (i=0; i> idsOfSchedule.length; i++){
  if (display[i] === (null)) {
    document.getElementById("ta-"+[i]) = ""  
}
  }

  //Pulls textareas from local storage to prefill on a refresh

  var display0 = localStorage.getItem('timeBlock0')
  document.getElementById("ta-0").value = display0
   var display1 = localStorage.getItem('timeBlock1')
   document.getElementById("ta-1").value = display1
  var display2 = localStorage.getItem('timeBlock2')
  document.getElementById("ta-2").value = display2
  var display3 = localStorage.getItem('timeBlock3')
  document.getElementById("ta-3").value = display3
  var display4 = localStorage.getItem('timeBlock4')
  document.getElementById("ta-4").value = display4
  var display5 = localStorage.getItem('timeBlock5')
  document.getElementById("ta-5").value = display5
  var display6 = localStorage.getItem('timeBlock6')
  document.getElementById("ta-6").value = display6
  var display7 = localStorage.getItem('timeBlock7')
  document.getElementById("ta-7").value = display7
  var display8 = localStorage.getItem('timeBlock8')
  document.getElementById("ta-8").value = display8


//Pulls Jquery library and declares some variables from Dayjs

fetch("https://code.jquery.com/jquery-3.4.1.min.js")
.then(
currentDate = dayjs(),
console.log(currentDate),
currentHour = dayjs().hour(),

//Live Time on Top of Page

currentDay = document.getElementById("currentDay"),
currentDay.textContent = dayjs().format('dddd: MMMM DD, YYYY'),

//Function to change the color of the textareas based on the hour

$(function hours() {
  for (i=0;i<hoursOfSchedule.length;i++) {
    timeBlock = document.getElementById("hour-"+[i])
    console.log(timeBlock)
    if (hoursOfSchedule[i] < currentHour) {
      
    timeBlock.classList.add("past")
    }
    else if (hoursOfSchedule[i] > currentHour) {
      timeBlock.classList.add("future")
    }
    else
      timeBlock.classList.add("present")
   
}
}),

//Save Button event listeners 0-8

saveButton0.addEventListener("click",function() {

  userInput = document.getElementById("ta-0").value
  localStorage.setItem('timeBlock0',userInput)
  var ta0 = localStorage.getItem('timeBlock0')
  console.log(ta0)
}),

saveButton1.addEventListener("click",function() {

  userInput = document.getElementById("ta-1").value
  localStorage.setItem('timeBlock1',userInput)
  var ta1 = localStorage.getItem('timeBlock1')
  console.log(ta1)
}),

saveButton2.addEventListener("click",function() {

  userInput = document.getElementById("ta-2").value
  localStorage.setItem('timeBlock2',userInput)
  var ta2 = localStorage.getItem('timeBlock2')
  console.log(ta2)
}),

saveButton3.addEventListener("click",function() {

  userInput = document.getElementById("ta-3").value
  localStorage.setItem('timeBlock3',userInput)
  var ta3 = localStorage.getItem('timeBlock3')
  console.log(ta3)
}),

saveButton4.addEventListener("click",function() {

  userInput = document.getElementById("ta-4").value
  localStorage.setItem('timeBlock4',userInput)
  var ta4 = localStorage.getItem('timeBlock4')
  console.log(ta4)
}),

saveButton5.addEventListener("click",function() {

  userInput = document.getElementById("ta-5").value
  localStorage.setItem('timeBlock5',userInput)
  var ta5 = localStorage.getItem('timeBlock5')
  console.log(ta5)
}),

saveButton6.addEventListener("click",function() {

  userInput = document.getElementById("ta-6").value
  localStorage.setItem('timeBlock6',userInput)
  var ta6 = localStorage.getItem('timeBlock6')
  console.log(ta6)
}),

saveButton7.addEventListener("click",function() {

  userInput = document.getElementById("ta-7").value
  localStorage.setItem('timeBlock7',userInput)
  var ta7 = localStorage.getItem('timeBlock7')
  console.log(ta7)
}),

saveButton8.addEventListener("click",function() {

  userInput = document.getElementById("ta-8").value
  localStorage.setItem('timeBlock8',userInput)
  var ta8 = localStorage.getItem('timeBlock8')
  console.log(ta8)
}),


)

