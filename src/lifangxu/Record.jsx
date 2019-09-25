import React, { Component, lazy,Suspense} from 'react';
import { Carousel, WingBlank } from 'antd-mobile';
import {BrowserRouter as Router,Route,Switch,NavLink} from "react-router-dom"
import './Record.css';
import creatHistory from 'history/createBrowserHistory';
const history=creatHistory()

export default class Record extends Component {
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
            <div >
                <header>
                    <div className="headContent clearfix">
                        <a href="#" onClick={this.handback}><i className="iconfont icon-arrow-left"></i>返回</a>
                        <span>积分记录</span>
                    </div>
                </header>
                <div className="Record">
                    <div className="big_content">
                        <div className="top_content">
                            <div className="circle">
                                <span className="jifen01">{JSON.parse(localStorage.getItem('balance')).integral.usable}</span><br/>
                                <span className="jifen02">累计积分</span>
                            </div>
                            <span className="jifen03">积分明细</span>
                        </div>
                        <div className="middle_jilu">
                            暂无积分记录
                        </div>
                        <p>已加载所有积分记录</p>
                    </div>

                </div>
            </div>
        )
    }
}
