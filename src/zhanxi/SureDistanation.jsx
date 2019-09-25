import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Switch,NavLink} from "react-router-dom"
// import createHistory from 'history/createBrowserHistory'
// import { suredistanation } from '../api/common'
import "./iconfont.css"
import "./SureDistanation.css"
const history =require("history").createBrowserHistory()
export default class SureDistanation extends Component {
    constructor() {
        super()
        this.state={
            distanation:''
        }
        this.handleBack.bind(this)
    }
    handleBack(){
        history.goBack()
    }
    componentDidMount(){
        // suredistanation("1").then((res)=>{
        //     console.log(res)
        //     // this.setState({
        //     //     distanation:res
        //     // })
        // })
            
            //取得查询字符串并去掉开头的问号
            var qs = (this.props.location.search.length > 0 ? this.props.location.search.substring(1) : ""),
            //保存数据的对象 
            args = {},
            //取得每一项
            items = qs.length ? qs.split("&") : [], 
            item = null,
            name = null,
            value = null,
            //在 for 循环中使用
            i = 0,
            len = items.length;
            //逐个将每一项添加到 args 对象中 
            for (i=0; i < len; i++){
                  item = items[i].split("=");
                  name = decodeURIComponent(item[0]);
                  value = decodeURIComponent(item[1]);
                  if (name.length) {
                      args[name] = value;
                  }
            }
            console.log(args)
            this.setState({
                distanation:args
            })
        
    }
    render() {
        return (
            <div className="">
                <header>
                    <div className="headcontent container">
                        <a href="#" onClick={this.handleBack} className="iconfont icon-arrow-left"></a>
                        <a href="#" onClick={this.handleBack} className="headcontent_search">
                            <i className="iconfont icon-search"></i>
                            <input type="text" placeholder="宏信南越" href="sousuomudidi.html" />
                            <i className="iconfont icon-icon_-"></i>
                        </a>
                        <a href="#" onClick={this.handleBack}> <img src={require("../images/XX.png")}  alt=""/></a>
                    </div>
                </header>
                {/* <div id="allmap"></div> */}
                <img src={require("../images/location2.png")} alt="" className="location_icon" />
                <div className="daohang_bottom">
                    <div className="right_content">
                        <span>{this.state.distanation.key}</span><br />
                        <span className="address">{this.state.distanation.adress}</span>
                    </div>
                    <div className="SDleft_content">
                        <NavLink to="goto"><img src={require("../images/daohang.png")} alt="" /> <span>导航</span></NavLink>
                    </div>
                </div>
                <div className="daohang_bottom2">
                    <a href="cheweiyuding.html"></a>
                </div>

            </div>
        )
    }
}