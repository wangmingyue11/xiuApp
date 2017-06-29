/**
 * Created by lanou3g on 17/6/9.
 */
console.log(1)
$(function (){
    $(".submit").on("click",function () {
        $username=$(".re_username").val();
        $password = $(".re_passward").val();
        $apassword = $(".re_apassword").val();
        if($password!==$apassword){
            $(".output").text("两次输入的密码不一致，请重新输入");
            return;
        };
        if($(".check").is(":checked")){
            $.ajax({
                type:"POST",
                url:" http://datainfo.duapp.com/shopdata/userinfo.php",
                data:{status:"register",userID:$username,password:$password},
                success:function (data) {
                    if(data==0){
                        $(".output").text("用户名已经被注册");
                    }else{
                        window.location.href="index.html";
                    };
                    if($username==""&&$password==""&&$apassword==""){
                        $(".output").text("您输入的内容不能为空");
                    }
                }
            })
        }
    })
})