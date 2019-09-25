import React, { Component } from 'react'
import './Search.css'
import './fonts/iconfont.css'
import {BrowserRouter as Router,Route,Switch,NavLink} from "react-router-dom"
import { position } from '../api/common'
// import creatHistory from 'history/createBrowserHistory'
const history = require("history").createBrowserHistory();

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            positionList: ''
        }
        this.handleBack.bind(this)
    }
    handleBack() {
        history.goBack();
    }
    componentDidMount() {
        position("1").then((res) => {
            this.setState({
                positionList: res.data
            })
            console.log(this.state.positionList)
            //     Object.keys(res.data).map(function(key){
            //         console.log(key,res.data[key]);
            //    });
        })
    }
    render() {
        var pL = this.state.positionList;
        var list = Object.keys(pL).map((key) => {
            return (              
                <li key={key}>
                    <NavLink to={`suredistanation?key=${key}&adress=${pL[key]}`} className="right_content">
                        <img src={require("../images/location.png")} alt="" className="location" />
                        <span className="loca_adress">{key}</span><br />
                        <span className="adress">{pL[key]}</span>
                    </NavLink>
                    <NavLink to="goto" className="left_content">
                        <img src={require("../images/luxian.png")} alt="" />
                    </NavLink>
                </li>
            )
        });
        return (
            <React.Fragment>
                <header>
                    <div className="headcontent container">
                        <a href="#" className="iconfont icon-arrow-left" onClick={this.handleBack}></a>
                        <div className="headcontent_search">
                            <i className="iconfont icon-search"></i>
                            <input type="text" placeholder="宏信南越" href="sousuomudidi.html" />
                            <i className="iconfont icon-icon_-"></i>
                        </div>
                    </div>
                </header>
                <div className="zhanwei"></div>
                <section>
                    <ul>
                        {list}
                    </ul>
                </section>
            </React.Fragment>
        );
    }
}

export default Search;