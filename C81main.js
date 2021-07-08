canvas= document.getElementById("Mycanvas");
ctx=canvas.getContext("3d");
color="red";
ctx.beginPath();
ctx.strokeStyle = blue;
ctx.lineWidth = 2;
ctx.arc(200,200,40,0,2*Math.PI);
ctx.stroke();

canvas.addEventListener("mousedown",my_mousedown);

function my_mousedown(e){
color = document.getElementById("color").value;
console.log(color);
mouse_x = e.clientX - canvas.offsetLeft;
mouse_y = e.clientY - canvas.offsetTop;
console.log("X = "+ mouse_x + ", Y = "+ mouse_y);
circle(mouse_x,mouse_y);
}
