document.addEventListener("DOMContentLoaded", function () {

    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'white';

    var hello = document.createElement('div');
    hello.innerHTML = 'Maple, "Evergarden".';
    hello.style.position = 'absolute';
    hello.style.top = '50%';
    hello.style.left = '50%';
    hello.style.transform = 'translate(-50%, -50%)';
    hello.style.fontSize = '3em';
    hello.style.color = 'gray';
    hello.style.fontFamily = '"Helvetica Neue", Helvetica, Arial, sans-serif';
    document.body.appendChild(hello);

    var helloText = hello.innerHTML;
    hello.innerHTML = '';
    for (var i = 0; i < helloText.length; i++) {
        var letter = document.createElement('span');
        letter.innerHTML = helloText[i];
        hello.appendChild(letter);
    }

    hello.onmouseover = function (e) {
        e.target.style.color = 'white';
        e.target.style.fontWeight = 'bold';
        e.target.style.transition = 'color 0.1s, font-weight 0.1s';
    };

    hello.onmouseout = function (e) {
        e.target.style.color = 'gray';
        e.target.style.fontWeight = 'normal';
        e.target.style.transition = 'color 0.1s, font-weight 0.1s';
    };

    hello.onmouseover = function (e) {
        e.target.style.color = 'white';
        e.target.style.fontWeight = 'bold';
        e.target.style.transition = 'color 0.1s, font-weight 0.1s';
        var left = e.target.previousSibling;
        var right = e.target.nextSibling;
        if (left) {
            left.style.color = 'white';
            left.style.fontWeight = 'normal';
            left.style.transition = 'color 0.1s, font-weight 0.1s';
            var left2 = left.previousSibling;
            if (left2) {
                left2.style.color = '#ccc';
                left2.style.fontWeight = 'normal';
                left2.style.transition = 'color 0.1s, font-weight 0.1s';
            }
        }
        if (right) {
            right.style.color = 'white';
            right.style.fontWeight = 'normal';
            right.style.transition = 'color 0.1s, font-weight 0.1s';
            var right2 = right.nextSibling;
            if (right2) {
                right2.style.color = '#ccc';
                right2.style.fontWeight = 'normal';
                right2.style.transition = 'color 0.1s, font-weight 0.1s';
            }
        }
    };

    hello.onmouseout = function (e) {
        e.target.style.color = 'gray';
        e.target.style.fontWeight = 'normal';
        e.target.style.transition = 'color 0.1s, font-weight 0.1s';
        var left = e.target.previousSibling;
        var right = e.target.nextSibling;
        if (left) {
            left.style.color = 'gray';
            left.style.fontWeight = 'normal';
            left.style.transition = 'color 0.1s, font-weight 0.1s';
            var left2 = left.previousSibling;
            if (left2) {
                left2.style.color = 'gray';
                left2.style.fontWeight = 'normal';
                left2.style.transition = 'color 0.1s, font-weight 0.1s';
            }
        }
        if (right) {
            right.style.color = 'gray';
            right.style.fontWeight = 'normal';
            right.style.transition = 'color 0.1s, font-weight 0.1s';
            var right2 = right.nextSibling;
            if (right2) {
                right2.style.color = 'gray';
                right2.style.fontWeight = 'normal';
                right2.style.transition = 'color 0.1s, font-weight 0.1s';
            }
        }
    };

    var background = document.createElement('div');
    background.style.position = 'absolute';
    background.style.top = '0';
    background.style.left = '0';
    background.style.width = '100%';
    background.style.height = '100%';
    background.style.backgroundImage = 'url(https://i.pinimg.com/originals/5f/9f/bd/5f9fbdbe038edf4a09fdb52c94ad59bf.jpg)';
    background.style.backgroundSize = 'cover';
    background.style.backgroundPosition = 'center';
    background.style.filter = 'brightness(0.25)';
    document.body.appendChild(background);

    document.body.appendChild(hello);

    hello.style.fontFamily = '"Andale Mono", monospace';

    var cursor = document.createElement('div');
    cursor.style.position = 'absolute';
    cursor.style.top = '0';
    cursor.style.left = '0';
    cursor.style.width = '10px';
    cursor.style.height = '10px';
    cursor.style.borderRadius = '5px';
    cursor.style.backgroundColor = 'white';
    cursor.style.transition = 'background-color 0.1s';
    document.body.appendChild(cursor);
    document.onmousemove = function (e) {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    };

    document.body.style.cursor = 'none';

    cursor.style.width = '20px';
    cursor.style.height = '20px';
    cursor.style.borderRadius = '10px';
    cursor.style.backgroundColor = 'rgba(255, 255, 255, 0.5)';

    document.onselectstart = function () {
        return false;
    };

    var button = document.createElement('div');
    button.innerHTML = 'Hi, Welcome!';
    button.style.position = 'absolute';
    button.style.bottom = '0';
    button.style.left = '0';
    button.style.width = '100%';
    button.style.height = '50px';
    button.style.backgroundColor = 'transparent';
    button.style.border = '1px solid white';
    button.style.borderRadius = '5px';
    button.style.textAlign = 'center';
    button.style.lineHeight = '50px';
    button.style.fontSize = '2em';
    button.style.fontFamily = '"Andale Mono", monospace';
    button.style.color = 'white';
    button.style.transition = 'background-color 0.1s';
    document.body.appendChild(button);

    button.style.width = 'auto';
    button.style.left = '50%';
    button.style.transform = 'translateX(-50%)';

    button.style.top = '5%';

    button.style.textAlign = 'center';

    button.style.whiteSpace = 'nowrap';

    button.style.padding = '0 20px';

    document.onmousemove = function (e) {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        if (e.clientX < 50 || e.clientX > window.innerWidth - 50 || e.clientY < 50 || e.clientY > window.innerHeight - 50) {
            cursor.style.display = 'none';
            document.body.style.cursor = 'default';
        } else {
            cursor.style.display = 'block';
            document.body.style.cursor = 'none';
        }
    };

    button.style.top = '-50px';
    button.style.transition = 'top 1s';
    button.style.opacity = '0';


    window.onload = function () {
        setTimeout(function () {
            button.style.top = '80%';
            button.style.opacity = '1';
        }, 1000);
    };

    setTimeout(function () {
        button.innerHTML = 'The name is..';
        button.style.transition = 'top 1s, color 0.1s';
    }, 2500);

    hello.style.opacity = '0';

    setTimeout(function () {
        hello.style.opacity = '1';
        hello.style.transition = 'opacity 1s';
    }, 3500);

    setTimeout(function () {
        button.innerHTML = 'VR Enthusiast by Night.';
    }, 5000);

    setTimeout(function () {
        button.innerHTML = 'Programmer by Day, Full Stack Specifically.';
    }, 7000);

    setTimeout(function () {
        button.innerHTML = 'I have no use for this page.';
    }, 10000);

    setTimeout(function () {
        button.innerHTML = 'If you want to talk to me...';
    }, 12000);

    setTimeout(function () {
        button.innerHTML = 'Do so @ Maple#3668!';
    }, 14000);

    setTimeout(function () {
        button.innerHTML = 'Or here, click me!';
        button.style.cursor = 'pointer';
        button.onclick = function () {
            window.location.href = 'https://github.com/MapleCodes';
        };
    }, 16000);

    hello.style.fontSize = '4.5em';

    /* when the button is hovered, make the background of the button smokey and see through */
    button.onmouseover = function (e) {
        e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.35)';
    };
    /* and when not hovered return to transparent */
    button.onmouseout = function (e) {
        e.target.style.backgroundColor = 'transparent';
    };
});