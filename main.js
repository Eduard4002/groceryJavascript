document.getElementById("submitBtn").addEventListener("click", submitItem);
var inputItem = document.getElementById("itemName");
var itemsGrid = document.getElementById("itemsGrid");

function submitItem(){
    if(inputItem.value == "") return;
    //Create HTML/CSS elements
    var cell = document.createElement("div");
    cell.className = "cell";
    cell.innerHTML = inputItem.value;

    itemsGrid.appendChild(cell);

    inputItem.value = "";

    localStorage.setItem("Grid", itemsGrid.innerHTML);
}
function loadItems(){
    const grid = localStorage.getItem("Grid");
    itemsGrid.innerHTML = grid;
}