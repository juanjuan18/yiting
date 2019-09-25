import React, { Component } from 'react';
import './ParkingLots.css';
import './fonts/iconfont.css';
import { parkinglots } from '../api/common';
import creatHistory from 'history/createBrowserHistory';
const history = creatHistory();

class ParkingLots extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            type: []
        }
        this.handleBack.bind(this)
        this.handleDel.bind(this)
    }
    handleBack() {
        history.goBack();
    }
    componentDidMount() {
        var qs = (this.props.location.search.length > 0 ? this.props.location.search.substring(1) : ""),
            //保存数据的对象 
            args = {},
            //取得每一项
            items = qs.length ? qs.split("&") : [],
            item = null,
            name = null,
            value = null,
            //在 for 循环中使用
            i = 0,
            len = items.length;
        //逐个将每一项添加到 args 对象中 
        for (i = 0; i < len; i++) {
            item = items[i].split("=");
            name = decodeURIComponent(item[0]);
            value = decodeURIComponent(item[1]);
            if (name.length) {
                args[name] = value;
            }
        }
        var type = args.type;
        parkinglots("1").then((res) => {
            this.setState({
                type: res.data[type]
            })
        })
        this.setState({
            name: args.name
        })
    }
    handleDel(event){
        var newType = this.state.type;
        newType.splice(event.target.dataset.i,1);
        this.setState({
            type:newType
        })
    }
    render() {
        var pL = this.state.type;
        var list = Object.keys(pL).map((key) => {
            return (
                <li key={key}>
                    <i className="iconfont icon-che"></i>
                    <a href="#">
                        <p className="chewei">{pL[key]}车位</p>
                        <p onClick={(event)=>{this.handleDel(event)}} data-i={key}>删除</p>
                        <i className="iconfont icon-left-angle"></i>
                    </a>
                </li>
            )
        });
        return (
            <React.Fragment>
                <header>
                    <div className="headContent clearfix">
                        <a href="#" onClick={this.handleBack}><i className="iconfont icon-arrow-left"></i>返回</a>
                        <span>{this.state.name}</span>
                    </div>
                </header>
                <div className="zhanwei"></div>
                <div className="bodycantainer clearfix">
                    <ul>
                        {list}
                    </ul>
                    <a href="#">
                        <button className="addchewei" type="submit" >添加</button>
                    </a>
                </div>
            </React.Fragment>
        );
    }
}

export default ParkingLots;