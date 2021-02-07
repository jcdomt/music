var searchTable = document.getElementById("search-table");
$.get(api_userplaylist,{
    "uid":uid
},function(data) {
    d = data["playlist"];
    for(i=0; i<d.length; i++) {
        idd = d[i]["id"];
        ct = "<i onclick=\"addPlayList("+idd+")\"class=\"layui-icon layui-icon-play point-on\" style=\"font-size: 30px; color: #1E9FFF;\"></i>";
        text = "<tr onclick=\"onTableBtn(this);\" id="+idd+"><td>"+idd+"</td><td>"+d[i]["name"]+"</td><td>"+ct+"</td></tr>";
        searchTable.innerHTML += text;
    }
});

function onTableBtn(obj) {
    idd = obj.id;
    window.location.href = "#playlist@"+idd;
}