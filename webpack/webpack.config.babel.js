const path = require('path');
const env = process.env.WEBPACK_ENV;

console.log(env);

export default () => (
    {
        mode: 'production',
        entry: './src/index.js',
        output: {
            path: path.resolve(__dirname, './dist'),
            filename: 'webpack-numbers.js',
            libraryTarget: 'umd',
            globalObject: 'this',
            // For widespread use of the library, we would like it to be compatible in different environments, i.e. CommonJS, AMD, Node.js and as a global variable. To make your library available for consumption, add the library property inside output
            library: 'webpackNumbers'
        },
        externals: {
            'lodash': {
                commonjs: 'lodash',
                commonjs2: 'lodash',
                amd: 'lodash',
                root: '_'
            }
        },
        module: {
            rules: [
                {
                    test: /\.(js)$/,
                    exclude: /(node_modules|bower_components)/,
                    use: 'babel-loader'
                }
            ]
        },
    }
);
