import api from '/admin/js/api-config.js';
import autoLogin from '/admin/util/autoLogin.js';
autoLogin($);

//获取全部标签信息
let getTypeAll = [];
//获取全部数据
getAllRender()

function getAllRender() {
    $.ajax({
        url: api.getTypeAll.path,
        success: function(res) {
            getTypeAll = res.data;
            render(getTypeAll)
        }
    })
}


//新增弹窗
$('.header .add').click(function() {
    layer.open({
        type: 1,
        title: '新增',
        area: ['400px', '360px'],
        btn: ['确定', '取消'],
        anim: 2,
        resize: false,
        content: $('#add-content'),
        yes: function(index, layero) {
            const tagName = layero.find('.name').val();
            const iconName = layero.find('.icon').val();
            if (!tagName) {
                alert('输入标签名');
                return
            } else if (!iconName) {
                alert('输入icon');
                return;
            }
            //发送请求
            $.ajax({
                url: api.addType.path,
                type: api.addType.method,
                data: {
                    name: tagName,
                    icon: iconName
                },
                success: function(res) {
                    if (res.code) {
                        layer.close(index);
                        layero.find('.name').val('');
                        layero.find('.icon').val('');
                        getAllRender();
                        return
                    }
                    layer.msg(res.msg);
                }
            })
        }
    })
})


//点击删除事件
$('#wrapper .tag-container').click(function(event) {
    const target = event.target;
    const removeId = $(target).attr('remove-id');
    if (!removeId) {
        const id = $(target).attr('data-id');
        layer.open({
            type: 1,
            title: '编辑',
            area: ['400px', '360px'],
            btn: ['确定', '取消'],
            anim: 2,
            resize: false,
            content: $('#upde-content'),
            success: function(layero, index) {
                const data = getTypeAll.filter(ele => {
                    return ele.id == id
                })[0]
                layero.find('.name').val(data.title);
                layero.find('.icon').val(data.iconText);
            },
            yes: function(index, layero) {
                $.ajax({
                    url: api.putType.path,
                    type: api.putType.method,
                    data: {
                        id,
                        name: layero.find('.name').val(),
                        icon: layero.find('.icon').val()
                    },
                    success: function(res) {
                        if (res.code) {
                            layer.msg(res.msg)
                            layer.close(index);
                            getAllRender()

                        } else {
                            layer.msg(res.msg)
                        }
                    }
                })
            }
        })
        return;
    }
    layer.confirm('真的删除行么', function(index) {
        $.ajax({
            url: api.removeType.path,
            type: api.removeType.method,
            data: {
                id: removeId
            },
            success(res) {
                layer.close(index);
                if (res.code) {
                    getAllRender()
                }
            }
        })
    });

})



/**
 * 辅助函数
 */
function render(data) {
    if (!data.length) {
        $('#wrapper .tag-container').html('')
        return;
    }
    let strHtml = ``;
    data.forEach(ele => {
        strHtml += `
    <div class="item-container" data-id=${ele.id}>
        ${ele.title}
        <svg remove-id=${ele.id} xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
            <path
            remove-id=${ele.id}
                d="M4.646 4.646a.5.5 0 01.708 0L8 7.293l2.646-2.647a.5.5 0 01.708.708L8.707 8l2.647 2.646a.5.5 0 01-.708.708L8 8.707l-2.646 2.647a.5.5 0 01-.708-.708L7.293 8 4.646 5.354a.5.5 0 010-.708z">
            </path>
        </svg>
    </div>
        `
    })
    $('#wrapper .tag-container').html(strHtml)
}