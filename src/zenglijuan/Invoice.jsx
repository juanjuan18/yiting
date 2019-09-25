/* jshint esversion: 6 */
import React, { Component } from 'react';
import { BrowserRouter as Router,Route,Link,NavLink} from "react-router-dom";
import "./Invoice.css";
import "./iconfont.css";
import "./dibuhetoubu.css";
import creatHistory from 'history/createBrowserHistory';
const history = creatHistory();
export default class Invoice extends Component {
    constructor() {
        super();
        this.headleback.bind(this);
    }
    headleback(){
        history.goBack();
    }
    render() {
        return (
            <div id="Invoice">
                <header>
                    <div className="headContent clearfix">
                        <a onClick={this.headleback}><i className="iconfont icon-arrow-left"></i>返回</a>
                        <span>我要发票</span>
                        <a><i className="iconfont icon-xiaoxi"></i></a>
                    </div>
                </header>
                <section>
                    <div className="fapiao_content">
                        <div className="btn_group">
                            <a>临时停车费</a>
                            <NavLink to="Center">订单记录</NavLink>
                        </div>
                    </div>
                    <a className="tingchechang">查看支持电子发票的停车场></a>
                    <div className="gantanhao">
                        <img src={require("./images/gantanhao.png")} />
                    </div>
                        <h1>暂无可开票订单</h1>
                        <p>• 请确认您停车的停车场是否支持电子发票以及您的订单是否在开票期限内</p>
                        <p>• 请确认您停车的停车场是否支持电子发票以及您的订单是否在开票期限内</p>
                        <div className="shuaxin">
                        <a>刷新</a>
                    </div>
                </section>                




            </div>
                )
            }
        }
