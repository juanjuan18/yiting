import React, { Component } from 'react';
import './RentCar.css';
import './fonts/iconfont.css';
import { BrowserRouter as Router, Route, Switch, NavLink } from "react-router-dom";
import creatHistory from 'history/createBrowserHistory'
const history = creatHistory();

class RentCar extends Component {
    constructor(props) {
        super(props);
        this.handleBack.bind(this)
    }
    handleBack() {
        history.goBack();
    }
    render() {
        return (
            <React.Fragment>
                <header>
                    <div className="headContent clearfix">
                        <a href="#" onClick={this.handleBack}><i className="iconfont icon-arrow-left"></i>返回</a>
                        <span>请选择您的车位类型</span>
                        <a href="xiaoxi.html"><i className="iconfont icon-wenhao"></i></a>
                    </div>
                </header>
                <div className="zhanwei"></div>
                <div className="bodycantainer clearfix">
                    <div className="bodycontent">
                        <div className="mengban"></div>
                        <div className="choose">
                            <NavLink to='ParkingLots?name=公共露天停车场&type=pubSky'>
                                <a href="#">
                                    <div>
                                        <img src={require('../images/0215路边停车场__wps图片.png')} alt="" />
                                        <div className="left">
                                            <h1>公共露天停车场</h1>
                                            <p>if you need rent out your public outdoors parking lots,please select it</p>
                                        </div>
                                        <img id="right" src={require('../images/diandianxiangyou.png')} alt="" />
                                    </div>
                                </a>
                            </NavLink>
                            <NavLink to='ParkingLots?name=公共室内停车场&type=pubIndoor'>
                                <a href="#">
                                    <div>
                                        <img src={require('../images/停车场 (1)_wps图片.png')} alt="" />
                                        <div className="left">
                                            <h1>公共室内停车场</h1>
                                            <p>if you need rent out your public inhouse parking lots,please select it</p>
                                        </div>
                                        <img id="right" src={require('../images/diandianxiangyou.png')} alt="" />
                                    </div>
                                </a>
                            </NavLink>
                            <NavLink to='ParkingLots?name=私人露天停车场&type=priSky'>
                                <a href="#">
                                    <div>
                                        <img src={require('../images/停车场 (3)_wps图片.png')} alt="" />
                                        <div className="left">
                                            <h1>私人露天停车位</h1>
                                            <p>if you need rent out your personal outdoors parking lots,please select it</p>
                                        </div>
                                        <img id="right" src={require('../images/diandianxiangyou.png')} alt="" />
                                    </div>
                                </a>
                            </NavLink>
                            <NavLink to='ParkingLots?name=私人室内停车场&type=priIndoor'>
                                <a href="#">
                                    <div>
                                        <img src={require('../images/停车场 (4)_wps图片.png')} alt="" />
                                        <div className="left">
                                            <h1>私人室内停车位</h1>
                                            <p>if you need rent out your personal indoors parking lots,please select it</p>
                                        </div>
                                        <img id="right" src={require('../images/diandianxiangyou.png')} alt="" />
                                    </div>
                                </a>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default RentCar;