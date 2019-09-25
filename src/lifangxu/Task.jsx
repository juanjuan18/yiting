import React, { Component } from 'react';
import { Carousel, WingBlank } from 'antd-mobile';
import './Task.css';
import creatHistory from 'history/createBrowserHistory';
const history=creatHistory()

export default class Task extends Component {
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
            <div>
            <header>
                <div className="headContent clearfix">
                    <a href="#" onClick={this.handback}><i className="iconfont icon-arrow-left"></i>返回</a>
                    <span>积分任务</span>
                </div>
            </header>
            <div className="Task">
                <div className="big_content">
                    <div className="top_content">
                        <img src= {require("../images/hand.png")} alt="" />
                        <p>做任务赢积分快来参与吧~</p>
                    </div>
                    <h1>常规任务</h1>
                    <div className="renwu">
                        <a href="">
                            <span><img src={require("../images/qiandao.png")} alt="" /></span>
                            <h2>每日签到</h2>
                            <h3>+1~3积分/天</h3>
                            <button>做任务</button>
                        </a>
                    </div>
                    <div className="renwu bangding">
                        <a href="">
                            <span><img src={require("../images/bangding.png")} alt="" /></span>
                            <h2>绑定车牌号</h2>
                            <h3>+10积分</h3>
                            <button>做任务</button>
                        </a>
                    </div>
                    <div className="renwu">
                        <a href="">
                            <span><img src={require("../images/dianzan.png")} alt="" /></span>
                            <h2>为应用评分</h2>
                            <h3>+15积分/次</h3>
                            <button>做任务</button>
                        </a>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}
