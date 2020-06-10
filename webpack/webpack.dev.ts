import path from "path";
import webpack from "webpack";
import merge from "webpack-merge";
import common from "./webpack.common";
const ErrorOverlayPlugin = require('error-overlay-webpack-plugin')
const config: webpack.Configuration = merge(common, {
    mode: "development",
    devtool: "source-map",
    devServer: {
        //注意这里换了一级目录
        historyApiFallback: { index: '/' },
        contentBase: "../dist",
        host: "0.0.0.0",
        hot: true,
        // 这个的作用是让webpack安静点
        stats: 'errors-warnings',
        publicPath: '/'
    },
    plugins: [
        new ErrorOverlayPlugin(),
        new webpack.HotModuleReplacementPlugin({
            // Options...
        })
    ],
});

export default config;