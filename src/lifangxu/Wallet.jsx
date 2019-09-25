import React, { Component,lazy,Suspense } from 'react';
import { Carousel, WingBlank } from 'antd-mobile';
import {BrowserRouter as Router,Route,Switch,NavLink} from "react-router-dom"
import './Wallet.css';
// let Balance =lazy(()=>import ('./Balance'))

export default class Wallet extends Component {
    constructor(props) {
        super(props);
    }
    handleBalance() {
        if (localStorage.getItem('balance')) { 
            return
        }
        let data = null; 

        localStorage.setItem('balance', JSON.stringify(data));
    }
    render() {
        this.handleBalance();
        return (
            <div>
                <header>
                    <div className="headContent clearfix">
                        <a href="gerenzhongxin.html"><i className="iconfont icon-arrow-left"></i>返回</a>
                        <span>钱包</span>
                    </div>
                </header>
                <div className="wasss">
                    <div className="bg">
                        <h5>成为会员</h5>
                        <h1>停车更划算</h1>
                    </div>
                    <div className="content">
                        <ul>
                            <li>
                                <NavLink to="/index/Balance"> 
                                    <span className="iconfont icon-xiaozhuchuxuguan"></span>
                                    <span>账户余额</span>
                                    <span className="iconfont icon-left-angle"></span>
                                    <span>{JSON.parse(localStorage.getItem('balance')).balance}元</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/index/Integral"> 
                                    <span className="iconfont icon-huiyuanjifen"></span>
                                    <span>可用积分</span>
                                    <span className="iconfont icon-left-angle"></span>
                                    <span>{JSON.parse(localStorage.getItem('balance')).integral.usable}分</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/index/Coupon"> 
                                    <span className="iconfont icon-youhuiquan1"></span>
                                    <span>优惠券</span>
                                    <span className="iconfont icon-left-angle"></span>
                                    <span>{JSON.parse(localStorage.getItem('balance')).coupon}张</span>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
          
        )
    }
}
