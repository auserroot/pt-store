import React, { Component } from 'react';
import { withRouter } from "react-router-dom"
import "./pt-groupShop.scss"
class GroupShop extends Component {
    handleGoToShopping=(params) => {
        this.props.history.push("/groupshopping")
    }
    handleGoToGroup=(params) => {
        this.props.history.push("/detailsGroup")
    }
    render() {
        return (
            <div className="groupShop">
      
                <div className="groupShop-top">
                    <img  onClick={this.handleGoToShopping}   src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fp9.itc.cn%2Fq_70%2Fimages03%2F20210210%2Feb9eea96dd4f4cdd9e470acae0c99907.png&refer=http%3A%2F%2Fp9.itc.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1617948022&t=d643c3ca0f569266a50216b34d8ed44d" alt="" /></div>
                <div className="groupShop-main">
                    {this.props.groupShopData.map((val,index )=> (
                        <dl className="groupShop-items" key={index} >
                            <dt><img src={val.image_src} alt=""  /></dt>
                            <dd>
                            <p>{val.title}</p>
                            <div>
                                <span className="nums">{val.num}人团</span>
                                <span>{val.newprice}</span>
                                 <span className="oldp">{val.oldprice}</span>
                                <p className="LJPT" onClick={this.handleGoToGroup}>立即拼团</p>
                            </div>

                            </dd>
                           
                        </dl>
                    ))
                    }
                </div>

            </div>
        );
    }
}

export default withRouter(GroupShop);
