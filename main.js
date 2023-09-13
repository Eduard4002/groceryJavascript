document.getElementById("submitBtn").addEventListener("click", submitItem);
var inputItem = document.getElementById("itemName");
var itemsGrid = document.getElementById("itemsGrid");

function submitItem(){
    if(inputItem.value == "") return;
    addCellToPage(inputItem);

    inputItem.value = "";

    localStorage.setItem("Grid", itemsGrid.innerHTML);
}
function addCellToPage(itemName){
    var cell = document.createElement("div");
    cell.className = "cell";

    var paragraph = document.createElement("p");
    paragraph.innerHTML = inputItem.value;

    cell.appendChild(paragraph);


    itemsGrid.appendChild(cell);
}
function loadItems(){
    const grid = localStorage.getItem("Grid");
    itemsGrid.innerHTML = grid;
}