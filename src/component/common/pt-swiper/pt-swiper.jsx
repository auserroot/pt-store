// @ts-nocheck
import { Carousel} from 'antd-mobile';
import React from 'react';
import { withRouter } from "react-router-dom"

class YGSwiper extends React.Component {
  state = {
    imgHeight: 180,
  }
  handleGoToDetail = (val) => {
      this.props.history.push("/goodDetail/"+val.goods_id);
  }
  render() {
    return (
        <Carousel
          autoplay={true}
          infinite
        >
          {this.props.swiperData.map(val => (
            <div
              onClick={this.handleGoToDetail.bind(this,val)}
              key={val.image_src}
              style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
            >
              <img
                src={val.image_src}
                alt=""
                style={{ width: '100%', verticalAlign: 'top' }}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                  this.setState({ imgHeight: 'auto' });
                }}
              />
            </div>
          ))}
        </Carousel>
    );
  }
}
export default withRouter(YGSwiper)