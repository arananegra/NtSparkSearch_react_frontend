let path = require('path');
let webpack = require("webpack");
let HtmlWebpackPlugin = require('html-webpack-plugin');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
let basePath = __dirname;

module.exports = function(env) {
    return {
        context: path.join(basePath, 'src'),
        resolve: {
            extensions: ['.ts', '.tsx', '.js', '.jsx']
        },

        target: "web",

        node: {
            fs: "empty",
            net: "empty"
        },
        entry: {
            styles: './scss/index.scss',
            app: [
                '../index.tsx'
            ],
            vendorStyles: [
                '../node_modules/bootstrap/dist/css/bootstrap.css'
            ]
        },
        output: {
            path: path.join(basePath, './dist'),
            filename: '[hash].[name].js'
        },

        module: {
            rules: [
                {
                    test: /\.(ts|tsx)$/,
                    exclude: /node_modules/,
                    use: [{
                        loader: 'awesome-typescript-loader'
                    }]
                },
                {
                    test: /\.(js)$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader',
                },
                {
                    test: /\.(html)$/,
                    exclude: /node_modules/,
                    loader: 'html-loader'
                },
                {
                    test: /\.scss$/,
                    exclude: /node_modules/,
                    loader: ExtractTextPlugin.extract({
                        fallback: 'style-loader',
                        use: [
                            { loader: 'css-loader', },
                            { loader: 'sass-loader', },
                        ],
                    })
                },
                {
                    test: /\.css$/,
                    include: /node_modules/,
                    loader: ExtractTextPlugin.extract({
                        fallback: 'style-loader',
                        use: {
                            loader: 'css-loader',
                        },
                    })
                },
                {
                    test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
                    loader: 'url-loader?limit=10000&mimetype=application/font-woff'
                },
                {
                    test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                    loader: 'url-loader?limit=10000&mimetype=application/octet-stream'
                },
                {
                    test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                    loader: 'file-loader'
                },
                {
                    test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                    loader: 'url-loader?limit=10000&mimetype=image/svg+xml'
                },
                {
                    test: /\.jpe?g$|\.ico$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$|\.wav$|\.mp3$/,
                    loader: 'file-loader?name=[name].[ext]'
                }
            ]
        },
        plugins: [
            new webpack.DefinePlugin({
                'process.env': {
                    NODE_ENV: JSON.stringify('production')
                }
            }),
            // new webpack.optimize.UglifyJsPlugin({
            //     compress:{
            //         warnings: true
            //     }
            // }),
            new webpack.optimize.CommonsChunkPlugin({
                names: ['vendor', 'manifest'],
            }),
            new ExtractTextPlugin({
                filename: '[hash].[name].css',
                disable: false,
                allChunks: true,
            }),
            new HtmlWebpackPlugin({
                filename: 'index.html', //Name of file in ./dist/
                template: 'index.html', //Name of template in ./src
                hash: true
            }),
            new webpack.ProvidePlugin({
                $: "jquery",
                jQuery: "jquery"
            }),
        ]
    }
};