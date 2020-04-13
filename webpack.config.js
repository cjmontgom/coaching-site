const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {

    // webpack will take the files from ./src/index.tsx
    entry: './src/index.tsx',

    // and output it into /dist as bundle.js
    output: {
        path: path.join(__dirname, '/dist'),
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

            // we use babel-loader to load our jsx and tsx files
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                },
            },

            // css-loader to bundle all the css files into one file and style-loader to add all the styles inside the style tag of the document
        // *** REMOVE THIS?? ***
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
            template: './src/index.html'
        })
    ]
};