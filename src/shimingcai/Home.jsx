import React, { Component, lazy, Suspense } from 'react';
import './Home.css';
import { Carousel, WingBlank } from 'antd-mobile';
import { BrowserRouter as Router, Route, Switch, NavLink } from "react-router-dom";
// let Center = lazy(() => import('./Center'));

class Slide extends React.Component {
  state = {
    data: ['lunbo01', 'lunbo03', 'lunbo02'],
    imgHeight: 300,
  }

  render() {
    return (
      <WingBlank>
        <Carousel
          autoplay={true}
          infinite
        >
          {this.state.data.map(val => (
            <a
              key={val}
              href="#"
              style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
            >
              <img
                src={require(`../images/${val}.jpg`)}
                alt=""
                style={{ width: '100%', verticalAlign: 'top' }}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                  this.setState({ imgHeight: 'auto' });
                }}
              />
            </a>
          ))}
        </Carousel>
      </WingBlank>
    );
  }
}

export default class Home extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <React.Fragment>
        <div className="header">
          <div className="carousel">
            <Slide></Slide>
          </div>
          <div className="top_text">
            <h1>Hi,</h1>
            <p>Where Do You Want To Parking?</p>
          </div>
          <div className="input_search">
            <div href="#" className="search">
              <NavLink to="search">
                <i className="iconfont icon-weibiaoti--"></i>
                <input type="text" placeholder="搜索目的地" />
              </NavLink>
            </div>
          </div>
          <div className="user_qiandao">
            <div href="#" className="user">
              <img src={require('../images/user.jpg')} alt="" />
            </div>
            <span>kingJames连续签到获得10积分</span>
            <div className="bigCircle">
              <NavLink to="Integral">
                <a href="#"><span>每日签到</span></a>
              </NavLink>
            </div>
          </div>
        </div>
        <div className="section">
          <div className="gongneng">
            <div className="gongneng_01">
              <NavLink to="Reserve">
                <img src={require('../images/index_img01.jpg')} alt="" /><br />
                <span id="wenzi">车位预订</span>
              </NavLink>
            </div>
            <div className="gongneng_01">
              <NavLink to="rent-car">
                <img src={require('../images/index_img05.jpg')} alt="" /><br />
                <span id="wenzi">车位出租</span>
              </NavLink>
            </div>
            <div className="gongneng_01">
              <NavLink to="center">
                <img src={require('../images/index_img04.jpg')} alt="" /><br />
                <span id="wenzi">订单中心</span>
              </NavLink>
            </div>
            <div className="gongneng_01">
              <NavLink to="mall">
                <img src={require('../images/index_img03.jpg')} alt="" /><br />
                <span id="wenzi">积分商城</span>
              </NavLink>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}