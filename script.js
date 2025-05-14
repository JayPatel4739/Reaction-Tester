function getRandomColor() {
var letters = '0123456789ABCDEF';
var color = '#';
for (var i = 0; i < 6; i++) {
color += letters[Math.floor(Math.random() * 16)];
}
return color;
} 
function move(){
    var top;
    var wh;
    left = Math.random()*300;
    top = Math.random()*300;
    wh = ((Math.random()*400) + 100);
    document.getElementById("square").style.left = left + "px";
    document.getElementById("square").style.top = top + "px";
    document.getElementById("square").style.width = wh + "px";
    document.getElementById("square").style.height = wh + "px";
    document.getElementById("square").style.display = "block";
    document.getElementById("square").style.backgroundColor = getRandomColor();
}
move();
var start=new Date().getTime();
document.getElementById("square").onclick = function(){
    document.getElementById("square").style.display = "none";
    var end=new Date().getTime();
    var TimeTaken = (end-start)/1000;
    alert(TimeTaken);
    move();
}