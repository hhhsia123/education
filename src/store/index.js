import { createStore } from 'vuex'
import user from './moudles/user'

// 可持久化
import createPersistedstate from 'vuex-persistedstate'
export default createStore({
  modules: {
    user

  },
  // vuex可持久化
  plugins: [
    createPersistedstate({
      // 键名
      key: 'Wyy_mousic',
      // 路径
      paths: ['user']
    })
  ]
})
