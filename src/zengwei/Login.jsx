import React,{Component} from 'react'
import './Login.css'
import {BrowserRouter as Router,Route,Switch,NavLink} from "react-router-dom"

export default class Login extends Component{
    constructor(props){
        super(props)
        this.state={
            username:'',
            yanzhengma:''
        }
    }


 
    render(){


        
        return (

           <div id="login">
                <div>
            <NavLink to="/index/usercenter2" class="lefta"><i class="iconfont icon-arrow-left"></i>返回</NavLink>
        </div>
                <div className="app">
          <div className="main">
         <img src={require("../images/logozh.png")} alt="" />
            <div className="search1"><input type="text" placeholder="请输入手机号" />
            <NavLink  to="/index/getyanzheng" className="huoqu">获取验证码</NavLink>
            </div>
            <p className="clearfix">
            <NavLink to="/index/login1" >
            账号密码登录
                    </NavLink>
               
                <NavLink to="/index/register">
                    新用户注册
                </NavLink>
            </p>
        </div>



        
        <div class="Other-login">
            <p class="other1">其他登录方式</p>
            <ul class="clearfix">
            <li><a href="#"><img src={require("../images/u4152.png")} alt="" class="weixx" /></a></li>
                <li><a href="#"><img src={require("../images/q4150.png")} alt="" /></a></li>
                <li><a href="#"><img src={require("../images/w4154.png")} /></a></li>
            </ul> 
             <p class="xieyi">登录即代表您同意<a href=".html">《用户协议、隐私条款》</a></p>
      
    </div>
        </div>
           </div>
        
        )
    }
}