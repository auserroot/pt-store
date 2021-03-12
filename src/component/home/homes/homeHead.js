import React, { Component } from 'react';
import {withRouter} from "react-router-dom"
import "./ptfont.css"
import "./homeHead.scss"
class HomeHead extends Component {
    handleGoToAddress=(params) => {
        this.props.history.push("/address")
    }
    handleGoToInformation=(params) => {
        this.props.history.push("/information")
    }
    handleGoToSearch=(params) => {
        this.props.history.push("/search")
    }
    render() {
        return (
            <div className="homeHead">
                <div className="homeHead-left">
                    <span className="iconfont icon-dizhi" onClick={this.handleGoToAddress}></span>
                    <select name="" id="">
                        <option value="">上海靜安</option>
                    </select>
                </div>
                <div className="homeHead-center ">
                    <span className="iconfont icon-sousuo"></span>
                    <input type="text"  className="search" placeholder="找最好看的衣服"  onClick={this.handleGoToSearch} />
                </div>
                <div className="homeHead-right">
                    <span className="iconfont icon-lanlvtubiaozhizuomoban-14" onClick={this.handleGoToInformation} ></span>
                </div>
            </div>
        );
    }
}

export default withRouter(HomeHead);
