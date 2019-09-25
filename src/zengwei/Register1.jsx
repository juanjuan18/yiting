import React,{Component} from 'react'
import './Register1.css'
// import 'animate.css'
import {BrowserRouter as Router,Route,Switch,NavLink} from "react-router-dom"
import creatHistory from 'history/createBrowserHistory';
import {regist} from '../api/common'
import {createForm} from 'rc-form'
import { Toast, WhiteSpace, WingBlank, Button } from 'antd-mobile';
const history=creatHistory()

 class Register1 extends Component{
    constructor(props){
        super(props)
        this.submit = this.submit.bind(this)
    }

    submit(){
        this.props.form.validateFields((error,value)=>{
            
            if(error){
               
                   
                if(error.username){
                    Toast.fail("账号不能为空！", 1);
                    // console.log('账号不能为空')
                }
                else if(error.pwd){
                    Toast.fail("密码不能为空！", 1);
                    // console.log('密码不能为空')
                }
                else{
                    Toast.fail("确认密码不能为空！", 1);
                    // console.log('确认密码不能为空')
                }
                   return 
            }
            var re = /^1[34578][0-9]{9}$/;
            if (re.test(value.username)) {
                        console.log('正确')
                    } else {
                        Toast.fail("手机号格式不对", 1);
                        console.log('手机号格式不对')
                        return
                    }
            // if(value.username)
            if(value.pwd!=value.pwd1){
                Toast.fail("密码不一致", 1);
                console.log('密码不一致')
                return
            }
            regist(value).then((res)=>{
                console.log(value)
                console.log(res.data.code)
                if(res.data.code==-1){
                    Toast.fail("用户名已存在!", 1);
                    alert('用户名已存在!')
                }
                else if(res.data.code==2){
                    Toast.fail("注册失败,请稍后重试", 1);
                    alert('注册失败,请稍后重试！')
                }
                else if(res.data.code==1){
                    Toast.success("注册成功", 1);
                    alert('注册成功！')
                    this.props.history.push("/index/login1")
                }
               
             })


        });
    }
    handback(){
        history.goBack();
    }
    
    render(){
        const {getFieldProps}=this.props.form;
        //密码规则
        return (

            <div id="register3">
                 <div class="app">
        <div>
            <a onClick={this.handback} class="lefta"><i class="iconfont icon-arrow-left"></i>返回</a>
        </div>
        <div class="verification">
            <h2>账号密码注册</h2>
           
            <div class="search3">
                <input {...getFieldProps('username',{rules: [{required: true}]})} type="text" placeholder="请输入手机号" />
            </div>
            <div class="mima">
                <input {...getFieldProps('pwd',{rules: [{required: true}]})} type="pwd" placeholder="请设置6-20位密码"/>
            </div>
            <div class="mima">
                <input  {...getFieldProps('pwd1',{rules: [{required: true}]})} type="pwd" placeholder="再次确认密码"/>
            </div>
            <button class="a2" onClick={this.submit}>确定</button>
            
        </div>
    </div>
        </div>
          
         

         
        )
    
}
 }

 export default createForm()(Register1)