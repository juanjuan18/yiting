import React, { Component } from 'react';
import { Carousel, WingBlank } from 'antd-mobile';
import './Coupon.css';
import creatHistory from 'history/createBrowserHistory';
const history=creatHistory()

export default class Coupon extends Component {
    constructor(props) {
        super(props);
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
    render() {
        this.handleBalance();  //注意：这里到时候要用Promise解决一下异步，要等数据返回来才渲染，否则会报错
        return (
            <div id="coupon">
                <header>
                    <div className="headContent clearfix">
                        <a href="#" onClick={this.handback}><i className="iconfont icon-arrow-left"></i>返回</a>
                        我的优惠券
                        <a href="#"><i className="iconfont icon-wenhao"></i></a>
                    </div>
                </header>
                <div className="Coupon">
                    <div className="content2">
                        <img src={require("../images/3.png")} alt="" />
                        <p>您还没有优惠券哦~</p>
                        <a href="">查看已使用和过期优惠券</a>
                    </div>
                    <div className="convert">
                        <a href="jifenshangcheng.html"><button>积分兑换</button></a>
                        <a href="jifenshangcheng.html"><button>优惠码兑换</button></a>
                    </div>
                </div>
            </div>
        )
    }
}
