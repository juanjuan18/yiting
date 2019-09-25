import React, { Component } from 'react'
import {BrowserRouter as Router,Route,Switch,NavLink} from "react-router-dom"
import './Mall.css'
import creatHistory from 'history/createBrowserHistory' 
const history = creatHistory();

class Mall extends Component {
    constructor(props) {
        super(props);
        this.handleBack.bind(this)
    }
    handleBack(){
        history.goBack();
    }
    render() {
        return (
            <React.Fragment>
                <header>
                    <div className="headContent clearfix">
                        <a href="#" onClick={this.handleBack}><i className="iconfont icon-arrow-left"></i>返回</a>
                        <span>积分商城</span>
                    </div>
                </header>
                <section>
                    <div className="jifen clearfix">
                        <NavLink to="/index/Integral">
                        <div className="left" href="#"><i className="iconfont icon-coin"></i>{JSON.parse(localStorage.getItem('balance')).integral.usable}积分</div>
                        </NavLink>
                        <NavLink to="/index/RedRecord">
                        <div className="right" href="#"><i className="iconfont icon-jifenduihuan-xian"></i>兑换记录</div>
                        </NavLink>
                    </div>
                    <div className="tupian">
                        <img src={require('../images/phone.png')} alt="" />
                    </div>
                    <div className="huodong clearfix">
                        <div>
                            <img src={require('../images/zhuanpan.jpg')} alt="" />
                            <p>幸运转盘</p>
                        </div>
                        <div>
                            <div>
                                <img src={require('../images/jindan.png')} alt="" />
                                <p>砸金蛋</p>
                            </div>
                        </div>
                        <div>
                            <div>
                                <img src={require('../images/shouji.png')} alt="" />
                                <p>抽oppo</p>
                            </div>
                        </div>
                        <div>
                            <div>
                                <img src={require('../images/yaojiang.png')} alt="" />
                                <p>摇奖机</p>
                            </div>
                        </div>
                    </div>
                    <div className="tong quan">
                        <div className="quan_con">
                            <h5>优惠福利券</h5>
                            <div className="clearfix">
                                <div className=" quan_left">
                                    <div><img src={require('../images/youhuiquan1.png')} alt="" /></div>
                                    <p>2元停车券</p>
                                    <p className="red">200积分</p>
                                    <NavLink to="/index/Exchange">兑换</NavLink>
                                </div>
                                <div className="quan_right">
                                    <div><img src={require('../images/youhuiquan1.png')} alt="" /></div>
                                    <p>5元停车券</p>
                                    <p className="red">400积分</p>
                                    <NavLink to="/index/Exchange">兑换</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tong shangping">
                        <div className="quan_con">
                            <h5>积分兑换商品</h5>
                            <div className="clearfix">
                                <div className="quan_left">
                                    <div><img src={require('../images/yifu.jpg')} alt="" /></div>
                                    <p>黑白T恤</p>
                                    <p className="red">20000积分</p>
                                    <NavLink to="/index/Exchange">兑换</NavLink>
                                </div>
                                <div className="quan_right">
                                    <div><img src={require('../images/biaoqing.png')} alt="" /></div>
                                    <p>表情包趣味冰箱贴</p>
                                    <p className="red">1500积分</p>
                                    <NavLink to="/index/Exchange">兑换</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tong tuijian">
                        <div className="quan_con">
                            <h5>新品推荐</h5>
                            <div className="clearfix">
                                <div className="quan_left">
                                    <div><img src={require('../images/erji.jpg')} alt="" /></div>
                                    <p>苹果耳机</p>
                                    <p className="red">200积分+50元</p>
                                    <NavLink to="/index/Exchange">兑换</NavLink>
                                    
                                </div>
                                <div className="quan_right">
                                    <div><img src={require('../images/xian.jpg')} alt="" /></div>
                                    <p>三合一数据线</p>
                                    <p className="red">2000积分+30元</p>
                                    <NavLink to="/index/Exchange">兑换</NavLink>                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className="dibu">暂时没有了！</p>
                </section>
            </React.Fragment>
        );
    }
}

export default Mall;