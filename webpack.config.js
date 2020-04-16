const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {

    // webpack will take the files from ./src/index.tsx
    entry: './src/index.tsx',

    // and output it into /dist as bundle.js
    output: {
        path: __dirname,
        publicPath: '/',
        filename: 'bundle.js'
    },

    // specify localhost port to listen on (this is not required, webpack-dev-server will run portfinder)
    devServer: {
        port: 9000,
        open: true
    },

    // adding .ts and .tsx to resolve.extensions will help babel look for .ts and .tsx files to transpile
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },

    module: {
        rules: [
            //let webpack know that .js and .jsx files need to go through Babel before being bundled.
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                },
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|jp(e*)g|svg)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 8000, // Convert images < 8kb to base64 strings
                        name: 'images/[hash]-[name].[ext]'
                    }
                }]
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|otf)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            limit: 10000,
                            mimetype: 'application/font-woff',
                        },
                    },
                ],
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            favicon: "./src/favicon.png"
        })
    ]
};