// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(document).ready(function () {
  
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
$(".saveBtn").on("click", saveText);


function saveText(){
  let text = $(this).siblings(".description").val();
  console.log("text = ", text);

  let time = $(this).parent().attr("id");
  console.log("time = ", time);

  localStorage.setItem(time, text);
}
  


  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  function colorRows(){

    let currentTime = dayjs().hour();
    console.log("currentTime = ", currentTime);

    $(".time-block").each(function() {
      let eventTime = parseInt( $(this).attr("id").split("-")[1])

      if (eventTime < currentTime){

      
        $(this).addClass("past");
      }else if(eventTime === currentTime){
        $(this).removeClass("past");
        $(this).addClass("present");
      } else{
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
      }

    })
  }

  colorRows();

  
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //

  function restoreFromLocalStorage(){
    $('#hour-7 .description').val(localStorage.getItem('hour-7'));
    $('#hour-8 .description').val(localStorage.getItem('hour-8'));
    $('#hour-9 .description').val(localStorage.getItem('hour-9'));
    $('#hour-10 .description').val(localStorage.getItem('hour-10'));
    $('#hour-11 .description').val(localStorage.getItem('hour-11'));
    $('#hour-12 .description').val(localStorage.getItem('hour-12'));
    $('#hour-13 .description').val(localStorage.getItem('hour-13'));
    $('#hour-14 .description').val(localStorage.getItem('hour-14'));
    $('#hour-15 .description').val(localStorage.getItem('hour-15'));
    $('#hour-16 .description').val(localStorage.getItem('hour-16'));
    $('#hour-17 .description').val(localStorage.getItem('hour-17'));
    $('#hour-18 .description').val(localStorage.getItem('hour-18'));
   
  }
  

  restoreFromLocalStorage();
  // TODO: Add code to display the current date in the header of the page.
  $("#currentDay").text(dayjs().format("dddd, MMM D,YYYY "));
});