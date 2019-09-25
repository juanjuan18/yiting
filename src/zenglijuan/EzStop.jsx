/* jshint esversion: 6 */
import React, { Component } from 'react';
import "./EzStop.css";
import "./iconfont.css";
import "./dibuhetoubu.css";
import {ezStop} from '../api/common';
import creatHistory from 'history/createBrowserHistory';
const history = creatHistory();

export default class EzStop extends Component {
    constructor() {
        super();
        this.headbarck.bind(this);
        this.state={
            OrderList:''
        };
    }
    componentWillMount(){
        ezStop('w').then((list)=>{
        //    console.log(list);
            this.setState({
                OrderList:list.data
            })
            // console.log(this.state.OrderList)
            
        }
        
        
        );
    }
    headbarck(){
        history.goBack();
    }
    render() {
        var list=""
        if(this.state.OrderList.length!=0){
            list=this.state.OrderList.map((item)=>{
                    return (
                                <div className="start">
                                        <p><i className="iconfont icon-shijian"></i>{item.place}</p>
                                        <p><i className="iconfont icon-dian2"></i>{item.start}</p>
                                        <p><i className="iconfont icon-dian3"></i>{item.end}</p>
                                        <p><i className="iconfont icon-coin"></i>金额：{item.money}</p>
                                        <p className="finish">{item.status}</p>
                                </div>
                            )
                })
        }
        console.log(this.state.OrderList.length)
        // var list=this.state.OrderList.map((item)=>{
        //     return (
        //                 <div className="start">
        //                         <p><i className="iconfont icon-shijian"></i>{item.place}</p>
        //                         <p><i className="iconfont icon-dian2"></i>{this.start}</p>
        //                         <p><i className="iconfont icon-dian3"></i>{this.end}</p>
        //                         <p><i className="iconfont icon-coin"></i>{this.money}</p>
        //                         <p className="finish">{this.status}</p>
        //                 </div>
        //             )
        // })
        // var list=this.state.OrderList.map((item)=>{
        //     return (
        //         <div className="start">
        //                 <p><i className="iconfont icon-shijian"></i>{item.place}</p>
        //                 <p><i className="iconfont icon-dian2"></i>{item.start}</p>
        //                 <p><i className="iconfont icon-dian3"></i>{item.end}</p>
        //                 <p><i className="iconfont icon-coin"></i>{item.money}</p>
        //                 <p className="finish">{this.status}</p>
        //         </div>
        //     )
        // })
        // console.log(this.state.OrderList)
        return (
            <div id="EzStop">
                <header>
                    <div className="headContent clearfix">
                        <a onClick={this.headbarck}><i className="iconfont icon-arrow-left"></i>返回</a>
                        <span>停车记录</span>
                    </div>
                </header>
                <section>
                    <div className="zhanweia">
                    </div>
                    {list}
                    
                    {/* <div className="start">
                        <p><i className="iconfont icon-shijian"></i>2019年06月15日 09:54</p>
                        <p><i className="iconfont icon-dian2"></i>起点</p>
                        <p><i className="iconfont icon-dian3"></i>终点</p>
                        <p><i className="iconfont icon-coin"></i>金额:5元</p>
                        <p className="finish">已完成</p>
                    </div>
                    <div className="start">
                        <p><i className="iconfont icon-shijian"></i>2019年06月15日 09:54</p>
                        <p><i className="iconfont icon-dian2"></i>起点</p>
                        <p><i className="iconfont icon-dian3"></i>终点</p>
                        <p><i className="iconfont icon-coin"></i>金额:5元</p>
                        <p className="finish">已完成</p>
                    </div> */}
                </section>
            </div>
        )
    }
}
