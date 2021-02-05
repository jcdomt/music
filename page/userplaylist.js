var searchTable = document.getElementById("search-table");
$.get(api_userplaylist,{
    "uid":uid
},function(data) {
    d = data["playlist"];
    for(i=0; i<d.length; i++) {
        idd = d[i]["id"];
        text = "<tr onclick=\"onTableBtn(this);\" id="+idd+"><td>"+idd+"</td><td>"+d[i]["name"]+"</td></tr>";
        searchTable.innerHTML += text;
    }
});

function onTableBtn(obj) {
    idd = obj.id;
    window.location.href = "#playlist@"+idd;
}