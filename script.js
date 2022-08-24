$("#currentDay").text(moment().format("dddd, MMMM do"));

for (var i = 0; i < 9; i++) {
    var row = $("<div>");
    row.addClass("row");

    var hour = $("<div>");
    var timeBlock = $("<div>");
    var saveBtn = $("<div>");

    hour.addClass("hour");
    timeBlock.addClass("time-block");
    saveBtn.addClass("saveBtn");

    $(".container").append(row);
    row.append(hour);
    row.append(timeBlock);
    row.append(saveBtn);
}