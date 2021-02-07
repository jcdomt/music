var playerList = document.getElementById("playerlist");
var playTable  = document.getElementById("player-table");

var sum = 0;
var now = 0;
var list = new Array();
for(i=0;i<=100;i++) {
    list[i] = new Array();
}

function addPlayer(id) {
    sum++;
    if(sum == 1) {
        // 第一首歌，播放
        play(id);
        now = 1;
    }
    addToTable(id);
    addToList(id);
}

function addPlayerWithName(id,name) {
    sum++;
    if(sum == 1) {
        // 第一首歌，播放
        play(id);
        now = 1;
    }
    addToTableWithName(id,name);
    addToList(id);
}

function addToTable(id) {
    $.get(api_single,{
        "id":id
    },function(data) {
        d=$.parseJSON(data);
        ct = getCT(id);
        text = "<tr id=\"player"+sum+"\"><td>"+d["name"]+"</td><td>"+ct+"</td></tr>";
        playTable.innerHTML += text;
        $("#playerlist").addClass("layui-show");
    });
}

function addToTableWithName(id,name) {
        ct = getCT(id);
        text = "<tr id=\"player"+sum+"\"><td>"+name+"</td><td>"+ct+"</td></tr>";
        playTable.innerHTML += text;
        $("#playerlist").addClass("layui-show");
}

function addToList(id) {
    list[sum][0] = id;
}

function addPlayList(idd) {
    $.get(api_playlist,{
        "id":idd
    },function(data) {
        for(i=0;i<data.length;i++) {
            var str = data[i]["url"];
            var num2 = str.indexOf("id=");
            str = str.substr(num2 + 3);
            id = str;
            addPlayerWithName(id,data[i]["name]"]);
            //await sleep(1);
        }
    })
}