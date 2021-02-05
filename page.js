var mainDiv = document.getElementById("main");

function loadPage() {
    url = GetRequest();
    console.log("请求的页面"+url);
    load(url);
}

function load(page) {
    $("#main").load("./page/"+page+".html");
    $.getScript("./page/"+page+".js");
}

function GetRequest() {
    var str = location.href;
    var num1 = str.indexOf("#");
    var num2 = str.indexOf("@");
    if(num1 == -1) {
        return "index";
    }
    if(num2 == -1) {
        num2 = str.length;
    }
    str = str.substr(num1 + 1,num2 - num1 - 1);
    return str;
}
function GetParam() {
    var str = location.href;
    var num2 = str.indexOf("@");
    if(num2 == -1) {
        return "";
    }
    str = str.substr(num2 + 1);
    return str;
}
var d,l;
function loadSong(id) {
    $.get(api_single,{
        "id":id
    },function(data) {
        d=$.parseJSON(data);
        $.get(api_lrc,{
            "id":id
        },function(data) {
            l=data;
            songRun();
        });
    });
}

function songRun() {
    const ap = new APlayer({
        container: document.getElementById('aplayer'),
        //fixed: true,
        lrcType: 1,
        autoplay: true,
        audio: [{
            name: d["name"],
            artist: d['artist'],
            url: d['url'],
            cover: d['cover'],
            lrc: l
        }]
    });
}