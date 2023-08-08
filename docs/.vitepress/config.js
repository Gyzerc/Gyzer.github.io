module.exports = {
    title: 'Gyzer"s Plugins',
    description: '欢迎查阅.',
    head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
    themeConfig: {
        nav: [
            {
                text: "主页",
                link: '/'
            },
            {
                text: "免费插件",
                items: [
                    { text: "LegendaryGuild-公会", link: '/LegendaryGuild/'},
                ]
            },
        ],
        sidebar: {
            "/guide/": [
                {
                    text: "免费插件",
                    items: [
                        {text: "LegendaryGuild-公会", link: '/LegendaryGuild/' },
                    ]
                }
            ],
            "/LegendaryGuild/": [
                {
                    text: "基础",
                    items: [
                        {text: "插件安装", link: '/LegendaryGuild/' },
                        {text: "插件指令&权限", link: '/LegendaryGuild/插件指令&权限.md' },
                        {text: "插件变量", link: '/LegendaryGuild/插件变量.md' },
                    ], 
                },
                {
                    text: "插件配置",
                    items: [
                        {text: "配置文件", link: '/LegendaryGuild/配置文件.md' },
                        {text: "Price列表", link: '/LegendaryGuild/Price.md' },
                        {text: "Limit列表", link: '/LegendaryGuild/Limit.md' },
                        {text: "Run列表", link: '/LegendaryGuild/Run.md' },
                    ], 
                },
                {
                    text: "返回主页",
                    items: [
                        {text: "主页", link: '/guide/intro/' },
                    ], 
                }
            ]
        }
    }
}