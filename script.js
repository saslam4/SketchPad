/**
 * Created by waqas on 12/22/14.
 */

$(document).ready(function () {

    makeGrid(16);
    paintGrid();

    $("button").click(function() {
        clearScrn();
        makeGrid( restart() );
        paintGrid();
    });

});

var makeGrid = function (n) {

    var body = document.body; // saving the body in a var


    //loop for making the grid
    for (var i = 0; i < n; i++) {

        var row = document.createElement("div");
        row.className = "row";

        for (var j = 0; j < n; j++) {

            var cell = document.createElement("div");
            cell.className = "cell";

            row.appendChild(cell); //add cell as a child to row
        }
        var $outMostGrid = document.getElementById("outMostGrid");

        $outMostGrid.appendChild(row);
    }
}


//paints the grid red color
var paintGrid = function() {

    $(".cell").hover(function() {
        $(this).css("background-color", "red");
    });

}


//btn to prompt for a new grid
var restart = function() {
    return (prompt("How many squares per side do you want the new grid to be?"));
}

// empties the current grid
var clearScrn = function() {
    $("#outMostGrid").empty();
}


