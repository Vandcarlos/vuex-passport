# vuex-passport

For simple use import this module and use in store/index.js

```
  import Vue from 'vue'
  import Vuex from 'vuex'

  import auth from 'vuex-passport'

  Vue.use(Vuex)

  const store = new Vuex.Store({
    modules: {
      auth
    }
  })

export default store
```

## Route interceptor

if you need intercept guarded routes you can import a RouteShielding, eg.:

```
  import Vue from 'vue'
  import VueRouter from 'vue-router'
  import { RouteShielding } from 'vuex-passport'

  import routes from './routes'

  Vue.use(VueRouter)
  const Router = new VueRouter({
    routes
  })

  Router.beforeEach(RouteShielding())

  export default Router
```

and in your routes you need simply add a meta { guarded: true }, eg.:

```
export default [
  {
    path: '/login',
    name: 'login',
    component: () => import('pages/login')
  },
  {
    path: '/',
    component: () => import('layouts/default'),
    meta: { guarded: true },
    children: [
      {
        path: '',
        name: 'index',
        component: () => import('pages/index')
      },
      {
        path: '/event-days',
        name: 'event-days',
        component: () => import('pages/event-days')
      }
    ]
  },
  {
    path: '/reports',
    component: () => import('layouts/report'),
    children: [
      {
        path: '/reports/simple',
        name: 'simple-report',
        component: () => import('pages/simple-report')
      },
      {
        path: '/reports/advanced',
        name: 'advanced-report',
        component: () => import('pages/advanced-report'),
        meta: { guarded: true }
      }
    ]
  }
]
```
note: you will can add meta tag in parent or children

finnaly if you need change the default login page for redirect or the index page if user access login page when has section you can call a RouteShielding with the names for these pages

```
Router.beforeEach(RouteShielding('foo-login', 'bar-index'))
```

IMPORTANT the RouteShielding use the property name of routes
