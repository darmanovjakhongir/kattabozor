const routes = {
  home: "/",

  login: "/auth/login",

  phoneDetail: "/product/phones/:id",
  tabletDetail: "/product/tablets/:id",
  televisionDetail: "/product/televisions/:id",
  laptopDetail: "/product/laptops/:id",
  smartwatchDetail: "/product/smartwatches/:id",
  conditionerDetail: "/product/conditioners/:id",
  refrigeratorDetail: "/product/refrigerators/:id",
  monitorDetail: "/product/monitors/:id",

  help: "/help/help",

  contest: "/contest/contest",

  privacy: "/privacy",
  termsofuse: "/privacy/terms-of-use",

  notFound: "*",
};

export default routes;
