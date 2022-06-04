var wrapper=document.querySelector('#wrapper');
var my_scrollbar=document.querySelector('#scrollbar');
var scrollbar_width=wrapper.offsetWidth - wrapper.clientWidth+1;
var scroll_coeff=document.querySelector('#wrapper').clientHeight/(document.querySelector('#wrapper>#wrapper_content').clientHeight+40+document.querySelector('#main_h1').clientHeight);
my_scrollbar.querySelector('div').style.height='calc((100vh - 2 * var(--scroll-width)) * '+scroll_coeff+')';
document.querySelector(':root').style.setProperty('--scroll-width', scrollbar_width+'px');
if(document.querySelector('#wrapper').clientHeight-document.querySelector('#wrapper_content').clientHeight-document.querySelector('#main_h1').clientHeight-40 >= 0) {
    document.querySelector('#wrapper').style.overflow='visible';
    document.querySelector(':root').style.setProperty('--scroll-width', '0px');
}
window.onresize = function() {
    scrollbar_width=wrapper.offsetWidth - wrapper.clientWidth+1;
    scroll_coeff=document.querySelector('#wrapper').clientHeight/(document.querySelector('#wrapper>#wrapper_content').clientHeight+40+document.querySelector('#main_h1').clientHeight);
    my_scrollbar.querySelector('div').style.height='calc((100vh - 2 * var(--scroll-width)) * '+scroll_coeff+')';
    document.querySelector(':root').style.setProperty('--scroll-width', scrollbar_width+'px');
    if(document.querySelector('#wrapper').clientHeight-document.querySelector('#wrapper_content').clientHeight-document.querySelector('#main_h1').clientHeight-40 >= 0) {
        document.querySelector('#wrapper').style.overflow='visible';
        document.querySelector(':root').style.setProperty('--scroll-width', '0px');
    }
};

//SCROLL
wrapper.onscroll = function() {
    document.querySelector('#main_h1').style.top=-document.querySelector('#wrapper').scrollTop+'px';
    my_scrollbar.querySelector('div').style.marginTop='calc((var(--scroll-width) + (100vh - 2 * var(--scroll-width))  / '+(document.querySelector('#wrapper').clientHeight)+' * '+scroll_coeff+' * '+wrapper.scrollTop+')';
}