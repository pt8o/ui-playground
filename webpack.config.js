var webpack = require('webpack');
var path = require('path');

var UI_FILE = path.resolve(__dirname, 'src/peer-ui.js');
var UI_DIR = path.resolve(__dirname, 'src/ui-library');

var BUILD_DIR = path.resolve(__dirname, 'src/client/build');
var APP_DIR = path.resolve(__dirname, 'src/client/components');

var config = {
    entry: APP_DIR + '/index.jsx',
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?/,
                include: [
                    APP_DIR,
                    UI_FILE,
                    UI_DIR
                ],
                use: 'babel-loader'
            }
        ]
    },
    resolve: {
        alias: {
            '~': path.resolve(__dirname, 'src')
        },
        extensions: [ '.js', '.jsx' ]
    }
};

module.exports = config;
