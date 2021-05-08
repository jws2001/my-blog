//创建实例
require('./index');


//创建模型
require('./type')
require('./loginUser')
require('./admin')
require('./article');
require('./daily_sentence');
require('./comment')
require('./commentChildren');

//同步表与表之间的关系
require('./relevance');



// 同步模型
require('./asyncModule')