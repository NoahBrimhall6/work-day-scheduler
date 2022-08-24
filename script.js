$("#currentDay").text(moment().format("dddd, MMMM do"));
var currentHour = moment().format("H");

for (var i = 9; i < 18; i++) {
    var row = $("<div>");
    row.addClass("row");

    var hour = $("<div>");
    var timeBlock = $("<div>");
    var saveBtn = $("<button>");

    hour.addClass("hour");
    hour.addClass("col-1");
    timeBlock.addClass("time-block");
    timeBlock.addClass("col-10");
    saveBtn.addClass("saveBtn");
    saveBtn.addClass("col-1");
    saveBtn.addClass("text-center");

    if (i < currentHour) {
        timeBlock.addClass("past");
    } else if (i === currentHour) {
        timeBlock.addClass("present");
    } else {
        timeBlock.addClass("future");
    }

    if (i < 12) {
        hour.text(i + "AM");
    } else if (i === 12) {
        hour.text("12PM")
    } else {
        hour.text(i - 12 + "PM");
    }
    saveBtn.text("save");

    $(".container").append(row);
    row.append(hour);
    row.append(timeBlock);
    row.append(saveBtn);
}