import api from '/admin/js/api-config.js';
import autoLogin from '/admin/util/autoLogin.js';
autoLogin($);


//获取所有的类型
$.ajax({
    url: api.getTypeAll.path,
    success: function(res) {
        renderSelect(res.data)
    }
})




$('button.save').on('click', function() {

    const input = document.querySelector('#edit input');
    const file = input.files[0]; //获取选择的文件
    const typeId = $('#type').val();
    const title = $('#textTitle').val();
    const describe = $('.desctibe-content').val();
    if (!typeId) {
        alert('选择类型');
        return;
    }
    if (!title) {
        alert('请输入标题');
        return
    }
    if (!describe) {
        alert('请输入描述');
        return;
    }
    if (!file) {
        alert('选择文件');
        return;
    }


    const dataInfo = new FormData();
    dataInfo.append('content', file);
    dataInfo.append('typeId', typeId);
    dataInfo.append('title', title);
    dataInfo.append('describe', describe);
    const index = layer.msg('上传中', {
        icon: 16,
        shade: 0.01
    });

    $.ajax({
        url: api.addArticle.path,
        type: api.addArticle.method,
        cache: false,
        contentType: false,
        processData: false,
        data: dataInfo,
        success: function(res) {
            layer.close(index);
            if (res.code) {
                //上传成功
                layer.msg(res.msg, {
                    icon: 1
                });
                input.value = '';
                $('#type').val('');
                $('#textTitle').val('');
                $('.desctibe-content').val('');

            } else {
                layer.msg('上传失败', {
                    icon: 2
                })
            }
        }
    })

})







//渲染所有的类型值
function renderSelect(data) {
    let strHtml = `<option value="">请选择</option>`;
    data.forEach(item => {
        strHtml += `
            <option value="${item.id}">${item.title}</option>
        `
    })
    $('#type').html(strHtml);
}