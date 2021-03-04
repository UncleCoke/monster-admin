module.exports = {
    publicPath: '/monster',
    pages: {
        index: {
            entry: 'src/main.js',
            title: '怪兽管理有限公司'
        }
    },
    devServer: {
        open: true,
        port: 1111,
        proxy: {
            '/api': {
                target: '<url>',
                ws: true,
                changOrigin: true
            }
        }
    },
    css: {
        loaderOptions: {
            sass: {
                data: `
                @import "~@/style/index.scss";
            `,
            },
        },
    },
};