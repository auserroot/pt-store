

import React from 'react';
import { withRouter } from "react-router-dom"
import "./pt-medi.scss"
class Medi extends React.Component {
  handleGoToDetail = (val) => {
    this.props.history.push("/"+val.navigator_url);
}
  render() {
    return (
      <div className="ptMedi">
        {this.props.centerData.map(val => (
          <div className="ptMedishow" key={val.image_src} >
            <img src={val.image_src}   onClick={this.handleGoToDetail.bind(this,val)}      alt="" />
            <span >{val.title}</span>
          </div>
        ))
        }

      </div>
    );
  }
}
export default withRouter(Medi)














