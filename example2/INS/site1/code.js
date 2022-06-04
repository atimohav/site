var main=document.querySelector('#wrapper');
var page_number=0;
var main_arr=main.querySelectorAll('.pages');
var wrapper_context='';
var main_arr_context=new Array(main_arr.length);
var main_h;
var main_w;
var main_b;
var main_a;
var main_s;
var main_x;
var main_y;
for(var i=0; i<main_arr.length; i++) main_arr_context[i]=main_arr[i].innerHTML;

function foo(n) {
    if(n==2) {
        document.querySelector('body').style.setProperty('--main-background-color', 'url(sakura1.png)');
        document.querySelector('body').style.setProperty('--background-color', 'white');
        document.querySelector('body').style.setProperty('--border-color', 'white');
        document.querySelector('body').style.setProperty('--h1-text-color', 'white');
        document.querySelector('body').style.setProperty('--p-text-color', 'white');
        document.querySelector('body').style.setProperty('--shadow-color', 'black');
        document.querySelector('body').style.setProperty('--border-width', '20px');
        document.querySelector('body').style.setProperty('--h1-border-width', '0');
        document.querySelector('body').style.setProperty('--h1-background-color', 'white');
    }
    if(n==1) {
        document.querySelector('body').style.setProperty('--main-background-color', 'url(sakura1.png)');
        document.querySelector('body').style.setProperty('--background-color', 'rgba(0, 0, 0, 0.7)');
        document.querySelector('body').style.setProperty('--border-color', 'white');
        document.querySelector('body').style.setProperty('--h1-text-color', 'white');
        document.querySelector('body').style.setProperty('--p-text-color', 'white');
        document.querySelector('body').style.setProperty('--shadow-color', 'transparent');
        document.querySelector('body').style.setProperty('--border-width', '5px');
        document.querySelector('body').style.setProperty('--h1-border-width', '5px');
        document.querySelector('body').style.setProperty('--h1-background-color', 'transparent');
    }
}


function main_build(n) {
    wrapper_context='';
    for(var i=n; i<main_arr_context.length; i++) {
        wrapper_context+='<div class="pages"><div class="content">';
        wrapper_context+=main_arr_context[i]+'</div>';
    }
    for(var i=n; i<main_arr_context.length; i++) {
        wrapper_context+='</div>';
    }
    main.innerHTML=wrapper_context;
    main_arr=main.querySelectorAll('.pages');
    main_h=main.clientHeight;
    main_w=main.clientWidth;
    main_b=main_h;
    main_a=main_w-(main_h**2/main_w);
    main_scale=main_h/main_w;
    main_x=(main_w**2)/(2*main_w-main_a);
    main_y=main_h-(main_w-main_x)/main_w*main_h;
    console.log(main_x, main_y);
    main.style.transformOrigin=main_x+'px '+main_y+'px';
    for(var i=0; i<main_arr.length; i++) {
        main_arr[i].style.width=(main_a)+'px';
        main_arr[i].style.height=(main_b)+'px';
        main_arr[i].style.transform='rotate(90deg) scale('+(main_scale)+')';
        main_arr[0].style.transform='rotate(0) scale(1)';
        main_arr[0].style.bottom=0+'px';
        main_arr[0].style.left=0+'px';
    }
    main_arr[main_arr.length-1].style.width=(main_b/main_scale)+'px';
}

main_build(0);
document.onclick=function() {
    if(page_number<main_arr_context.length-1) {
        page_number++;
        //foo(page_number);
        main.style.transitionDuration='';
        main.style.transform='rotate('+(-90)+'deg) scale('+(1/main_scale)+')';
        setTimeout(function() {
            main.style.transitionDuration='0ms';
            main.style.transform='rotate('+(0)+'deg) scale(1)';
            main_build(page_number);
        }, Number(getComputedStyle(main).transitionDuration.slice(0, -1))*1000);
    }
}
document.onkeyup=function(event) {
    if(page_number>0&&event.keyCode!=17&&event.keyCode!=106) {
        page_number--;
        main.style.transitionDuration='0ms';
        main.style.transform='rotate('+(-90)+'deg) scale('+(1/main_scale)+')';
        main_build(page_number);
        main.style.transitionDuration='';
        main.style.transform='rotate(0deg) scale(1)';
        setTimeout(function() {main.style.background='';}, 500);
    }
}
