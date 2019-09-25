/* jshint esversion: 6 */
import React, { Component, Fragment } from 'react';
import "./More.css";
import "./iconfont.css";
import "./dibuhetoubu.css";
import creatHistory from 'history/createBrowserHistory';
const history = creatHistory();
export default class More extends Component {
    constructor() {
        super();
        this.headleback.bind(this);
    }
    headleback() {
        history.goBack();
    }
    render() {
        return (
            <div id="More">
                <header>
                    <div className="headContent clearfix">
                        <a onClick={this.headleback}><i className="iconfont icon-arrow-left"></i>返回</a>
                        <span>更多</span>
                        <a  className="righta"><i className="iconfont icon-shanchu"></i></a>
                    </div>
                </header>
                <div className="zhanwe"></div>
                <div className="kuai">
                    <div className="list">
                        <a className="Content">
                            检查更新<i className="iconfont icon-left-angle"></i>
                        </a>
                    </div>
                    <div className="list">
                        <a className="Content">
                            去评分<i className="iconfont icon-left-angle"></i>
                        </a>
                    </div>
                    <div className="list">
                        <a className="Content">
                            关于我们<i className="iconfont icon-left-angle"></i>
                        </a>
                    </div>
                    <div className="list">
                        <div className="Content">
                            当前版本<i className="iconfont icon-left-angle"></i>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}