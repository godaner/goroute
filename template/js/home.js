$(function(){
    getOnlineUser();
})
function getOnlineUser() {
    $.ajax({
        url:"http://127.0.0.1:9090/onlineUser",
        method:"get",
        async:true,
        success:function (data) {
            console.info(data);
            var json = JSON.parse(data);
            alert(json.msg);
            if(json.code==1){
                $("#uinfo").html(json.data.user.username);
            }else{
                // location.href="http://127.0.0.1:9090/html/login.html"
            }
        }
    });
}
function logout() {
    $.ajax({
        url:"http://127.0.0.1:9090/logout",
        method:"post",
        async:true,
        success:function (data) {
            console.info(data);
            var json = JSON.parse(data);
            alert(json.msg);
            if(json.code==1){
                location.href="http://127.0.0.1:9090/html/login.html"
            }
        }
    });
}