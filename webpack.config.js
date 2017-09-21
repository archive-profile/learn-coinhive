module.exports = {
  entry: './main.js',
  output: {
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.txt/,
        use: 'raw-loader'
      }
    ]
  }
}