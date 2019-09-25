import React,{Component} from 'react'
import './Getyanzheng.css'
import {BrowserRouter as Router,Route,Switch,NavLink} from "react-router-dom"


export default class Getyanzheng extends Component{
    constructor(props){
        super(props)
       
    }


    
    render(){
     
        return (

            <div id="getyanzheng">
                 <div class="app">
                 <div>
            <NavLink to="/index/login"  class="lefta"><i class="iconfont icon-arrow-left"></i>返回</NavLink>
        </div>
        <div class="verification">
            <h2>请输入验证码</h2>
            <p>验证码已通过短信发送至18781450343</p>
            <div class="search5">
                <input type="text" placeholder="请输入验证码" />
                <a href="#">重新获取验证码</a>
            </div>
            <NavLink to="/index/usercenter2"  class="a2">登录</NavLink>
        </div>
    </div>
        </div>
          
         

         
        )
    
}
 }

