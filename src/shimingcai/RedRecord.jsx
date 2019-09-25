import React, { Component } from 'react'
import './RedRecord.css'
import creatHistory from 'history/createBrowserHistory' 
const history = creatHistory();

class RedRecord extends Component {
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
                        <span>兑换记录</span>
                    </div>
                </header>
                <section>
                    <div className="quan1">
                        <div className="mess">
                            <div className="tu"><img src={require("../images/yifu.jpg")} /></div>
                            <div className="zi">
                                <p className="one">黑白T恤</p>
                                <p className="two">有效期至：2019年8月1日</p>
                            </div>
                            <div className="xinxi">
                                <a href="shangping.html"><img src={require("../images/return.png")} alt="" /></a>
                            </div>
                        </div>
                    </div>
                    <div className="quan">
                        <div className="mess">
                            <div className="tu"><img src={require("../images/biaoqing.png")} /></div>
                            <div className="zi">
                                <p className="one">表情包</p>
                                <p className="two">有效期至：2019年8月1日</p>
                            </div>
                            <div className="xinxi">
                                <a href="shangping.html"><img src={require("../images/return.png")} alt="" /></a>
                            </div>
                        </div>
                    </div>
                    <div className="quan">
                        <div className="mess">
                            <div className="tu"><img src={require("../images/shouji.png")} /></div>
                            <div className="zi">
                                <p className="one">oppo手机</p>
                                <p className="two">有效期至：2019年8月1日</p>
                            </div>
                            <div className="xinxi">
                                <a href="shangping.html"><img src={require("../images/return.png")} alt="" /></a>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

export default RedRecord;