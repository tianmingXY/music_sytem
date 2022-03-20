layui.use(['form', 'layer'], function () {
    var form = layui.form,
        layer = parent.layer === undefined ? layui.layer : parent.layer,
        $ = layui.jquery;

    /* layer.alert('测试账号：admin 密码：123456', {
           skin: 'layui-layer-molv' //样式类名
           ,closeBtn: 0,
           offset: 't',
           anim: 6
         })*/

    //登录按钮事件
    form.on("submit(login)", function (data) {
        $.ajax({
            type: "POST",
            url: ctx + "/manage/loginSubmit",
            data: $("#loginForm").serialize(),
            success: function (result) {
                if (result.code == 0) {//登录成功
                    layer.msg("登录成功", {icon: 1});
                    parent.location.href = ctx + '/manageIndex';
                } else {
                    layer.msg(result.msg, {icon: 5});
                    refreshCode();
                }
            }
        });
        return false;
    })
});

function refreshCode() {
    var captcha = document.getElementById("captcha");
    captcha.src = ctx + "/manage/codeCreate?t=" + new Date().getTime();
}
