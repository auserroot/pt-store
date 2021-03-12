/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable default-case */
import React from "react";
import Header from "../../comm/Header/Header";
import "./payStatus.scss";
import "./payIcon.css";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Toast } from "antd-mobile";

export default (props) => {
  let payResult = props.match.params.status;
  let h = useHistory();
  if (payResult === "success") {
    useEffect(() => {
      let timer = setTimeout(() => {
        h.push("/myorder");
      }, 2000);
      return () => {
        clearTimeout(timer);
      };
    }, []);
  }
  function renderResult() {
    switch (payResult) {
      case "success":
        return (
          <>
            <Header title="支付成功" />
            <div className="success">
              <i className="iconfont icon-success"></i>
            </div>
            <div className="status-msg">付款成功</div>
            <div className="order-num">订单编号：{Date.now()}</div>
          </>
        );
      case "fail":
        return (
          <>
            <Header title="支付失败" back />
            <div className="fail">
              <i className="iconfont icon-shibai"></i>
            </div>
            <div className="status-msg">付款失败</div>
            <div className="order-num">订单编号：{Date.now()}</div>
            <div
              className="pay-now"
              onClick={() => {
                Toast.success("支付成功", 1);
                h.push("/myorder");
              }}
            >
              立即支付
            </div>
          </>
        );
    }
  }

  return <div className="payStatus">{renderResult()}</div>;
};
