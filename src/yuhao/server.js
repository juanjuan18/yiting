var express = require('express');
var bodyParser = require('body-parser');//中间件,
var formidabel = require('formidable');
var mongoose=require('mongoose')
var fs = require('fs');

var app = express();
var UserSchema = new mongoose.Schema({ //定义数据模型
    name: String,
    pwd: String
 
});
var User = mongoose.model('car', UserSchema,'car');
app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1');
    if (req.method == "OPTIONS") res.send(200);/*让options请求快速返回*/
    else next();
});

// 使用中间件
app.use(bodyParser.json()); //处理提交json格式数据
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('./static')) //指定当前项目的静态路径


// 连接mongodb数据库
mongoose.connect('mongodb://127.0.0.1:27017/car',{useNewUrlParser:true})
// 监听数据库连接
var db = mongoose.connection;
db.on('open',() => {
    console.log('数据库连接成功');
})




app.post('/home/position', (req, res) => { //搜索目的地
    res.send(
        {
            '宏鑫南野': '麋山大道219号',
            '西华大学': '解放路100号',
            '北京大学': '朝阳街9号',
            '清华大学': '华阳大道882号'
        }
    )
});

app.post('/home/park', (req, res) => { // 车位类型
    res.send({
        pubSky: ['003', '102', '112', '122'],
        pubIndoor: ['004', '122', '133', '152'],
        priSky: ['007', '008', '012', '092'],
        priIndoor: ['009', '102', '103', '124']
    })
});

app.post('/home/order', (req, res) => { //订单中心
    res.send(
        [
            { type: '预约中', time: '2019年6月14号 早上7：40', pos: '成都国际赛车场' },
            { type: '待支付', time: '2019年6月16号 晚上上8：20', pos: '可可西里小马哥客栈' },
            { type: '预约中', time: '2019年6月17号 晚上7：40', pos: '武侯区神仙树公交站' },
            { type: '已完成', time: '2019年7月2号 早上7：40', pos: '西华大学停车场' },
            { type: '已完成', time: '2019年6月15号 早上8：46', pos: '软件园G8停车场' },
        ]
    )
});

app.post('/home/integral', (req, res) => { //积分商城
    console.log(req.body)
    res.send([
        {
            id: 1,
            integral: 11,
            name: '黑白经典T恤（四款可选）',
            des: '品质保证 时尚简约 款式多样',
            integralE: 3000,
            postage: 4,
            pic: '/images/yifu.jpg'
        }, {
            id: 2,
            integral: 13,
            name: 'NEEDYOU 夏季韩版圆领短袖',
            des: '百搭基础款纯色套头T恤潮流上衣外搭女',
            integralE: 2000,
            postage: 6,
            pic: '/images/O1CN010l9SJ_400x400.jpg'
        }, {
            id: 3,
            integral: 12,
            name: '流烟昔泠-临安',
            des: '春夏传统汉服女装银杏飞鹤刺绣齐胸襦裙非古装',
            integralE: 1400,
            postage: 2,
            pic: '/images/O1CN0142TaPr22_400x400.jpg'
        }, {
            id: 4,
            integral: 16,
            name: '中国风改良旗袍',
            des: '唐装女汉服茶艺服装中式女装禅服茶服雪纺连衣裙夏',
            integralE: 1100,
            postage: 4,
            pic: '/images/O1CN01MHtk7O1e_400x400.jpg'
        }, {
            id: 5,
            integral: 17,
            name: 'Fun潮牌卫衣',
            des: '男秋季新款加菲猫圆领套头黑色加绒长袖宽松情侣上衣',
            integralE: 5600,
            postage: 9,
            pic: '/images/O1CN014JIUX62E430x430q90.jpg'
        },
    ])
});

app.post('/wallet', (req, res) => {//钱包
    res.send({
        balance: 202,
        integral: { usable: 120, total: 200 },
        coupon: 0
    })
});



app.post('/ezStop',(req,res)=>{
    console.log(11111)
    res.send(
        [
        {
            place:'西华大学停车场',
            start:'2019年06月15日 09:54',
            end:'2019年06月15日 010:33',
            money:5+"元",
            status:'已完成'
        },
        {
            place:'王府井百货停车场',
            start:'2019年04月29日 09:54',
            end:'2019年04月29日 13:33',
            money:30+"元",
            status:'已完成'
        },
        {
            place:'双流国际机场T2航站楼停车场',
            start:'2019年04月3日 07:34',
            end:'2019年04月5日 23:34',
            money:80+"元",
            status:'已完成'
        }

    ]
    );
});



app.post('/login', (req, res) => {//登录
    console.log(req.body.pwd)
    var name =  req.body.username;
    var pwd =   req.body.pwd;
    User.findOne({name:name,pwd:pwd},function (err,result) {
        if (result)
        {
            res.send({
                        code: 1,
                        msg: '登录成功',
                        name: req.body.username
                    });
        }else
        {
            res.send({
                        code: -1,
                        msg: '账号或密码有误'
                    })
        }
    })
});
app.post('/regist', (req, res) => {
    // var _user = req.body;
    var name=req.body.username
    var pwd=req.body.pwd
    User.findOne({name:name}, function (err, user) {
      if(err){
        res.send({
            code:0,
            msg:'未知错误！'
        })
    
      }
      if(user) {
          res.send({
              code:-1,
              msg:'用户名已存在！'
          })
      }
      else{
          var usernow=new User({name:name,pwd:pwd})
          usernow.save(function(err,user){
              if(err){
                  res.send({
                      code:2,
                      msg:'注册失败'
                  })
              }
              else{
                  res.send({
                      code:1,
                      msg:'注册成功！'
                  })
              }
          })       
      }
    });
});

app.listen(8880, () => {
    console.log('listening for 8880...');
});
