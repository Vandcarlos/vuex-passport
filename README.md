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
