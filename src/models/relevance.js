//模型的关联
const Article = require('./article');
const Type = require('./type');


//评论关联 文章模型
const Comment = require('./comment');

//顶级评论 和 子评论的关联
const CommentChildren = require('./commentChildren');

//type可以对应多个article
Type.hasMany(Article);
Article.belongsTo(Type);


//文章可以有多个评论
Article.hasMany(Comment);
Comment.belongsTo(Article);


Comment.hasMany(CommentChildren);
CommentChildren.belongsTo(Comment);