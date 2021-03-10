import api from '/admin/js/api-config.js';
$.ajax({
    url: api.whoAmI.path,
    path: api.whoAmI.method,
    success: function(res) {
        if (!res.code || !window.localStorage.getItem('login')) {
            //没有登录跳转登录页
            window.location = '/admin/html/login.html'
        } else {
            //获取到个人信息
            $('.titltName .user-name').html(res.data.userName)
        }
    }
})

//点击退出删除cookie
$('.titltName .login-out').click(function() {
    //删除cookie
    window.localStorage.removeItem('login');
    window.location = '/admin/html/login.html';
})