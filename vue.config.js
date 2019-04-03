module.exports = {
  outputDir: './../src/main/resources/static/',
  publicPath: undefined,
  assetsDir: undefined,
  runtimeCompiler: undefined,
  productionSourceMap: undefined,
  parallel: undefined,
  css: undefined,
  devServer: {
    proxy: {
      '^/api': {
        target: 'http://localhost:8080',
        ws: true,
        changeOrigin: true
      },
      '^/rest': {
        target: 'http://localhost:3000/rest',
        ws: true,
        changeOrigin: true
      }
    }
  }
}