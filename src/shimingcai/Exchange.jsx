import React, { Component } from 'react'
import './Exchange.css'
import creatHistory from 'history/createBrowserHistory' 
const history = creatHistory();

class Exchange extends Component {
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
                        <span>兑换</span>
                    </div>
                </header>
                <section>
                        <div className="duihuan_a">
                            <img src={require("../images/yifu.jpg")} alt="" />
                            <img src={require("../images/yifu1.jpg")} alt="" />
                        </div>
                        <div className="duihuan_b">
                            <div className="duihuan_c">
                                <p className="first">黑白经典T恤（四款可选）</p>
                                <p className="second">品质保证 时尚简约 款式多样</p>
                                <p className="third">200元+3000积分</p>
                                <p className="fourth">邮费：2元</p>
                            </div>
                        </div>
                </section>
                <div className="foot">
                    <button>马上兑换</button>
                </div>
            </React.Fragment>
        );
    }
}

export default Exchange;