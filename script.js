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

var presentHour =  moment().format('HH');
console.log(presentHour);

 
updateCalendar();


//update the present and past hour changes the textbox color accordingly by adding a class to the textarea tag
function updateCalendar(){

    //update present hour
     $("#textarea-" + presentHour).addClass( "present" );
        
    //update past hours
    for (var h=9; h < presentHour;  h++ ){
        
        console.log("updateCal past hour=" + h);
        $("#textarea-" + h).addClass("past");
    }
     

     //update future hours
     for (var h= presentHour +1; h < 18; h++ ){
        console.log("updateCal future hour=" + h);
        $("#textarea-" + h).addClass("future");
     }

    //get tasks out of local storage and refresh the page
    Object.keys(localStorage).forEach(function(key){
        console.log(" ls task = " + localStorage.getItem(key));
        var task = localStorage.getItem(key);
        console.log("ls key" + key);
        $("#textarea-" + key).val(task);
     });


}





$("button").click(function(){
    console.log("clicked save button");
    var clickedBtn= $(this).attr("id")
    
    console.log("button id" + clickedBtn);
    console.log("#textarea-"+clickedBtn);
    var task = $("#textarea-" + clickedBtn).val();
    console.log(task);
    //save to local storage
    localStorage.setItem(clickedBtn,task);
    
});


// $("#btnSubmit").click(function(){
//     alert("button");
// });

});