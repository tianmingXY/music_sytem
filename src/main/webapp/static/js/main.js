layui.config({
    base: "js/"
}).use(['form', 'element', 'layer', 'jquery'], function () {
    var form = layui.form,
        layer = parent.layer === undefined ? layui.layer : parent.layer,
        element = layui.element,
        $ = layui.jquery;

    // 同步执行
    $.ajaxSettings.async = false;


    //系统基本参数
    if (window.sessionStorage.getItem("systemParameter")) {
        var systemParameter = JSON.parse(window.sessionStorage.getItem("systemParameter"));
        fillParameter(systemParameter);
    } else {
        $.ajax({
            url: ctx + "/json/systemParameter.json",
            type: "get",
            dataType: "json",
            success: function (data) {
                fillParameter(data);
            }
        })
    }

    //填充数据方法
    function fillParameter(data) {
        //判断字段数据是否存在
        function nullData(data) {
            if (data == '' || data == "undefined") {
                return "未定义";
            } else {
                return data;
            }
        }

        $(".version").text(nullData(data.version));      //当前版本
        $(".author").text(nullData(data.author));        //开发作者
        $(".homePage").text(nullData(data.homePage));    //网站首页
        $(".server").text(nullData(data.server));        //服务器环境
        $(".dataBase").text(nullData(data.dataBase));    //数据库版本
        $(".maxUpload").text(nullData(data.maxUpload));    //最大上传限制
    }

})


