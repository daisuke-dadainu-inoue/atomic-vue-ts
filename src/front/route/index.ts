import Vue from 'vue';
import Router from 'vue-router';
import Store from '@/front/store';
import Axios from 'axios';

// const Top = () => import('@/front/component/pages/top/TopPage.vue');
// const Login = () => import('@/front/component/pages/login/LoginPage.vue');
const SignUp = () => import('@/front/component/pages/signup/SignUpPage.vue');

Vue.use(Router);

const router = new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'top',
    //   component: Lp,
    //   meta: {
    //     isPublic: true,
    //   },
    // },
    // {
    //   path: '/login',
    //   name: 'login',
    //   component: Login,
    //   meta: {
    //     isPublic: true,
    //   },
    // },
    {
      path: '/newsimpleregist',
      name: 'newsimpleregist',
      component: SignUp,
      meta: {
        isPublic: true,
      },
    },
    // {
    //   path: '/manage',
    //   name: 'manageTop',
    //   component: Top,
    // },
  ],
});

Axios.interceptors.request.use(function (config) {
  if (typeof config.params === 'undefined') {
    config.params = {};
  }
  if (typeof config.params === 'object') {
    if (
      typeof URLSearchParams === 'function' &&
      config.params instanceof URLSearchParams
    ) {
      config.params.append('_', Date.now().toString());
    } else {
      config.params._ = Date.now();
    }
  }
  return config;
});

router.beforeEach((to, _from, next) => {
  window.scroll(0, 0);
  if (to.matched.some((page) => page.meta.isPublic)) {
    next();
  } else {
    const loginPath = '/login';
    const cookieName = 'hoge';
    const cookieListSplitDelimiter = ';';
    const cookies = document.cookie.split(cookieListSplitDelimiter);

    let hogeCookie;
    const cookieSplitDelimiter = '=';
    for (const cookie of cookies) {
      if (cookie.indexOf(cookieName) != -1) {
        hogeCookie = cookie.split(cookieSplitDelimiter);
      }
    }
    if (hogeCookie === undefined) {
      sessionStorage.removeItem(cookieName);
      next(loginPath);
      return;
    }
    // const loginId = Store.state.auth.loginId;
    const key = hogeCookie[1];
    // if (loginId === '' || key === '') {
    //   sessionStorage.removeItem(cookieName);
    //   next(loginPath);
    //   return;
    // }
    const param = {
      params: {
        // loginId: loginId,
        key: key,
      },
    };
    Axios.post('/api/user/auth', param)
      .then(function (res) {
        const cookieTime = 3600;
        document.cookie = `${cookieName}=${res.data.key};domain=${document.domain};max-age=${cookieTime}`;
        next();
      })
      .catch(function () {
        const now = new Date();
        now.setMinutes(now.getMinutes() - 1);
        document.cookie =
          'hoge=;domain=' +
          document.domain +
          ';max-age=0;expires=' +
          now.toUTCString();
        sessionStorage.removeItem(cookieName);
        Store.dispatch('auth/logout');
        next(loginPath);
      });
  }
});

export default router;
