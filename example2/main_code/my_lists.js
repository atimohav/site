var my_lists_arr=document.querySelectorAll('.horisont_list');
for(var i=0; i<my_lists_arr.length; i++) {
    var me=my_lists_arr[i];

    for(var j=0; j<me.querySelectorAll('li').length; j++) {
        me.querySelectorAll('li')[j].classList.remove('last');
        me.querySelectorAll('li')[j].classList.remove('switched');
        me.querySelectorAll('li')[j].classList.remove('next');
        me.querySelectorAll('li')[j].classList.remove('animated');
    }
    me.querySelectorAll('li')[Number((Number(me.dataset.counter)+me.querySelectorAll('li').length-1)%me.querySelectorAll('li').length)].classList.add('last');
    me.querySelectorAll('li')[Number((Number(me.dataset.counter)+me.querySelectorAll('li').length-0)%me.querySelectorAll('li').length)].classList.add('switched');
    me.querySelectorAll('li')[Number((Number(me.dataset.counter)+me.querySelectorAll('li').length+1)%me.querySelectorAll('li').length)].classList.add('next');
    me.querySelectorAll('li')[Number((Number(me.dataset.counter)+me.querySelectorAll('li').length-0)%me.querySelectorAll('li').length)].classList.add('animated');
    me.querySelectorAll('li')[Number((Number(me.dataset.counter)+me.querySelectorAll('li').length+1)%me.querySelectorAll('li').length)].classList.add('animated');
    
    me.querySelector('.left_array').addEventListener('click', function() {
        me.dataset.counter=(Number(me.dataset.counter)+me.querySelectorAll('li').length+1)%me.querySelectorAll('li').length;
        for(var j=0; j<me.querySelectorAll('li').length; j++) {
            me.querySelectorAll('li')[j].classList.remove('last');
            me.querySelectorAll('li')[j].classList.remove('switched');
            me.querySelectorAll('li')[j].classList.remove('next');
            me.querySelectorAll('li')[j].classList.remove('animated');
        }
        me.querySelectorAll('li')[Number((Number(me.dataset.counter)+me.querySelectorAll('li').length-1)%me.querySelectorAll('li').length)].classList.add('last');
        me.querySelectorAll('li')[Number((Number(me.dataset.counter)+me.querySelectorAll('li').length-0)%me.querySelectorAll('li').length)].classList.add('switched');
        me.querySelectorAll('li')[Number((Number(me.dataset.counter)+me.querySelectorAll('li').length+1)%me.querySelectorAll('li').length)].classList.add('next');
        me.querySelectorAll('li')[Number((Number(me.dataset.counter)+me.querySelectorAll('li').length-1)%me.querySelectorAll('li').length)].classList.add('animated');
        me.querySelectorAll('li')[Number((Number(me.dataset.counter)+me.querySelectorAll('li').length-0)%me.querySelectorAll('li').length)].classList.add('animated');
    });
    me.querySelector('.right_array').addEventListener('click', function() {
        me.dataset.counter=(Number(me.dataset.counter)+me.querySelectorAll('li').length-1)%me.querySelectorAll('li').length;
        for(var j=0; j<me.querySelectorAll('li').length; j++) {
            me.querySelectorAll('li')[j].classList.remove('last');
            me.querySelectorAll('li')[j].classList.remove('switched');
            me.querySelectorAll('li')[j].classList.remove('next');
            me.querySelectorAll('li')[j].classList.remove('animated');
        }
        me.querySelectorAll('li')[Number((Number(me.dataset.counter)+me.querySelectorAll('li').length-1)%me.querySelectorAll('li').length)].classList.add('last');
        me.querySelectorAll('li')[Number((Number(me.dataset.counter)+me.querySelectorAll('li').length-0)%me.querySelectorAll('li').length)].classList.add('switched');
        me.querySelectorAll('li')[Number((Number(me.dataset.counter)+me.querySelectorAll('li').length+1)%me.querySelectorAll('li').length)].classList.add('next');
        me.querySelectorAll('li')[Number((Number(me.dataset.counter)+me.querySelectorAll('li').length-0)%me.querySelectorAll('li').length)].classList.add('animated');
        me.querySelectorAll('li')[Number((Number(me.dataset.counter)+me.querySelectorAll('li').length+1)%me.querySelectorAll('li').length)].classList.add('animated');
    });
}