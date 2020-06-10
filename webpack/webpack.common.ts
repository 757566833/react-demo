import path from 'path';
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
// import tsImportPluginFactory from "ts-import-plugin";

import webpack from "webpack";
const config: webpack.Configuration = {
    entry: {
        main: './src/index.tsx',
        // reducer:'./src/redux/reducer',
        // state:'./src/redux/state'
    },
    output: {
        // 注意这里换了一级目录
        path: path.resolve(__dirname, '..', 'dist'),
        filename: 'app.js',
        publicPath: '/'
    },

    module: {
        rules: [
            {
                test: /\.(tsx|ts)?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env', '@babel/preset-typescript', '@babel/preset-react'],

                            plugins: [
                                ['@babel/plugin-proposal-decorators', { legacy: true }],
                                ['@babel/plugin-proposal-class-properties', { loose: true }],
                            ]
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [{
                    loader: MiniCssExtractPlugin.loader,
                },
                {
                    loader: "css-loader",
                },

                ],
                exclude: /node_modules/,
            },
            {
                test: /\.less$/,
                use: [{
                    loader: MiniCssExtractPlugin.loader,
                },
                {
                    loader: "css-loader",
                },
                {
                    loader: "less-loader",
                },
                ],
            },
            {
                test: /\.scss$/,
                use: [{
                    loader: MiniCssExtractPlugin.loader
                }, {
                    loader: 'css-loader',
                }, {
                    loader: 'sass-loader'
                }],
                exclude: /node_modules/
            },
            {
                test: /\.(jpg|jpeg|png|svg|gif|woff|woff2|otf|ttf)?$/,
                loader: 'url-loader',
                options: {
                    limit: 8192,
                    publicPath: '/',
                    name: 'img/[name].[hash:7].[ext]'
                }

            },
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.jsx', '.js'],
        alias: {
            '@': path.resolve('src'),
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "test",
            template: path.resolve(__dirname, 'template.html'),
        }),
        new MiniCssExtractPlugin({
            filename: "[name].[contenthash].css",
        }),
      
    ],

};
export default config;