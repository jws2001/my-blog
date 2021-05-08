import api from '/admin/js/api-config.js';
import autoLogin from '/admin/util/autoLogin.js';
autoLogin($);


//获取所有的文章
$.ajax({
    url: api.getArticleAll.path,
    type: api.getArticleAll.method,
    success: function(res) {
        if (!res.code) {
            return;
        }
        let strHtml = ``;
        res.data.forEach(item => {
            strHtml += `
            <div class="item" data-id="${item.id}">
            <div class="close" data-id="${item.id}"><svg t="1618033805318" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3367" width="25" height="25"><path d="M524.4 40.2c-246.9 0-447 200.1-447 447s200.1 447 447 447 447-200.1 447-447-200.1-447-447-447zM812.2 775c-37.4 37.4-80.9 66.7-129.4 87.2-50.2 21.2-103.4 32-158.4 32s-108.3-10.8-158.4-32c-48.5-20.5-92-49.8-129.4-87.2s-66.7-80.9-87.2-129.4c-21.2-50.2-32-103.4-32-158.4s10.8-108.3 32-158.4c20.5-48.5 49.8-92 87.2-129.4 37.4-37.4 81-66.7 129.4-87.2 50.2-21.2 103.4-32 158.4-32s108.3 10.8 158.4 32c48.5 20.5 92 49.8 129.4 87.2 37.4 37.4 66.7 80.9 87.2 129.4 21.2 50.2 32 103.4 32 158.4s-10.8 108.3-32 158.4c-20.4 48.5-49.8 92-87.2 129.4z" fill="#333333" p-id="3368"></path><path d="M651.7 331.6L524.4 458.9 397.2 331.6c-7.8-7.8-20.5-7.8-28.3 0-7.8 7.8-7.8 20.5 0 28.3l127.3 127.3-127.3 127.3c-7.8 7.8-7.8 20.5 0 28.3 7.8 7.8 20.5 7.8 28.3 0l127.3-127.3 127.3 127.3c7.8 7.8 20.5 7.8 28.3 0s7.8-20.5 0-28.3L552.7 487.2 680 359.9c7.8-7.8 7.8-20.5 0-28.3-7.8-7.8-20.5-7.8-28.3 0z" fill="#333333" p-id="3369"></path></svg></div>
                <div class="title">${item.title}</div>
                <div class="describe">${item.describe}</div>
            </div>
            `
            $('#wrapper').html(strHtml);
            $('#wrapper .item').on('click', function(event) {
                const target = $(event.target);
                const id = target.attr('data-id');
                if (target.hasClass('close')) {
                    //点击的是删除按钮
                    layer.confirm('<span style="color:red;">确定删除么</span>', function(iindex) {
                        //点击确定删除
                        $.ajax({
                            url: api.deleteArticle.path,
                            type: api.deleteArticle.method,
                            data: {
                                id
                            },
                            success: function(res) {
                                if (res.code) {
                                    //成功删除
                                    layer.msg('已删除', {
                                        icon: 1
                                    });
                                    //然后把元素自己给删除掉
                                    const parent = target.parent();
                                    parent.remove();
                                    return
                                } else {
                                    //删除失败
                                    layer.msg('删除失败', {
                                        icon: 2
                                    });
                                }
                            }
                        })
                    })
                } else {
                    //查看按钮
                    //获取文章详情信息
                    $.ajax({
                        url: api.getContent.path,
                        type: api.getContent.method,
                        data: {
                            id
                        },
                        success: function(res) {
                            $('#content #article-content').text(res.data.content)
                        }
                    })

                    layer.open({
                        type: 1,
                        title: '详细信息',
                        content: $('#content'),
                        area: ['80%', '90%'],
                        btn: ['确定', '取消'],
                        yes: function(index) {
                            //获取修改后的文章信息
                            const newContent = $('#article-content').text();
                            //提交到服务器
                            $.ajax({
                                url: api.editContent.path,
                                type: api.editContent.method,
                                data: {
                                    id,
                                    newContent
                                },
                                success: function(res) {
                                    if (res.code) {
                                        layer.msg('修改成功', {
                                            icon: 1
                                        });
                                    } else {
                                        layer.msg('修改失败', {
                                            icon: 2
                                        });
                                    }
                                    layer.close(index)
                                }
                            })
                        }
                    })
                }
            })
        })
    }
})