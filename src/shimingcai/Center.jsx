import React, { Component } from 'react'
import './Center.css'
import { order } from '../api/common'
import creatHistory from 'history/createBrowserHistory'
const history = creatHistory();

class Center extends Component {
    constructor(props) {
        super(props);
        this.state = {
            order: [],
            newOrder:[]
        }
        this.handleBack.bind(this)
        this.stateChange.bind(this)
    }
    handleBack() {
        history.goBack();
    }
    stateChange(event){
        var type = event.target.dataset.type;
        if(type == "全部"){
            var newOrder = this.state.order;
            this.setState({
                newOrder: newOrder
            })
            return;
        }
        var newOrder = this.state.order.filter((item,i,self)=>{
            return item.type == type;
        })
        this.setState({
            newOrder: newOrder
        })
    }
    componentDidMount() {
        order("1").then((res) => {
            this.setState({
                order: res.data,
                newOrder: res.data
            })
        })
    }
    render() {
        var pL = this.state.newOrder;
        var list = Object.keys(pL).map((key) => {
            return (
                <div className="dingdan" key={key}>
                    <div className="first">
                        <p className="left">停车</p>
                        <p className="right">{pL[key].type}</p>
                    </div>
                    <div className="second">
                        <p><i className="iconfont icon-dian2"></i>{pL[key].time}</p>
                    </div>
                    <div className="third">
                        <p><i className="iconfont icon-dian2"></i>{pL[key].pos}</p>
                    </div>
                    <div><a href="#" className="last">详情</a></div>
                </div>
            )
        });
        return (
            <React.Fragment>
                <header id="c-header">
                    <div className="headContent clearfix">
                        <a href="#" onClick={this.handleBack}><i className="iconfont icon-arrow-left"></i>返回</a>
                        <span>订单中心</span>
                        <a href="#"><i className="iconfont icon-xiaoxi"></i></a>
                    </div>
                </header>
                <section id="c-section">
                    <div className="type">
                        <div><a className="all" href="#" onClick={(event)=>{this.stateChange(event)}} data-type="全部">全部</a></div>
                        <div><a href="#" onClick={(event)=>{this.stateChange(event)}} data-type="预约中">预约中</a></div>
                        <div><a href="#" onClick={(event)=>{this.stateChange(event)}} data-type="待支付">待支付</a></div>
                        <div><a href="#" onClick={(event)=>{this.stateChange(event)}} data-type="已完成">已完成</a></div>
                    </div>
                    <div className="tou"></div>
                    {list}
                    <div className="xinxi">
                        <p>暂无更多了</p>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

export default Center;