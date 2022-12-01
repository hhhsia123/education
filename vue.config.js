// const { defineConfig } = require('@vue/cli-service')
// const path = require('path')
// module.exports = defineConfig({
//   transpileDependencies: true,
//   pluginOptions: {
//     'style-resources-loader': {
//       preProcessor: 'less',
//       patterns: [
//         path.join(__dirname, './src/assets/style/variables.less'),
//         path.join(__dirname, './src/assets/style/mixins.less')
//       ]
//     }
//   }
// })

const ElementPlus = require('unplugin-element-plus/webpack')
const { defineConfig } = require('@vue/cli-service')
const path = require('path')

module.exports = defineConfig({
  css: {
    loaderOptions: {
      scss: {
        additionalData: '@use "@/assets/style/element/index.scss" as *;'
      }
    }
  },
  configureWebpack: {
    plugins: [
      ElementPlus({
        useSource: true
      })
    ]
  },

  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [
        path.join(__dirname, './src/assets/style/variables.less'),
        path.join(__dirname, './src/assets/style/mixins.less')
      ]
    }
  },
  transpileDependencies: true
})
