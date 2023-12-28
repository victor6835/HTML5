// window.addEventListener('load', doFirst)
function doFirst(){
    let canvas = document.getElementById("canvas")
    let context =  canvas.getContext("2d")

    context.fillStyle='blue';
    context.strokeStyle='red';
    
    

    context.fillRect(100, 100, 300, 200)
    // context.strokeRect(100, 100, 300, 200);
    context.clearRect(150, 150, 50, 50);
    context.rect(500, 200, 200, 200);
    context.stroke();
    
    context.fillRect(700, 500, 300, 300);
    
    //橡皮擦
    // context.clearRect(0, 0, canvas.width, canvas.height);
    
    
}
window.onload = doFirst;