//模型的关联
const Article = require('./article');
const Type = require('./type');

//type可以对应多个article
Type.hasMany(Article);
Article.belongsTo(Type);