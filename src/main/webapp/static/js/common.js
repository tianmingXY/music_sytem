/**文件上传自己封装工具类**/
//点击文件选择框
function uploadFileUtilClick(fileID) {
    $("#" + fileID + "").click();
}

//实现文件上传
function uploadFileUtil(fileID, inputID) {
    var formData = new FormData();
    formData.append('file', $('#' + fileID + '')[0].files[0]);  //添加图片信息的参数
    formData.append('fileType', "测试参数");  //添加其他参数
    $.ajax({
        url: ctx + '/uploadFile',
        type: 'POST',
        cache: false, //上传文件不需要缓存
        data: formData,
        processData: false, // 告诉jQuery不要去处理发送的数据
        contentType: false, // 告诉jQuery不要去设置Content-Type请求头
        success: function (data) {
            console.log(data);
            if (data.code == 0) {
                //alert("文件上传成功");
                $('#' + inputID + '').val(data.data.src);
            } else {
                alert("文件上传失败")
            }
        },
        error: function (data) {
            alert("上传失败");
        }
    })
}


//判断字符是否为空的方法
function isEmpty(obj) {
    if (typeof obj == "undefined" || obj == null || obj == "") {
        return true;
    } else {
        return false;
    }
}

//返回上一页
function backPage() {
    history.back(-1);
}

//格式化时间
function formatTime(datetime, fmt) {
    if (datetime == null || datetime == 0) {
        return "";
    }
    if (parseInt(datetime) == datetime) {
        if (datetime.length == 10) {
            datetime = parseInt(datetime) * 1000;
        } else if (datetime.length == 13) {
            datetime = parseInt(datetime);
        }
    }
    datetime = new Date(datetime);
    var o = {
        "M+": datetime.getMonth() + 1,                 //月份
        "d+": datetime.getDate(),                    //日
        "h+": datetime.getHours(),                   //小时
        "m+": datetime.getMinutes(),                 //分
        "s+": datetime.getSeconds(),                 //秒
        "q+": Math.floor((datetime.getMonth() + 3) / 3), //季度
        "S": datetime.getMilliseconds()             //毫秒
    };
    if (/(y+)/.test(fmt))
        fmt = fmt.replace(RegExp.$1, (datetime.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt))
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}
