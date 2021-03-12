import React from "react";
import { withRouter } from "react-router-dom";
// import styles from "./pt-header.scss";
class PtHeader extends React.PureComponent {
  handleGoBack = (params) => {
    this.props.history.go(-1);
  };
  render() {
    return (
      <div className="ptHeader">
        <div className="ptHeaderLeft" onClick={this.handleGoBack}>
          {this.props.back ? "<" : ""}
        </div>
        <div className="ptHeaderMid">{this.props.title}</div>
        <div className="ptHeaderRight"> {this.props.AD ? "添加地址" : ""}</div>
      </div>
    );
  }
}
export default withRouter(PtHeader);
