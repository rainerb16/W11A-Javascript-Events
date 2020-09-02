// HOVER
let headerText = document.getElementById("header");
headerText.addEventListener("mouseover", function() {
    headerText.style.backgroundColor = "aqua";
    headerText.style.color = "blue";
    headerText.style.textAlign = "center";
});

headerText.addEventListener("mouseout", function() {
    headerText.style.fontSize = "<h3></h3>";
    headerText.style.backgroundColor = "white";
    headerText.style.color = "black";
    headerText.style.textAlign = "left";
});


// CLICK
let subText = document.getElementById("subheader");
subText.addEventListener("click", function() {
    subText.style.backgroundColor = "yellow";
    subText.innerHTML = "<h1>SECRET MESSAGE</h1>";
    subText.style.textAlign = "center";
});

// SPACE KEY
let spaceBar = document.getElementById("body");
let listItem = document.getElementById("list");
spaceBar.addEventListener("keypress", function(eventDetails) {
    if(eventDetails.key == " ") {
        listItem.style.fontSize = "24px";
        listItem.style.textDecoration = "overline";
        listItem.innerHTML = "<h1>NEW TEXT</h1>";
    }
});
