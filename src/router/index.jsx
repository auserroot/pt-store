import React from "react";

//路由懒加载

//Home
const Home = React.lazy(() => import("../component/home/Home"));

const Address = React.lazy(() => import("../component/home/address/Address"));
const Information = React.lazy(() =>
  import("../component/home/information/information")
);
const GroupShopping = React.lazy(() =>
  import("../component/home/GroupShopping/GroupShopping")
);
const Search = React.lazy(() => import("../component/home/search/search"));

//Category
const Category = React.lazy(() => import("../component/category/Category"));
//categroy子路由
const DetailsGroup = React.lazy(() =>
  import("../component/category/detailsGroup/detailsGroup")
);
const PayFail = React.lazy(() =>
  import("../component/category/detailsGroup/pay/payfail/Payfail")
);
const PaySuccess = React.lazy(() =>
  import("../component/category/detailsGroup/pay/paysuccess/PaySuccess")
);
const Select = React.lazy(() => import("../component/category/select/select"));

/*bug reset router*/

const Productdetails = React.lazy(() =>
  import("../component/category/Productdetails/Productdetails")
);

//Cart
const Cart = React.lazy(() => import("../component/cart/Cart"));
const Cartmanage = React.lazy(() =>
  import("../component/cart/Cartmanage/Cartmanage")
);
const Coupon = React.lazy(() => import("../component/cart/coupon/coupon"));
const Order = React.lazy(() => import("../component/cart/order/order"));
const PayStatus = React.lazy(() =>
  import("../component/cart/PayStatus/PayStatus")
);

//LiveShow
const LiveShow = React.lazy(() =>
  import("../component/liveshow/live/liveshow")
);
const LiveshowInfo = React.lazy(() =>
  import("../component/liveshow/liveInfo/liveshowinfo")
);

//My
const My = React.lazy(() => import("../component/my/My"));
//My我的
const MyInfo = React.lazy(() => import("../component/my/myInfo/myinfo"));
const MyOrder = React.lazy(() => import("../component/my/myorder/myorder"));
const Balanc = React.lazy(() => import("../component/my/mybalance/balance"));

// Serve
const Serve = React.lazy(() => import("../component/serve/customerservice"));
// Login
const Login = React.lazy(() => import("../component/login/login/login"));

//const XX = React.lazy(()=>import("../component/xx"))

const routes = [
  //主页
  {
    path: "/", // 路径
    component: Home,
    exact: true,
    /* 
        routes:[
            {
                path:"/xx",
                component:XX
            }
        ]
       */
  },
  {
    path: "/address",
    component: Address,
  },
  {
    path: "/information",
    component: Information,
  },
  {
    path: "/groupshopping",
    component: GroupShopping,
  },
  {
    path: "/search",
    component: Search,
  },

  //商城
  {
    path: "/category",
    component: Category,
    // category/list
  },
  // 商品详情
  {
    path: "/productdetails",
    component: Productdetails,
  },
  //拼团商品详情
  {
    path: "/detailsGroup",
    component: DetailsGroup,
  },
  //支付失败
  {
    path: "/payfail",
    component: PayFail,
  },
  //支付成功
  {
    path: "/paysuccess",
    component: PaySuccess,
  },
  //筛选
  {
    path: "/select",
    component: Select,
  },
  // 购物车
  {
    path: "/cart",
    component: Cart,
    exact: true,
    routes: [
      {
        path: "/cart/manage",
        component: Cartmanage,
      },
      {
        path: "/cart/coupon",
        component: Coupon,
      },
      {
        path: "/cart/order",
        component: Order,
        exact: true,
      },
      {
        path: "/cart/paystatus/:status",
        component: PayStatus,
      },
    ],
  },
  // 我的
  {
    path: "/my",
    component: My,
  },
  {
    path: "/myinfo",
    component: MyInfo,
    exact: true,
  },
  {
    path: "/myorder",
    component: MyOrder,
    exact: true,
  },
  {
    path: "/balanc",
    component: Balanc,
    exact: true,
  },
  // 直播
  {
    path: "/liveshow",
    component: LiveShow,
  },
  // 直播详情
  {
    path: "/liveshowinfo",
    component: LiveshowInfo,
  },
  // 客服
  {
    path: "/serve",
    component: Serve,
  },
  // 登录
  {
    path: "/login",
    component: Login,
  },
];
export default routes;
