if(uid != undefined) {
    document.location.href="#index";
}

function onLoginBtn() {
    username = document.getElementById("username-input").value;
    password = document.getElementById("password-input").value;
    login(username,password);
}

function login(username,password) {
    $.get(api_login,{
        "phone":username,
        "password":password
    },function(data) {
        if(data["code"] == 250) {
            alert("服务器被网易云盯上了，正在保持静默，请等待片刻在试")
        }
        $.cookie("uid",data["account"]["id"],{ expires: 7, path: '/' });
        $.cookie("face",data["profile"]["avatarUrl"],{ expires: 7, path: '/' });
        $.cookie("name",data["profile"]["nickname"],{ expires: 7, path: '/' });
    })
}

function onFalseLoginBtn() {
    uid = document.getElementById("uid-input").value;
    $.cookie("uid",uid,{ expires: 7, path: '/' });
    // 跨越山河也要找到你
    // 我的信息你到底在哪里
    // 歌单API有！创！建！者！信!息！
    $.get(api_userplaylist,{
        "uid":uid
    },function(data) {
        $.cookie("face",data["playlist"][0]["creator"]["avatarUrl"],{ expires: 7, path: '/' });
        $.cookie("name",data["playlist"][0]["creator"]["nickname"],{ expires: 7, path: '/' });
        document.location.reload();
    });
}