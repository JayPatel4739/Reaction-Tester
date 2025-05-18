var start;

function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function showBox() {
    var square = document.getElementById("square");
    var left = Math.random() * 1200;
    var top = Math.random() * 300;
    var wh = Math.random() * 200 + 100;

    square.style.left = left + "px";
    square.style.top = top + "px";
    square.style.width = wh + "px";
    square.style.height = wh + "px";
    square.style.backgroundColor = getRandomColor();
    square.style.display = "block";

    start = new Date().getTime();
}

document.getElementById("square").onclick = function () {
    this.style.display = "none";
    var end = new Date().getTime();
    var reactionTime = (end - start) / 1000;
    document.getElementById("time").innerHTML = "Your Reaction Time: " + reactionTime + " seconds";
    showBox();
};


showBox();
