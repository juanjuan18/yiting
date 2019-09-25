import React, { Component } from 'react';
import "./iconfont.css"
import "./GoTo.css"
import createHistory from 'history/createBrowserHistory'
const history =createHistory()
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
            <div className="">
                <header>
                    <div className="headcontent container">
                        <a href="#" onClick={this.handleBack} className="iconfont icon-arrow-left"></a>
                        <a href="#" onClick={this.handleBack} className="headcontent_search">
                            <i className="iconfont icon-search"></i>
                            <input type="text" placeholder="宏信南越" onClick={this.handleBack} />
                            <i className="iconfont icon-icon_-"></i>
                        </a>
                        <a href="#" onClick={this.handleBack}><img src={require("../images/XX.png")} alt="" /></a>
                    </div>
                </header>
                <div id="allmap"></div>
                <img src={require("../images/location2.png")} alt="" className="location_icon" />
                <div className="daohang_head">
                    <img src={require("../images/leftarrow.png")} alt="" />
                    <p><span>255米</span><span className="enter">进入</span><br /><span>天府五街</span> </p>
                </div>
                <div className="daohang_bottom">
                    <div className="danghang_content">
                        <a href="#" onClick={this.handleBack}>退出</a>
                        <div className="danghang_middle">
                            <p>剩余8公里 20分钟 道路良好</p>
                            <p>预计30分钟后到达</p>
                        </div>
                        <a href="#" onClick={this.handleBack}>设置</a>
                    </div>
                </div>

            </div>
        )
    }
}