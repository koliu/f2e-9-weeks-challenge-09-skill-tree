export default {
  routes: [{
      path: "/",
      component: () =>
        import ("../pages/index.vue"),
      alias: "/index"
    },
    {
      path: "/ui",
      component: () =>
        import ("../components/roadmap-item.vue"),
    },
    {
      path: "/spec",
      component: () =>
        import ("../pages/spec.vue"),
    },
    {
      path: "/about",
      component: () =>
        import ("../pages/about.vue"),
    },
    {
      path: "*",
      component: () =>
        import ("../pages/404.vue"),
      alias: "/404"
    }
  ]
};
