/**
 * Created by lanou3g on 17/6/10.
 */
$(function () {
    var arr = document.cookie.split("=");
    $(".lo_username").val(arr[0]);
    $(".lo_password").val(arr[1]);
    $(".lo_btn1").on("click",function () {
        $username = $(".lo_username").val();
        $password = $(".lo_password").val();
        if($username==""&&$password==""){
            $(".lo_output").text("您输入的内容不能为空");
            return;
        };
        $.ajax({
            type:"POST",
            url:"http://datainfo.duapp.com/shopdata/userinfo.php",
            data:{status:"login",userID:$username,password:$password},
            dataType:"json",
            success:function (data) {
                if(data==2){
                    $(".lo_output").text("用户名密码不符!");
                }else if(data==0){
                    $(".lo_output").text("用户名不存在");
                }else{
                    window.location.href ="index.html";
                }
            }
        })
    })
});
$(".check2").on("click",function(){
    $username = $(".lo_username").val();
    $password = $(".lo_password").val();
    setCookie($username,$password,1);
});
function setCookie(key,value,time){
    var date = new Date();
    date.setDate(date.getDate()+time);
    document.cookie = key+"="+value+";expries="+date;
}
$(".check1").on("click",function () {
    if($(".check2").is(":checked")){
        $(".lo_password").attr("type","text");
    }else{
        $(".lo_password").attr("type","password");
    }
});
$(".lo_btn2").on("click",function () {
    window.location.href ="register.html";
})