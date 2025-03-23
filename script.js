var button = document.getElementById("insert");

function insert_Row() {
    var sampleTable = document.getElementById("sampleTable");

    var newRow = document.createElement("tr");

    var cell1 = document.createElement("td");
    cell1.textContent = "New Cell1";

    var cell2 = document.createElement("td");
    cell2.textContent = "New Cell2"; 

    newRow.appendChild(cell1);
    newRow.appendChild(cell2);

    sampleTable.insertBefore(newRow, sampleTable.firstChild);
}

