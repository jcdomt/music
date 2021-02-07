api_search = "http://musicapi.leanapp.cn/search";
api_single = "https://api.injahow.cn/meting/?type=single";
api_url = "https://api.injahow.cn/meting/?type=url&id=";
api_lrc = "https://api.injahow.cn/meting/?type=lrc";
api_playlist = "https://api.injahow.cn/meting/?type=playlist"
api_login = "http://musicapi.leanapp.cn/login/cellphone";
api_userplaylist = "http://musicapi.leanapp.cn/user/playlist";

function getCT(id) {
    return "<i onclick=\"play("+id+")\"class=\"layui-icon layui-icon-play point-on\" style=\"font-size: 30px; color: #1E9FFF;\"></i>\
            <i onclick=\"download("+id+")\"class=\"layui-icon layui-icon-download-circle point-on\" style=\"font-size: 30px; color: #1E9FFF;\"></i>\
            <i onclick=\"addPlayer("+id+")\"class=\"layui-icon layui-icon-add-circle point-on\" style=\"font-size: 30px; color: #1E9FFF;\"></i>";
}