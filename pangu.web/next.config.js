/* eslint-disable */
const path = require('path');
const withSass = require('@zeit/next-sass');

const resolve = dir => path.resolve(__dirname, dir);

module.exports = withSass({
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
        if (isServer) {
            const antStyles = /antd\/.*?\/style\/css.*?/;
            const origExternals = [...config.externals];
            config.externals = [
                (context, request, callback) => {
                    if (request.match(antStyles)) return callback();
                    if (typeof origExternals[0] === 'function') {
                        origExternals[0](context, request, callback);
                    } else {
                        callback();
                    }
                },
                ...(typeof origExternals[0] === 'function' ? [] : origExternals),
            ];

            config.module.rules.unshift({
                test: antStyles,
                use: 'null-loader',
            });
        }
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
});
