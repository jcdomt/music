var searchTable = document.getElementById("search-table");
var id = GetParam();
if(id == "") {
    alert("获取ID失败！");
} else {
    loadList(id);
}

function loadList(id) {
    $.get(api_playlist,{
        "id":id
    },function(data) {
        for(i=0;i<data.length;i++) {
            var str = data[i]["url"];
            var num2 = str.indexOf("id=");
            str = str.substr(num2 + 3);
            idd = str;
            ct = getCT(id);
            text = "<tr onclick=\"onTableBtn(this);\" id="+idd+"><td>"+idd+"</td><td>"+data[i]["name"]+"</td><td>"+data[i]["artist"]+"</td><td>"+ct+"</td></tr>";
            searchTable.innerHTML += text;
        }
    })
}

function onTableBtn(obj) {
    id = obj.id;
    console.log("请求ID"+id);
    loadSong(id);
}