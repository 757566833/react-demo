import path from "path";
import webpack from "webpack";
import merge from "webpack-merge";
import common from "./webpack.common";
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
const ErrorOverlayPlugin = require('error-overlay-webpack-plugin')
const config: webpack.Configuration = merge(common, {
    entry: {
        main: './src/index.tsx',
        // reducer:'./src/redux/reducer',
        // state:'./src/redux/state'
    },
    mode: "development",
    devtool: "eval-source-map",
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
        }),
        new webpack.NamedModulesPlugin(),
        new ForkTsCheckerWebpackPlugin()
    ],
    resolve: {
        alias: {
            'react-dom': '@hot-loader/react-dom',
        },
    },
});
const config2 = merge.smart(config, {
    module: {
        rules: [{
            test: /\.(tsx|ts)?$/,
            exclude: /node_modules/,
            use: [
                {
                    loader: 'babel-loader',
                    options: {
                        cacheDirectory: true,
                        babelrc: false,
                        presets: ['@babel/preset-env', '@babel/preset-typescript', '@babel/preset-react'],

                        plugins: [
                            ['@babel/plugin-proposal-decorators', { legacy: true }],
                            ['@babel/plugin-proposal-class-properties', { loose: true }],
                            'react-hot-loader/babel'
                        ]
                    }
                }
            ]
        }]
    },
});
export default config2;