$(document).ready(function() {
    // current day and time
    $("#currentDay").text(moment().format("MMMM Do YYYY h:mm a"));

    // saveBtn click listener for user input and time
    $(".saveBtn").on("click", function (){
        console.log(this);
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        //set items in local storage
        localStorage.setItem(time, text);
    })

    // load saved data from local storage for each hour block
    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"))
    $("#hour11 .description").val(localStorage.getItem("hour11"))
    $("#hour12 .description").val(localStorage.getItem("hour12"))
    $("#hour13 .description").val(localStorage.getItem("hour13"))
    $("#hour14 .description").val(localStorage.getItem("hour14"))
    $("#hour15 .description").val(localStorage.getItem("hour15"))
    $("#hour16 .description").val(localStorage.getItem("hour16"))
    $("#hour17 .description").val(localStorage.getItem("hour17"))

    function hourTracker() {
        // Current Hour
        var currentHour = moment().hour();

        // loop for time blocks
        $(".time-block").each(function(){
            var blockHour = parseInt($(this).attr("id").split("hour")[1]);
            console.log( blockHour, currentHour)

            // check if we've moved past current time
            if (blockHour < currentHour) {
                $(this).addClass("past");
                $(this).removeClass("future");
                $(this).removeClass("present");
            }
            else if ( blockHour === currentHour) {
                $(this).removeClass("past");
                $(this).addClass("future");
                $(this).removeClass("present");
            }
            else {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            }
        })
    }
    hourTracker();
})