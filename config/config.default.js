const resolvePath = path => require('path').resolve(__dirname, path);

module.exports = {
    keys: 'eggssr',
    type: 'ssr', // 指定运行类型可设置为csr切换为客户端渲染
    static: {
        prefix: '/',
        dir: resolvePath('../dist'),
    },
    routes: [
        {
            path: '/',
            exact: true,
            Component: () => require('@/page/index').default, // 这里使用一个function包裹为了让它延迟require
            controller: 'page',
            handler: 'index',
        },
        {
            path: '/t/:tag',
            exact: true,
            Component: () => require('@/page/index').default,
            controller: 'page',
            handler: 'index',
        },
        {
            path: '/topic/:id',
            exact: true,
            Component: () => require('@/page/topic').default,
            controller: 'page',
            handler: 'index',
        },
        {
            path: '/user/:id',
            exact: true,
            Component: () => require('@/page/user-info').default,
            controller: 'page',
            handler: 'index',
        },
    ],
    baseDir: resolvePath('../'),
    injectCss: [`/static/css/Page.chunk.css`], // 客户端需要加载的静态样式表
    injectScript: [
        `<script src='/static/js/runtime~Page.js'></script>`,
        `<script src='/static/js/vendor.chunk.js'></script>`,
        `<script src='/static/js/Page.chunk.js'></script>`,
    ], // 客户端需要加载的静态资源文件表
    serverJs: resolvePath(`../dist/Page.server.js`),

    sequelize: {
        dialect: 'postgres', // support: mysql, mariadb, postgres, mssql
        database: 'pangu_development',
        host: '127.0.0.1',
        port: '5432',
        username: 'postgres',
        password: '123456',
        timezone: '+08:00', //东八时区
    },

    redis: {
        client: {
            host: '127.0.0.1', //安装好的redis服务器地址
            port: 6379, //端口
            password: '',
            db: 0,
        },
    },

    security: {
        csrf: {
            enable: false,
        },
    },
};
