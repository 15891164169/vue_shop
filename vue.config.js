module.exports = {
  configureWebpack: {
    resolve: {
      extensions: [],
      alias: {
        // '@': 'src',
        'api': '@/api',
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'views': '@/views',
      }
    }
  }
}