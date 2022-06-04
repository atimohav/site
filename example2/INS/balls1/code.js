var r=100;
var r2=4;
var l=300;
var d=40;
var bbb=0;
var last_arr=new Array(3);
var wrapper=document.querySelector('#wrapper');
//var inH="<div class='ball'></div>";
//for(var i=0; i<4; i++) wrapper.innerHTML+=inH;
var canvas=document.querySelector("#maincanvas");
var main_canvas=canvas.getContext('2d');
main_canvas.fillStyle='lime';
main_canvas.lineWidth=0;
setInterval(function() {
    main_canvas.clearRect(0, 0, 2000, 2000);
    if(l<2*r && l>=Math.PI/2*r) {
        var min=99999999999999999999999999;
        for(var i=0; i<10000; i++) {
            var alfa=Math.atan(i/l);
            r2=(i**2+l**2)**0.5/2-r;
            var x=Math.abs(2*r**2*alfa-l*i/2+2*r2**2*(Math.PI/2-alfa));
            if(min>x) {
                min=x;
                d=i;
            }
        }
        var alfa=Math.atan(d/l);
        r2=(d**2+l**2)**0.5/2-r;
        main_canvas.beginPath();
        /*if(r2<0 || alfa<0 || d<0) {
            r2=last_arr[0];
            alfa=last_arr[1];
            d=last_arr[2];
            main_canvas.arc(200, 200, r, alfa, 2*Math.PI-alfa, false);
            main_canvas.arc(200+l/2, 200-d/2, r2, Math.PI-alfa, alfa, true);
            main_canvas.arc(200+l, 200, r, Math.PI+alfa, Math.PI-alfa, false);
            main_canvas.arc(200+l/2, 200+d/2, r2, 2*Math.PI-alfa, Math.PI+alfa, true);
        }
        else {*/
            last_arr[0]=r2;
            last_arr[1]=alfa;
            last_arr[2]=d;
            console.log(0);
            main_canvas.arc(200, 200, r, alfa, 2*Math.PI-alfa, false);
            main_canvas.arc(200+l/2, 200-d/2, r2, Math.PI-alfa, alfa, true);
            main_canvas.arc(200+l, 200, r, Math.PI+alfa, Math.PI-alfa, false);
            main_canvas.arc(200+l/2, 200+d/2, r2, 2*Math.PI-alfa, Math.PI+alfa, true);
        //}
        main_canvas.fill();
        main_canvas.closePath();
        main_canvas.stroke();
    } 
    else if(l<Math.PI/2*r && l>=2*(2**0.5-1)*r) {
        var min=99999999999999999999999999;
        for(var i=0; i<10000; i++) {
            var alfa=Math.atan(i/l);
            r2=(i**2+l**2)**0.5/2+r;
            var x=Math.abs(r**2*alfa+r2**2*(Math.PI/2-alfa)-l/2*i/2-Math.PI*r**2);
            if(min>x) {
                min=x;
                d=-i;
            }
        }
        var alfa=Math.atan(d/l);
        r2=(d**2+l**2)**0.5/2+r;
        main_canvas.beginPath();
        alfa=-alfa;
        if(alfa==undefined) main_canvas.arc(200+l/2, 200, r2, 0, 2*Math.PI, false);
        else {
            main_canvas.arc(200, 200, r, Math.PI-alfa, Math.PI+alfa, false);
            main_canvas.arc(200+l/2, 200-d/2, r2, Math.PI+alfa, 2*Math.PI-alfa, false);
            main_canvas.arc(200+l, 200, r, 2*Math.PI-alfa, alfa, false);
            main_canvas.arc(200+l/2, 200+d/2, r2, alfa, Math.PI-alfa, false);
        }
        main_canvas.closePath();
        main_canvas.fill();
        main_canvas.stroke();
    }
    else if(l<2*(2**0.5-1)*r) {
        r2=2**0.5*r;
        d=0;
        main_canvas.beginPath();
        main_canvas.arc(200+l/2, 200, 2**0.5*r, 0, 2*Math.PI, false);
        main_canvas.closePath();
        main_canvas.fill();
        main_canvas.stroke();
    }
    else {
        main_canvas.beginPath();
        main_canvas.arc(200, 200, r, 0, 2*Math.PI, false);
        main_canvas.moveTo(200+l+r, 200);
        main_canvas.arc(200+l, 200, r, 2*Math.PI, 0, false);
        main_canvas.closePath();
        main_canvas.fill();
        main_canvas.stroke();
    }
    //l-=0.05;
}, 1);

document.onkeydown=function(event) {
    if(event.keyCode==37) l-=1;
    if(event.keyCode==39) l+=1;
    if(event.keyCode==65) l-=2;
    if(event.keyCode==68) l+=2;
}

