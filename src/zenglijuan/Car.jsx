/* jshint esversion: 6 */
import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router,Route,Link,NavLink} from "react-router-dom";
import "./Car.css";
import "./iconfont.css";
import "./dibuhetoubu.css";
import creatHistory from 'history/createBrowserHistory';
const history = creatHistory();
var arr=[];
var arr2="";
export default class Car extends Component {
    constructor() {
        super();
        this.headleback.bind(this);
        this.headleChange=this.headleChange.bind(this);
        this.state={
            inputValue:'',

        };
    }
    headleback(){
        history.goBack();
    }
    headleChange(e){
        
        arr.push(e.target.value);
        arr2=arr.join('')
        console.log(arr2)
        this.setState({
           inputValue:arr
        });
        
        console.log(this.state.inputValue)   
    }
    
    render() {
        return (
            <div id="Car">
                <header>
                    <div  className="headContent clearfix">
                        <a onClick={this.headleback}><i  className="iconfont icon-arrow-left"></i>返回</a>
                        <span>车辆管理</span>
                    </div>
                </header>
                <div className="zhanwei"></div>
                <div  className="login">
                    <img src={require("./images/cliang.jpg")} />
                </div>
                <div className="main">
                    <p>请添加真实有效的车牌号码</p>
                    <div className="chepaihao">
                        <select onChange={(e)=>this.headleChange(e)}>
                            <option>云</option>
                            <option>川</option>
                            <option>京</option>
                            <option>泸</option>
                            <option>渝</option>
                        </select>
                        <input type="text" onChange={(e)=>this.headleChange(e)} />
                        <input type="text" onChange={(e)=>this.headleChange(e)} />
                        <input type="text" onChange={(e)=>this.headleChange(e)} />
                        <input type="text" onChange={(e)=>this.headleChange(e)} />
                        <input type="text" onChange={(e)=>this.headleChange(e)} />
                        <input type="text" onChange={(e)=>this.headleChange(e)} />
                    </div>
                    <div className="lei">
                        <input id="da" name="sex" type="radio" /><label >小型车牌</label>
                        <input id="xiao" name="sex" type="radio" /><label >大型车牌</label>
                        <input id="xin" name="sex" type="radio" /><label >新能源车牌</label>
                    </div>
                    <NavLink to={`MyCar?key=${arr2}`}>下一步</NavLink>
                </div>
            </div>

        )
    }
}