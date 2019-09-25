import React,{Component} from 'react'
import './FindPwd.css'
import {BrowserRouter as Router,Route,Switch,NavLink} from "react-router-dom"


export default class FindPwd extends Component{
    constructor(props){
        super(props)
       
    }
  
    render(){
     
        return (

            <div id="findpwd">
        <div class="app">
        <div class="headContent">
        <NavLink to="/index/login1"  class="lefta"><i class="iconfont icon-arrow-left"></i>返回</NavLink>
        </div>
        <div class="verification">
            <div class="search4">
                <input type="text" placeholder="请输入手机号"/>
            </div>
            <NavLink to="/index/register1" class="a2">下一步</NavLink>
            <p>为了您的账户安全，我们将发送验证码至您的手机</p>
            <p>遇到问题？您可以<a href="zaixianzixun.html">联系客服</a></p>
        </div>
    </div>
        </div>
          
         

         
        )
    
}
 }

