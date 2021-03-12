import React, { Component } from 'react';
import { withRouter } from "react-router-dom"
import "./pt-purchase.scss"
class Purchase extends Component {
    handleGoToProduct=(params) => {
        this.props.history.push("/productdetails")
    }
    render() {
        return (
            <div className="purchase">
                <div className="purchase-top"><img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.17qq.com%2Fimg_qqtouxiang%2F32156082.jpeg&refer=http%3A%2F%2Fwww.17qq.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1617940039&t=2e0c66b4351c502ea926361af3f8483f" alt="" /></div>
                <div className="purchase-main">
                    {this.props.purchaseData.map((val,index )=> (
                        <div className="purchase-items" key={index} >
                            <img src={val.image_src} alt="" onClick={this.handleGoToProduct} />
                            <p>{val.title}</p>
                            <div><span>{val.newprice}</span> <span className="oldp">{val.oldprice}</span></div>
                        </div>
                    ))
                    }
                </div>

            </div>
        );
    }
}

export default withRouter(Purchase);
