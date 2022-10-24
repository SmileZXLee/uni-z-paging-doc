const path = require('path')
module.exports = {
	lang: 'zh-CN',
	title: 'z-paging',
	description: 'z-paging文档',
	// base: '/z-paging/',
	markdown: {
		lineNumbers: true
	},
	head: [
		['meta', {
			name: 'viewport',
			content: 'width=device-width,initial-scale=1.0,maximum-scale=1.0,minimum-scale=1.0,user-scalable=no'
		}],
		['meta', {
			name: 'Keywords',
			content: 'z-paging,uniapp,分页,下拉刷新,加载更多,虚拟列表'
		}],
		['link', {
			rel: 'icon',
			href: '/img/logo.png'
		}]
	],
	themeConfig: {
		smoothScroll: true,
		logo: '/img/logo.png',
		contributors: false,
		lastUpdatedText: '最近更新',
		// repo: 'https://github.com/SmileZXLee/uni-z-paging',
		palette: path.resolve(__dirname, 'palette.styl'), //palette.style就是styles里边的文件，此文件就是写的自定义主题样式
		nav: [
			// NavbarItem
			{
				text: '插件市场(安装或下载demo)',
				link: 'https://ext.dcloud.net.cn/plugin?id=3935',
			}, {
				text: 'Github',
				link: 'https://github.com/SmileZXLee/uni-z-paging',
			}
		],
		sidebar: {
			'/': [{
				title: '起步',
				collapsable: false,
				children: [
					// SidebarItem
					{
						title: '介绍',
						path: 'start/intro',
						children: [],
					},
					{
						title: '在线演示',
						path: '/start/demo',
						children: [],
					},
					{
						title: '反馈群',
						path: '/start/feedback-group',
						children: [],
					},
					{
						title: '安装',
						path: '/start/install',
						children: [],
					},
					{
						title: '教学',
						path: '/start/teaching',
						children: [],
					},
					{
						title: '基本使用',
						path: '/start/use',
						children: [],
					},
					{
						title: '注意事项与常见问题',
						path: '/start/notice',
						children: [],
					},
					{
						title: '从vue2迁移到vue3',
						path: '/start/migration-to-vue3',
						children: [],
					},
					{
						title: '版本记录',
						path: 'https://ext.dcloud.net.cn/plugin?id=3935&update_log',
						children: [],
					},
					{
						title: '版本差异',
						path: '/start/upgrade-guide',
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
						title: '全局配置&拦截器',
						path: '/api/props/global-config',
						children: [],
					},
					{
						title: '常规配置',
						path: '/api/props/common',
						children: [],
					},
					{
						title: 'reload相关配置',
						path: '/api/props/reload',
						children: [],
					},
					{
						title: '下拉刷新配置',
						path: '/api/props/refresher',
						children: [],
					},
					{
						title: '底部加载更多配置',
						path: '/api/props/loading-more',
						children: [],
					},
					{
						title: '空数据与加载失败图配置',
						path: '/api/props/empty',
						children: [],
					},
					{
						title: '全屏Loading配置',
						path: '/api/props/loading',
						children: [],
					},
					{
						title: '返回顶部按钮配置',
						path: '/api/props/back-to-top',
						children: [],
					},
					{
						title: '虚拟列表&内置列表配置',
						path: '/api/props/virtual-list',
						children: [],
					},
					{
						title: '本地分页配置',
						path: '/api/props/local-paging',
						children: [],
					},
					{
						title: '聊天记录模式配置',
						path: '/api/props/chat-record-mode',
						children: [],
					},
					{
						title: 'scroll-view&滚动相关配置',
						path: '/api/props/scroll-view',
						children: [],
					},
					{
						title: 'nvue独有配置',
						path: '/api/props/nvue',
						children: [],
					},
					{
						title: 'i18n配置',
						path: '/api/props/i18n',
						children: [],
					},
					{
						title: '缓存配置',
						path: '/api/props/cache',
						children: [],
					},
					{
						title: 'z-index配置',
						path: '/api/props/z-index',
						children: [],
					},
					{
						title: '其他配置',
						path: '/api/props/other',
						children: [],
					}
				]
			},
			{
				title: 'Slot',
				collapsable: false,
				path: '/api/slot/main'
			},
			{
				title: 'Methods',
				collapsable: false,
				path: '/api/methods/main'
			},
			{
				title: 'Events',
				collapsable: false,
				path: '/api/events/main'
			},
			{
				title: '公用子组件',
				collapsable: false,
				path: '/api/sub-components/main'
			}]
		},
	},
	locales: {
		'/': {
			lang: 'zh-CN'
		}
	},
	plugins: [
		['fulltext-search'],
		['@vuepress/active-header-links']
	]
}
