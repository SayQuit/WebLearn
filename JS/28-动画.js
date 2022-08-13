var anim = function (Obj, length,callback) {
    clearInterval(Obj.timer);
    // if(!Obj.speed)Obj.speed=50;
    Obj.timer = setInterval(function () {
        if (Obj.offsetLeft == length) {
            clearInterval(Obj.timer);
            // box1.style.backgroundColor='red'
            if(callback)callback();
        }
        // console.log(Obj.offsetLeft);
        // Obj.style.left = Obj.offsetLeft + Obj.speed + 'px';
        if(length>Obj.offsetLeft)var step=Math.ceil((length-Obj.offsetLeft)/10);
        else var step=Math.floor((length-Obj.offsetLeft)/10);
        Obj.style.left=Obj.offsetLeft+step+'px'
        // if(Obj.speed>5)Obj.speed--;
    },100)
    // Obj.offsetLeft+=5
}