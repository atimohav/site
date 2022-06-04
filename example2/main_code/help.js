var arr=document.querySelectorAll('*[data-help]');
for(var i=0; i<arr.length; i++) {
    arr[i].addEventListener('mousemove', function(event) {
        document.querySelector('#help').innerHTML=this.getAttribute('data-help');
        document.querySelector('#help').style.opacity="1";
        document.querySelector('#help').style.visibility="visible";
    });
    arr[i].addEventListener('mouseout', function(event) {
        document.querySelector('#help').style.opacity="0";
        document.querySelector('#help').style.visibility="hidden";
    });
}
document.addEventListener('mousemove', function(event) {
    document.querySelector('#help').style.top=(event.clientY)+'px';
    document.querySelector('#help').style.left=(event.clientX)+'px';
    if(event.clientX<document.querySelector('body').clientWidth-document.querySelector('#help').clientWidth-20-document.querySelector('#wrapper').offsetWidth+document.querySelector('#wrapper').clientWidth-1) {
        document.querySelector('#help').style.marginLeft='20px';
        document.querySelector('#help').style.setProperty('--left', '-20px');
        document.querySelector('#help').style.setProperty('--right', 'unset');
    }
    else {
        document.querySelector('#help').style.marginLeft='-320px';
        document.querySelector('#help').style.setProperty('--left', 'unset');
        document.querySelector('#help').style.setProperty('--right', '-20px');
    }
    if(event.clientY<document.querySelector('body').clientHeight-document.querySelector('#help').clientHeight-20) {
        document.querySelector('#help').style.marginTop='0';
        document.querySelector('#help').style.setProperty('--top', '0');
        document.querySelector('#help').style.setProperty('--bottom', 'unset');
        document.querySelector('#help').style.setProperty('--clip-path', 'polygon(0 0, 50% 50%, 100% 0)');
    }
    else {
        document.querySelector('#help').style.marginTop='-'+document.querySelector('#help').clientHeight+'px';
        document.querySelector('#help').style.setProperty('--top', 'unset');
        document.querySelector('#help').style.setProperty('--bottom', '0');
        document.querySelector('#help').style.setProperty('--clip-path', 'polygon(0 100%, 50% 50%, 100% 100%)');
    }
});