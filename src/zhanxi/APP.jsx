import React, { Component,lazy, Suspense } from 'react';
import './dibu.css';
import './dibuhetoubu.css';
import './iconfont.css';
import { BrowserRouter as Router, Route, Switch, NavLink } from "react-router-dom"
import { wallet } from '../api/common'
import PrivateRoute from'./PrivateRoute'
let Home = lazy(() => import('../shimingcai/Home'))
let RentCar = lazy(() => import('../shimingcai/RentCar'))
let Center = lazy(() => import('../shimingcai/Center'))
let Mall = lazy(() => import('../shimingcai/Mall'))
let Wallet = lazy(() => import('../lifangxu/Wallet'))
let Balance = lazy(() => import('../lifangxu/Balance'))
let Integral = lazy(() => import('../lifangxu/Integral'))
let Coupon = lazy(() => import('../lifangxu/Coupon'))
let Task = lazy(() => import('../lifangxu/Task'))
let Record = lazy(() => import('../lifangxu/Record'))
let RedRecord = lazy(() => import('../shimingcai/RedRecord'))
let Exchange = lazy(() => import('../shimingcai/Exchange'))
let Search = lazy(() => import('../shimingcai/Search.jsx'))
let SureDistanation = lazy(() => import('../zhanxi/SureDistanation'))
let GoTo = lazy(() => import('../zhanxi/GoTo.jsx'))
let Reserve = lazy(() => import('../zhanxi/Reserve'))
let UserCenter2 = lazy(() => import('../zenglijuan/UserCenter2'))
let Car = lazy(() => import('../zenglijuan/Car'))
let MyCar = lazy(() => import('../zenglijuan/MyCar'))
let Collect = lazy(() => import('../zenglijuan/Collect'))
let Consult = lazy(() => import('../zenglijuan/Consult'))
let EzStop = lazy(() => import('../zenglijuan/EzStop'))
let Invoice = lazy(() => import('../zenglijuan/Invoice'))
let More = lazy(() => import('../zenglijuan/More'))
let UserGuide = lazy(() => import('../zenglijuan/UserGuide'))
let Login = lazy(() => import('../zengwei/Login'))
let Login1 = lazy(() => import('../zengwei/Login1'))
let Getyanzheng = lazy(() => import('../zengwei/Getyanzheng'))
let Register = lazy(() => import('../zengwei/Register'))
let Register1 = lazy(() => import('../zengwei/Register1'))
let FindPwd = lazy(() => import('../zengwei/FindPwd'))
let ParkingLots = lazy(() => import('../shimingcai/ParkingLots'))


class APP extends Component {
    constructor(props) {
        super(props);
        this.state = {
            balance: {}
        }
        this.walletChange.bind(this)
    }
    walletChange(event) {
        let type = event.target.dataset.type;
    }
    componentDidMount() {
        wallet("1").then((res) => {
            this.setState({
                balance: res.data

            })
            console.log(this.state.balance)

            localStorage.setItem('balance', JSON.stringify(res.data));//存在浏览器缓存区
        })

    }
    render() {
        return (
            <Router>
                <div className="section">
                    <Suspense fallback={<div>组件加载中。。。</div>}>
                        <Switch>
                            <Route path="/index/home" component={Home}></Route>
                            <Route path="/index/center" component={Center}></Route>
                            <Route path="/index/mall" component={Mall}></Route>
                            <Route path="/index/rent-car" component={RentCar}></Route>
                            {/* <Route path="/index/wallet" component={Wallet}></Route> */}
                            <PrivateRoute path="/index/wallet" component={Wallet} />
                            <Route path="/index/Balance" component={Balance}></Route>
                            <Route path="/index/Integral" component={Integral}></Route>
                            <Route path="/index/Coupon" component={Coupon}></Route>
                            <Route path="/index/Task" component={Task}></Route>
                            <Route path="/index/Record" component={Record}></Route>
                            <Route path="/index/RedRecord" component={RedRecord}></Route>
                            <Route path="/index/Exchange" component={Exchange}></Route>
                            <Route path="/index/search" component={Search}></Route>
                            <Route path="/index/suredistanation" component={SureDistanation}></Route>
                            <Route path="/index/goto" component={GoTo}></Route>
                            <Route path="/index/reserve" component={Reserve}></Route>
                            <Route path="/index/Usercenter2" component={UserCenter2}></Route>
                            <Route path="/index/Car" component={Car}></Route>
                            <Route path="/index/MyCar" component={MyCar}></Route>
                            <Route path="/index/Collect" component={Collect}></Route>
                            <Route path="/index/Consult" component={Consult}></Route>
                            <Route path="/index/EzStop" component={EzStop}></Route>
                            <Route path="/index/Invoice" component={Invoice}></Route>
                            <Route path="/index/UserGuide" component={UserGuide}></Route>
                            <Route path="/index/More" component={More}></Route>
                            <Route path="/index/login" component={Login}></Route>
                            <Route path="/index/login1" component={Login1}></Route>
                            <Route path="/index/register" component={Register}></Route>
                            <Route path="/index/register1" component={Register1}></Route>
                            <Route path="/index/findpwd" component={FindPwd}></Route>
                            <Route path="/index/getyanzheng" component={Getyanzheng}></Route>
                            <Route path="/index/parkinglots" component={ParkingLots}></Route>

                        </Switch>
                    </Suspense>
                </div>
                <footer>
                    <ul>
                        <li>
                            <NavLink to="/index/home" >
                                <div className="iconfont icon-fangzi2"></div>
                                <span>首页</span>
                            </NavLink>


                        </li>
                        <li>
                            <NavLink to="/index/reserve">
                                <div className="iconfont icon-che"></div>
                                <span>车位预订</span>

                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/index/wallet">
                                <div className="iconfont icon-qianbi1" onClick={(event) => { this.walletChange(event) }} data-type="钱包"></div>
                                <span>钱包</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/index/usercenter2">
                                <div className="iconfont icon-icon-test1"></div>
                                <span>我的</span>
                            </NavLink>
                        </li>
                    </ul>
                </footer>


            </Router>

        );
    }
}

export default APP;
