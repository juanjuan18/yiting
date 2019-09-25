import React,{Component} from 'react'
import './Register.css'
import {BrowserRouter as Router,Route,Switch,NavLink} from "react-router-dom"

export default class Register extends Component{
    constructor(props){
        super(props)
    }


 
    render(){


        
        return (

           <div id="regist">
           <div class="app">
        <div>
            <NavLink to="/index/login"  class="lefta"><i class="iconfont icon-arrow-left"></i>返回</NavLink>
           
        </div>
        <div class="verification">
            <div class="search2">
                <input type="text" placeholder="请输入手机号"/>
            </div>
            <NavLink to="/index/register1" class="a2">下一步</NavLink>
            <p>遇到问题？您可以<a href="zaixianzixun.html">联系客服</a></p>
        </div>
    </div>
           </div>
        
        )
    }
}