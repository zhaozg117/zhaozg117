//公用js文件
//created by 郑木尚
//created date 2015-08-20

//返回整数:四舍五入
function ConvertToRoundInt(value) {
    var result = Math.round(value);
    return result;
}

//返回整数或者带2位小数点的数组
function ConvertToNum(value) {
    var result = value;
    if (value != parseInt(value)) {
        result = value.toFixed(2);
    } 
    return result;
}



//以逗号分割，获取数组
function ConvertToSplit(value) {
    var result = value.split(',');
}

//转化时间格式：dt是传入时间；ydm空则返回年月日。
function FormatDate(dt, ydm) {
    var result;
    if (dt instanceof Date) {
        if (ydm != null) {
            result = dt.getFullYear() + '-' + (dt.getMonth() + 1) + '-' + dt.getDate() + ' ' + dt.getHours() + ':' + (dt.getMinutes() < 10 ? "0" + dt.getMinutes() : dt.getMinutes()) + ':' + dt.getSeconds();
        } else {
            result = dt.getFullYear() + '-' + (dt.getMonth() + 1) + '-' + dt.getDate();
        }
        return result;
    }

    var date = new Date((parseInt(dt) || 0) * 1000);
    if (typeof (dt) === 'string') {
        if (dt.indexOf('Date') >= 0) {
            date = new Date(parseInt(dt.replace('/Date(', '').replace(')/', ''), 10));
        } else if (dt.indexOf('T') > 0) {
            //date = new Date(dt.replace('T', ' ').replace('Z', '').replace(/-/g, '/'));
            date = new Date(dt);
        } else if (dt.match(/^\d+$/)) {
            date = new Date(parseInt(dt, 10) * 1000);
        } else {
            date = new Date(dt.replace(/-/g, '/'));
        }
    }

    if (ydm != null) {
        result = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() + ' ' + date.getHours() + ':' + (date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()) + ':' + date.getSeconds();
    } else {
        result = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
    }
    return result;
}

//字符串截断展示
function GetSubStr(str, length) {
    var result = '';
    if (typeof str !== 'undefined' && str !== null && str.length > 0) {
        if (str.length > length) {
            result = str.substr(0, length) + '.';
        } else {
            result = str;
        }
    }
    return result;
}

//获取URL参数方法
function GetQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return "";
}

//删除数组指定下标或指定对象
Array.prototype.removeArray = function (obj) {
    for (var i = 0; i < this.length; i++) {
        var temp = this[i];
        if (typeof obj === "number" && !isNaN(obj)) {
            temp = i;
        }
        if (temp === obj) {
            for (var j = i; j < this.length; j++) {
                this[j] = this[j + 1];
            }
            this.length = this.length - 1;
        }
    }
}
/*
//删除数组指定对象 
Array.prototype.removeObj = function (val) {
    var index = this.indexOf(val);
    if (index > -1) {
        this.splice(index, 1);
    }
};*/ 
 
 
 
 

//解决IE8及以下版本不能识别indexOf
if (!Array.indexOf) {
    Array.prototype.indexOf = function (obj) {
        for (var i = 0; i < this.length; i++) {
            if (this[i] == obj) {
                return i;
            }
        }
        return -1;
    }
}

//ulr静态化跳转
function GotoHref(pageName, type) {
    if (typeof pageName !== "undefined" && pageName !== null && pageName.length > 0) {
        var href = pageName;
        $.each(param, function (i, item) {
            if (typeof item.key !== "undefined" && item.key !== null && item.key.length > 0 && typeof item.value !== "undefined" && item.value !== null && item.value.length > 0) {
                
                if (typeof type === "undefined" && item.key === "p") { 
                    href += '_' + item.key + '-' + 1; //其他的点击p=1
                } else {
                    href += '_' + item.key + '-' + item.value;
                }

            }
        });
        href += '.html';
        if (type && type === "noAttach") {
            // 不附加搜索条件
            window.location.href = href;
        } else {
            window.location.href = href + window.location.search;
        }
    }
}

//获取URL参数方法
function GetQueryStringName(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return decodeURIComponent(r[2]);
    return "";
}

//写入城市cookie和清除城市cookie
function changeCity(cityId) {
    $.ajax({
        async: false,
        type: "post",
        url: "/Areas/Client/Handler/TCHandler.ashx",
        data: { 'type': 'SetCityCookie', 'cityId': cityId },
        success: function (data) {
            if (typeof data !== "undefined" && data !== null && data === "setCookie") {
                //window.location.href = window.location.host + "/" + cityId;
            }
            else if (typeof data !== "undefined" && data !== null && data === "clearCookie") {
                //window.location.href = window.location.host;
            }
        }
    });
}
