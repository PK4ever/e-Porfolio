var timeout1;
var timeout;
var x =0;
var duration = 0;;

$(document).ready(function(){


    // alert($("span").attr("value"));
    blink();

    var lines = document.getElementsByClassName("ghostWriter");

    for (var i = 0; i < lines.length; i++) {
        doSetTimeOut(i, lines);
    }


});

function doSetTimeOut(i, lines){
    if(i>0){
        duration += lines[i-1].getAttribute("value").split("").length*200;
        setTimeout(function(){x = 0; ghostWrite(lines[i].getAttribute("value").split(""), lines[i])}, duration);
    }else{
        setTimeout(function(){x = 0; ghostWrite(lines[i].getAttribute("value").split(""), lines[i])},0);
    }
}

function ghostWrite(line, element){

    if( x < line.length){
        var char = line[x];
        add(char, element);
        x += 1;
        timeout = setTimeout(function(){ghostWrite(line,element)}, 100);
    }else{
        $(element).html($(element).text().replace(" ","&nbsp;"));
        $(element).html($(element).text().replace("|",""));
        clearInterval(timeout);
    }

}

function add(char, element){

    // interval =  setTimeout(function(){ add(char,element)}, 300);
    $(element).html($(element).text().replace(" ","&nbsp;"));
    $(element).html($(element).text().replace("|",""));
    $(element).append(char+"<blink>|</blink>");
    // alert($(element).text());

}

function blink(){
    setInterval(function() {
        $('blink').animate({
            opacity: 1
        }, 400).animate({
            opacity: 0
        }, 400)
    }, 1200);
}