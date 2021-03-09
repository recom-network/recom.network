const path = require('path');

const LOCAL_IP_MACHINE = require('os').networkInterfaces()?.Ethernet[1]?.address || 'localhost';

const ROOT_DIR = path.resolve(__dirname, 'src');
const DIST_DIR = path.resolve(__dirname, '..', 'dist', 'client');

const SCSS_DIR = path.resolve(__dirname, 'src', 'scss');
const ASSETS_DIR = path.resolve(__dirname, 'src', 'assets');
const COMPONENTS_DIR = path.resolve(__dirname, 'src', 'components');
const INTERFACES_DIR = path.resolve(__dirname, 'src', 'interfaces');
const PAGES_DIR = path.resolve(__dirname, 'src', 'pages');
const ROUTES_DIR = path.resolve(__dirname, 'src', 'routes');
const UTILS_DIR = path.resolve(__dirname, 'src', 'utils');

const STORAGE_DIR = path.resolve(__dirname, 'src', 'store');
const REACT_HOOKS_DIR = path.resolve(__dirname, 'src', 'hooks');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');

const defineMode = () => ({
    isDev: process.env.NODE_ENV === 'development',
    isProd: process.env.NODE_ENV === 'production'
});

const defineFilename = (extension) => `[name].[fullhash].${extension}`;

const optimization = isProduction => {
    const config = {
        splitChunks: {
            chunks: 'all'
        }
    };

    if(isProduction) {
        config.minimizer = [
            new MiniCssExtractPlugin(),
            new TerserWebpackPlugin()
        ];
    }

    return config;
};

const getPlugins = isProduction => {
    return [
        new HTMLWebpackPlugin({
            template: './index.html',
            favicon: './assets/imgs/favicon.ico',
            minify: {
                collapseWhitespace: isProduction
            }
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: defineFilename('css')
        })
    ];
};

const cssLoaders = isDev => ([
    (isDev) ? 'style-loader' : MiniCssExtractPlugin.loader,
    'css-loader',
    {
        loader: 'sass-loader',
        options: {
            sourceMap: true,
            additionalData: '@import "@styles/theme.scss";'
        },
    }
]);

const cleanCssLoader = isDev => ([
    (isDev) ? 'style-loader' : MiniCssExtractPlugin.loader,
    'css-loader'
]);

const babelOptions = preset => {
    const options = {
        presets: [
            '@babel/preset-env'
        ],
        plugins: [
            '@babel/plugin-proposal-class-properties'
        ]
    }

    if(preset) options.presets.push(preset);

    return options;
};

module.exports = {
    constants: {
        ROOT_DIR,
        DIST_DIR,
        SCSS_DIR,
        ASSETS_DIR,
        COMPONENTS_DIR,
        INTERFACES_DIR,
        PAGES_DIR,
        ROUTES_DIR,
        STORAGE_DIR,
        REACT_HOOKS_DIR,
        UTILS_DIR,
        LOCAL_IP_MACHINE
    },
    methods: {
        defineMode,
        defineFilename,
        optimization,
        getPlugins,
        cssLoaders,
        cleanCssLoader,
        babelOptions
    }
};