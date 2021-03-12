// 定位
import React, { Component } from 'react';
import store from "../../../store"
import { homeInitSearchDataAction } from "../../../store/action/homeAction"
import PtHeader from "../../common/pt-header/pt-header"
import { connect } from "react-redux"
import "../homes/ptfont.css"
import "./search.scss"
class Search extends Component {
    async componentDidMount() {
        store.dispatch(homeInitSearchDataAction());
    }
    state = {
        lsjl: ["鞋子", "衣服"],
        value: ""
    }
    handleClick = (params) => {
        this.state.lsjl.push(this.state.value)
        console.log(this.state.lsjl)
    }
    onChange = (event) => {
        this.setState({
            value: event.target.value
        })
    }
    handleClear = (params) => {
        this.setState({
            lsjl: []
        })
    }

    handleGoToDetail = (val) => {
        this.props.history.push("/" + val.navigator_url);
    }
    render() {
        return (
            <div className="search">
                <PtHeader title="搜索" back={true} AD={false}></PtHeader>
                <div className="search-main">
                    <div className="ss">
                        <input type="text" name="" id="" value={this.state.value} onChange={this.onChange} />
                        <button onClick={this.handleClick}>搜索</button>
                    </div>
                    <div className="hot">
                        <p>热门搜索</p>
                        <div className="hots">
                            {this.props.searchdata.map((val, index) => (
                                <span key={index} onClick={this.handleGoToDetail.bind(this, val)} >
                                    {val.title}
                                </span>

                            ))}
                        </div>
                    </div>

                    <div className="lsjl">
                        <div className="lisj-item"><p>搜索历史</p>    <button onClick={this.handleClear}>清空历史记录</button></div>
                        {this.state.lsjl.map((ls, index) => (
                            <span key={index}>
                                {ls}
                            </span>
                        ))}
                    </div>

                </div>

            </div>

        );
    }
}

export default connect((state) => {
    return {

        searchdata: state.homeHeaderReducer.searchData,

    }
}, null)(Search);

