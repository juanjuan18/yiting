import React, { Component, lazy,Suspense} from 'react';
import { Carousel, WingBlank } from 'antd-mobile';
import {BrowserRouter as Router,Route,Switch,NavLink} from "react-router-dom"
import './Integral.css';
import creatHistory from 'history/createBrowserHistory';
const history=creatHistory()

export default class Integral extends Component {
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
            <div id="Record">
                
                <header>
                    <div className="headContent clearfix">
                        <a href="#" onClick={this.handback}><i className="iconfont icon-arrow-left"></i>返回</a>
                        <span>我的积分</span>
                        <a href="zaixianzixun.html"><i className="iconfont icon-wenhao"></i></a>
                    </div>
                </header>
                <div className="Integral">
                    <div className="big_content">
                        <div className="top_content">
                            <span className="first_title">可用积分：</span><span className="second">{JSON.parse(localStorage.getItem('balance')).integral.usable}</span><br/>
                            <span className="first_title">累计积分：</span><span className="second">{JSON.parse(localStorage.getItem('balance')).integral.usable}</span>
                            <a href="jifenshangcheng.html">每日签到</a>
                            <span className="xiaoxi">打败了43.96%的人</span>
                        </div>
                        <div className="jifen">
                            <NavLink to="/index/Task">
                            积分任务<img src="" alt="" /><i className="iconfont icon-left-angle"></i>
                            </NavLink>
                        </div>
                        <div className="jifen">
                            <NavLink to="/index/Record">
                            积分记录<img src="" alt="" /><i className="iconfont icon-left-angle"></i>
                            </NavLink>
                        </div>
                        <div className="jifen">
                            <NavLink to="/index/mall">
                            积分商城<img src="" alt="" /><i className="iconfont icon-left-angle"></i>
                            </NavLink>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}
