for(var j=0; j<document.querySelectorAll('.button').length; j++) {
    var x=document.querySelectorAll('.button')[j];
    if(x==document.querySelector('#button1')) {
        x.addEventListener('click', function() {
            if(x.classList.contains('switched')) {
                x.classList.remove('switched');
            }
            else x.classList.add('switched');
            var y=document.querySelector('#left_panel #menu');
            if(y.classList.contains('switched')) {
                y.classList.remove('switched');
            }
            else y.classList.add('switched');
        });
        document.onkeydown = function(event) {
            if(event.keyCode==27) {
                if(x.classList.contains('switched')) {
                    x.classList.remove('switched');
                }
                else x.classList.add('switched');
                var y=document.querySelector('#left_panel #menu');
                if(y.classList.contains('switched')) {
                    y.classList.remove('switched');
                }
                else y.classList.add('switched');
            }
        };
    }
    else {
        x.addEventListener('click', function() {
            if(x.classList.contains('switched')) {
                x.classList.remove('switched');
            }
            else x.classList.add('switched');
        });
    }
}
/*
setInterval(function() {
    if
}, 100);*/