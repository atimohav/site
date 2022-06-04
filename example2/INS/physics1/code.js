var wrapper=document.querySelector('#wrapper');
var pause_flag=0;
var coords=[[200, 200],[200, 500]];
var xmax=40;
var delta=60;
var len=60;
var size=15;
var arr=[];
for(var i=0; i<2; i++) {
    wrapper.innerHTML+='<div class=row></div>';
    for(var j=0; j<size; j++) {
        wrapper.querySelectorAll('.row')[i].innerHTML+='<div class=ball></div>';
        wrapper.querySelectorAll('.row')[i].querySelectorAll('.ball')[j].style.left=(coords[i][0]+len*j)+'px';
        wrapper.querySelectorAll('.row')[i].querySelectorAll('.ball')[j].style.top=coords[i][1]+'px';
        arr[j]=coords[i][0]+len*j;
    }
}

var time=0;
var speed=1;
document.onkeydown=function(event) {
    if(event.keyCode==32) speed*=-1;
    else if(event.keyCode==37&&speed-1>=0) speed--;
    else if(event.keyCode==39) speed++;
    else if(event.keyCode==8) {
        speed=-1;
        time=0;
        for(var i=0; i<2; i++) {
            for(var j=0; j<size; j++) {
                wrapper.querySelectorAll('.row')[i].querySelectorAll('.ball')[j].style.left=(coords[i][0]+len*j)+'px';
                wrapper.querySelectorAll('.row')[i].querySelectorAll('.ball')[j].style.top=coords[i][1]+'px';
                if(j) wrapper.querySelectorAll('.row')[i].querySelectorAll('.ball')[j].classList.remove('active');
            }
        }
    }
}
setInterval(function() {
    if(speed>0) time+=speed;
    for(var i=0; i<size; i++) {
        if(time-delta*i>0) {
            wrapper.querySelectorAll('.row')[0].querySelectorAll('.ball')[i].style.top=(coords[0][1]+xmax*Math.sin((time-delta*i)/180*Math.PI))+'px';
            wrapper.querySelectorAll('.row')[1].querySelectorAll('.ball')[i].style.left=(arr[i]+xmax*Math.sin((time-delta*i)/180*Math.PI))+'px';
            if(i%(360/delta)==0) {
                wrapper.querySelectorAll('.row')[0].querySelectorAll('.ball')[i].classList.add('active');
                wrapper.querySelectorAll('.row')[1].querySelectorAll('.ball')[i].classList.add('active'); 
            }          
        }
    }
}, 10);