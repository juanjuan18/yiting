import React, { Component } from 'react';
import { Carousel, WingBlank } from 'antd-mobile';
import './Balance.css';
import creatHistory from 'history/createBrowserHistory';
const history=creatHistory()

export default class Wallet extends Component {
    constructor(props) {
        super(props);
        this.state={
            money:0,
            mo:parseInt(JSON.parse(localStorage.getItem('balance')).balance)
        }
        this.handback=this.handback.bind(this)
    }
    handleBalance() {
        if (localStorage.getItem('balance')) { //判断有没有登录
            return
        }
        let data = null; //后台得到数据保存在这个变量，
        //这里发请求


        localStorage.setItem('balance', JSON.stringify(data));//存在浏览器缓存区
    }
    handback(){
        history.goBack();
    }
    moneyChange(event){
        var type = event.target.dataset.type;
        this.setState=({
            money:parseInt(type)
        })
        console.log(type)
        console.log(this.state.money)

    }
    chongChange(){
        this.setState=({
            mo:this.state.mo + parseInt(this.state.money)
        })
    }
    render() {
        this.handleBalance();  //注意：这里到时候要用Promise解决一下异步，要等数据返回来才渲染，否则会报错
        return (
            <div id="Balance">
            <header>
                <div className="headContent clearfix">
                    <a href="#" onClick={this.handback}><i className="iconfont icon-arrow-left"></i>返回</a>
                    <span>我的余额</span>
                </div>
            </header>
            <div className="Wallet">
                <div className="details">
                    <h4>余额（元）</h4>
                    <h4><a href="yuemingxi.html">余额明细</a></h4>
                    <h1>{this.state.mo}.00</h1>
                    <h6>余额可用于支付车费</h6>
                </div>
                <div className="money">
                    <p>充值金额</p>
                    <button onClick={(event)=>{this.moneyChange(event)}} data-type="50">50元</button>
                    <button onClick={(event)=>{this.moneyChange(event)}} data-type="100">100元</button>
                    <button onClick={(event)=>{this.moneyChange(event)}} data-type="200">200元</button>
                    <button onClick={(event)=>{this.moneyChange(event)}} data-type="500">500元</button>
                    <button onClick={(event)=>{this.moneyChange(event)}} data-type="1000">1000元</button>
                    <input type="text" placeholder="输入其他金额"/>
                </div>
                <div className="payment">
                    <p>选择支付方式</p>
                    <div>
                        <div className="xuanzhe clearfix">
                            <i className="iconfont icon-INCOME-PAY_WECHAT"></i>
                            <div className="jieshi">
                                <span>微信支付</span>
                                <p>安全可靠，后顾无忧！</p>
                            </div>
                            <input id="zhifu" name="weixin" type="radio" />
                        </div>
                        <div className="xuanzhe clearfix">
                            <i className="iconfont icon-alipay"></i>
                            <div className="jieshi">
                                <span>支付宝</span>
                                <p>支付宝，知托付！</p>
                            </div>
                            <input id="zhifu" name="zhifubao" type="radio"/>
                        </div>
                        <div className="xuanzhe clearfix">
                            <i className="iconfont icon-weibiaoti-"></i>
                            <div className="jieshi">
                                <span>银联支付</span>
                                <p>银联随心，世界随心！</p>
                            </div>
                            <input id="zhifu" name="yinglian" type="radio"/>
                        </div>
                    </div>
                </div>
                <p className="contentInvest">
                    <a href="#" onClick={(event)=>{this.chongChange(event)}} >立即充值</a>
                </p>
            </div>
            </div>
        )
    }
}
