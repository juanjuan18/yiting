/* jshint esversion: 6 */
import React, { Component} from 'react';
import { BrowserRouter as Router,Route,Link,NavLink} from "react-router-dom";
import "./UserCenter2.css";
import "./iconfont.css";
import "./dibuhetoubu.css";

export default class UserCenter2 extends Component {
    constructor() {
        super();
    }
    render() {
        return (


            <div id="UserCenter2">
                {/* 钱包，优惠券，积分*/}
                {/* <Suspense fallback={<div>1111</div>}>
                <Switch>
                     <Route path="/index/car" component={Car}></Route>
                </Switch>
            </Suspense> */}
                {/* <div><Route path="/index/car" component={Car}></Route></div> */}
                <header>
                    <div className="headContent clearfix">
                        <a><i className="iconfont icon-arrow-left"></i>返回</a>
                        <span>个人中心</span>
                        <a ><i className="iconfont icon-xiaoxi"></i></a>
                    </div>
                </header>
                <div className="big">
                    <div className="zhanwei"></div>
                    <div className="login">
                        <div className="Avatar"><a>头像</a></div>
                        <div className="log-in-Register"><NavLink to="/index/login">登录/注册</NavLink></div>
                    </div>

                    <div className="money">
                        <NavLink to="Wallet" className="three qianbao"><i className="iconfont icon-qianbaohuaban"></i>钱包</NavLink>
                        <NavLink to="Coupon" className="three youhuiquan"><i className="iconfont icon-youhuiquan"></i>优惠券</NavLink>
                        <NavLink to="Integral" className="three keyongjifen"><i className="iconfont icon-jifen"></i>可用积分</NavLink>
                    </div>
                    {/* 功能*/}
                    <div className="function clearfix">



                        <NavLink to="car" className="four cheliangguanli">
                            <i className="iconfont icon-ziyuan"></i>
                            <p>车辆管理</p>
                        </NavLink>
                        <NavLink to="Invoice" className="four woyaofapiao">
                            <i className="iconfont icon-fapiao"></i>
                            <p>我要发票</p>
                        </NavLink>
                        <NavLink to="EzStop" className="four tingchejilu">
                            <i className="iconfont icon-jilu"></i>
                            <p>停车记录</p>
                        </NavLink>
                        <NavLink to="Collect" className="four wodeshoucang">
                            <i className="iconfont icon-shoucang"></i>
                            <p>我的收藏</p>
                        </NavLink>
                    </div>
                </div>

                {/*列 */}
                <div className="bbbb">
                    <div className="list">
                        <a href="#" className="Content">
                            推荐有奖<i className="iconfont icon-left-angle"></i>
                        </a>
                    </div>
                    <div className="list">
                        <NavLink to="Consult" className="Content">
                            在线咨询<i className="iconfont icon-left-angle"></i>
                        </NavLink>
                    </div>
                    <div className="list">
                        <NavLink to="UserGuide" className="Content">
                            用户指南<i className="iconfont icon-left-angle"></i>
                        </NavLink>
                    </div>
                    <div className="list">
                        <NavLink to="More" className="Content">
                            更多<span className="span1"><i className="iconfont icon-left-angle"></i></span>
                        </NavLink>
                    </div>
                </div>
            </div>



        )

    }

}