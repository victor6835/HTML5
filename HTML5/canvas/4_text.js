// window.addEventListener('load', doFirst)
function doFirst(){
    let canvas = document.getElementById("canvas")
    let context =  canvas.getContext("2d")

    context.font='bold 50px tahoma';
    
    //first word
    context.textBaseline='alphabetic';
    
    // context.textBaseline='top | hanging | middle | alphabetic | ideographic | bottom';
    
    // context.textBaseline='top';
    
    // context.fillText('google', 100, 100);
    context.strokeText('google', 100, 100);
    
    //輔助線
    // context.strokeStyle='red';
    // context.moveTo(100, 100);
    // context.lineTo(300, 100);
    // context.stroke();
    
    // context.arc(100, 100, 10, Math.PI);
    // context.stroke();
    
    //second word加上陰影
    context.shadowColor='red';
    context.shadowOffsetX=5;
    context.shadowOffsetY=5;
    context.shadowBlur=5;
    context.fillText('google', 100, 250);
    //third word四邊都有陰影
    context.shadowOffsetX=0;
    context.shadowOffsetY=0;
    context.shadowBlur=15;
    context.fillStyle='#fff';
    
    context.fillText('google', 100, 400);
    //forth word多重陰影
    context.shadowColor='blue';
    context.fillText('google', 100, 550);
    context.shadowColor='purple';
    context.fillText('google', 100, 550);
        
        
}
window.onload = doFirst;