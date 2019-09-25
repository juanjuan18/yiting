import React, { Component } from 'react';
import "./iconfont.css"
import "./Reserve.css"
import { BrowserRouter as Router, Route, Switch, NavLink } from "react-router-dom";
import Ditu from './Ditu'
// import createHistory from 'history/createBrowserHistory'
// var history=require("history").createBrowserHistory
const history =require("history").createBrowserHistory()
export default class Reserve extends Component {
    constructor() {
        super()
        this.handleBack.bind(this)
    }   
    handleBack(){
        history.goBack()
    }
    render() {
        return (
            <React.Fragment>
            <Ditu />
            <div className="">
                <div className="searchBox">
                    <a href="#" onClick={this.handleBack} className="iconfont icon-arrow-left"></a>
                    <a href="hanbaobao.html" className="iconfont icon-caidan1"></a>
                    <div className="destination iconfont icon-sousuo-copy ">
                        <NavLink to="search"><a href="#"><input type="text" placeholder="您要去哪儿？" /></a></NavLink>
                        <div className="iconfont icon-icon_voice_b"></div>
                    </div>
                </div>
                <div className="nav">
                    <a href="daohangdao.html">导航</a>
                </div>
                <div className="other">
                    <a href="">更多车场</a>
                </div>
                <div className="hide">
                    <ul>
                        <li><a>推荐车场</a></li>
                        <li><a>免费车场</a></li>
                        <li><a>全部车场</a></li>
                    </ul>
                </div>
                {/* <div className="iconfont icon-location"></div> */}
                <div className="iconfont icon-dingwei1"></div>
                {/* <div id="allmap"></div> */}
                <div className="nearby">
                    <a href="hanbaobao.html">点击展开附近更多停车场</a>
                </div>

            </div>
            </React.Fragment>
        )
    }
}