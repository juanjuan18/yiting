import React,{Component} from 'react'
import './Login1.css'
import {BrowserRouter as Router,Route,Switch,NavLink,Redirect} from "react-router-dom"
import {createForm} from 'rc-form'
import { Toast } from 'antd-mobile';
import {login} from '../api/common'

 class Login1 extends Component{
    constructor(props){
        super(props)
    

        this.submit = this.submit.bind(this)
        }
        submit(){
            this.props.form.validateFields((error,value)=>{
                let islogin=false;
                if(error){
                   
                    if(error.username){
                        Toast.fail("账号不能为空！", 1);
                        console.log('账号不能为空')
                    }
                    else{
                        Toast.fail("密码不能为空！", 1);
                        console.log('密码不能为空')
                    }
                    return 
                }
               login(value).then((res)=>{
                    // console.log(res.data.arr)
                    // console.log(value.username)
                    console.log(res.data.code)
                    if(res.data.code==1){
                        // Toast.success("登录成功！", 1);
                        islogin=true
                        localStorage.setItem('islogin', JSON.stringify(islogin));
                      
                        this.props.history.push("/index/usercenter2")
                    }
                    else{
                        Toast.fail("账号或密码错误！", 1);
            
                    }
                    
                 })
            });
        }
    
    render(){
      const {getFieldProps}=this.props.form;
        return (

            <div id="login1">
                   <div className="hea">
            <NavLink to="/index/usercenter2"  class="lefta"><i class="iconfont icon-arrow-left"></i>返回</NavLink>
        </div>
                <div className="app">
          <div className="main">
         <img src={require("../images/logozh.png")} alt="" />
           
            <div className="search1">
                <input  {...getFieldProps('username',{rules: [{required: true}]})} type="text" placeholder="请输入手机号/用户名"/>
                </div>
            <div className="search1">
                <input   {...getFieldProps('pwd',{rules: [{required: true}]})} type="password" placeholder="请输入密码"/>
                </div>
        
        <button onClick={this.submit} id="huoqu" >登录</button>
           
            <p className="clearfix">
            <NavLink to="/index/login" >
            短信验证登录
                    </NavLink>
              
                <NavLink to="/index/findpwd">忘记密码</NavLink>
            </p>

            </div>
        


        
        <div className="Other-login">
            <p className="other2">其他登录方式</p>
            <ul className="clearfix">
            <li><a href="#"><img src={require("../images/u4152.png")} alt="" className="weixx" /></a></li>
                <li><a href="#"><img src={require("../images/q4150.png")} alt="" /></a></li>
                <li><a href="#"><img src={require("../images/w4154.png")} /></a></li>
            </ul> 
             <p className="xieyi">登录即代表您同意<a href=".html">《用户协议、隐私条款》</a></p>
      
    </div>
        </div>
        </div>
          
         

         
        )
    
}
 }

 export default createForm()(Login1)