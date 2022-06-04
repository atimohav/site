var bg_img_arr=[];
bg_img_arr[0]='url(sakura1.png)';
var j;
for(var i=0; i<document.querySelectorAll('div').length; i++) {
    if(bg_img_arr[i]!=undefined) j=bg_img_arr[i];
    bg_img_arr[i]=j;
}
document.getElementById('#wrapper').onscroll=function() {
    var x=wrapper.scrollTop;
    x=(x-x%my_scrollbar.clientHeight)/my_scrollbar.clientHeight;
    console.log(x);
    document.querySelector(':root').style.setProperty('--background-image', bg_img_arr[x]);
}
console.log(bg_img_arr);
