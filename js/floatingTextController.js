'use strict';

var app = {

    chars: ['1','software engineer','0','1','UI/UX','UX designer','1','0','1','athlete','1','0','software developer','0','0','1','0',"artist"],

    init: function () {
        app.container = document.createElement('div');
        app.container.className = 'animation-container container-fluid col-md-2';
        document.getElementById("background").appendChild(app.container);
        window.setInterval(app.add, 100);
    },

    add: function () {
        var element = document.createElement('span');
        // element.className = 'floatingText parallax';
        element.className = 'floatingText';
        app.container.appendChild(element);
        app.animate(element);
    },

    animate: function (element) {
        var character = app.chars[Math.floor(Math.random() * app.chars.length)];
        var duration = Math.floor(Math.random() * 15) + 1;
        var offset = Math.floor(Math.random() * (50 - duration * 2)) + 3;
        var size = 10 + (15 - duration);
        element.style.cssText = 'right:'+offset+'vw; font-size:'+size+'px;animation-duration:'+duration+'s';
        element.innerHTML = character;
        window.setTimeout(app.remove, duration * 1000, element);
    },

    remove: function (element) {
        element.parentNode.removeChild(element);
    },

};

document.addEventListener('DOMContentLoaded', app.init);