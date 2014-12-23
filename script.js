/**
 * Created by waqas on 12/22/14.
 */

$(document).ready(function () {

    var body = document.body; // saving the body in a var

    //loop for making the grid
    for (var i = 0; i < 16; i++) {

        var row = document.createElement("div");
        row.className = "row";

        for (var j = 0; j < 16; j++) {

            var cell = document.createElement("div");
            cell.className = "cell";

            row.appendChild(cell); //add cell as a child to row
        }

        body.appendChild(row); //add row as a child to body
    }
});
