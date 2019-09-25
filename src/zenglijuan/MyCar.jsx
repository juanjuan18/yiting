/* jshint esversion: 6 */
import React, { Component } from 'react';
import "./MyCar.css";
import "./iconfont.css";
import "./dibuhetoubu.css";
import creatHistory from 'history/createBrowserHistory';
const history = creatHistory();
var icon=document.getElementsByClassName("icon-jian");
var list=document.getElementsByClassName("list");
export default class MyCar extends Component {
    constructor() {
        super();
        this.headleback.bind(this);
        this.headlechange=this.headlechange.bind(this);
        this.headleDelete=this.headleDelete.bind(this);
        this.state={
            carNum:""

        };
    }
    componentDidMount(){
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
        console.log(args.key);

        this.setState({
              carNum:args.key
        });
        console.log(this.state.carNum);

    }
    headleback() {
        history.goBack();
    }
    headlechange(e){
            console.log(e.target)
            console.log(icon)
            for(var i=0;i<icon.length;i++){
                icon[i].style.display="inline-block"
            }
    }
    headleDelete(e){
    console.log(e.target.parentNode);   
    e.target.parentNode.remove()
   
    }
    render() {
        
        return (
            <div id="MyCar">
                <header>
                    <div className="headContent clearfix">
                        <a onClick={this.headleback}><i className="iconfont icon-arrow-left"></i>返回</a>
                        <span>我的车辆</span>
                        <a onClick={(e)=>this.headlechange(e)}>编辑</a>
                    </div>                                                                                                                                                                                                                                                                                             
                </header>
                <div className="zhanwei"></div>
                {/* <!-- 验证 --> */}
                <section className="verification">
                    <div className="search">
                        <div className="list">
                        <i onClick={(e)=>this.headleDelete(e)} className="iconfont icon-jian"></i>
                            <span>川B37974</span>
                        </div>
                        <div className="list">
                            <i onClick={(e)=>this.headleDelete(e)} className="iconfont icon-jian"></i>
                            <span>川B37974</span>
                        </div>
                        <div className="list">
                            <i onClick={(e)=>this.headleDelete(e)} className="iconfont icon-jian"></i>
                            <span>{this.state.carNum}</span>
                        </div>
                    </div>
                </section>
                <a className="sure">添加车辆</a>
            </div >
        )
    }
}