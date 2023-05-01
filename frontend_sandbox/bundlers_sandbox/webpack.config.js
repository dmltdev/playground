const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
      rules: [
        {
            test: /\.s[ac]ss$/i,
            use: [
                "style-loader",
                "css-loader",
                "sass-loader",
            ],
        },
      ],
    },

    plugins: [
      new BundleAnalyzerPlugin()
    ],

    devServer: {
      static: path.join(__dirname, 'public'),
      port: 9000
    },
}