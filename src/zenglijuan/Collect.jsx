/* jshint esversion: 6 */
import React, { Component } from 'react';
import "./Collect.css";
import "./dibuhetoubu.css";
import creatHistory from 'history/createBrowserHistory';
const history = creatHistory();
var juti = document.getElementsByClassName("juti")
var cc = document.getElementsByClassName("ccc")
export default class Collect extends Component {
    constructor() {
        super();
        this.headleback.bind(this);
    }
    headleback() {
        history.goBack();
    }
    change(e) {
        e.target.style="color: #fd7607;"
        cc[0].style="color:black;"
        cc[2].style="color:black;"
        juti[0].style.display = "none"
        juti[1].style.display = "block"
        juti[2].style.display = "none"
        juti[3].style.display = "none"
    }
    change1(e) {
        e.target.style="color: #fd7607;"
        cc[1].style="color:black;"
        cc[2].style="color:black;"
        juti[0].style.display = "block"
        juti[1].style.display = "none"
        juti[2].style.display = "none"
        juti[3].style.display = "none"
    }
    change2(e) {
        e.target.style="color: #fd7607;"
        cc[0].style="color:black;"
        cc[1].style="color:black;"
        juti[0].style.display = "none"
        juti[1].style.display = "none"
        juti[2].style.display = "block"
        juti[3].style.display = "block"
    }
    render() {
        return (
            <div id="Collect">
                <header>
                    <div className="headContent clearfix">
                        <a onClick={this.headleback}><i className="iconfont icon-arrow-left"></i>返回</a>
                        <span>我的收藏</span>
                    </div>
                </header>
                <section>
                    <div className="shouchang">
                        <div className="left">
                            <div className="tingche"><a className="ccc" onClick={(e) => { this.change1(e) }}>停车场收藏</a></div>
                            <div className="chewei"><a className="ccc" onClick={(e) => { this.change(e) }}>车位收藏</a></div>
                        </div>
                        <div className="right"><a className="ccc" onClick={(e) => { this.change2(e) }}>编辑</a></div>
                    </div>
                    <div className="juti">
                        <img src={require("../images/ting.jpg")} />
                        <div className="mes">
                            <p>地点：西华大学</p>
                            <p>总车位:500</p>
                            <p>剩余车位:200</p>
                        </div>
                        <a >导航去此地</a>
                    </div>
                    <div class="juti juti2">
                        <img src={require("../images/ting.jpg")} />
                        <div class="mes">
                            <p>地点：西华大学</p>
                            <p>车位:A区5号</p>
                            <p>状态：空闲</p>
                        </div>
                        <a href="xiadan.html">预约车位</a>
                    </div>
                    <div class="juti juti3">
                        <img src={require("../images/ting.jpg")} />
                        <div class="mes">
                            <p>地点：西华大学</p>
                            <p>车位:A区5号</p>
                            <p>状态：空闲</p>
                        </div>
                        <input type="checkbox" />
                    </div>
                    <div class="juti juti3">
                        <img src={require("../images/ting.jpg")} />
                        <div class="mes">
                            <p>地点：西华大学</p>
                            <p>车位:A区5号</p>
                            <p>状态：空闲</p>
                        </div>
                        <input type="checkbox" />
                    </div>
                </section>

            </div>
        )
    }
}