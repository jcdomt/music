var uid;
function loadUser() {
    uid = $.cookie('uid');
    console.log("当前UID"+uid);
    if(uid === undefined) {
        // 未登录
        document.getElementById("user-login").style.display = "";
    } else {
        text = "<img src=\""+$.cookie('face')+"\" class=\"layui-nav-img\" id=\"user-face\">"+$.cookie('name');
        document.getElementById("user-name").innerHTML=text;
        document.getElementById("user").style.display = "";
    }
}

function userexit() {
    $.removeCookie('uid', { path: '/' });
    $.removeCookie('face', { path: '/' });
    $.removeCookie('name', { path: '/' });
    document.location.reload();
}