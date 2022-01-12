/**
 * Created by hongj on 2021/12/31.
 */
function bindCaptchaBtnClick() {
    $("#captcha-btn").on("click",function (event) {
        var $this = $(this);
        var email = $("input[name='email']").val();
        if(!email){
            alert("请先输入邮箱！");
            return;
        }
        //通过js发送网络请求：ajax,
        $.ajax({
            url: "/user/captcha",
            method: "POST",
            data: {
                "email": email
            },
            success: function (res) {
                var code = res['code'];
                if(code == 200){
                    //取消点击事件
                    $this.off("click");
                    //开始倒计时
                    var CountDown = 60;
                    setInterval(function () {
                        CountDown -= 1;
                        if(CountDown>0){
                            $this.text(CountDown+"秒后重新发送");
                        }else {
                            $this.text("获取验证码");
                            // 重新执行下这个函数，重新绑定点击事件
                            bindCaptchaBtnClick();
                            // 如果不需要倒计时了，那么就要记得清除
                            clearInterval(timer);
                        }

                    },1000);
                    alert("验证码发送成功！");

                }else{
                    alert(res['message']);
                }
            }
        })
    });
}

//等网页文档所有元素都加载完成后再执行
$(function () {
    bindCaptchaBtnClick();
});
