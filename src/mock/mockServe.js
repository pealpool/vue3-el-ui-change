let electricalDate =  require('./electricalDate');

const url = {
    electricalDateUrl: '/api/electricalDate',
}

let express = require('express');   //引入express
let Mock = require('mockjs');       //引入mock

let app = express();        //实例化express

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});
/*app.use(url.electricalDateUrl,function(req, res){
    res.json(Mock.mock({
        'code': 200,
        'data|1-9':[{
            'key|+1': 1,
            'mockTitle|1':['肆无忌惮'],
            'mockContent|1': ['角色精湛主题略荒诞', '理由太短 是让人不安', '疑信参半 却无比期盼', '你的惯犯 圆满', '别让纠缠 显得 孤单'],
            'mockAction|1': ['下载', '试听', '喜欢']
        }]
    }))
})*/
app.use(url.electricalDateUrl,function(req, res){
    res.json(Mock.mock(electricalDate))
})

app.listen('8090', () => {
    console.log('监听端口 8090')
})
