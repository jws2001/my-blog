import api from '/js/api-config.js';
import autoLogin from '/util/autoLogin.js';
autoLogin($);
const inp = document.getElementById('inp');
$('#save').on('click', function() {
    if (!inp.files.length) {
        alert('请选择文件');
        return;
    }
    const imgData = new FormData();
    imgData.append('img', inp.files[0])
    $.ajax({
        url: api.uploadImg.path,
        type: api.uploadImg.method,
        cache: false,
        contentType: false,
        processData: false,
        data: imgData,
        success: function(res) {
            alert(JSON.stringify(res));
            inp.value = ''
        }
    })
})