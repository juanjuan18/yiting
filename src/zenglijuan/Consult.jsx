/* jshint esversion: 6 */
import React, { Component, Fragment } from 'react';
import "./Consult.css";
import "./iconfont.css";
import "./dibuhetoubu.css";
import creatHistory from 'history/createBrowserHistory';
const history = creatHistory();
export default class Consult extends Component {
    constructor() {
        super();
        this.headleback.bind(this);
    }
    headleback(){
        history.goBack();
    }
    render() {
        return (
              <div id="Consult">
                <header>
                    <div className="headContent clearfix">
                        <a onClick={this.headleback}><i className="iconfont icon-arrow-left"></i>返回</a>
                        <span>在线咨询</span>
                        {/* <!-- <i href="zaixianzixun.html"><i className="iconfont icon-xiaoxi"></i></a> --> */}
                    </div>
                </header>
                <section>
                    <div className="zaixianzixun">
                        <div className="kefu">
                            <a><span>易停</span></a>
                            <img src={require("./images/left_lt.png" )}/>
                                <p className="liaotiankuang">
                                    亲爱的用户，您好！
                                    我是你的服务助理，请描述您遇到的问题或留下您宝贵的意见，收到反馈后我们会尽快为您处理或联络您，感谢您对易停的支持！！我们会努力做得更好！
                                </p>
                    </div>
                        <div className="user">
                            <a className="user_touxiang"><img src={require("./images/head2.png")}/></a>
                            <img src={require("./images/right_lt.png")}/>
                            <p className="liaotiankuang">我的订单无法结束，该怎么操作？</p>
                        </div>
                    </div>
                </section>
             </div>
                        )
                
                    }
}