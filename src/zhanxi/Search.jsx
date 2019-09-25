import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Switch,NavLink} from "react-router-dom"
import createHistory from 'history/createBrowserHistory'

import "./iconfont.css"
import "./Search.css"
const history =createHistory()
export default class Search extends Component {
    constructor() {
        super()
        this.handleBack.bind(this)
    }   
    handleBack(){
        history.goBack()
    }
    render() {
        return (
            <div className="">
                <div className="Searchheader">
                    <div className="headcontent container">
                        <a href="#" onClick={this.handleBack} className="iconfont icon-arrow-left"></a>
                        <div className="headcontent_search">
                            <i className="iconfont icon-search"></i>
                            <input type="text" placeholder="宏信南越" href="sousuomudidi.html" />
                            <i className="iconfont icon-icon_-"></i>
                        </div>
                    </div>
                </div>
                <div className="Searchsection">
                    <ul>
                        <li>
                            <NavLink to="suredistanation" className="right_content">
                                <img src={require("../images/location.png")} alt="" className="location" />
                                <span className="loca_adress">宏信南越</span><br />
                                <span className="adress">麓山大道219号</span>
                            </NavLink>
                            <NavLink to="goto" className="left_content">
                                <img src={require("../images/luxian.png")} alt="" />
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="suredistanation" className="right_content">
                                <img src={require("../images/location.png")} alt="" className="location" />
                                <span className="loca_adress">宏信南越</span><br />
                                <span className="adress">麓山大道219号</span>
                            </NavLink>
                            <NavLink to="goto" className="left_content">
                                <img src={require("../images/luxian.png")} alt="" />
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="suredistanation" className="right_content">
                                <img src={require("../images/location.png")} alt="" className="location" />
                                <span className="loca_adress">宏信南越</span><br />
                                <span className="adress">麓山大道219号</span>
                            </NavLink>
                            <NavLink to="goto" className="left_content">
                                <img src={require("../images/luxian.png")} alt="" />
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="suredistanation" className="right_content">
                                <img src={require("../images/location.png")} alt="" className="location" />
                                <span className="loca_adress">宏信南越</span><br />
                                <span className="adress">麓山大道219号</span>
                            </NavLink>
                            <NavLink to="goto" className="left_content">
                                <img src={require("../images/luxian.png")} alt="" />
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="suredistanation" className="right_content">
                                <img src={require("../images/location.png")} alt="" className="location" />
                                <span className="loca_adress">宏信南越</span><br />
                                <span className="adress">麓山大道219号</span>
                            </NavLink>
                            <NavLink to="goto" className="left_content">
                                <img src={require("../images/luxian.png")} alt="" />
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="suredistanation" className="right_content">
                                <img src={require("../images/location.png")} alt="" className="location" />
                                <span className="loca_adress">宏信南越</span><br />
                                <span className="adress">麓山大道219号</span>
                            </NavLink>
                            <NavLink to="goto" className="left_content">
                                <img src={require("../images/luxian.png")} alt="" />
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="suredistanation" className="right_content">
                                <img src={require("../images/location.png")} alt="" className="location" />
                                <span className="loca_adress">宏信南越</span><br />
                                <span className="adress">麓山大道219号</span>
                            </NavLink>
                            <NavLink to="goto" className="left_content">
                                <img src={require("../images/luxian.png")} alt="" />
                            </NavLink>
                        </li>
                    </ul>
                </div>

            </div>
        )
    }
}