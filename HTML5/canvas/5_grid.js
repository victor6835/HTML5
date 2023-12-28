
function doFirst(){
    let canvas = document.getElementById('canvas')
    let context = canvas.getContext('2d')

    // 格線
    let gap = 50
    if(canvas.width > canvas.height){
        range = canvas.width / gap
    }else{
        range = canvas.height / gap
    }

    for(let i = 0; i <= range; i++){
        let interval = i * gap

        // 水平線
        context.moveTo(           0, interval);
        context.lineTo(canvas.width, interval);
        context.fillText(interval, 0, interval);        

        // 垂直線
        context.moveTo(interval,             0);
        context.lineTo(interval, canvas.height);
        context.fillText(interval, interval, 10);        
    }
    context.strokeStyle='rgba(0,0,0,0.3)';    
    context.stroke();
    // =============
    
    
    
    
    
    
    
}
window.addEventListener('load', doFirst)