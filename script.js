$("#currentDay").text(moment().format("dddd, MMMM Do"));
var currentHour = moment().format("H");

var container = $(".container");



var inputs = ["","","","","","","","",""];

function renderTimeBlocks() {
    container.innerHTML = "";

    for (var i = 9; i < 18; i++) {
        var row = $("<div>");
        row.addClass("row");

        var hour = $("<div>");
        var timeBlock = $("<textarea>");
        var saveBtn = $("<button>");

        hour.addClass("hour");
        hour.addClass("col-1");
        timeBlock.addClass("col-10");
        timeBlock.attr("contentEditable", "true")
        saveBtn.addClass("saveBtn");
        saveBtn.addClass("col-1");
        saveBtn.attr("data-index", i - 9);
    
        if (i < currentHour) {
            timeBlock.addClass("past");
        } else if (i == currentHour) {
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

        timeBlock.text(inputs[i - 9]);
    
        container.append(row);
        row.append(hour);
        row.append(timeBlock);
        row.append(saveBtn);
    }
}

function storeInput(event) {
    var userInput = $(event.target).siblings("textarea").val();
    var index = $(event.target).attr("data-index");
    inputs.splice(index, 1, userInput);
    localStorage.setItem("inputs", JSON.stringify(inputs));
}

function init() {
    var storedInputs = JSON.parse(localStorage.getItem("inputs"));
    if (storedInputs !== null) {
        for (var i = 0; i < 9; i++) {
            inputs.splice(i, 1, storedInputs[i]);
        }
    }
    renderTimeBlocks();
}

$(".container").on("click", ".saveBtn", storeInput);

init();
