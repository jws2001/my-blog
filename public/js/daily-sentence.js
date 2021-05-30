import api from '/js/api-config.js';
import autoLogin from '/util/autoLogin.js';
autoLogin($);
$('.save button').on('click', function() {
    const en = $('.item textarea[name=en]').val();
    const zh_CN = $('.item textarea[name=zh-CN]').val();
    if (!en || !zh_CN) {
        alert('数据填写完整在提交');
        return;
    }

    $.ajax({
        url: api.addDaily.path,
        type: api.addDaily.method,
        data: {
            en,
            zh_CN
        },
        success: function(res) {
            alert(res.msg);
            $('.item textarea[name=en]').val('');
            $('.item textarea[name=zh-CN]').val('');
        }
    })
})

$('.youdao button').on('click', function() {
    $.ajax({
        url: api.getYOUDAO.path,
        type: api.getYOUDAO.method,
        success: function(res) {
            const result = JSON.stringify(res.data);
            alert(result);
        }
    })
})