$(document).ready(function(){
//get today's date
var today = moment().format('dddd, MMMM D, YYYY');
console.log(today);

//put today's date in the header
$("#currentDay").append(today);

// console.log("moment day of week" + moment().day());
// console.log("day of month" + moment().date() );
// console.log("day of year" + moment().dayOfYear());
// console.log("year" + moment().year());
// // console.log("all" + moment().year(2019).month(month).date(day));

// var dayOfWeekNum = moment().day();
// var dayOfWeek = moment().day(dayOfWeekNum);
// console.log(dayOfWeek);
// renderPast();

// function renderPast(){
//     console.log("renderpast");
//     $(".row time-block" ).addClass("past");

// }

$(".saveBtn").click(function() {
    console.log("clicked save button");
    console.log("button id" + this.id);
    // push(this.value)
    
});


});