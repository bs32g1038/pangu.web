/* eslint-disable */
const path = require('path');
const resolve = dir => path.resolve(__dirname, dir);

module.exports = {
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
        config.module.rules.push({
            test: /\.(txt|png|svg|gif|bmp|jpe?g|ttf)$/,
            use: [
                {
                    loader: 'url-loader',
                    options: {
                        context: '',
                        outputPath: 'static',
                        publicPath: '_next/static',
                        name: 'assets/[name].[hash:8].[ext]',
                        limit: 1024 * 20, // 20kb
                        esModule: false,
                    },
                },
            ],
        });

        return config;
    },
};
