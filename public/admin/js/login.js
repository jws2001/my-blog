import api from '/admin/js/api-config.js';
document.querySelector('.handle .login').addEventListener('click', e => {
    const loginId = document.getElementById('login-id');
    const loginPwd = document.getElementById('login-pwd');
    const userValue = loginId.value;
    const userPwd = loginPwd.value;
    $.ajax({
        url: api.login.path,
        type: api.login.method,
        data: {
            loginId: userValue,
            loginPwd: userPwd
        },
        success: function(res) {
            if (res.code) {
                //设置登录成功的状态信息
                window.localStorage.setItem('login', true);
                window.location = '/admin';
            } else {
                alert(res.msg)
            }
        }
    })
})