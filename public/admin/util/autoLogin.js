import api from '/admin/js/api-config.js';
export default function($) {
    $(document).ajaxSuccess(function(event, request, settings) {
        const data = request.responseJSON;
        if (data.data.isLogin === false) {
            alert('请登录在访问')
            window.localStorage.removeItem('login');
            window.location = '/admin/html/login.html'
        }
    })
    $.ajax({
        url: api.whoAmI.path,
        path: api.whoAmI.method
    })
}