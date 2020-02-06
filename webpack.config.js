var path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'none',
    entry: './index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        port: 9000
    },
    module: {
        rules: [{
            test: /\.png$/,
            loader: 'file-loader'
        }, {
            test: /\.css$/,
            use: ['style-loader', 'css-loader'],
        }],
    },
    // module: { 
    //     loaders: [{ 
    //         test: /\.js$/, 
    //         loader: 'babel', 
    //         exclude: /node_modules/ 
    //     }] 
    // },
    plugins: [
        // new HtmlWebpackPlugin({
        //     template: './src/index.html',
        //     filename: './dist/index.html'
        // }),
        new MiniCssExtractPlugin({ filename: 'app.css' })
    ]
};