const path = require('path')
module.exports = {
	lang: 'zh-CN',
	title: 'z-paging',
	description: 'z-paging文档',
	markdown: {
		lineNumbers: true
	},
	themeConfig: {
		smoothScroll: true,
		logo: null,
		contributors: false,
		lastUpdatedText: '最近更新',
		// repo: 'https://github.com/SmileZXLee/uni-z-paging',
		palette: path.resolve(__dirname, 'palette.styl'), //palette.style就是styles里边的文件，此文件就是写的自定义主题样式
		nav: [
			// NavbarItem
			{
				text: '在插件市场查看',
				link: 'https://ext.dcloud.net.cn/plugin?id=3935',
			}, {
				text: 'Github',
				link: 'https://github.com/SmileZXLee/uni-z-paging',
			}
		],
		sidebar: [
			// SidebarItem
			{
				title: '起步',
				collapsable: false,
				children: [
					// SidebarItem
					{
						title: '介绍',
						path: '/start/about.md',
						children: [],
					},
					{
						title: '在线演示',
						path: '/start/demo.md',
						children: [],
					},
					{
						title: '反馈QQ群',
						path: '/start/qq-group.md',
						children: [],
					},
					{
						title: '安装',
						path: '/start/install.md',
						children: [],
					},
					{
						title: '教学',
						path: '/start/teaching.md',
						children: [],
					},
					{
						title: '基本使用',
						path: '/start/use.md',
						children: [],
					},
					{
						title: '注意事项',
						path: '/start/notice.md',
						children: [],
					},
					{
						title: '版本记录',
						path: 'https://ext.dcloud.net.cn/plugin?id=3935&update_log',
						children: [],
					}
				],
			},
			{
				title: 'Props',
				collapsable: false,
				children: [
					// SidebarItem
					{
						title: '全局配置',
						path: '/api/props/global-config.md',
						children: [],
					},
					{
						title: '常规配置',
						path: '/api/props/common.md',
						children: [],
					},
					{
						title: 'reload相关配置',
						path: '/api/props/reload.md',
						children: [],
					},
					{
						title: '下拉刷新配置',
						path: '/api/props/refresher.md',
						children: [],
					},
					{
						title: '底部加载更多配置',
						path: '/api/props/loading-more.md',
						children: [],
					},
					{
						title: '空数据与加载失败图配置',
						path: '/api/props/empty.md',
						children: [],
					},
					{
						title: '全屏Loading配置',
						path: '/api/props/loading.md',
						children: [],
					},
					{
						title: '返回顶部按钮配置',
						path: '/api/props/back-to-top.md',
						children: [],
					},
					{
						title: '本地分页配置',
						path: '/api/props/local-paging.md',
						children: [],
					},
					{
						title: '聊天记录模式配置',
						path: '/api/props/chat-record-mode.md',
						children: [],
					},
					{
						title: 'scroll-view相关配置',
						path: '/api/props/scroll-view.md',
						children: [],
					},
					{
						title: 'nvue独有配置',
						path: '/api/props/nvue.md',
						children: [],
					},
					{
						title: 'i18n配置',
						path: '/api/props/i18n.md',
						children: [],
					},
					{
						title: 'z-index配置',
						path: '/api/props/z-index.md',
						children: [],
					},
					{
						title: '其他配置',
						path: '/api/props/other.md',
						children: [],
					}
				]
			},
			{
				title: 'Slot',
				collapsable: false,
				path: '/api/slot/index',
				children: ['/api/slot/index']
			},
			{
				title: 'Methods',
				collapsable: false,
				path: '/api/methods/index',
				children: ['/api/methods/index'],
			},
			{
				title: 'Events',
				collapsable: false,
				path: '/api/events/index',
				children: ['/api/events/index'],
			}
		],
	},
	plugins: [
		['flexsearch'],
		['@vuepress/active-header-links']
	]
}
