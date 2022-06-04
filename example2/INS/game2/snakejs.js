var tabw = 30;
var tabh = 30;

for(var i=0; i<tabh; i++) {
    document.getElementById('snakegame').getElementsByClassName('snaketable')[0].appendChild(document.createElement('tr'));
    for(var j=0; j<tabw; j++) {
        document.getElementById('snakegame').getElementsByClassName('snaketable')[0].getElementsByTagName('tr')[i].appendChild(document.createElement('td'));
    }
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var snake = new Array(10);
var snakehead = new Array(2);
var direction;
for(var i=0; i<snake.length; i++) {
    snake[i] = new Array(2);
}
var game;
var tick;
var snakelen;
var keypressed;

var startbutton = document.getElementById('snakegame').getElementsByClassName('startbutton')[0];

function startsnakegame() {
    snake = [
        [Math.round((tabw-1)/2), Math.round((tabh-1)/2)],
        [Math.round((tabw-1)/2), Math.round((tabh-1)/2)],
        [Math.round((tabw-1)/2), Math.round((tabh-1)/2)],
        [Math.round((tabw-1)/2), Math.round((tabh-1)/2)],
        [Math.round((tabw-1)/2), Math.round((tabh-1)/2)]
    ];
    direction = 0;
    game = 1;
    tick = 0;
    snakelen = 5;
    snakehead[0] = snake[0][0];
    snakehead[1] = snake[0][1];
    startbutton.style.background = 'rgba(255, 255, 255, 0.9)';
    startbutton.style.backgroundSize = '100%';
    startbutton.style.top = '0';
    startbutton.style.left = 'calc(50vw + 50vh)';
    startbutton.style.width = 'calc(50vw - 50vh)';
    startbutton.style.height = 'calc(50vw - 50vh)';
    startbutton.style.lineHeight = 'calc(50vw - 50vh)';

    for(var i=0; i<tabh; i++) {
        for(var j=0; j<tabw; j++) {
            if(i == 0 || i == tabh - 1 || j == 0 || j == tabw - 1) {
                document.getElementById('snakegame').getElementsByClassName('snaketable')[0].getElementsByTagName('tr')[i].getElementsByTagName('td')[j].style.background = 'rgb(0, 0, 64)';
            }
        }
    }        
    for(var i=0; i<tabh; i++) {
        for(var j=0; j<tabw; j++) {
            if(i != 0 && i != tabh - 1 && j != 0 && j != tabw - 1) {
                document.getElementById('snakegame').getElementsByClassName('snaketable')[0].getElementsByTagName('tr')[i].getElementsByTagName('td')[j].style.background = 'white';
            }
        }
    }
}

snake = [
    [12, 12],
    [12, 12],
    [12, 12],
    [12, 12],
    [12, 12]
];
direction = 0;
tick = 0;
snakelen = 5;
snakehead[0] = snake[0][0];
snakehead[1] = snake[0][1];

for(var i=0; i<tabh; i++) {
    for(var j=0; j<tabw; j++) {
        if(i == 0 || i == tabh - 1 || j == 0 || j == tabw - 1) {
            document.getElementById('snakegame').getElementsByClassName('snaketable')[0].getElementsByTagName('tr')[i].getElementsByTagName('td')[j].style.background = 'rgb(0, 0, 64)';
        }
    }
}        
for(var i=0; i<tabh; i++) {
    for(var j=0; j<tabw; j++) {
        if(i != 0 && i != tabh - 1 && j != 0 && j != tabw - 1) {
            document.getElementById('snakegame').getElementsByClassName('snaketable')[0].getElementsByTagName('tr')[i].getElementsByTagName('td')[j].style.background = 'white';
        }
    }
}
game = 0;

function snakegame() {
    startbutton.textContent = snake.length - snakelen;
    if(game == 0) {
        startbutton.style.backgroundSize = '100%';
        startbutton.style.top = '';
        startbutton.style.left = '';
        startbutton.style.width = '';
        startbutton.style.top = '';
        startbutton.style.left = '';
        startbutton.style.width = '';
        startbutton.style.height = '';
        startbutton.style.lineHeight = '';
        startbutton.onclick = function () {
            startsnakegame();
        }
    }
    if(game == 1) {
        keypressed = 0;
        tick++;
        if(!(tick%20)) {
            var x=1+Math.round((tabw-3)*Math.random());
            var y=1+Math.round((tabh-3)*Math.random());
            if(document.getElementById('snakegame').getElementsByClassName('snaketable')[0].getElementsByTagName('tr')[y].getElementsByTagName('td')[x].style.background == 'white') {
                document.getElementById('snakegame').getElementsByClassName('snaketable')[0].getElementsByTagName('tr')[y].getElementsByTagName('td')[x].style.background = 'rgb(255, 0, 0)';
            }
        }
        if(!(tick%400)) {
            var x=1+Math.round((tabw-3)*Math.random());
            var y=1+Math.round((tabh-3)*Math.random());
            if(document.getElementById('snakegame').getElementsByClassName('snaketable')[0].getElementsByTagName('tr')[y].getElementsByTagName('td')[x].style.background == 'white') {
                document.getElementById('snakegame').getElementsByClassName('snaketable')[0].getElementsByTagName('tr')[y].getElementsByTagName('td')[x].style.background = 'rgb(0, 128, 0)';
            }
        }
        document.onkeypress = function() {
            if(!keypressed) {
                if(event.keyCode == 119) {
                    if(direction != 2) {
                        direction = 0;
                        keypressed = 1;
                    }
                }
                else if(event.keyCode == 100) {
                    if(direction != 3) {
                        direction = 1;
                        keypressed = 1;
                    }
                }
                else if(event.keyCode == 115) {
                    if(direction != 0) {
                        direction = 2;
                        keypressed = 1;
                    }
                }
                else if(event.keyCode == 97) {
                    if(direction !== 1) {
                        direction = 3;
                        keypressed = 1;
                    }
                }
            }
        }

        if(direction == 0) {
            snakehead[1] = snakehead[1] - 1;
        }
        else if(direction == 1) {
            snakehead[0] = snakehead[0] + 1;
        }
        else if(direction == 2) {
            snakehead[1] = snakehead[1] + 1;
        }
        else if(direction == 3) {
            snakehead[0] = snakehead[0] - 1;
        }

        if(document.getElementById('snakegame').getElementsByClassName('snaketable')[0].getElementsByTagName('tr')[snakehead[1]].getElementsByTagName('td')[snakehead[0]].style.background == 'rgb(255, 0, 0)') {
            snake[snake.length]=[0, 0];
        }
        if(document.getElementById('snakegame').getElementsByClassName('snaketable')[0].getElementsByTagName('tr')[snakehead[1]].getElementsByTagName('td')[snakehead[0]].style.background == 'rgb(0, 128, 0)') {
            snake = snake.splice(0, Math.round(snake.length/2));
            snakelen = snakelen-snake.length+(snake.length%2);
        }

        if(document.getElementById('snakegame').getElementsByClassName('snaketable')[0].getElementsByTagName('tr')[snakehead[1]].getElementsByTagName('td')[snakehead[0]].style.background != 'white' &&
           document.getElementById('snakegame').getElementsByClassName('snaketable')[0].getElementsByTagName('tr')[snakehead[1]].getElementsByTagName('td')[snakehead[0]].style.background != 'rgb(255, 0, 0)' &&
           document.getElementById('snakegame').getElementsByClassName('snaketable')[0].getElementsByTagName('tr')[snakehead[1]].getElementsByTagName('td')[snakehead[0]].style.background != 'rgb(0, 128, 0)') {
            game = 0;
        }

        for(var i = snake.length - 1; i > 0; i--) {
            snake[i][0] = snake[i-1][0] + 0;
            snake[i][1] = snake[i-1][1] + 0;
        }

        snake[0][0] = snakehead[0];
        snake[0][1] = snakehead[1];

        for(var i=0; i<tabh; i++) {
            for(var j=0; j<tabw; j++) {
                if(i != 0 && i != tabh - 1 && j != 0 && j != tabw - 1) {
                    if(document.getElementById('snakegame').getElementsByClassName('snaketable')[0].getElementsByTagName('tr')[i].getElementsByTagName('td')[j].style.background != 'rgb(255, 0, 0)' && 
                       document.getElementById('snakegame').getElementsByClassName('snaketable')[0].getElementsByTagName('tr')[i].getElementsByTagName('td')[j].style.background != 'rgb(0, 128, 0)') {
                        document.getElementById('snakegame').getElementsByClassName('snaketable')[0].getElementsByTagName('tr')[i].getElementsByTagName('td')[j].style.background = 'white';
                    }
                }
            }
        }
        for(var i=0; i<snake.length; i++) {
            document.getElementById('snakegame').getElementsByClassName('snaketable')[0].getElementsByTagName('tr')[snake[i][1]].getElementsByTagName('td')[snake[i][0]].style.background = 'rgb(64, 0, 0)';  
        }
    }
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


setInterval(snakegame, 175);



