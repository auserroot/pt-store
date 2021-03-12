import axios from "./storeaxios.js";

// export const getXXX = () => {
//   return axios.get("xxx").catch((err) => {
//     console.log(err);
//   });
// };
//获取商城左侧标题数据
export const getListTit = () => {
  return axios.get("/Category/getList").catch((err) => {
    console.log(err);
  });
};

//获取商城右侧标题数据
export const getNavTit = () => {
  return axios.get("/Category/getNav").catch((err) => {
    console.log(err);
  });
};

//获取商品数据
export const getGoodsData = () => {
  return axios.get("/Category/getGoodsData").catch((err) => {
    console.log(err);
  });
};

//获取购物车数据
export const getCartMsg = (params) => {
  return axios({
    url: "cart/getCartMsg",
    method: "GET",
    params,
  });
};

export function getCouponMsg(params) {
  return axios({
    url: "cart/getCouponsMsg",
    method: "GET",
    params,
  });
}

/* 获取首页轮播图数据 */
export const getSwiperData = () => {
  return axios.get("home/swiperdata").catch((err) => {
    console.log(err);
  });
};
export const getCenterData = () => {
  return axios.get("home/centerdata").catch((err) => {
    console.log(err);
  });
};
export const getPurchaseData = () => {
  return axios.get("home/purchase").catch((err) => {
    console.log(err);
  });
};
export const getGroupShopData = () => {
  return axios.get("home/packcluster").catch((err) => {
    console.log(err);
  });
};
export const getInformationsData = () => {
  return axios.get("home/informationdata").catch((err) => {
    console.log(err);
  });
};
export const getSearchData = () => {
  return axios.get("home/search").catch((err) => {
    console.log(err);
  });
};

//我的
export const getbalance = () => {
  return axios.get("My/getbalance").catch((err) => console.log(err));
};

export const geticon = () => {
  return axios.get("My/geticon").catch((err) => console.log(err));
};

export const geticons = () => {
  return axios.get("My/getsecondicon").catch((err) => console.log(err));
};
export const getuser = () => {
  return axios.get("My/getuser").catch((err) => console.log(err));
};
export const getorder = () => {
  return axios.get("Myorder/getorder").catch((err) => console.log(err));
};
