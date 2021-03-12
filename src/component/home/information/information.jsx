// 定位
import React, { Component } from 'react';
import store from "../../../store"
import PtHeader from "../../common/pt-header/pt-header"
import { homeInitInformationDataAction } from "../../../store/action/homeAction"
import { connect } from "react-redux"
import "../homes/ptfont.css"
import "./information.scss"
class Information extends Component {
    async componentDidMount() {
        store.dispatch(homeInitInformationDataAction());

    }

    render() {
        console.log(this.props.informationsdata)
        return (
            <div className="information">
                <PtHeader title="消息中心" back={true} AD={false}></PtHeader>
                <div className="information-main">
                    {this.props.informationsdata.map((val, index) => (
                        <div className="information-items" key={index}>
                           <div><span className="iconfont icon-xinxitongzhi"></span></div>
                            <div>
                                <p className="types">{val.type}</p>
                                <p className="titles">{val.title}</p>
                            </div>
                            <div >
                                <span>{val.time}</span>
                            </div>
                        </div>
                    ))}


                </div>


            </div>
        );
    }
}

export default connect((state) => {
    return {

        informationsdata: state.homeHeaderReducer.informationsData,

    }
}, null)(Information);
