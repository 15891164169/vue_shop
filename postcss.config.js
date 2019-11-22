module.exports = {
  plugins: {
    autoprefixer: {},
    'postcss-px-to-viewport': {
      viewportWidth: 320,
      unitPrecision: 5, 
      viewportUnit: 'vw',
      selectorBlackList: ['tab-bar', 'tab-bar-item'],
      minPixelValue: 1,
      mediaQuery: false,
      exclude: [/TabBar/]
    }
  }
}
