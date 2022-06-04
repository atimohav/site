var arr=document.querySelectorAll('#left_panel>#menu>#content a');
for(var i=0; i<arr.length; i++) {
    var S=0.55*arr[i].innerHTML.length*Number(getComputedStyle(arr[i]).fontSize.slice(0, -2));
    if(S>330) {
        arr[i].style.fontSize=(330/0.55/arr[i].innerHTML.length)+'px';
    }
}

setInterval(function() {
    document.querySelector(':root').style.setProperty('--main-h1-width', document.querySelector('#main_h1').clientHeight+'px');
    if(document.querySelector('#wrapper').scrollTop<=document.querySelector('#main_h1').clientHeight-document.querySelector('#left_panel').clientHeight) {
        document.querySelector('#button1').style.width= (document.querySelector('#main_h1').clientHeight-document.querySelector('#wrapper').scrollTop)+'px';
        document.querySelector('#button1').style.height=(document.querySelector('#main_h1').clientHeight-document.querySelector('#wrapper').scrollTop)+'px';
        document.querySelector('#left_panel').style.top='calc('+document.querySelector('#button1').style.height+' - var(--left-panel-width))';
        document.querySelector('#left_panel #to_up').style.height='0';
        document.querySelector('#left_panel').style.background='transparent';
    }
    else {
        document.querySelector('#button1').style.width='var(--left-panel-width)';
        document.querySelector('#button1').style.height='var(--left-panel-width)';
        document.querySelector('#left_panel').style.top='0';
        document.querySelector('#left_panel #to_up').style.height='';
        document.querySelector('#left_panel').style.background='';
    }

    var arr=document.querySelectorAll('#left_panel>#menu>#content a');
    for(var i=0; i<arr.length; i++) {
        var j=document.querySelector(arr[i].getAttribute("href"));
        if(j.getBoundingClientRect().bottom>document.querySelector('#wrapper').getBoundingClientRect().height/2&&
           j.getBoundingClientRect().top<document.querySelector('#wrapper').getBoundingClientRect().height/2) {
            if(!arr[i].classList.contains('switched')) arr[i].classList.add('switched');
        }
        else {
            if(arr[i].classList.contains('switched')) arr[i].classList.remove('switched');
        }
    }
}, 10);