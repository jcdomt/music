var searchInput = document.getElementById("search-input");
var searchTable = document.getElementById("search-table");

function onSearchBtn() {
    s = searchInput.value;
    console.log("搜索："+s);
    searchTable.innerHTML = "";
    search(s);
}

function search(str) {
    $.get(api_search,{
        "keywords":str
    },function(data) {
        d = data["result"]["songs"];
        for(i=0;i<d.length;i++) {
            text = "<tr onclick=\"onTableBtn(this);\" id="+d[i]["id"]+"><td>"+d[i]["id"]+"</td><td>"+d[i]["name"]+"</td><td>"+d[i]["artists"][0]["name"]+"</td><td>"+d[i]["album"]["name"]+"</td></tr>";
            searchTable.innerHTML += text;
        }
    });
}

function onTableBtn(obj) {
    id = obj.id;
    console.log("请求ID"+id);
    loadSong(id);
}