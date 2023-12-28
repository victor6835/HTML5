// window.addEventListener('load', doFirst)
function doFirst(){
    let canvas = document.getElementById("canvas")
    let context =  canvas.getContext("2d")

    context.fillStyle='maroon';
    context.strokeStyle='steelblue';
    context.lineWidth=5;
    
    
    context.moveTo(100, 100);//起始點
    context.lineTo(250, 250);
    context.lineTo(400, 50);
    context.lineTo(20, 200);
    context.closePath();
    
    
    
    context.fill();
    context.stroke();
    //順序有差
    
    
    
    
}
window.onload = doFirst;